import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { MapPin, Shield, Briefcase, Users } from "lucide-react";

const sectors = [
  { ref: "SEC-001", label: "Civils & Earthworks", detail: "Bulk earthworks, structures, drainage, groundworks, site preparation." },
  { ref: "SEC-002", label: "Utilities & Infrastructure", detail: "Water, wastewater, gas, power, telecoms — mains laying, diversions, network upgrades." },
  { ref: "SEC-003", label: "MEPH", detail: "Mechanical, Electrical, Plumbing, and HVAC — commercial and industrial builds." },
  { ref: "SEC-004", label: "Principal Contractor Works", detail: "Main contract management, multi-package coordination, design & build, NEC/JCT forms." },
];

const credentials = [
  { icon: Briefcase, label: "10+ Years", sub: "In-house estimating & bid-writing experience" },
  { icon: Shield, label: "PI Insured", sub: "Professional indemnity insurance in place" },
  { icon: MapPin, label: "UK-Wide", sub: "Remote-first delivery; site visits available" },
  { icon: Users, label: "SME to Tier 1", sub: "Experience across all contractor tiers" },
];

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="blueprint-grid-dark py-24" style={{ backgroundColor: "#0D1F3C", position: "relative" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="eyebrow mb-3">About the Consultancy</div>
          <div className="ref-label mb-8">REF: FE-ABT-000</div>
          <h1 style={{ color: "#F5F4F2", fontSize: "clamp(40px, 5vw, 68px)", fontWeight: 900, maxWidth: "700px" }}>
            Senior Expertise.
            <br />
            <span style={{ color: "#E8820C" }}>Without the Overhead.</span>
          </h1>
          <p style={{ color: "rgba(245,244,242,0.65)", fontSize: "18px", lineHeight: 1.75, maxWidth: "600px", marginTop: "20px" }}>
            An independent consultancy built on one principle: UK contractors should have access to senior estimating and bid-writing capability without carrying the full cost of a permanent hire.
          </p>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", backgroundColor: "#E8820C" }} />
      </section>

      {/* Credentials bar */}
      <section style={{ backgroundColor: "#2A4A7F", borderBottom: "1px solid rgba(13,31,60,0.3)" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: "rgba(13,31,60,0.2)" }}>
            {credentials.map((cred) => {
              const Icon = cred.icon;
              return (
                <div key={cred.label} className="p-8 flex items-start gap-4" style={{ backgroundColor: "#2A4A7F" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(232,130,12,0.35)",
                      backgroundColor: "rgba(232,130,12,0.08)",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} style={{ color: "#E8820C" }} />
                  </div>
                  <div>
                    <div style={{ color: "#F5F4F2", fontWeight: 800, fontSize: "18px" }}>{cred.label}</div>
                    <div style={{ color: "rgba(245,244,242,0.55)", fontSize: "13px", lineHeight: 1.5 }}>{cred.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-24" style={{ backgroundColor: "#F5F4F2" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left — main narrative */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="eyebrow mb-3">The Founder</div>
                <div className="ref-label mb-6">REF: FE-ABT-001</div>

                {/* Photo placeholder */}
                <div
                  className="mb-8"
                  style={{
                    width: "100%",
                    maxWidth: "420px",
                    height: "280px",
                    backgroundColor: "#0D1F3C",
                    border: "1px solid #D6D3CD",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  <div style={{ color: "rgba(245,244,242,0.25)", fontSize: "11px", letterSpacing: "0.15em", fontFamily: "monospace" }}>
                    [PLACEHOLDER: FOUNDER PHOTO]
                  </div>
                  <div style={{ color: "rgba(232,130,12,0.3)", fontSize: "10px", letterSpacing: "0.12em", fontFamily: "monospace" }}>
                    Replace with professional headshot
                  </div>
                </div>

                <h2 style={{ color: "#0D1F3C", fontWeight: 900, fontSize: "36px", marginBottom: "8px" }}>
                  {/* [PLACEHOLDER: Founder name] */}
                  [Founder Name]
                </h2>
                <div className="eyebrow mb-8">Founder & Principal Estimator</div>

                <div className="space-y-5" style={{ color: "#1A1A1A", opacity: 0.7, fontSize: "17px", lineHeight: 1.8 }}>
                  <p>
                    {/* [PLACEHOLDER: Replace with real founder bio paragraph 1] */}
                    [Founder Name] founded Foundry Estimating after over a decade of in-house estimating and bid-writing experience across some of the UK's most complex infrastructure and built environment projects. [He/She/They] has worked within both specialist subcontractor and principal contractor environments — gaining a rare, dual-perspective understanding of what it takes to price accurately and write compellingly at every tier of the supply chain.
                  </p>
                  <p>
                    {/* [PLACEHOLDER: Replace with real founder bio paragraph 2] */}
                    That in-house experience spans civils and earthworks, utilities and infrastructure (water, wastewater, power), MEPH (mechanical, electrical, plumbing, and HVAC), and principal contractor works under NEC and JCT forms of contract. [He/She/They] has led estimates ranging from [£Xm] subcontract packages through to [£XXXm] framework bids, managing the full cycle from enquiry management and rate build through to adjudication, submission, and post-tender support.
                  </p>
                  <p>
                    {/* [PLACEHOLDER: Replace with real founder bio paragraph 3] */}
                    Foundry Estimating was established to give UK contractors — at every tier — access to that depth of experience on a flexible, project-by-project basis. The consultancy model means clients get a genuinely senior resource, fully engaged with their project, without the six-figure salary, employment costs, or long-term commitment of a permanent hire.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — sectors & values */}
            <div className="lg:col-span-5 space-y-10">
              <ScrollReveal delay={100}>
                <div>
                  <div className="eyebrow mb-3">Sectors Covered</div>
                  <div className="ref-label mb-6">REF: FE-ABT-002</div>
                  <div className="space-y-3">
                    {sectors.map((sec, i) => (
                      <div
                        key={sec.ref}
                        style={{
                          border: "1px solid #D6D3CD",
                          padding: "16px 20px",
                          backgroundColor: "#ffffff",
                          borderLeft: "3px solid #E8820C",
                        }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div style={{ color: "#0D1F3C", fontWeight: 700, fontSize: "15px" }}>{sec.label}</div>
                          <div className="ref-label">{sec.ref}</div>
                        </div>
                        <div style={{ color: "rgba(26,26,26,0.55)", fontSize: "13px", lineHeight: 1.6 }}>{sec.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div
                  style={{
                    backgroundColor: "#0D1F3C",
                    padding: "36px",
                    borderLeft: "4px solid #E8820C",
                  }}
                >
                  <div className="eyebrow mb-4">Why an Independent Consultancy?</div>
                  <div className="space-y-4" style={{ color: "rgba(245,244,242,0.7)", fontSize: "15px", lineHeight: 1.8 }}>
                    <p>
                      A senior estimator costs £[XX,XXX]–£[XX,XXX] per year in salary alone — before employment on-costs, software licences, and management overhead. {/* [PLACEHOLDER: insert real salary range] */}
                    </p>
                    <p>
                      Most SME and regional contractors don't need that resource full-time, year-round. They need it when they're bidding — which is precisely when they're already under pressure.
                    </p>
                    <p style={{ color: "#F5F4F2", fontWeight: 600 }}>
                      Foundry Estimating exists to solve that. Senior expertise, engaged when you need it, stood down when you don't. No overhead, no long-term commitment, no compromise on quality.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ backgroundColor: "#2A4A7F" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="eyebrow mb-4">Work With Us</div>
            <h2 style={{ color: "#F5F4F2", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 900, marginBottom: "16px" }}>
              Let's Talk About Your Pipeline.
            </h2>
            <p style={{ color: "rgba(245,244,242,0.7)", fontSize: "18px", lineHeight: 1.75, maxWidth: "520px", margin: "0 auto 36px" }}>
              No obligation — just a direct conversation about where you need support and what that would look like in practice.
            </p>
            <Link to="/contact" className="btn-amber">Start an Enquiry</Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}