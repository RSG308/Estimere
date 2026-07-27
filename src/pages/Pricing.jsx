import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { Check, Clock, Package, RefreshCw } from "lucide-react";

const pricingModels = [
  {
    ref: "PCE-001",
    icon: Clock,
    title: "Day Rate",
    subtitle: "Flexible & Ongoing",
    tag: "Most Flexible",
    tagColor: "#2A4A7F",
    description:
      "Ideal for open-ended or variable-scope engagements where the full extent of work cannot be defined in advance. You pay for time spent, with full transparency on days committed.",
    suitable: [
      "Ongoing estimating support across multiple bids",
      "Framework support retainer work",
      "Collaborative working within your existing team",
      "Scope that is likely to evolve during the project",
      "Surge capacity during peak tender periods",
    ],
    pricing: "[PLACEHOLDER: Day rate to be confirmed — contact for a current rate card]",
    note: "Minimum engagement of 1 day. Time is logged and reported weekly.",
  },
  {
    ref: "PCE-002",
    icon: Package,
    title: "Fixed-Fee Package",
    subtitle: "Single Deliverable",
    tag: "Most Popular",
    tagColor: "#E8820C",
    description:
      "A defined fee for a clearly scoped, single deliverable — such as one PQQ response or one complete tender submission. Priced by project value band so you know the cost upfront before committing.",
    suitable: [
      "Single PQQ / SQ submission",
      "Single tender estimate or bid write",
      "Bid review / second opinion (fixed scope)",
      "Go / no-go feasibility assessment",
      "Social value or carbon costing module",
    ],
    pricing: "[PLACEHOLDER: Fixed-fee bands to be confirmed — indicative pricing available on request, based on project contract value and scope complexity]",
    note: "Scope must be agreed in writing before commencement. Out-of-scope items quoted separately.",
  },
  {
    ref: "PCE-003",
    icon: RefreshCw,
    title: "Retainer",
    subtitle: "Guaranteed Monthly Capacity",
    tag: "Best Value",
    tagColor: "#0D1F3C",
    description:
      "Reserve a guaranteed allocation of days per month at a preferential rate. Retainer clients receive priority scheduling and first-call access — ensuring capacity is always available for your pipeline.",
    suitable: [
      "Contractors with a regular, recurring tender pipeline",
      "Businesses building in-house estimating capability",
      "Clients who need assured capacity across bid seasons",
      "Framework participants with rolling submission cycles",
    ],
    pricing: "[PLACEHOLDER: Retainer packages from X days/month — discounted rate vs standard day rate — contact for current package details]",
    note: "Minimum 3-month initial commitment. Unused days do not roll over but may be reallocated within the calendar month.",
  },
];

export default function Pricing() {
  return (
    <div>
      {/* Header */}
      <section className="blueprint-grid-dark py-24" style={{ backgroundColor: "#0D1F3C", position: "relative" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="eyebrow mb-3">Commercial Framework</div>
          <div className="ref-label mb-8">REF: FE-PCE-000</div>
          <h1 style={{ color: "#F5F4F2", fontSize: "clamp(40px, 5vw, 68px)", fontWeight: 900, maxWidth: "700px" }}>
            Transparent Pricing.
            <br />
            <span style={{ color: "#E8820C" }}>Three Clear Models.</span>
          </h1>
          <p style={{ color: "rgba(245,244,242,0.65)", fontSize: "18px", lineHeight: 1.75, maxWidth: "580px", marginTop: "20px" }}>
            No hidden fees, no opaque structures. Choose the commercial model that fits your project — or mix across engagements as your pipeline evolves.
          </p>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", backgroundColor: "#E8820C" }} />
      </section>

      {/* Pricing cards */}
      <section className="py-24" style={{ backgroundColor: "#F5F4F2" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {pricingModels.map((model, i) => {
              const Icon = model.icon;
              const isHighlight = i === 1;
              return (
                <ScrollReveal key={model.ref} delay={i * 100}>
                  <div
                    style={{
                      border: isHighlight ? `2px solid #E8820C` : "1px solid #D6D3CD",
                      backgroundColor: isHighlight ? "#0D1F3C" : "#ffffff",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {/* Tag */}
                    <div
                      style={{
                        backgroundColor: model.tagColor,
                        color: "#F5F4F2",
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        padding: "6px 16px",
                        textAlign: "center",
                        fontFamily: "monospace",
                      }}
                    >
                      {model.tag}
                    </div>

                    <div className="p-8 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-6">
                        <div
                          style={{
                            width: "44px",
                            height: "44px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: `1px solid ${isHighlight ? "rgba(232,130,12,0.35)" : "rgba(42,74,127,0.2)"}`,
                            backgroundColor: isHighlight ? "rgba(232,130,12,0.1)" : "rgba(42,74,127,0.06)",
                          }}
                        >
                          <Icon size={20} style={{ color: isHighlight ? "#E8820C" : "#2A4A7F" }} />
                        </div>
                        <div>
                          <div className="ref-label">{model.ref}</div>
                          <div style={{ color: isHighlight ? "rgba(245,244,242,0.5)" : "rgba(13,31,60,0.4)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                            {model.subtitle}
                          </div>
                        </div>
                      </div>

                      <h2
                        style={{
                          color: isHighlight ? "#F5F4F2" : "#0D1F3C",
                          fontWeight: 900,
                          fontSize: "32px",
                          marginBottom: "12px",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {model.title}
                      </h2>

                      <p
                        style={{
                          color: isHighlight ? "rgba(245,244,242,0.65)" : "rgba(26,26,26,0.65)",
                          fontSize: "15px",
                          lineHeight: 1.75,
                          marginBottom: "24px",
                        }}
                      >
                        {model.description}
                      </p>

                      <div
                        style={{
                          borderTop: `1px solid ${isHighlight ? "rgba(42,74,127,0.4)" : "#D6D3CD"}`,
                          paddingTop: "20px",
                          marginBottom: "20px",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "10px",
                            fontWeight: 700,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: isHighlight ? "#E8820C" : "#2A4A7F",
                            marginBottom: "12px",
                          }}
                        >
                          Suitable For
                        </div>
                        <ul className="space-y-2">
                          {model.suitable.map((s) => (
                            <li
                              key={s}
                              className="flex items-start gap-3"
                              style={{ fontSize: "14px", color: isHighlight ? "rgba(245,244,242,0.7)" : "rgba(26,26,26,0.7)" }}
                            >
                              <Check
                                size={14}
                                style={{ color: "#E8820C", marginTop: "4px", flexShrink: 0 }}
                              />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex-1" />

                      {/* Pricing placeholder */}
                      <div
                        style={{
                          backgroundColor: isHighlight ? "rgba(42,74,127,0.3)" : "rgba(13,31,60,0.04)",
                          border: `1px solid ${isHighlight ? "rgba(42,74,127,0.5)" : "rgba(13,31,60,0.08)"}`,
                          padding: "16px",
                          marginBottom: "16px",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "10px",
                            fontWeight: 700,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: isHighlight ? "rgba(232,130,12,0.8)" : "#2A4A7F",
                            marginBottom: "6px",
                            fontFamily: "monospace",
                          }}
                        >
                          Indicative Rate
                        </div>
                        <p style={{ fontSize: "13px", color: isHighlight ? "rgba(245,244,242,0.55)" : "rgba(26,26,26,0.55)", fontStyle: "italic", lineHeight: 1.6 }}>
                          {model.pricing}
                        </p>
                      </div>

                      <p style={{ fontSize: "12px", color: isHighlight ? "rgba(245,244,242,0.35)" : "rgba(26,26,26,0.4)", fontFamily: "monospace", lineHeight: 1.6 }}>
                        {model.note}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Scope disclaimer — "contractual stamp" style */}
          <ScrollReveal delay={200}>
            <div
              className="mt-16 p-10"
              style={{
                border: "1px solid #D6D3CD",
                borderLeft: "4px solid #E8820C",
                backgroundColor: "#ffffff",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "24px",
                  fontFamily: "Courier New, monospace",
                  fontSize: "10px",
                  letterSpacing: "0.14em",
                  color: "rgba(13,31,60,0.2)",
                  textTransform: "uppercase",
                }}
              >
                SCOPE DISCLAIMER · REF: FE-PCE-DISC
              </div>
              <div className="eyebrow mb-4">Scope & Quotation Note</div>
              <h3 style={{ color: "#0D1F3C", fontWeight: 800, fontSize: "22px", marginBottom: "12px" }}>
                Exact fees depend on project scope.
              </h3>
              <p style={{ color: "#1A1A1A", opacity: 0.65, fontSize: "16px", lineHeight: 1.8, maxWidth: "760px", fontFamily: "Courier New, monospace" }}>
                All fees — day rates, fixed packages, and retainer structures — are provided as indicative structures only. A specific quotation will be provided in writing following an initial conversation in which project scope, programme, complexity, sector, and required deliverables are discussed. There is no obligation to proceed following that conversation.
              </p>
              <div className="mt-8">
                <Link to="/contact" className="btn-amber">Request a Quotation</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}