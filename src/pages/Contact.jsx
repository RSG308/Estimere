import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div>
      {/* Header */}
      <section className="blueprint-grid-dark py-24" style={{ backgroundColor: "#0D1F3C", position: "relative" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="eyebrow mb-3">Get in Touch</div>
          <div className="ref-label mb-8">REF: EST-CTT-000</div>
          <h1 style={{ color: "#F5F4F2", fontSize: "clamp(40px, 5vw, 68px)", fontWeight: 900, maxWidth: "700px" }}>
            Start the
            <br />
            <span style={{ color: "#E8820C" }}>Conversation.</span>
          </h1>
          <p style={{ color: "rgba(245,244,242,0.65)", fontSize: "18px", lineHeight: 1.75, maxWidth: "560px", marginTop: "20px" }}>
            No obligation. Describe your project and what support you need — we'll respond with an honest assessment and, if appropriate, a written quotation.
          </p>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", backgroundColor: "#E8820C" }} />
      </section>

      {/* Form + contact details */}
      <section className="py-24" style={{ backgroundColor: "#F5F4F2" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-8">
              <ScrollReveal>
                <div className="eyebrow mb-3">Enquiry Form</div>
                <div className="ref-label mb-8">REF: EST-CTT-001</div>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #D6D3CD",
                    padding: "clamp(24px, 4vw, 48px)",
                  }}
                >
                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>

            {/* Contact details */}
            <div className="lg:col-span-4 space-y-8">
              <ScrollReveal delay={100}>
                <div>
                  <div className="eyebrow mb-3">Direct Contact</div>
                  <div className="ref-label mb-6">REF: EST-CTT-002</div>

                  <div className="space-y-6">
                    <div
                      style={{
                        border: "1px solid #D6D3CD",
                        padding: "20px",
                        backgroundColor: "#ffffff",
                        borderLeft: "3px solid #E8820C",
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <Mail size={18} style={{ color: "#E8820C", marginTop: "2px", flexShrink: 0 }} />
                        <div>
                          <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2A4A7F", marginBottom: "4px" }}>
                            Email
                          </div>
                          <a
                            href="mailto:hello@foundryestimating.co.uk"
                            style={{ color: "#0D1F3C", fontWeight: 600, fontSize: "15px", textDecoration: "none" }}
                            className="hover:underline"
                          >
                            {/* [PLACEHOLDER: replace with real email address] */}
                            hello@foundryestimating.co.uk
                          </a>
                          <p style={{ color: "rgba(26,26,26,0.5)", fontSize: "13px", marginTop: "4px", lineHeight: 1.5 }}>
                            Prefer email? Write directly and we'll reply within one working day.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        border: "1px solid #D6D3CD",
                        padding: "20px",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <MapPin size={18} style={{ color: "#2A4A7F", marginTop: "2px", flexShrink: 0 }} />
                        <div>
                          <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2A4A7F", marginBottom: "4px" }}>
                            Coverage
                          </div>
                          <div style={{ color: "#0D1F3C", fontWeight: 600, fontSize: "15px" }}>UK-Wide</div>
                          <p style={{ color: "rgba(26,26,26,0.5)", fontSize: "13px", marginTop: "4px", lineHeight: 1.5 }}>
                            Remote-first delivery. Site visits available where required — travel time and expenses may apply for locations outside [region]. {/* [PLACEHOLDER: specify region or remove caveat] */}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        border: "1px solid #D6D3CD",
                        padding: "20px",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <Clock size={18} style={{ color: "#2A4A7F", marginTop: "2px", flexShrink: 0 }} />
                        <div>
                          <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2A4A7F", marginBottom: "4px" }}>
                            Response Time
                          </div>
                          <div style={{ color: "#0D1F3C", fontWeight: 600, fontSize: "15px" }}>Within 1 Working Day</div>
                          <p style={{ color: "rgba(26,26,26,0.5)", fontSize: "13px", marginTop: "4px", lineHeight: 1.5 }}>
                            If your tender timeline is urgent, say so in your message — we'll prioritise.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* What happens next */}
              <ScrollReveal delay={200}>
                <div
                  style={{
                    backgroundColor: "#0D1F3C",
                    padding: "28px",
                    border: "1px solid rgba(42,74,127,0.4)",
                  }}
                >
                  <div className="eyebrow mb-4">What Happens Next</div>
                  <ol className="space-y-4">
                    {[
                      { n: "01", text: "We review your enquiry and confirm whether the scope is a good fit." },
                      { n: "02", text: "A brief call or email exchange to clarify scope, programme, and requirements." },
                      { n: "03", text: "A written fee proposal or rate card issued within 24–48 hours." },
                      { n: "04", text: "If agreed, we get started — no lengthy onboarding, no unnecessary overhead." },
                    ].map((step) => (
                      <li key={step.n} className="flex items-start gap-4">
                        <span
                          style={{
                            color: "#E8820C",
                            fontWeight: 900,
                            fontSize: "13px",
                            fontFamily: "Courier New, monospace",
                            flexShrink: 0,
                            lineHeight: "1.75",
                          }}
                        >
                          {step.n}
                        </span>
                        <span style={{ color: "rgba(245,244,242,0.65)", fontSize: "14px", lineHeight: 1.7 }}>{step.text}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}