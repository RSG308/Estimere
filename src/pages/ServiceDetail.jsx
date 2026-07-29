import { useMemo } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import useSEO from "@/hooks/useSEO";
import { services, getServiceBySlug } from "@/data/services";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  const jsonLd = useMemo(() => {
    if (!service) return null;
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: service.title,
          description: service.desc,
          serviceType: service.title,
          provider: { "@type": "ProfessionalService", name: "Estimere" },
          areaServed: { "@type": "Country", name: "United Kingdom" },
        },
        {
          "@type": "FAQPage",
          mainEntity: service.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ],
    };
  }, [service]);

  useSEO({
    title: service?.metaTitle,
    description: service?.metaDescription,
    path: service ? `/services/${service.slug}` : undefined,
    jsonLd,
  });

  if (!service) return <Navigate to="/services" replace />;

  const Icon = service.icon;
  const related = service.related
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
            to="/services"
            className="inline-flex items-center gap-2 mb-8 hover:opacity-100 transition-opacity"
            style={{ color: "rgba(245,244,242,0.5)", fontSize: "13px" }}
          >
            <ArrowLeft size={14} /> All Services
          </Link>

          <div className="flex items-start gap-5">
            <div
              className="hidden sm:flex w-14 h-14 items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "#E8820C" }}
            >
              <Icon size={26} strokeWidth={2} color="#0D1F3C" />
            </div>
            <div>
              <div className="ref-label mb-4">REF: {service.ref}</div>
              <h1
                style={{
                  color: "#F5F4F2",
                  fontSize: "clamp(32px, 4vw, 52px)",
                  fontWeight: 900,
                  maxWidth: "820px",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                {service.title}
              </h1>
              <p
                style={{
                  color: "#E8820C",
                  fontSize: "18px",
                  fontWeight: 600,
                  marginTop: "16px",
                }}
              >
                {service.short}
              </p>
              <div
                style={{
                  color: "rgba(245,244,242,0.4)",
                  fontSize: "12px",
                  fontFamily: "monospace",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginTop: "20px",
                }}
              >
                {service.sector}
              </div>
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

      {/* Intro + deliverables */}
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
                  {service.intro.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div style={{ marginTop: "48px" }}>
                  <div className="eyebrow mb-5">Who it's for</div>
                  <ul className="space-y-3">
                    {service.whoFor.map((w, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          style={{
                            color: "#E8820C",
                            fontFamily: "monospace",
                            fontSize: "13px",
                            marginTop: "3px",
                          }}
                        >
                          —
                        </span>
                        <span style={{ color: "#1A1A1A", opacity: 0.75, fontSize: "16px", lineHeight: 1.7 }}>
                          {w}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Deliverables card */}
            <div className="lg:col-span-5">
              <ScrollReveal>
                <div
                  style={{
                    backgroundColor: "#0D1F3C",
                    padding: "36px",
                    position: "sticky",
                    top: "104px",
                  }}
                >
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
                    Deliverables
                  </div>
                  <ul className="space-y-4">
                    {service.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check size={16} color="#E8820C" strokeWidth={2.5} style={{ marginTop: "3px", flexShrink: 0 }} />
                        <span style={{ color: "rgba(245,244,242,0.85)", fontSize: "15px", lineHeight: 1.6 }}>
                          {d}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 mt-8 px-6 py-3 font-semibold transition-transform hover:translate-x-1"
                    style={{ backgroundColor: "#E8820C", color: "#0D1F3C", fontSize: "15px" }}
                  >
                    Discuss this service <ArrowRight size={16} />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="eyebrow mb-3">Process</div>
            <h2
              style={{
                color: "#0D1F3C",
                fontSize: "clamp(26px, 3vw, 38px)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                marginBottom: "48px",
              }}
            >
              How it works
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((p, i) => (
              <ScrollReveal key={i}>
                <div style={{ borderTop: "2px solid #E8820C", paddingTop: "20px" }}>
                  <div
                    style={{
                      color: "#E8820C",
                      fontFamily: "monospace",
                      fontSize: "13px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      marginBottom: "10px",
                    }}
                  >
                    {p.step}
                  </div>
                  <h3 style={{ color: "#0D1F3C", fontWeight: 800, fontSize: "17px", marginBottom: "10px" }}>
                    {p.title}
                  </h3>
                  <p style={{ color: "#1A1A1A", opacity: 0.65, fontSize: "15px", lineHeight: 1.7 }}>
                    {p.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20" style={{ backgroundColor: "#F5F4F2" }}>
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
            {service.faqs.map((f, i) => (
              <ScrollReveal key={i}>
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #D6D3CD",
                    padding: "28px",
                  }}
                >
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

      {/* Related services */}
      {related.length > 0 && (
        <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="eyebrow mb-3">Related</div>
              <h2
                style={{
                  color: "#0D1F3C",
                  fontSize: "clamp(24px, 2.6vw, 32px)",
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  marginBottom: "40px",
                }}
              >
                Often engaged alongside
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r) => {
                const RIcon = r.icon;
                return (
                  <ScrollReveal key={r.slug}>
                    <Link
                      to={`/services/${r.slug}`}
                      className="block h-full transition-transform hover:-translate-y-1"
                      style={{ border: "1px solid #D6D3CD", padding: "28px", backgroundColor: "#F5F4F2" }}
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
      )}

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
              Discuss your requirement
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
