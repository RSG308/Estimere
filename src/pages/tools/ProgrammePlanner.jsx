import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, AlertTriangle } from "lucide-react";
import ToolLayout, { Field, OptionGroup, ToolCard } from "@/components/ToolLayout";
import useSEO from "@/hooks/useSEO";

/**
 * Tender programme planner.
 * Works backwards from the submission date in working days, which is how a
 * tender programme should actually be built.
 */

const COMPLEXITY = [
  { value: "simple", label: "Simple", sub: "Few packages, familiar work" },
  { value: "standard", label: "Standard", sub: "Typical multi-package bid" },
  { value: "complex", label: "Complex", sub: "Many packages, D&B or framework" },
];

const QUALITY = [
  { value: "none", label: "Price only", sub: "No quality submission" },
  { value: "some", label: "Some quality", sub: "A few written responses" },
  { value: "heavy", label: "Quality-heavy", sub: "Full technical submission" },
];

// Working days before submission, by complexity.
const OFFSETS = {
  simple: { buffer: 1, adjudication: 3, estimate: 4, quality: 4, quotes: 8, enquiries: 13, clarification: 6 },
  standard: { buffer: 2, adjudication: 4, estimate: 6, quality: 6, quotes: 11, enquiries: 18, clarification: 8 },
  complex: { buffer: 2, adjudication: 6, estimate: 9, quality: 9, quotes: 15, enquiries: 25, clarification: 10 },
};

function subtractWorkingDays(date, days) {
  const d = new Date(date);
  let remaining = days;
  while (remaining > 0) {
    d.setDate(d.getDate() - 1);
    const day = d.getDay();
    if (day !== 0 && day !== 6) remaining -= 1;
  }
  return d;
}

function workingDaysBetween(from, to) {
  const a = new Date(from);
  const b = new Date(to);
  if (a > b) return 0;
  let count = 0;
  const d = new Date(a);
  while (d < b) {
    d.setDate(d.getDate() + 1);
    const day = d.getDay();
    if (day !== 0 && day !== 6) count += 1;
  }
  return count;
}

function fmt(date) {
  return date.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function ProgrammePlanner() {
  const [submission, setSubmission] = useState("");
  const [complexity, setComplexity] = useState("standard");
  const [quality, setQuality] = useState("some");

  useSEO({
    title: "Tender Programme Planner | Construction Bid Milestones | Estimere",
    description:
      "Build a tender programme working backwards from your submission date. Milestone dates for enquiries, quotation returns, adjudication and submission buffer.",
    path: "/tools/programme-planner",
  });

  const plan = useMemo(() => {
    if (!submission) return null;
    const subDate = new Date(`${submission}T12:00:00`);
    if (Number.isNaN(subDate.getTime())) return null;

    const o = OFFSETS[complexity];
    const milestones = [
      { key: "enquiries", label: "Issue subcontractor & supplier enquiries", days: o.enquiries, critical: true, note: "The milestone that determines whether everything downstream holds." },
      { key: "clarification", label: "Tender clarification deadline", days: o.clarification, note: "Check the actual ITT date — this is an estimate. Missing it means carrying avoidable risk." },
      { key: "quotes", label: "Subcontractor quotations returned", days: o.quotes, critical: true, note: "Needs an owner. Chasing does not happen on its own." },
      ...(quality !== "none"
        ? [{ key: "quality", label: "Quality submission complete", days: o.quality, note: "Written in parallel with pricing, not after it." }]
        : []),
      { key: "estimate", label: "Estimate complete", days: o.estimate, note: "All quotations analysed, risk register and qualifications drafted." },
      { key: "adjudication", label: "Adjudication / commercial review", days: o.adjudication, critical: true, note: "A complete cost position, with time to act on the decision." },
      { key: "buffer", label: "Everything assembled — submission buffer", days: o.buffer, note: "Absorbs the portal failure and the late correction. Most commonly omitted milestone." },
      { key: "submission", label: "SUBMISSION DEADLINE", days: 0, isSubmission: true },
    ];

    const withDates = milestones
      .map((m) => ({ ...m, date: subtractWorkingDays(subDate, m.days) }))
      .sort((a, b) => a.date - b.date);

    const leadRequired = o.enquiries;
    const leadAvailable = workingDaysBetween(new Date(), subDate);
    const totalWorkingDays = leadRequired;

    return {
      milestones: withDates,
      leadRequired,
      leadAvailable,
      tooTight: leadAvailable < leadRequired,
      totalWorkingDays,
      qualityUplift: quality === "heavy",
    };
  }, [submission, complexity, quality]);

  return (
    <ToolLayout
      eyebrow="Tools"
      refCode="EST-TL-003"
      title="Tender Programme Planner"
      intro="Enter your submission date and get a working-back programme with milestone dates. Weekends excluded."
      disclaimer="Milestone offsets are typical rather than prescriptive, and assume a standard working week with no public holidays. Adjust for your own resource, supply chain responsiveness and the actual ITT clarification deadline. Nothing is submitted or stored."
    >
      <div className="grid lg:grid-cols-12 gap-8">
        {/* Inputs */}
        <div className="lg:col-span-4">
          <div style={{ position: "sticky", top: "104px" }}>
            <ToolCard>
              <Field label="Submission deadline">
                <input
                  type="date"
                  value={submission}
                  onChange={(e) => setSubmission(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "13px 14px",
                    fontSize: "15px",
                    border: "1px solid #D6D3CD",
                    backgroundColor: "#FFFFFF",
                    color: "#0D1F3C",
                    fontFamily: "inherit",
                  }}
                />
              </Field>

              <Field label="Tender complexity">
                <OptionGroup options={COMPLEXITY} value={complexity} onChange={setComplexity} columns={1} />
              </Field>

              <Field label="Quality submission">
                <OptionGroup options={QUALITY} value={quality} onChange={setQuality} columns={1} />
              </Field>
            </ToolCard>

            {plan && (
              <div
                style={{
                  border: "1px solid #D6D3CD",
                  backgroundColor: plan.tooTight ? "rgba(166,50,50,0.06)" : "#FFFFFF",
                  borderLeft: `4px solid ${plan.tooTight ? "#A63232" : "#1F7A4D"}`,
                  padding: "20px",
                  marginTop: "16px",
                }}
              >
                <div
                  style={{
                    color: plan.tooTight ? "#A63232" : "#1F7A4D",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontFamily: "monospace",
                    marginBottom: "8px",
                  }}
                >
                  {plan.tooTight ? "Programme is tight" : "Programme is achievable"}
                </div>
                <p style={{ color: "#1A1A1A", opacity: 0.75, fontSize: "14px", lineHeight: 1.65 }}>
                  {plan.tooTight
                    ? `This needs about ${plan.leadRequired} working days. You have ${plan.leadAvailable}. Something has to compress — usually the quality submission, which is where marks get lost.`
                    : `You have ${plan.leadAvailable} working days against roughly ${plan.leadRequired} required.`}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Programme */}
        <div className="lg:col-span-8">
          {!plan ? (
            <div
              style={{
                border: "1px dashed #D6D3CD",
                padding: "64px 32px",
                textAlign: "center",
                color: "rgba(26,26,26,0.5)",
                fontSize: "15px",
              }}
            >
              Enter a submission deadline to generate the programme.
            </div>
          ) : (
            <ToolCard>
              <div
                style={{
                  color: "#2A4A7F",
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                  marginBottom: "24px",
                }}
              >
                Working-Back Programme
              </div>

              <div>
                {plan.milestones.map((m, i) => {
                  const isLast = i === plan.milestones.length - 1;
                  const past = m.date < new Date(new Date().toDateString());
                  return (
                    <div key={m.key} className="flex gap-4">
                      {/* Timeline rail */}
                      <div className="flex flex-col items-center flex-shrink-0" style={{ width: "16px" }}>
                        <div
                          style={{
                            width: m.isSubmission ? "14px" : "10px",
                            height: m.isSubmission ? "14px" : "10px",
                            backgroundColor: m.isSubmission
                              ? "#E8820C"
                              : m.critical
                              ? "#2A4A7F"
                              : "#D6D3CD",
                            marginTop: "6px",
                            flexShrink: 0,
                          }}
                        />
                        {!isLast && (
                          <div
                            style={{
                              width: "1px",
                              flexGrow: 1,
                              backgroundColor: "#D6D3CD",
                              minHeight: "42px",
                            }}
                          />
                        )}
                      </div>

                      {/* Content */}
                      <div style={{ paddingBottom: isLast ? 0 : "24px", flexGrow: 1 }}>
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <span
                            style={{
                              color: m.isSubmission ? "#E8820C" : "#0D1F3C",
                              fontWeight: m.isSubmission ? 900 : 700,
                              fontSize: m.isSubmission ? "16px" : "15px",
                              letterSpacing: m.isSubmission ? "0.02em" : "0",
                            }}
                          >
                            {m.label}
                          </span>
                          {m.critical && (
                            <span
                              style={{
                                color: "#2A4A7F",
                                fontSize: "9px",
                                fontWeight: 700,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                fontFamily: "monospace",
                                border: "1px solid rgba(42,74,127,0.3)",
                                padding: "2px 6px",
                              }}
                            >
                              Critical
                            </span>
                          )}
                          {past && !m.isSubmission && (
                            <span
                              className="inline-flex items-center gap-1"
                              style={{ color: "#A63232", fontSize: "11px", fontWeight: 700 }}
                            >
                              <AlertTriangle size={11} /> Already passed
                            </span>
                          )}
                        </div>

                        <div
                          style={{
                            color: past && !m.isSubmission ? "#A63232" : "rgba(26,26,26,0.6)",
                            fontFamily: "monospace",
                            fontSize: "13px",
                            letterSpacing: "0.03em",
                            marginTop: "4px",
                          }}
                        >
                          {fmt(m.date)}
                          {m.days > 0 && (
                            <span style={{ opacity: 0.55 }}> · {m.days} working days before</span>
                          )}
                        </div>

                        {m.note && (
                          <p
                            style={{
                              color: "rgba(26,26,26,0.55)",
                              fontSize: "13px",
                              lineHeight: 1.6,
                              marginTop: "6px",
                              maxWidth: "520px",
                            }}
                          >
                            {m.note}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                style={{
                  borderTop: "1px solid #D6D3CD",
                  marginTop: "8px",
                  paddingTop: "20px",
                }}
              >
                <Link
                  to="/insights/what-a-tender-programme-should-look-like"
                  style={{ color: "#2A4A7F", fontSize: "14px", fontWeight: 600 }}
                  className="inline-flex items-center gap-2"
                >
                  Why these milestones, in detail <ArrowRight size={14} />
                </Link>
              </div>
            </ToolCard>
          )}
        </div>
      </div>
    </ToolLayout>
  );
}
