import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const caseStudies = [
  {
    ref: "CS-001",
    sector: "Utilities & Infrastructure",
    type: "Water / Wastewater Framework",
    scale: "£XX–£XXm Contract Value", // [PLACEHOLDER]
    title: "Major Water Infrastructure Framework — Detailed Estimate & Full Tender Submission",
    tags: ["Cost Estimating", "Bid Writing", "Full Tender Management"],
    outcome: "Successful Tender Award",
    summary:
      "[PLACEHOLDER: Replace with real project summary. Example structure below for reference.]\n\nA regional contractor engaged Estimere to lead end-to-end on a major water infrastructure framework tender. The scope encompassed a full first-principles estimate across complex pipework, civils, and MEPH elements, alongside a complete quality and technical submission. The estimate was produced from detailed drawings and specifications within a compressed tender programme of [X weeks]. The bid was submitted on time and within the agreed fee, and the client was subsequently awarded a position on the framework.",
    value: "[PLACEHOLDER: Describe the measurable outcome — e.g. framework lot awarded, contract value secured, percentage scoring achieved on quality]",
    duration: "[PLACEHOLDER: e.g. 6-week tender programme]",
  },
  {
    ref: "CS-002",
    sector: "Civils & Principal Contractor",
    type: "Highways / Road Improvement Scheme",
    scale: "£XX–£XXm Contract Value", // [PLACEHOLDER]
    title: "Complex Highways Improvement Scheme — Go/No-Go Feasibility & Subsequent Full Bid",
    tags: ["Rapid Go/No-Go Costing", "Cost Estimating", "Post-Tender Support"],
    outcome: "Successful Award + Post-Award Support",
    summary:
      "[PLACEHOLDER: Replace with real project summary.]\n\nA Tier 2 principal contractor required a rapid feasibility assessment on a highways improvement opportunity before committing their internal team to a full tender programme. Estimere produced a high-level order-of-magnitude cost position within [X days], identifying key risk items and programme sensitivities. On the strength of the feasibility, the client decided to proceed. We subsequently supported the full estimate production and provided post-tender clarification responses ahead of contract award.",
    value: "[PLACEHOLDER: Describe outcome and value delivered — e.g. client secured contract; risk items flagged in feasibility were mitigated prior to submission]",
    duration: "[PLACEHOLDER: e.g. 2-day feasibility + 8-week full tender]",
  },
  {
    ref: "CS-003",
    sector: "MEPH",
    type: "Mechanical, Electrical & Plumbing — Commercial Development",
    scale: "£Xm–£XXm Contract Value", // [PLACEHOLDER]
    title: "Large-Scale MEPH Package — Subcontractor Enquiry Management & Rate Build",
    tags: ["Cost Estimating", "Bid Review"],
    outcome: "Shortlisted — Preferred Bidder",
    summary:
      "[PLACEHOLDER: Replace with real project summary.]\n\nA specialist MEPH subcontractor needed dedicated estimating resource for a significant commercial development package. Estimere managed the full subcontractor and supplier enquiry process, produced detailed rate builds for mechanical and electrical packages, and assembled the pricing schedule. A second-opinion bid review was carried out by the client's commercial director before submission, using our written review report as the basis for adjudication.",
    value: "[PLACEHOLDER: Describe outcome — e.g. shortlisted as preferred bidder; client's internal team upskilled through the process]",
    duration: "[PLACEHOLDER: e.g. 5-week tender programme]",
  },
  {
    ref: "CS-004",
    sector: "Civils & Utilities",
    type: "PQQ / Pre-Qualification — Major Utilities Framework",
    scale: "Strategic Framework Opportunity", // [PLACEHOLDER]
    title: "Utilities Framework PQQ — Capability Narrative & Scoring Maximisation",
    tags: ["PQQ / SQ Support", "Bid Writing"],
    outcome: "Invited to Full ITT Stage",
    summary:
      "[PLACEHOLDER: Replace with real project summary.]\n\nA regional civils and utilities contractor sought support with a high-stakes PQQ submission for a major regulated utilities framework — a gateway that, if passed, would unlock significant annual turnover opportunity. Estimere reviewed the scoring criteria, structured the capability narrative, and wrote the full PQQ response — including company track record, H&S questionnaire, and supply chain statements. The client was subsequently invited to the full ITT stage.",
    value: "[PLACEHOLDER: Describe outcome — e.g. passed PQQ gateway; subsequently progressed to ITT and submitted full bid]",
    duration: "[PLACEHOLDER: e.g. 3-week PQQ programme]",
  },
];

export default function CaseStudies() {
  return (
    <div>
      {/* Header */}
      <section className="blueprint-grid-dark py-24" style={{ backgroundColor: "#0D1F3C", position: "relative" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="eyebrow mb-3">Audit Trail</div>
          <div className="ref-label mb-8">REF: FE-CS-000</div>
          <h1 style={{ color: "#F5F4F2", fontSize: "clamp(40px, 5vw, 68px)", fontWeight: 900, maxWidth: "700px" }}>
            Track Record.
            <br />
            <span style={{ color: "#E8820C" }}>Proof of Delivery.</span>
          </h1>
          <p style={{ color: "rgba(245,244,242,0.65)", fontSize: "18px", lineHeight: 1.75, maxWidth: "600px", marginTop: "20px" }}>
            Anonymised project summaries — sector, scope, and outcome. Client confidentiality is maintained throughout; no client names, contract numbers, or identifying details are disclosed.
          </p>
          <div
            className="mt-8 inline-block px-4 py-2"
            style={{
              border: "1px solid rgba(232,130,12,0.4)",
              fontFamily: "Courier New, monospace",
              fontSize: "12px",
              color: "rgba(232,130,12,0.7)",
              letterSpacing: "0.08em",
            }}
          >
            ⚠ PLACEHOLDER CONTENT — All case study summaries below are template examples only. Replace with real project data before publishing.
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", backgroundColor: "#E8820C" }} />
      </section>

      {/* Case studies */}
      <section className="py-24" style={{ backgroundColor: "#F5F4F2" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 space-y-8">
          {caseStudies.map((cs, i) => (
            <ScrollReveal key={cs.ref} delay={i * 80}>
              <div style={{ border: "1px solid #D6D3CD", backgroundColor: "#ffffff" }}>
                {/* Top bar */}
                <div
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-8 py-5"
                  style={{ borderBottom: "1px solid #D6D3CD", backgroundColor: "rgba(13,31,60,0.02)" }}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="ref-label">{cs.ref}</div>
                    <div
                      style={{
                        backgroundColor: "#0D1F3C",
                        color: "#E8820C",
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        padding: "3px 10px",
                        fontFamily: "monospace",
                      }}
                    >
                      {cs.sector}
                    </div>
                    <div
                      style={{
                        backgroundColor: "rgba(42,74,127,0.08)",
                        color: "#2A4A7F",
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        padding: "3px 10px",
                        fontFamily: "monospace",
                      }}
                    >
                      {cs.type}
                    </div>
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgba(232,130,12,0.1)",
                      border: "1px solid rgba(232,130,12,0.35)",
                      color: "#E8820C",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      padding: "4px 12px",
                      fontFamily: "monospace",
                      whiteSpace: "nowrap",
                    }}
                  >
                    OUTCOME: {cs.outcome}
                  </div>
                </div>

                {/* Body */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-8 p-8 lg:p-10" style={{ borderRight: "1px solid #D6D3CD" }}>
                    <h2 style={{ color: "#0D1F3C", fontWeight: 800, fontSize: "clamp(18px, 2vw, 24px)", marginBottom: "16px", lineHeight: 1.3 }}>
                      {cs.title}
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {cs.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            backgroundColor: "rgba(42,74,127,0.07)",
                            border: "1px solid rgba(42,74,127,0.15)",
                            color: "#2A4A7F",
                            fontSize: "11px",
                            fontWeight: 600,
                            letterSpacing: "0.08em",
                            padding: "3px 10px",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {cs.summary.split("\n\n").map((para, pi) => (
                      <p
                        key={pi}
                        style={{
                          color: pi === 0 ? "#E8820C" : "rgba(26,26,26,0.65)",
                          fontSize: pi === 0 ? "13px" : "15px",
                          lineHeight: 1.75,
                          fontStyle: pi === 0 ? "italic" : "normal",
                          fontFamily: pi === 0 ? "Courier New, monospace" : "inherit",
                          marginBottom: "12px",
                        }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  <div className="lg:col-span-4 p-8 flex flex-col gap-6" style={{ backgroundColor: "rgba(13,31,60,0.02)" }}>
                    <div>
                      <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2A4A7F", marginBottom: "6px" }}>
                        Contract Scale
                      </div>
                      <div style={{ color: "#0D1F3C", fontWeight: 700, fontSize: "16px" }}>{cs.scale}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2A4A7F", marginBottom: "6px" }}>
                        Programme
                      </div>
                      <div style={{ color: "rgba(26,26,26,0.7)", fontSize: "14px", fontFamily: "Courier New, monospace" }}>{cs.duration}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2A4A7F", marginBottom: "6px" }}>
                        Value Delivered
                      </div>
                      <div style={{ color: "rgba(26,26,26,0.65)", fontSize: "14px", lineHeight: 1.65, fontStyle: "italic" }}>{cs.value}</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ backgroundColor: "#2A4A7F" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="eyebrow mb-4">Add Your Project to the Ledger</div>
            <h2 style={{ color: "#F5F4F2", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 900, marginBottom: "16px" }}>
              Ready to Start Winning More Work?
            </h2>
            <p style={{ color: "rgba(245,244,242,0.7)", fontSize: "18px", lineHeight: 1.75, maxWidth: "520px", margin: "0 auto 36px" }}>
              Every project above started with a single conversation. Yours can too.
            </p>
            <Link to="/contact" className="btn-amber">Get in Touch</Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}