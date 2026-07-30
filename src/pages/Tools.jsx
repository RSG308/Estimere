import { Link } from "react-router-dom";
import { ArrowRight, Calculator, Target, CalendarClock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import useSEO from "@/hooks/useSEO";

const TOOLS = [
  {
    ref: "FE-TL-002",
    slug: "bid-no-bid",
    icon: Target,
    name: "Bid / No-Bid Scorer",
    tagline: "Should you even be bidding this?",
    desc: "Score an opportunity against seven weighted criteria — client relationship, competition, capability, capacity, margin, risk and strategic value — and get a clear recommendation before you commit estimating resource.",
    time: "~2 minutes",
  },
  {
    ref: "FE-TL-003",
    slug: "programme-planner",
    icon: CalendarClock,
    name: "Tender Programme Planner",
    tagline: "Work backwards from the deadline.",
    desc: "Enter your submission date and get a working-back programme with milestone dates for enquiries, quotation returns, adjudication and the submission buffer most bids skip.",
    time: "~1 minute",
  },
  {
    ref: "FE-TL-001",
    slug: "fee-estimator",
    icon: Calculator,
    name: "Indicative Fee Estimator",
    tagline: "What would support cost?",
    desc: "Three questions for a realistic sense of what estimating or bid writing support on your tender is likely to cost. Indicative ranges, no email required.",
    time: "~30 seconds",
  },
];

export default function Tools() {
  useSEO({
    title: "Free Tender Tools | Bid/No-Bid Scorer & Programme Planner | Estimere",
    description:
      "Free interactive tools for UK construction contractors — bid/no-bid scoring, tender programme planning and indicative fee estimation. No sign-up required.",
    path: "/tools",
  });

  return (
    <div>
      <section
        className="blueprint-grid-dark py-24"
        style={{ backgroundColor: "#0D1F3C", position: "relative" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="eyebrow mb-3">Tools</div>
          <div className="ref-label mb-8">REF: FE-TL-000</div>
          <h1
            style={{
              color: "#F5F4F2",
              fontSize: "clamp(40px, 5vw, 68px)",
              fontWeight: 900,
              maxWidth: "780px",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            Free Tools.
            <br />
            <span style={{ color: "#E8820C" }}>No Sign-Up. No Catch.</span>
          </h1>
          <p
            style={{
              color: "rgba(245,244,242,0.65)",
              fontSize: "18px",
              lineHeight: 1.75,
              maxWidth: "640px",
              marginTop: "20px",
            }}
          >
            Three tools built from how tenders actually get run. Use them on your own bids — nothing is
            stored, and no email address is required.
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

      <section className="py-24" style={{ backgroundColor: "#F5F4F2" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="space-y-6">
            {TOOLS.map((t) => {
              const Icon = t.icon;
              return (
                <ScrollReveal key={t.slug}>
                  <Link
                    to={`/tools/${t.slug}`}
                    className="grid md:grid-cols-12 gap-0 transition-transform hover:-translate-y-1"
                    style={{ border: "1px solid #D6D3CD", backgroundColor: "#FFFFFF" }}
                  >
                    <div
                      className="md:col-span-3 p-8 flex flex-col justify-between"
                      style={{
                        borderRight: "1px solid #D6D3CD",
                        backgroundColor: "rgba(13,31,60,0.02)",
                      }}
                    >
                      <div>
                        <div
                          className="w-12 h-12 flex items-center justify-center mb-5"
                          style={{ backgroundColor: "#0D1F3C" }}
                        >
                          <Icon size={22} strokeWidth={2} color="#E8820C" />
                        </div>
                        <div className="ref-label mb-3">{t.ref}</div>
                      </div>
                      <div
                        style={{
                          color: "rgba(26,26,26,0.45)",
                          fontFamily: "monospace",
                          fontSize: "11px",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                        }}
                      >
                        {t.time}
                      </div>
                    </div>

                    <div className="md:col-span-9 p-8 lg:p-10">
                      <h2
                        style={{
                          color: "#0D1F3C",
                          fontWeight: 900,
                          fontSize: "clamp(22px, 2.4vw, 30px)",
                          letterSpacing: "-0.015em",
                          marginBottom: "8px",
                        }}
                      >
                        {t.name}
                      </h2>
                      <p
                        style={{
                          color: "#E8820C",
                          fontWeight: 600,
                          fontSize: "15px",
                          fontStyle: "italic",
                          marginBottom: "16px",
                        }}
                      >
                        {t.tagline}
                      </p>
                      <p
                        style={{
                          color: "#1A1A1A",
                          opacity: 0.7,
                          fontSize: "16px",
                          lineHeight: 1.75,
                          maxWidth: "640px",
                          marginBottom: "20px",
                        }}
                      >
                        {t.desc}
                      </p>
                      <span
                        className="inline-flex items-center gap-2 font-semibold"
                        style={{
                          color: "#2A4A7F",
                          fontSize: "15px",
                          borderBottom: "2px solid #E8820C",
                          paddingBottom: "3px",
                        }}
                      >
                        Open tool <ArrowRight size={16} />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Why free */}
          <ScrollReveal>
            <div
              style={{
                border: "1px solid #D6D3CD",
                borderLeft: "4px solid #2A4A7F",
                backgroundColor: "#FFFFFF",
                padding: "32px",
                marginTop: "40px",
              }}
            >
              <div
                style={{
                  color: "#2A4A7F",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                  marginBottom: "12px",
                }}
              >
                Why these are free
              </div>
              <p
                style={{
                  color: "#1A1A1A",
                  opacity: 0.75,
                  fontSize: "16px",
                  lineHeight: 1.8,
                  maxWidth: "760px",
                }}
              >
                Because they're genuinely useful, and because if they help you run a better tender
                process you're more likely to think of us when you need the parts we charge for. There's
                no email gate, no stored data, and no follow-up unless you get in touch first.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
