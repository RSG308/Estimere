import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, RotateCcw } from "lucide-react";
import ToolLayout, { Field, OptionGroup, ToolCard } from "@/components/ToolLayout";
import useSEO from "@/hooks/useSEO";

/**
 * Indicative fee estimator.
 * Fee bands are derived from published UK market rates for bid writing and
 * estimating support. Outputs are ranges, explicitly not quotations.
 */

const SERVICE_OPTIONS = [
  { value: "gonogo", label: "Go / No-Go feasibility check", sub: "Rapid cost sense-check" },
  { value: "review", label: "Bid review / second opinion", sub: "QA on a prepared bid" },
  { value: "pqq", label: "PQQ / SQ response", sub: "Pre-qualification stage" },
  { value: "estimate", label: "Cost estimate only", sub: "Pricing, no written submission" },
  { value: "writing", label: "Bid writing only", sub: "Quality / technical responses" },
  { value: "full", label: "Full tender management", sub: "End to end" },
];

const VALUE_BANDS = [
  { value: "u1", label: "Under £1m" },
  { value: "1to5", label: "£1m – £5m" },
  { value: "5to20", label: "£5m – £20m" },
  { value: "o20", label: "Over £20m" },
];

const URGENCY = [
  { value: "standard", label: "Standard", sub: "10+ working days" },
  { value: "tight", label: "Tight", sub: "5 – 10 working days" },
  { value: "urgent", label: "Urgent", sub: "Under 5 working days" },
];

// Base fee ranges [low, high] by service, then by value band where relevant.
const FEES = {
  gonogo: { u1: [350, 450], "1to5": [400, 550], "5to20": [500, 750], o20: [650, 950] },
  review: { u1: [450, 650], "1to5": [550, 800], "5to20": [750, 1200], o20: [1000, 1800] },
  pqq: { u1: [750, 1100], "1to5": [850, 1250], "5to20": [1000, 1600], o20: [1300, 2200] },
  estimate: { u1: [900, 1600], "1to5": [1600, 2800], "5to20": [2800, 5000], o20: [5000, null] },
  writing: { u1: [900, 1500], "1to5": [1400, 2400], "5to20": [2200, 4000], o20: [4000, null] },
  full: { u1: [1500, 2500], "1to5": [2500, 4500], "5to20": [4500, 8000], o20: [8000, null] },
};

const URGENCY_UPLIFT = { standard: 1, tight: 1.25, urgent: 1.5 };

function formatGBP(n) {
  return `£${Math.round(n / 50) * 50}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function FeeEstimator() {
  const [service, setService] = useState(null);
  const [band, setBand] = useState(null);
  const [urgency, setUrgency] = useState("standard");

  useSEO({
    title: "Indicative Fee Estimator | Construction Estimating & Bid Writing | Estimere",
    description:
      "Estimate the likely fee for estimating or bid writing support on your tender. Indicative ranges by service, project value and turnaround.",
    path: "/tools/fee-estimator",
  });

  const result = useMemo(() => {
    if (!service || !band) return null;
    const base = FEES[service][band];
    const mult = URGENCY_UPLIFT[urgency];
    return {
      low: base[0] * mult,
      high: base[1] === null ? null : base[1] * mult,
      uplift: mult > 1 ? Math.round((mult - 1) * 100) : 0,
    };
  }, [service, band, urgency]);

  const reset = () => {
    setService(null);
    setBand(null);
    setUrgency("standard");
  };

  return (
    <ToolLayout
      eyebrow="Tools"
      refCode="FE-TL-001"
      title="Indicative Fee Estimator"
      intro="Three questions for a realistic sense of what support on your tender is likely to cost. No email required."
      disclaimer="These are indicative ranges only and do not constitute a quotation or an offer. Actual fees depend on scope, documentation quality, package count and programme. A fixed fee is confirmed in writing after a short conversation."
    >
      <div className="grid lg:grid-cols-12 gap-8">
        {/* Inputs */}
        <div className="lg:col-span-7">
          <ToolCard>
            <Field label="1. What support do you need?">
              <OptionGroup options={SERVICE_OPTIONS} value={service} onChange={setService} columns={1} />
            </Field>

            <Field label="2. Approximate project value" hint="The construction value of the scheme being tendered.">
              <OptionGroup options={VALUE_BANDS} value={band} onChange={setBand} columns={2} />
            </Field>

            <Field label="3. Time until submission" hint="Compressed programmes attract a premium — early engagement is cheaper.">
              <OptionGroup options={URGENCY} value={urgency} onChange={setUrgency} columns={3} />
            </Field>

            {(service || band) && (
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-2"
                style={{
                  color: "rgba(26,26,26,0.5)",
                  fontSize: "13px",
                  marginTop: "8px",
                  cursor: "pointer",
                }}
              >
                <RotateCcw size={13} /> Reset
              </button>
            )}
          </ToolCard>
        </div>

        {/* Output */}
        <div className="lg:col-span-5">
          <div style={{ position: "sticky", top: "104px" }}>
            <ToolCard dark>
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
                Indicative Fee
              </div>

              {!result ? (
                <p style={{ color: "rgba(245,244,242,0.5)", fontSize: "15px", lineHeight: 1.7 }}>
                  Select a service and project value to see an indicative range.
                </p>
              ) : (
                <>
                  <div
                    style={{
                      color: "#F5F4F2",
                      fontSize: "clamp(28px, 3.4vw, 40px)",
                      fontWeight: 900,
                      letterSpacing: "-0.03em",
                      lineHeight: 1.1,
                    }}
                  >
                    {result.high === null
                      ? `${formatGBP(result.low)}+`
                      : `${formatGBP(result.low)} – ${formatGBP(result.high)}`}
                  </div>
                  <div
                    style={{
                      color: "rgba(245,244,242,0.45)",
                      fontSize: "12px",
                      fontFamily: "monospace",
                      letterSpacing: "0.08em",
                      marginTop: "8px",
                    }}
                  >
                    + VAT
                  </div>

                  {result.high === null && (
                    <p
                      style={{
                        color: "rgba(245,244,242,0.6)",
                        fontSize: "14px",
                        lineHeight: 1.65,
                        marginTop: "16px",
                      }}
                    >
                      Schemes at this scale vary too widely for a meaningful upper figure — these are
                      priced individually.
                    </p>
                  )}

                  {result.uplift > 0 && (
                    <div
                      style={{
                        borderTop: "1px solid rgba(214,211,205,0.15)",
                        marginTop: "22px",
                        paddingTop: "18px",
                      }}
                    >
                      <div
                        style={{
                          color: "#E8820C",
                          fontSize: "11px",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          marginBottom: "8px",
                        }}
                      >
                        Includes {result.uplift}% urgency premium
                      </div>
                      <p style={{ color: "rgba(245,244,242,0.6)", fontSize: "13px", lineHeight: 1.6 }}>
                        Engaging earlier removes this — and produces a better submission.
                      </p>
                    </div>
                  )}

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 mt-7 px-6 py-3 font-semibold transition-transform hover:translate-x-1"
                    style={{ backgroundColor: "#E8820C", color: "#0D1F3C", fontSize: "15px" }}
                  >
                    Get a fixed quote <ArrowRight size={16} />
                  </Link>
                </>
              )}
            </ToolCard>

            <div style={{ marginTop: "16px" }}>
              <Link
                to="/pricing"
                style={{ color: "#2A4A7F", fontSize: "14px", fontWeight: 600 }}
                className="inline-flex items-center gap-2"
              >
                See full pricing structure <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
