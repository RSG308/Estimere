import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import useSEO from "@/hooks/useSEO";
import { sectors } from "@/data/sectors";

export default function Sectors() {
  useSEO({
    title: "Sectors | Civils, Utilities, MEPH & Principal Contractor | Estimere",
    description:
      "Specialist estimating and bid writing across civils and groundworks, utilities and infrastructure, MEPH building services, and principal contractor works.",
    path: "/sectors",
  });

  return (
    <div>
      {/* Header */}
      <section
        className="blueprint-grid-dark py-24"
        style={{ backgroundColor: "#0D1F3C", position: "relative" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="eyebrow mb-3">Sector Coverage</div>
          <div className="ref-label mb-8">REF: FE-SEC-000</div>
          <h1
            style={{
              color: "#F5F4F2",
              fontSize: "clamp(40px, 5vw, 68px)",
              fontWeight: 900,
              maxWidth: "760px",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            Depth In Four
            <br />
            <span style={{ color: "#E8820C" }}>Sectors. Not Breadth In Twenty.</span>
          </h1>
          <p
            style={{
              color: "rgba(245,244,242,0.65)",
              fontSize: "18px",
              lineHeight: 1.75,
              maxWidth: "620px",
              marginTop: "20px",
            }}
          >
            Estimating accurately means having priced the work before. We concentrate on the sectors
            where that experience is deepest — and where the cost risk is least visible in the tender
            documents.
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "3px",
            backgroundColor: "#E8820C",
          }}
        />
      </section>

      {/* Sector cards */}
      <section className="py-24" style={{ backgroundColor: "#F5F4F2" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {sectors.map((sec) => {
              const Icon = sec.icon;
              return (
                <ScrollReveal key={sec.slug}>
                  <Link
                    to={`/sectors/${sec.slug}`}
                    className="block h-full transition-transform hover:-translate-y-1"
                    style={{
                      border: "1px solid #D6D3CD",
                      backgroundColor: "#FFFFFF",
                      padding: "36px",
                    }}
                  >
                    <div
                      className="w-12 h-12 flex items-center justify-center mb-6"
                      style={{ backgroundColor: "#0D1F3C" }}
                    >
                      <Icon size={22} strokeWidth={2} color="#E8820C" />
                    </div>

                    <div className="ref-label mb-3">{sec.ref}</div>

                    <h2
                      style={{
                        color: "#0D1F3C",
                        fontWeight: 900,
                        fontSize: "clamp(22px, 2.4vw, 28px)",
                        letterSpacing: "-0.01em",
                        marginBottom: "10px",
                      }}
                    >
                      {sec.name}
                    </h2>

                    <p
                      style={{
                        color: "#E8820C",
                        fontWeight: 600,
                        fontSize: "15px",
                        fontStyle: "italic",
                        marginBottom: "18px",
                        lineHeight: 1.5,
                      }}
                    >
                      {sec.tagline}
                    </p>

                    <p
                      style={{
                        color: "#1A1A1A",
                        opacity: 0.7,
                        fontSize: "16px",
                        lineHeight: 1.75,
                        marginBottom: "24px",
                      }}
                    >
                      {sec.intro[0]}
                    </p>

                    <div
                      style={{
                        borderTop: "1px solid #D6D3CD",
                        paddingTop: "20px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "10px",
                          fontWeight: 700,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "#2A4A7F",
                          marginBottom: "10px",
                        }}
                      >
                        Typical Packages
                      </div>
                      <p style={{ color: "#1A1A1A", opacity: 0.6, fontSize: "14px", lineHeight: 1.7 }}>
                        {sec.packages.slice(0, 4).join(" · ")}
                      </p>
                    </div>

                    <span
                      className="inline-flex items-center gap-2 mt-6 font-semibold"
                      style={{
                        color: "#2A4A7F",
                        fontSize: "15px",
                        borderBottom: "2px solid #E8820C",
                        paddingBottom: "3px",
                      }}
                    >
                      Explore this sector <ArrowRight size={16} />
                    </span>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#0D1F3C" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2
              style={{
                color: "#F5F4F2",
                fontSize: "clamp(26px, 3vw, 40px)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                maxWidth: "700px",
                margin: "0 auto 20px",
              }}
            >
              Working outside these sectors?
            </h2>
            <p
              style={{
                color: "rgba(245,244,242,0.7)",
                fontSize: "17px",
                maxWidth: "560px",
                margin: "0 auto 32px",
                lineHeight: 1.7,
              }}
            >
              Still worth a conversation. If it isn't work we can price well, we'll say so.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold transition-transform hover:translate-x-1"
              style={{ backgroundColor: "#E8820C", color: "#0D1F3C", fontSize: "16px" }}
            >
              Get in touch <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
