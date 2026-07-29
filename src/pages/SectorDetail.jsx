import { useMemo } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, AlertTriangle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import useSEO from "@/hooks/useSEO";
import { getSectorBySlug } from "@/data/sectors";
import { services } from "@/data/services";

export default function SectorDetail() {
  const { slug } = useParams();
  const sector = getSectorBySlug(slug);

  const jsonLd = useMemo(() => {
    if (!sector) return null;
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: `${sector.name} Estimating & Bid Writing`,
          description: sector.metaDescription,
          provider: { "@type": "ProfessionalService", name: "Estimere" },
          areaServed: { "@type": "Country", name: "United Kingdom" },
        },
        {
          "@type": "FAQPage",
          mainEntity: sector.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ],
    };
  }, [sector]);

  useSEO({
    title: sector?.metaTitle,
    description: sector?.metaDescription,
    path: sector ? `/sectors/${sector.slug}` : undefined,
    jsonLd,
  });

  if (!sector) return <Navigate to="/sectors" replace />;

  const Icon = sector.icon;
  const relatedServices = sector.services
    .map((s) => services.find((x) => x.slug === s))
    .filter(Boolean);

  return (
    <div>
      {/* Hero */}
      <section
        className="blueprint-grid-dark py-24"
        style={{ backgroundColor: "#0D1F3C", position: "relative" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <Link
            to="/sectors"
            className="inline-flex items-center gap-2 mb-8"
            style={{ color: "rgba(245,244,242,0.5)", fontSize: "13px" }}
          >
            <ArrowLeft size={14} /> All Sectors
          </Link>

          <div className="flex items-start gap-5">
            <div
              className="hidden sm:flex w-14 h-14 items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "#E8820C" }}
            >
              <Icon size={26} strokeWidth={2} color="#0D1F3C" />
            </div>
            <div>
              <div className="ref-label mb-4">REF: {sector.ref}</div>
              <h1
                style={{
                  color: "#F5F4F2",
                  fontSize: "clamp(34px, 4.4vw, 58px)",
                  fontWeight: 900,
                  maxWidth: "820px",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.08,
                }}
              >
                {sector.name}
              </h1>
              <p
                style={{
                  color: "#E8820C",
                  fontSize: "18px",
                  fontWeight: 600,
                  marginTop: "16px",
                  maxWidth: "620px",
                }}
              >
                {sector.tagline}
              </p>
            </div>
          </div>
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

      {/* Intro + packages */}
      <section className="py-20" style={{ backgroundColor: "#F5F4F2" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="eyebrow mb-4">Overview</div>
                <div
                  className="space-y-5"
                  style={{ color: "#1A1A1A", opacity: 0.75, fontSize: "17px", lineHeight: 1.8 }}
                >
                  {sector.intro.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal>
                <div style={{ backgroundColor: "#0D1F3C", padding: "36px" }}>
                  <div
                    style={{
                      color: "#E8820C",
                      fontSize: "11px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      fontFamily: "monospace",
                      marginBottom: "20px",
                    }}
                  >
                    Packages We Price
                  </div>
                  <ul className="space-y-3">
                    {sector.packages.map((p, i) => (
                      <li key={i} className="flex items-start gap-3">
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
                        <span style={{ color: "rgba(245,244,242,0.85)", fontSize: "15px", lineHeight: 1.6 }}>
                          {p}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing challenges — the credibility section */}
      <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="eyebrow mb-3">Where Bids Go Wrong</div>
            <h2
              style={{
                color: "#0D1F3C",
                fontSize: "clamp(26px, 3vw, 38px)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                marginBottom: "16px",
                maxWidth: "720px",
              }}
            >
              The cost items that get missed
            </h2>
            <p
              style={{
                color: "#1A1A1A",
                opacity: 0.65,
                fontSize: "17px",
                lineHeight: 1.75,
                maxWidth: "640px",
                marginBottom: "48px",
              }}
            >
              These are the recurring exposures we look for on every {sector.name.toLowerCase()} bid.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {sector.challenges.map((c, i) => (
              <ScrollReveal key={i}>
                <div
                  style={{
                    border: "1px solid #D6D3CD",
                    borderLeft: "4px solid #E8820C",
                    backgroundColor: "#F5F4F2",
                    padding: "28px",
                    height: "100%",
                  }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <AlertTriangle size={18} color="#E8820C" strokeWidth={2.2} style={{ marginTop: "2px", flexShrink: 0 }} />
                    <h3 style={{ color: "#0D1F3C", fontWeight: 800, fontSize: "18px", lineHeight: 1.35 }}>
                      {c.title}
                    </h3>
                  </div>
                  <p style={{ color: "#1A1A1A", opacity: 0.72, fontSize: "15px", lineHeight: 1.75 }}>
                    {c.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant services */}
      <section className="py-20" style={{ backgroundColor: "#F5F4F2" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="eyebrow mb-3">Services</div>
            <h2
              style={{
                color: "#0D1F3C",
                fontSize: "clamp(24px, 2.6vw, 34px)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                marginBottom: "40px",
              }}
            >
              How we typically support {sector.name.toLowerCase()} bids
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((r) => {
              const RIcon = r.icon;
              return (
                <ScrollReveal key={r.slug}>
                  <Link
                    to={`/services/${r.slug}`}
                    className="block h-full transition-transform hover:-translate-y-1"
                    style={{ border: "1px solid #D6D3CD", padding: "28px", backgroundColor: "#FFFFFF" }}
                  >
                    <div
                      className="w-10 h-10 flex items-center justify-center mb-5"
                      style={{ backgroundColor: "#0D1F3C" }}
                    >
                      <RIcon size={18} strokeWidth={2} color="#E8820C" />
                    </div>
                    <div
                      style={{
                        color: "#1A1A1A",
                        opacity: 0.4,
                        fontFamily: "monospace",
                        fontSize: "11px",
                        letterSpacing: "0.1em",
                        marginBottom: "8px",
                      }}
                    >
                      {r.ref}
                    </div>
                    <h3 style={{ color: "#0D1F3C", fontWeight: 800, fontSize: "17px", marginBottom: "8px" }}>
                      {r.title}
                    </h3>
                    <p style={{ color: "#1A1A1A", opacity: 0.65, fontSize: "14px", lineHeight: 1.6 }}>
                      {r.short}
                    </p>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[820px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="eyebrow mb-3">Common Questions</div>
            <h2
              style={{
                color: "#0D1F3C",
                fontSize: "clamp(26px, 3vw, 38px)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                marginBottom: "40px",
              }}
            >
              Frequently asked
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {sector.faqs.map((f, i) => (
              <ScrollReveal key={i}>
                <div style={{ backgroundColor: "#F5F4F2", border: "1px solid #D6D3CD", padding: "28px" }}>
                  <h3 style={{ color: "#0D1F3C", fontWeight: 700, fontSize: "17px", marginBottom: "12px" }}>
                    {f.q}
                  </h3>
                  <p style={{ color: "#1A1A1A", opacity: 0.72, fontSize: "16px", lineHeight: 1.75 }}>
                    {f.a}
                  </p>
                </div>
              </ScrollReveal>
            ))}
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
              Bidding {sector.name.toLowerCase()} work?
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
              A short conversation is usually enough to establish scope, programme and fee. No obligation.
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
