import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Calculator, FileText, Layers, Shield, Search, Zap, MessageSquare, Leaf, GraduationCap
} from "lucide-react";

const services = [
  {
    ref: "SVC-001",
    icon: Shield,
    title: "Pre-Qualification & PQQ / SQ Support",
    sector: "All Sectors",
    short: "Getting past the gateway.",
    desc: "Many tenders are lost before a price is ever submitted — at the pre-qualification or selection questionnaire stage. We prepare rigorous, well-evidenced PQQ and SQ responses that present your organisation credibly and maximise your score at each gateway.",
    deliverables: [
      "PQQ / SQ response writing and editing",
      "Company capability and track record narratives",
      "Financial standing and insurance documentation review",
      "Health & safety questionnaire support",
      "Subcontractor and supply chain statements",
    ],
  },
  {
    ref: "SVC-002",
    icon: Calculator,
    title: "Cost Estimating",
    sector: "Civils · Utilities · MEPH · Principal Contractor",
    short: "First-principles accuracy. Every time.",
    desc: "We build estimates from the ground up — no rule-of-thumb shortcuts. From detailed take-off through to subcontractor and supplier enquiry management, rate builds, and final summary sheets, every figure is traceable and defensible at adjudication.",
    deliverables: [
      "Detailed quantity take-off from drawings and specifications",
      "First-principles rate builds (labour, plant, materials)",
      "Subcontractor and supplier enquiry management",
      "Domestic sub-contractor comparison and analysis",
      "Risk and contingency quantification",
      "Estimate summary and cost plan production",
    ],
  },
  {
    ref: "SVC-003",
    icon: FileText,
    title: "Bid Writing",
    sector: "All Sectors",
    short: "Words that win work.",
    desc: "A technically accurate price is only half the battle. We write quality, technical, and method submissions that communicate your approach clearly, score well against evaluation criteria, and differentiate your bid from the competition.",
    deliverables: [
      "Method statements (construction, programme, logistics)",
      "Executive summaries and commercial overviews",
      "Quality, H&S, and environment submissions",
      "Technical response writing against ITT questions",
      "Tender interview and presentation support",
    ],
  },
  {
    ref: "SVC-004",
    icon: Layers,
    title: "Full Tender Management",
    sector: "All Sectors",
    short: "End-to-end. Start to submit.",
    desc: "For organisations without in-house estimating resource — or for strategic bids that need dedicated senior attention — we manage the entire tender cycle from invitation through to final submission and adjudication.",
    deliverables: [
      "Tender programme and milestone management",
      "Document control and query management (RFIs)",
      "End-to-end estimate production",
      "Quality and technical submission writing",
      "Pre-submission review and QA",
      "Adjudication support and final submission",
    ],
  },
  {
    ref: "SVC-005",
    icon: Search,
    title: "Bid Review / Second Opinion",
    sector: "All Sectors",
    short: "QA before you submit.",
    desc: "An independent review of an already-prepared bid before it leaves the building. We check pricing logic, identify gaps, assess risk exposure, and review quality responses against evaluation criteria — giving you confidence or catching issues while there's still time to act.",
    deliverables: [
      "Commercial and pricing logic review",
      "Risk and qualification schedule audit",
      "Quality submission scoring assessment",
      "Clarification and assumption review",
      "Written findings report with recommended actions",
    ],
  },
  {
    ref: "SVC-006",
    icon: Zap,
    title: "Rapid Go / No-Go Feasibility Costing",
    sector: "All Sectors",
    short: "Is it worth bidding? Know fast.",
    desc: "Before committing a team to a full tender programme, get a fast, high-level cost sense-check. We rapidly assess drawings, specifications, and any available data to produce an order-of-magnitude cost position — helping you make an informed go/no-go decision.",
    deliverables: [
      "High-level order-of-magnitude cost estimate",
      "Key risk and uncertainty identification",
      "Preliminary programme assessment",
      "Written summary and recommendation",
    ],
  },
  {
    ref: "SVC-007",
    icon: MessageSquare,
    title: "Post-Tender Support",
    sector: "All Sectors",
    short: "After submission. Before contract.",
    desc: "The period between submission and award is critical and often under-resourced. We support with clarification responses, commercial negotiation preparation, adjudication assistance, and mobilisation cost reviews.",
    deliverables: [
      "Tender clarification and BAFO response preparation",
      "Commercial negotiation briefing support",
      "Adjudication cost and risk review",
      "Contract review and mobilisation cost assessment",
    ],
  },
  {
    ref: "SVC-008",
    icon: Leaf,
    title: "Social Value & Carbon / Embodied-Carbon Costing",
    sector: "All Sectors",
    short: "Measuring what matters more than ever.",
    desc: "Social value and carbon commitments are increasingly scored criteria in UK public sector tenders. We help quantify, evidence, and present social value commitments and support embodied-carbon costing within your estimate and quality submission.",
    deliverables: [
      "Social value framework response and quantification",
      "Embodied carbon baseline costing (EPDs, material schedules)",
      "Carbon reduction narrative writing",
      "TOMS / Themes, Outcomes, Measures support",
    ],
  },
  {
    ref: "SVC-009",
    icon: GraduationCap,
    title: "Knowledge Transfer & Mentoring",
    sector: "All Sectors",
    short: "Building your team's capability.",
    desc: "For clients who want to develop their in-house estimating function, we offer structured mentoring and knowledge-transfer programmes for junior estimators and bid coordinators — working alongside your team on live bids to build capability from the inside.",
    deliverables: [
      "One-to-one mentoring for junior estimators",
      "Live bid shadowing and structured review sessions",
      "Estimating process and template development",
      "Rate library and benchmark database setup",
      "Bid programme and document control training",
    ],
  },
];

export default function Services() {
  return (
    <div>
      {/* Header */}
      <section
        className="blueprint-grid-dark py-24"
        style={{ backgroundColor: "#0D1F3C" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="eyebrow mb-3">Service Ledger</div>
          <div className="ref-label mb-8">REF: FE-SVC-000</div>
          <h1 style={{ color: "#F5F4F2", fontSize: "clamp(40px, 5vw, 68px)", fontWeight: 900, maxWidth: "700px" }}>
            What We Do.
            <br />
            <span style={{ color: "#E8820C" }}>And How We Do It.</span>
          </h1>
          <p style={{ color: "rgba(245,244,242,0.65)", fontSize: "18px", lineHeight: 1.75, maxWidth: "600px", marginTop: "20px" }}>
            Nine distinct service lines, structured around the full tender lifecycle. From first pre-qualification through to post-award — pick what you need, or take the whole package.
          </p>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", backgroundColor: "#E8820C" }} />
      </section>

      {/* Services grid */}
      <section className="py-24" style={{ backgroundColor: "#F5F4F2" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              const isAlt = i % 2 !== 0;
              return (
                <ScrollReveal key={svc.ref} delay={0}>
                  <div
                    className="grid grid-cols-1 lg:grid-cols-12 gap-0"
                    style={{
                      border: "1px solid #D6D3CD",
                      backgroundColor: isAlt ? "#ffffff" : "#F5F4F2",
                    }}
                  >
                    {/* Left label col */}
                    <div
                      className="lg:col-span-3 p-8 flex flex-col justify-between"
                      style={{
                        borderRight: "1px solid #D6D3CD",
                        backgroundColor: isAlt ? "rgba(13,31,60,0.03)" : "rgba(13,31,60,0.02)",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            width: "48px",
                            height: "48px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "1px solid rgba(42,74,127,0.2)",
                            backgroundColor: "rgba(42,74,127,0.07)",
                            marginBottom: "16px",
                          }}
                        >
                          <Icon size={22} style={{ color: "#2A4A7F" }} />
                        </div>
                        <div className="ref-label mb-2">{svc.ref}</div>
                        <div
                          style={{
                            color: "rgba(13,31,60,0.35)",
                            fontSize: "10px",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            fontFamily: "monospace",
                            marginBottom: "12px",
                          }}
                        >
                          {svc.sector}
                        </div>
                      </div>
                      <div
                        style={{
                          color: "#E8820C",
                          fontWeight: 700,
                          fontSize: "13px",
                          fontStyle: "italic",
                          lineHeight: 1.4,
                        }}
                      >
                        "{svc.short}"
                      </div>
                    </div>

                    {/* Right content col */}
                    <div className="lg:col-span-9 p-8 lg:p-10">
                      <h2
                        style={{
                          color: "#0D1F3C",
                          fontWeight: 800,
                          fontSize: "clamp(20px, 2.5vw, 28px)",
                          marginBottom: "16px",
                        }}
                      >
                        {svc.title}
                      </h2>
                      <p
                        style={{
                          color: "#1A1A1A",
                          opacity: 0.7,
                          fontSize: "16px",
                          lineHeight: 1.75,
                          marginBottom: "24px",
                          maxWidth: "640px",
                        }}
                      >
                        {svc.desc}
                      </p>
                      <div>
                        <div
                          style={{
                            fontSize: "10px",
                            fontWeight: 700,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: "#2A4A7F",
                            marginBottom: "12px",
                          }}
                        >
                          Deliverables
                        </div>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                          {svc.deliverables.map((d) => (
                            <li
                              key={d}
                              className="flex items-start gap-3"
                              style={{ fontSize: "14px", color: "#1A1A1A", opacity: 0.7 }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  width: "6px",
                                  height: "6px",
                                  backgroundColor: "#E8820C",
                                  marginTop: "8px",
                                  flexShrink: 0,
                                }}
                              />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ backgroundColor: "#2A4A7F" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="eyebrow mb-4">Commission a Service</div>
            <h2 style={{ color: "#F5F4F2", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 900, marginBottom: "16px" }}>
              Not Sure Which Service Fits?
            </h2>
            <p style={{ color: "rgba(245,244,242,0.7)", fontSize: "18px", lineHeight: 1.75, maxWidth: "520px", margin: "0 auto 36px" }}>
              One conversation is usually enough to identify the right scope. Get in touch and we'll recommend the most efficient approach for your tender.
            </p>
            <Link to="/contact" className="btn-amber">Discuss Your Requirements</Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}