import { useMemo } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, Clock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ArticleBody from "@/components/ArticleBody";
import useSEO from "@/hooks/useSEO";
import { getInsightBySlug, getSortedInsights, formatInsightDate } from "@/data/insights";
import { services } from "@/data/services";

export default function InsightDetail() {
  const { slug } = useParams();
  const post = getInsightBySlug(slug);

  const jsonLd = useMemo(() => {
    if (!post) return null;
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      dateModified: post.date,
      articleSection: post.category,
      keywords: (post.tags || []).join(", "),
      author: { "@type": "Organization", name: "Estimere" },
      publisher: { "@type": "Organization", name: "Estimere" },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://estimere.co.uk/insights/${post.slug}`,
      },
    };
  }, [post]);

  useSEO({
    title: post?.metaTitle,
    description: post?.metaDescription,
    path: post ? `/insights/${post.slug}` : undefined,
    jsonLd,
  });

  if (!post) return <Navigate to="/insights" replace />;

  const related = getSortedInsights()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const linkedServices = (post.relatedServices || [])
    .map((s) => services.find((x) => x.slug === s))
    .filter(Boolean);

  return (
    <div>
      {/* Header */}
      <section
        className="blueprint-grid-dark py-24"
        style={{ backgroundColor: "#0D1F3C", position: "relative" }}
      >
        <div className="max-w-[820px] mx-auto px-6 lg:px-8">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 mb-8"
            style={{ color: "rgba(245,244,242,0.5)", fontSize: "13px" }}
          >
            <ArrowLeft size={14} /> All Insights
          </Link>

          <div
            style={{
              color: "#E8820C",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontFamily: "monospace",
              marginBottom: "18px",
            }}
          >
            {post.category}
          </div>

          <h1
            style={{
              color: "#F5F4F2",
              fontSize: "clamp(30px, 4vw, 50px)",
              fontWeight: 900,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
            }}
          >
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 mt-8">
            <span style={{ color: "rgba(245,244,242,0.5)", fontSize: "13px" }}>
              {formatInsightDate(post.date)}
            </span>
            <span
              className="inline-flex items-center gap-2"
              style={{ color: "rgba(245,244,242,0.5)", fontSize: "13px" }}
            >
              <Clock size={13} /> {post.readingTime} min read
            </span>
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

      {/* Body */}
      <section className="py-20" style={{ backgroundColor: "#F5F4F2" }}>
        <div className="max-w-[820px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            {/* Standfirst */}
            <p
              style={{
                color: "#0D1F3C",
                fontSize: "clamp(19px, 2vw, 22px)",
                fontWeight: 600,
                lineHeight: 1.6,
                letterSpacing: "-0.01em",
                paddingBottom: "36px",
                marginBottom: "36px",
                borderBottom: "1px solid #D6D3CD",
              }}
            >
              {post.excerpt}
            </p>

            <ArticleBody blocks={post.body} />
          </ScrollReveal>

          {/* Tags */}
          {post.tags?.length > 0 && (
            <div
              className="flex flex-wrap gap-2"
              style={{ marginTop: "48px", paddingTop: "28px", borderTop: "1px solid #D6D3CD" }}
            >
              {post.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    border: "1px solid #D6D3CD",
                    padding: "6px 12px",
                    fontSize: "12px",
                    color: "rgba(26,26,26,0.6)",
                    fontFamily: "monospace",
                    letterSpacing: "0.04em",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Related services */}
      {linkedServices.length > 0 && (
        <section className="py-16" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="eyebrow mb-3">Related Services</div>
              <h2
                style={{
                  color: "#0D1F3C",
                  fontSize: "clamp(22px, 2.4vw, 30px)",
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  marginBottom: "32px",
                }}
              >
                How we help with this
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {linkedServices.map((s) => {
                const SIcon = s.icon;
                return (
                  <ScrollReveal key={s.slug}>
                    <Link
                      to={`/services/${s.slug}`}
                      className="block h-full transition-transform hover:-translate-y-1"
                      style={{ border: "1px solid #D6D3CD", padding: "26px", backgroundColor: "#F5F4F2" }}
                    >
                      <div
                        className="w-10 h-10 flex items-center justify-center mb-4"
                        style={{ backgroundColor: "#0D1F3C" }}
                      >
                        <SIcon size={18} strokeWidth={2} color="#E8820C" />
                      </div>
                      <h3 style={{ color: "#0D1F3C", fontWeight: 800, fontSize: "16px", marginBottom: "8px" }}>
                        {s.title}
                      </h3>
                      <p style={{ color: "#1A1A1A", opacity: 0.65, fontSize: "14px", lineHeight: 1.6 }}>
                        {s.short}
                      </p>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* More insights */}
      {related.length > 0 && (
        <section className="py-16" style={{ backgroundColor: "#F5F4F2" }}>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="eyebrow mb-3">More</div>
              <h2
                style={{
                  color: "#0D1F3C",
                  fontSize: "clamp(22px, 2.4vw, 30px)",
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  marginBottom: "32px",
                }}
              >
                Also worth reading
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p) => (
                <ScrollReveal key={p.slug}>
                  <Link
                    to={`/insights/${p.slug}`}
                    className="flex flex-col h-full transition-transform hover:-translate-y-1"
                    style={{ border: "1px solid #D6D3CD", padding: "26px", backgroundColor: "#FFFFFF" }}
                  >
                    <div
                      style={{
                        color: "#2A4A7F",
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        fontFamily: "monospace",
                        marginBottom: "12px",
                      }}
                    >
                      {p.category}
                    </div>
                    <h3
                      style={{
                        color: "#0D1F3C",
                        fontWeight: 800,
                        fontSize: "17px",
                        lineHeight: 1.35,
                        marginBottom: "10px",
                      }}
                    >
                      {p.title}
                    </h3>
                    <p style={{ color: "#1A1A1A", opacity: 0.65, fontSize: "14px", lineHeight: 1.65 }}>
                      {p.excerpt}
                    </p>
                  </Link>
                </ScrollReveal>
              ))}
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
              Want this applied to your bid?
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
              A short conversation is usually enough to establish scope, programme and fee.
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
