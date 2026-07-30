import { base44 } from "@/api/base44Client";

/**
 * ITT Health Check analysis.
 *
 * Design decisions worth preserving:
 *  - Structured JSON output, so the UI renders fields rather than a wall of prose.
 *  - The prompt instructs the model to say when information is absent rather
 *    than inferring it. On tender documents, a confident guess is worse than a gap.
 *  - Neither the document nor the output is persisted anywhere.
 */

const RESPONSE_SCHEMA = {
  type: "object",
  properties: {
    document_recognised: {
      type: "boolean",
      description:
        "False if the content does not appear to be a construction tender, ITT, RFP, PQQ or related procurement document.",
    },
    scope_summary: {
      type: "string",
      description:
        "Plain-English summary of the works being tendered, in 3-5 sentences. No jargon beyond standard industry terms.",
    },
    project_value_indication: {
      type: "string",
      description:
        "Any stated or implied contract value, or 'Not stated' if absent. Do not estimate a value that is not in the document.",
    },
    contract_form: {
      type: "string",
      description:
        "The contract form if identifiable (e.g. NEC4 ECC Option A, JCT D&B 2016), otherwise 'Not identified'.",
    },
    key_dates: {
      type: "array",
      description: "Dates and deadlines stated in the document. Empty array if none found.",
      items: {
        type: "object",
        properties: {
          label: { type: "string", description: "What the date is for." },
          date: { type: "string", description: "The date as stated in the document." },
          note: { type: "string", description: "Brief practical note, or empty string." },
        },
        required: ["label", "date"],
      },
    },
    evaluation_criteria: {
      type: "array",
      description:
        "Evaluation or scoring criteria with weightings where stated. Empty array if the document does not set these out.",
      items: {
        type: "object",
        properties: {
          criterion: { type: "string" },
          weighting: { type: "string", description: "Weighting as stated, or 'Not stated'." },
          note: { type: "string", description: "Where the marks realistically sit, or empty string." },
        },
        required: ["criterion", "weighting"],
      },
    },
    mandatory_requirements: {
      type: "array",
      description:
        "Compliance items that would cause a bid to be rejected if missed - certifications, insurance levels, forms, formats, word limits.",
      items: { type: "string" },
    },
    risk_flags: {
      type: "array",
      description:
        "Commercial, technical or contractual risks a contractor should price or qualify. Be specific to this document.",
      items: {
        type: "object",
        properties: {
          title: { type: "string" },
          detail: { type: "string" },
          severity: { type: "string", enum: ["high", "medium", "low"] },
        },
        required: ["title", "detail", "severity"],
      },
    },
    clarifications_to_raise: {
      type: "array",
      description:
        "Ambiguities worth raising as formal tender queries before the clarification deadline.",
      items: { type: "string" },
    },
    effort_estimate: {
      type: "object",
      properties: {
        low_days: { type: "number", description: "Lower bound of estimated bid effort in days." },
        high_days: { type: "number", description: "Upper bound of estimated bid effort in days." },
        rationale: { type: "string", description: "One or two sentences on what drives the range." },
      },
      required: ["low_days", "high_days", "rationale"],
    },
    information_gaps: {
      type: "array",
      description:
        "Information a bidder would need that is absent from what was supplied - e.g. no drawings, no specification, no pricing schedule.",
      items: { type: "string" },
    },
  },
  required: [
    "document_recognised",
    "scope_summary",
    "key_dates",
    "evaluation_criteria",
    "mandatory_requirements",
    "risk_flags",
    "clarifications_to_raise",
    "effort_estimate",
    "information_gaps",
  ],
};

const SYSTEM_INSTRUCTION = `You are an experienced UK construction estimator and bid manager reviewing an invitation to tender on behalf of a contractor who is deciding how to approach it.

Analyse the supplied tender documentation and return structured findings.

Rules:
- Report only what the document actually says. If something is not stated, say "Not stated" or return an empty array. Never infer a contract value, date, or weighting that is not present.
- Record any information a bidder would need that is missing from what was supplied, in information_gaps.
- Write in plain, direct professional English. Standard industry terminology is fine. Avoid consultancy filler, marketing tone, and hedging language.
- Risk flags must be specific to this document, not generic construction risks. If the document transfers ground risk, says so; do not list "ground conditions" as a risk on a document that does not mention groundworks.
- For effort_estimate, base the range on the number of questions, word counts, packages to be priced, and submission requirements evident in the document.
- If the content is not a construction procurement document, set document_recognised to false and leave the other fields minimal.`;

/**
 * Runs the analysis.
 * @param {object} params
 * @param {string} [params.fileUrl]  URL returned from UploadFile.
 * @param {string} [params.text]     Pasted tender text.
 */
export async function analyseItt({ fileUrl, text }) {
  const prompt = fileUrl
    ? `${SYSTEM_INSTRUCTION}\n\nThe tender documentation is attached. Analyse it.`
    : `${SYSTEM_INSTRUCTION}\n\nTender documentation follows.\n\n---\n${text}\n---`;

  const params = {
    prompt,
    model: "claude_sonnet_4_6",
    response_json_schema: RESPONSE_SCHEMA,
  };

  if (fileUrl) params.file_urls = [fileUrl];

  return base44.integrations.Core.InvokeLLM(params);
}

export async function uploadTenderFile(file) {
  const res = await base44.integrations.Core.UploadFile({ file });
  return res?.file_url;
}
