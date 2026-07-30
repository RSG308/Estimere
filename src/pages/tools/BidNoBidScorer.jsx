import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, RotateCcw, AlertTriangle } from "lucide-react";
import ToolLayout, { ToolCard } from "@/components/ToolLayout";
import useSEO from "@/hooks/useSEO";

/**
 * Bid / No-Bid scoring tool.
 * Seven weighted criteria, scored 1-5. Weightings are adjustable because what
 * matters varies by business — a contractor with spare capacity should weight
 * capacity lightly.
 */

const CRITERIA = [
  {
    key: "client",
    label: "Client relationship",
    weight: 18,
    hint: "Have you worked for them before? Is there an incumbent you're unlikely to displace?",
    scale: ["No relationship, likely incumbent", "Cold, open competition", "Some history", "Good relationship", "Strong relationship, invited"],
  },
  {
    key: "competition",
    label: "Competitive field",
    weight: 15,
    hint: "How many bidders, and who? Do you know your position?",
    scale: ["6+ bidders, lower-cost competitors", "5–6 bidders", "4 bidders", "3 bidders", "1–2 bidders or negotiated"],
  },
  {
    key: "capability",
    label: "Capability fit",
    weight: 18,
    hint: "Have you delivered this type and scale before, and can you evidence it?",
    scale: ["Outside our experience", "Adjacent, hard to evidence", "Comparable work", "Directly comparable", "Core capability, strong evidence"],
  },
  {
    key: "capacity",
    label: "Capacity & programme",
    weight: 14,
    hint: "Can you resource delivery on the client's programme if you win?",
    scale: ["Could not resource it", "Significant strain", "Tight but feasible", "Comfortable", "Actively need the work"],
  },
  {
    key: "margin",
    label: "Margin potential",
    weight: 15,
    hint: "What margin is realistically achievable given the competition and contract form?",
    scale: ["Below viable", "Thin, high risk", "Acceptable", "Good", "Strong"],
  },
  {
    key: "risk",
    label: "Risk profile",
    weight: 12,
    hint: "Contract form, ground risk, design responsibility, LDs, payment terms.",
    scale: ["Severe unpriceable risk", "Heavy risk transfer", "Manageable with qualification", "Standard, balanced", "Low risk, favourable terms"],
  },
  {
    key: "strategic",
    label: "Strategic value",
    weight: 8,
    hint: "Does winning open a framework, sector or relationship worth more than the job?",
    scale: ["None", "Marginal", "Some value", "Significant", "Framework or sector entry"],
  },
];

const VERDICTS = [
  {
    min: 78,
    label: "Strong bid",
    colour: "#1F7A4D",
    text: "This scores as a genuine opportunity. Commit proper resource and build a tender programme from the submission date backwards.",
  },
  {
    min: 62,
    label: "Bid with conditions",
    colour: "#2A4A7F",
    text: "Worth pursuing, but address the weak criteria explicitly before committing. Where risk or margin scored low, qualify the position rather than absorbing it.",
  },
  {
    min: 46,
    label: "Marginal — justify or decline",
    colour: "#E8820C",
    text: "This is the band where bids get pursued out of habit. If you proceed, write down the reason. If the reason doesn't survive being written down, decline.",
  },
  {
    min: 0,
    label: "Decline",
    colour: "#A63232",
    text: "The numbers say no. Declining costs you nothing but the opportunity; pursuing costs real money whether you win or not — and winning at the wrong price costs considerably more.",
  },
];

export default function BidNoBidScorer() {
  const [scores, setScores] = useState({});

  useSEO({
    title: "Bid / No-Bid Scoring Tool for Construction Tenders | Estimere",
    description:
      "Free bid/no-bid decision tool. Score a tender opportunity against seven weighted criteria and get a clear recommendation before committing resource.",
    path: "/tools/bid-no-bid",
  });

  const answered = Object.keys(scores).length;
  const complete = answered === CRITERIA.length;

  const result = useMemo(() => {
    if (!complete) return null;
    const totalWeight = CRITERIA.reduce((s, c) => s + c.weight, 0);
    const weighted = CRITERIA.reduce((sum, c) => sum + (scores[c.key] / 5) * c.weight, 0);
    const pct = Math.round((weighted / totalWeight) * 100);
    const verdict = VERDICTS.find((v) => pct >= v.min);
    const weak = CRITERIA.filter((c) => scores[c.key] <= 2);
    return { pct, verdict, weak };
  }, [scores, complete]);

  return (
    <ToolLayout
      eyebrow="Tools"
      refCode="EST-TL-002"
      title="Bid / No-Bid Scorer"
      intro="Score an opportunity against seven weighted criteria before you commit estimating resource to it. Takes about two minutes."
      disclaimer="This is a decision-support aid, not advice. It structures judgement rather than replacing it — a low score on a strategically important opportunity may still justify bidding, provided that reasoning is explicit. Nothing is submitted or stored."
    >
      <div className="grid lg:grid-cols-12 gap-8">
        {/* Criteria */}
        <div className="lg:col-span-8">
          <div className="space-y-4">
            {CRITERIA.map((c, i) => (
              <ToolCard key={c.key}>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span
                        style={{
                          color: "#E8820C",
                          fontFamily: "monospace",
                          fontSize: "12px",
                          fontWeight: 700,
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 style={{ color: "#0D1F3C", fontWeight: 800, fontSize: "17px" }}>
                        {c.label}
                      </h3>
                    </div>
                    <p
                      style={{
                        color: "rgba(26,26,26,0.55)",
                        fontSize: "13px",
                        lineHeight: 1.55,
                        marginTop: "6px",
                      }}
                    >
                      {c.hint}
                    </p>
                  </div>
                  <span
                    style={{
                      color: "rgba(26,26,26,0.35)",
                      fontFamily: "monospace",
                      fontSize: "11px",
                      letterSpacing: "0.06em",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {c.weight}%
                  </span>
                </div>

                <div className="grid grid-cols-5 gap-1.5 mt-4">
                  {[1, 2, 3, 4, 5].map((n) => {
                    const active = scores[c.key] === n;
                    return (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setScores((s) => ({ ...s, [c.key]: n }))}
                        title={c.scale[n - 1]}
                        style={{
                          padding: "10px 4px",
                          fontSize: "15px",
                          fontWeight: 700,
                          border: `1px solid ${active ? "#E8820C" : "#D6D3CD"}`,
                          backgroundColor: active ? "#E8820C" : "#FFFFFF",
                          color: active ? "#0D1F3C" : "rgba(26,26,26,0.5)",
                          cursor: "pointer",
                          transition: "all 0.15s",
                        }}
                      >
                        {n}
                      </button>
                    );
                  })}
                </div>

                {scores[c.key] && (
                  <p
                    style={{
                      color: "#2A4A7F",
                      fontSize: "13px",
                      fontWeight: 600,
                      marginTop: "10px",
                    }}
                  >
                    {c.scale[scores[c.key] - 1]}
                  </p>
                )}
              </ToolCard>
            ))}
          </div>
        </div>

        {/* Result */}
        <div className="lg:col-span-4">
          <div style={{ position: "sticky", top: "104px" }}>
            <ToolCard dark>
              <div
                style={{
                  color: "#E8820C",
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                  marginBottom: "18px",
                }}
              >
                Assessment
              </div>

              {!complete ? (
                <>
                  <div
                    style={{
                      color: "#F5F4F2",
                      fontSize: "36px",
                      fontWeight: 900,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {answered}/{CRITERIA.length}
                  </div>
                  <p
                    style={{
                      color: "rgba(245,244,242,0.55)",
                      fontSize: "14px",
                      lineHeight: 1.7,
                      marginTop: "10px",
                    }}
                  >
                    Score all seven criteria to see a recommendation.
                  </p>
                  <div
                    style={{
                      height: "4px",
                      backgroundColor: "rgba(245,244,242,0.12)",
                      marginTop: "20px",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${(answered / CRITERIA.length) * 100}%`,
                        backgroundColor: "#E8820C",
                        transition: "width 0.25s",
                      }}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div
                    style={{
                      color: "#F5F4F2",
                      fontSize: "52px",
                      fontWeight: 900,
                      letterSpacing: "-0.04em",
                      lineHeight: 1,
                    }}
                  >
                    {result.pct}
                    <span style={{ fontSize: "22px", opacity: 0.4 }}>/100</span>
                  </div>

                  <div
                    style={{
                      display: "inline-block",
                      backgroundColor: result.verdict.colour,
                      color: "#F5F4F2",
                      fontSize: "13px",
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                      padding: "7px 14px",
                      marginTop: "16px",
                    }}
                  >
                    {result.verdict.label}
                  </div>

                  <p
                    style={{
                      color: "rgba(245,244,242,0.72)",
                      fontSize: "14px",
                      lineHeight: 1.7,
                      marginTop: "18px",
                    }}
                  >
                    {result.verdict.text}
                  </p>

                  {result.weak.length > 0 && (
                    <div
                      style={{
                        borderTop: "1px solid rgba(214,211,205,0.15)",
                        marginTop: "22px",
                        paddingTop: "18px",
                      }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <AlertTriangle size={14} color="#E8820C" strokeWidth={2.4} />
                        <span
                          style={{
                            color: "#E8820C",
                            fontSize: "11px",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            fontFamily: "monospace",
                          }}
                        >
                          Address before bidding
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {result.weak.map((w) => (
                          <li
                            key={w.key}
                            style={{ color: "rgba(245,244,242,0.7)", fontSize: "13px", lineHeight: 1.5 }}
                          >
                            — {w.label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => setScores({})}
                    className="inline-flex items-center gap-2"
                    style={{
                      color: "rgba(245,244,242,0.45)",
                      fontSize: "13px",
                      marginTop: "22px",
                      cursor: "pointer",
                    }}
                  >
                    <RotateCcw size={13} /> Score another
                  </button>
                </>
              )}
            </ToolCard>

            <div style={{ marginTop: "16px" }}>
              <Link
                to="/insights/go-no-go-framework-for-contractors"
                style={{ color: "#2A4A7F", fontSize: "14px", fontWeight: 600 }}
                className="inline-flex items-center gap-2"
              >
                Read the framework behind this <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
