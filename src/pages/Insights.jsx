import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import useSEO from "@/hooks/useSEO";
import { getSortedInsights, CATEGORIES, formatInsightDate } from "@/data/insights";

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState("All");
  const all = useMemo(() => getSortedInsights(), []);

  useSEO({
    title: "Insights | Construction Estimating & Tendering | Estimere",
    description:
      "Practical guidance on construction estimating, bid strategy and tendering process — written for contractors who price and win work.",
    path: "/insights",
  });

  const filtered =
    activeCategory === "All" ? all : all.filter((p) => p.category === activeCategory);

  const featured = all.find((p) => p.featured);
  const showFeatured = activeCategory === "All" && featured;
  const listed = showFeatured ? filtered.filter((p) => p.slug !== featured.slug) : filtered;

  return (
    <div>
      {/* Header */}
      <section
        className="blueprint-grid-dark py-24"
        style={{ backgroundColor: "#0D1F3C", position: "relative" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="eyebrow mb-3">Insights</div>
          <div className="ref-label mb-8">REF: FE-INS-000</div>
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
            Notes From
            <br />
            <span style={{ color: "#E8820C" }}>The Estimating Desk.</span>
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
            Practical guidance on pricing, bid strategy and tender process — written for the people
            who actually have to submit the thing.
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

      <section className="py-20" style={{ backgroundColor: "#F5F4F2" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {["All", ...CATEGORIES].map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "9px 18px",
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    border: `1px solid ${active ? "#E8820C" : "#D6D3CD"}`,
                    backgroundColor: active ? "#E8820C" : "transparent",
                    color: active ? "#0D1F3C" : "rgba(26,26,26,0.65)",
                    transition: "all 0.15s",
                    cursor: "pointer",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Featured article */}
          {showFeatured && (
            <ScrollReveal>
              <Link
                to={`/insights/${featured.slug}`}
                className="block mb-12 transition-transform hover:-translate-y-1"
                style={{
                  border: "1px solid #D6D3CD",
                  backgroundColor: "#0D1F3C",
                  padding: "44px",
                }}
              >
                <div className="flex flex-wrap items-center gap-4 mb-5">
                  <span
                    style={{
                      backgroundColor: "#E8820C",
                      color: "#0D1F3C",
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      padding: "5px 10px",
                      fontFamily: "monospace",
                    }}
                  >
                    Featured
                  </span>
                  <span
                    style={{
                      color: "rgba(245,244,242,0.5)",
                      fontSize: "11px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      fontFamily: "monospace",
                    }}
                  >
                    {featured.category}
                  </span>
                </div>

                <h2
                  style={{
                    color: "#F5F4F2",
                    fontWeight: 900,
                    fontSize: "clamp(26px, 3.2vw, 40px)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.15,
                    marginBottom: "18px",
                    maxWidth: "820px",
                  }}
                >
                  {featured.title}
                </h2>

                <p
                  style={{
                    color: "rgba(245,244,242,0.7)",
                    fontSize: "17px",
                    lineHeight: 1.75,
                    maxWidth: "700px",
                    marginBottom: "24px",
                  }}
                >
                  {featured.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-5">
                  <span
                    className="inline-flex items-center gap-2 font-semibold"
                    style={{ color: "#E8820C", fontSize: "15px" }}
                  >
                    Read article <ArrowRight size={16} />
                  </span>
                  <span
                    className="inline-flex items-center gap-2"
                    style={{ color: "rgba(245,244,242,0.4)", fontSize: "13px" }}
                  >
                    <Clock size={13} /> {featured.readingTime} min read
                  </span>
                  <span style={{ color: "rgba(245,244,242,0.4)", fontSize: "13px" }}>
                    {formatInsightDate(featured.date)}
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          )}

          {/* Article grid */}
          {listed.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listed.map((post) => (
                <ScrollReveal key={post.slug}>
                  <Link
                    to={`/insights/${post.slug}`}
                    className="flex flex-col h-full transition-transform hover:-translate-y-1"
                    style={{
                      border: "1px solid #D6D3CD",
                      backgroundColor: "#FFFFFF",
                      padding: "30px",
                    }}
                  >
                    <div
                      style={{
                        color: "#2A4A7F",
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        fontFamily: "monospace",
                        marginBottom: "14px",
                      }}
                    >
                      {post.category}
                    </div>

                    <h3
                      style={{
                        color: "#0D1F3C",
                        fontWeight: 800,
                        fontSize: "20px",
                        lineHeight: 1.3,
                        letterSpacing: "-0.01em",
                        marginBottom: "12px",
                      }}
                    >
                      {post.title}
                    </h3>

                    <p
                      style={{
                        color: "#1A1A1A",
                        opacity: 0.68,
                        fontSize: "15px",
                        lineHeight: 1.7,
                        marginBottom: "20px",
                        flexGrow: 1,
                      }}
                    >
                      {post.excerpt}
                    </p>

                    <div
                      className="flex items-center justify-between"
                      style={{ borderTop: "1px solid #D6D3CD", paddingTop: "16px" }}
                    >
                      <span style={{ color: "rgba(26,26,26,0.45)", fontSize: "12px" }}>
                        {formatInsightDate(post.date)}
                      </span>
                      <span
                        className="inline-flex items-center gap-1.5"
                        style={{ color: "rgba(26,26,26,0.45)", fontSize: "12px" }}
                      >
                        <Clock size={12} /> {post.readingTime} min
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div
              style={{
                border: "1px dashed #D6D3CD",
                padding: "56px",
                textAlign: "center",
                color: "rgba(26,26,26,0.5)",
                fontSize: "15px",
              }}
            >
              No articles in this category yet.
            </div>
          )}
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
              Got a live tender?
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
              Reading about it is one thing. If you want a second pair of eyes on an actual bid, get in touch.
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
