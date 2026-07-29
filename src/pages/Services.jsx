import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import useSEO from "@/hooks/useSEO";
import { services } from "@/data/services";

export default function Services() {
  useSEO({
    title: "Services | Construction Estimating & Bid Writing | Estimere",
    description:
      "Nine service lines covering the full tender lifecycle — PQQ support, cost estimating, bid writing, tender management, bid review and post-tender support.",
    path: "/services",
  });

  return (
    <div>
      {/* Header */}
      <section
        className="blueprint-grid-dark py-24"
        style={{ backgroundColor: "#0D1F3C", position: "relative" }}
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

                      {/* Detail page link */}
                      <Link
                        to={`/services/${svc.slug}`}
                        className="inline-flex items-center gap-2 mt-7 font-semibold transition-transform hover:translate-x-1"
                        style={{
                          color: "#2A4A7F",
                          fontSize: "15px",
                          borderBottom: "2px solid #E8820C",
                          paddingBottom: "3px",
                        }}
                      >
                        More on {svc.title.split(/[&/]/)[0].trim().toLowerCase()} <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
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
              Not sure which you need?
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
              Most engagements combine several. A short conversation is usually enough to establish scope, programme and fee.
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
