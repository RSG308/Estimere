import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Upload, FileText, RotateCcw, AlertTriangle, Loader2, CalendarDays,
  ListChecks, HelpCircle, Clock, FileWarning,
} from "lucide-react";
import ToolLayout, { Field, ToolCard } from "@/components/ToolLayout";
import useSEO from "@/hooks/useSEO";
import { analyseItt, uploadTenderFile } from "@/lib/ittAnalysis";
import { sendIttCheckNotification, trySend } from "@/lib/email";
import { base44 } from "@/api/base44Client";

const SEVERITY = {
  high: { label: "High", colour: "#A63232" },
  medium: { label: "Medium", colour: "#E8820C" },
  low: { label: "Low", colour: "#2A4A7F" },
};

const MAX_MB = 20;

function Section({ icon: Icon, title, count, children }) {
  return (
    <div style={{ marginBottom: "36px" }}>
      <div className="flex items-center gap-3 mb-4">
        <Icon size={17} color="#2A4A7F" strokeWidth={2.2} />
        <h3
          style={{
            color: "#0D1F3C",
            fontWeight: 800,
            fontSize: "16px",
            letterSpacing: "0.01em",
          }}
        >
          {title}
        </h3>
        {typeof count === "number" && (
          <span
            style={{
              color: "rgba(26,26,26,0.4)",
              fontFamily: "monospace",
              fontSize: "12px",
            }}
          >
            {count}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

function Empty({ text }) {
  return (
    <p style={{ color: "rgba(26,26,26,0.45)", fontSize: "14px", fontStyle: "italic" }}>{text}</p>
  );
}

export default function IttHealthCheck() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [mode, setMode] = useState("upload");
  const [status, setStatus] = useState("idle"); // idle | running | done | error
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  useSEO({
    title: "ITT Health Check | Instant Tender Document Analysis | Estimere",
    description:
      "Upload a tender pack and get a structured readout — scope, key dates, evaluation weightings, mandatory requirements, risk flags and estimated bid effort.",
    path: "/tools/itt-health-check",
  });

  const valid =
    email.includes("@") && (mode === "upload" ? !!file : text.trim().length > 200);

  async function run() {
    setStatus("running");
    setError("");
    setResult(null);

    try {
      let fileUrl = null;
      if (mode === "upload") {
        if (file.size > MAX_MB * 1024 * 1024) {
          throw new Error(`File is larger than ${MAX_MB}MB. Try a single document rather than the full pack.`);
        }
        fileUrl = await uploadTenderFile(file);
        if (!fileUrl) throw new Error("Upload failed. Try again, or paste the text instead.");
      }

      const analysis = await analyseItt(
        mode === "upload" ? { fileUrl } : { text: text.trim() }
      );

      if (!analysis || analysis.document_recognised === false) {
        setError(
          "This doesn't look like a construction tender document. Check you've supplied the ITT, specification or scope of works rather than a drawing or a spreadsheet."
        );
        setStatus("error");
        return;
      }

      setResult(analysis);
      setStatus("done");

      // Log the run (metadata only) and notify. Neither should block the result.
      const meta = {
        email: email.trim(),
        company: company.trim(),
        document_name: mode === "upload" ? file.name : "Pasted text",
        input_method: mode,
        run_date: new Date().toISOString(),
        followed_up: false,
      };
      base44.entities.IttCheck.create(meta).catch((e) =>
        console.error("IttCheck log failed:", e)
      );
      trySend(sendIttCheckNotification, {
        email: meta.email,
        company: meta.company,
        documentName: meta.document_name,
        inputMethod: mode,
      });
    } catch (err) {
      console.error(err);
      setError(err?.message || "Something went wrong running the analysis. Try again shortly.");
      setStatus("error");
    }
  }

  function reset() {
    setFile(null);
    setText("");
    setResult(null);
    setStatus("idle");
    setError("");
  }

  return (
    <ToolLayout
      eyebrow="Tools"
      refCode="EST-TL-004"
      title="ITT Health Check"
      intro="Supply a tender pack and get a structured readout: scope, key dates, evaluation weightings, mandatory requirements, risk flags and an estimate of the effort involved."
      disclaimer="This is an automated first pass, not a substitute for reading the tender documents. It reports what the document states and flags what it does not — it cannot catch what is only implied, and it does not replace commercial judgement. Your document and the analysis are not stored. Do not upload anything you are contractually prohibited from sharing."
    >
      {status !== "done" && (
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <ToolCard>
              <Field label="Tender document">
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {[
                    { v: "upload", l: "Upload a file", i: Upload },
                    { v: "paste", l: "Paste text", i: FileText },
                  ].map(({ v, l, i: I }) => {
                    const active = mode === v;
                    return (
                      <button
                        key={v}
                        type="button"
                        onClick={() => setMode(v)}
                        className="inline-flex items-center justify-center gap-2"
                        style={{
                          padding: "12px",
                          fontSize: "14px",
                          fontWeight: active ? 700 : 500,
                          border: `1px solid ${active ? "#E8820C" : "#D6D3CD"}`,
                          backgroundColor: active ? "rgba(232,130,12,0.1)" : "#FFFFFF",
                          color: active ? "#0D1F3C" : "rgba(26,26,26,0.7)",
                          cursor: "pointer",
                        }}
                      >
                        <I size={15} /> {l}
                      </button>
                    );
                  })}
                </div>

                {mode === "upload" ? (
                  <label
                    style={{
                      display: "block",
                      border: "1px dashed #D6D3CD",
                      backgroundColor: "#F5F4F2",
                      padding: "32px",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.txt"
                      onChange={(e) => setFile(e.target.files?.[0] || null)}
                      style={{ display: "none" }}
                    />
                    <Upload size={22} color="#2A4A7F" style={{ margin: "0 auto 12px" }} />
                    <div style={{ color: "#0D1F3C", fontWeight: 600, fontSize: "15px" }}>
                      {file ? file.name : "Choose a file"}
                    </div>
                    <div
                      style={{
                        color: "rgba(26,26,26,0.5)",
                        fontSize: "13px",
                        marginTop: "6px",
                      }}
                    >
                      PDF, Word or plain text · up to {MAX_MB}MB
                    </div>
                  </label>
                ) : (
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    rows={10}
                    placeholder="Paste the scope of works, ITT questions, or instructions to tenderers."
                    style={{
                      width: "100%",
                      padding: "14px",
                      fontSize: "14px",
                      lineHeight: 1.7,
                      border: "1px solid #D6D3CD",
                      backgroundColor: "#FFFFFF",
                      color: "#1A1A1A",
                      fontFamily: "inherit",
                      resize: "vertical",
                    }}
                  />
                )}
              </Field>

              <div
                style={{
                  borderTop: "1px solid #D6D3CD",
                  paddingTop: "24px",
                  marginTop: "8px",
                }}
              >
                <Field
                  label="Email address"
                  hint="Required. This check costs us to run, so we ask who's using it. You won't be added to a mailing list."
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.co.uk"
                    style={{
                      width: "100%",
                      padding: "13px 14px",
                      fontSize: "15px",
                      border: "1px solid #D6D3CD",
                      backgroundColor: "#FFFFFF",
                      color: "#0D1F3C",
                      fontFamily: "inherit",
                    }}
                  />
                </Field>

                <Field label="Company (optional)">
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "13px 14px",
                      fontSize: "15px",
                      border: "1px solid #D6D3CD",
                      backgroundColor: "#FFFFFF",
                      color: "#0D1F3C",
                      fontFamily: "inherit",
                    }}
                  />
                </Field>
              </div>

              {error && (
                <div
                  style={{
                    border: "1px solid rgba(166,50,50,0.3)",
                    borderLeft: "4px solid #A63232",
                    backgroundColor: "rgba(166,50,50,0.05)",
                    padding: "16px",
                    marginBottom: "20px",
                  }}
                >
                  <p style={{ color: "#A63232", fontSize: "14px", lineHeight: 1.6 }}>{error}</p>
                </div>
              )}

              <button
                type="button"
                disabled={!valid || status === "running"}
                onClick={run}
                className="inline-flex items-center gap-2 px-7 py-4 font-semibold"
                style={{
                  backgroundColor: valid && status !== "running" ? "#E8820C" : "#D6D3CD",
                  color: valid && status !== "running" ? "#0D1F3C" : "rgba(26,26,26,0.45)",
                  fontSize: "15px",
                  cursor: valid && status !== "running" ? "pointer" : "not-allowed",
                  border: "none",
                }}
              >
                {status === "running" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Analysing…
                  </>
                ) : (
                  <>
                    Run health check <ArrowRight size={16} />
                  </>
                )}
              </button>

              {status === "running" && (
                <p
                  style={{
                    color: "rgba(26,26,26,0.55)",
                    fontSize: "13px",
                    marginTop: "14px",
                    lineHeight: 1.6,
                  }}
                >
                  Reading the document and extracting findings. This usually takes 20–40 seconds.
                </p>
              )}
            </ToolCard>
          </div>

          <div className="lg:col-span-5">
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
                What you get back
              </div>
              <ul className="space-y-3">
                {[
                  "Plain-English scope summary",
                  "Key dates and deadlines extracted",
                  "Evaluation criteria and weightings",
                  "Mandatory compliance requirements",
                  "Risk flags specific to the document",
                  "Clarifications worth raising",
                  "Estimated bid effort in days",
                  "Information missing from the pack",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span
                      style={{
                        display: "inline-block",
                        width: "6px",
                        height: "6px",
                        backgroundColor: "#E8820C",
                        marginTop: "7px",
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ color: "rgba(245,244,242,0.82)", fontSize: "14px", lineHeight: 1.6 }}>
                      {s}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                style={{
                  borderTop: "1px solid rgba(214,211,205,0.15)",
                  marginTop: "22px",
                  paddingTop: "18px",
                }}
              >
                <p style={{ color: "rgba(245,244,242,0.55)", fontSize: "13px", lineHeight: 1.7 }}>
                  Your document is processed to produce the analysis and is not retained. We log only
                  your email, company and the filename.
                </p>
              </div>
            </ToolCard>
          </div>
        </div>
      )}

      {/* Results */}
      {status === "done" && result && (
        <div>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <div
                style={{
                  color: "#2A4A7F",
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                  marginBottom: "6px",
                }}
              >
                Findings
              </div>
              <h2
                style={{
                  color: "#0D1F3C",
                  fontWeight: 900,
                  fontSize: "clamp(24px, 2.8vw, 34px)",
                  letterSpacing: "-0.02em",
                }}
              >
                Health check complete
              </h2>
            </div>
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-2"
              style={{
                border: "1px solid #D6D3CD",
                padding: "11px 18px",
                fontSize: "14px",
                color: "rgba(26,26,26,0.7)",
                backgroundColor: "#FFFFFF",
                cursor: "pointer",
              }}
            >
              <RotateCcw size={14} /> Check another
            </button>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <ToolCard>
                <Section icon={FileText} title="Scope summary">
                  <p style={{ color: "#1A1A1A", opacity: 0.78, fontSize: "16px", lineHeight: 1.8 }}>
                    {result.scope_summary}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mt-5">
                    {[
                      { l: "Stated value", v: result.project_value_indication },
                      { l: "Contract form", v: result.contract_form },
                    ]
                      .filter((x) => x.v)
                      .map((x) => (
                        <div key={x.l} style={{ border: "1px solid #D6D3CD", padding: "14px" }}>
                          <div
                            style={{
                              color: "rgba(26,26,26,0.45)",
                              fontSize: "10px",
                              letterSpacing: "0.12em",
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              marginBottom: "5px",
                            }}
                          >
                            {x.l}
                          </div>
                          <div style={{ color: "#0D1F3C", fontWeight: 600, fontSize: "14px" }}>
                            {x.v}
                          </div>
                        </div>
                      ))}
                  </div>
                </Section>

                <Section icon={CalendarDays} title="Key dates" count={result.key_dates?.length}>
                  {result.key_dates?.length ? (
                    <div className="space-y-3">
                      {result.key_dates.map((d, i) => (
                        <div
                          key={i}
                          style={{ borderLeft: "3px solid #E8820C", paddingLeft: "14px" }}
                        >
                          <div style={{ color: "#0D1F3C", fontWeight: 700, fontSize: "15px" }}>
                            {d.label}
                          </div>
                          <div
                            style={{
                              color: "rgba(26,26,26,0.6)",
                              fontFamily: "monospace",
                              fontSize: "13px",
                              marginTop: "2px",
                            }}
                          >
                            {d.date}
                          </div>
                          {d.note && (
                            <p
                              style={{
                                color: "rgba(26,26,26,0.6)",
                                fontSize: "13px",
                                marginTop: "4px",
                                lineHeight: 1.6,
                              }}
                            >
                              {d.note}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Empty text="No dates stated in the supplied content." />
                  )}
                </Section>

                <Section
                  icon={ListChecks}
                  title="Evaluation criteria"
                  count={result.evaluation_criteria?.length}
                >
                  {result.evaluation_criteria?.length ? (
                    <div className="space-y-3">
                      {result.evaluation_criteria.map((c, i) => (
                        <div
                          key={i}
                          className="flex items-start justify-between gap-4"
                          style={{ border: "1px solid #D6D3CD", padding: "16px" }}
                        >
                          <div>
                            <div style={{ color: "#0D1F3C", fontWeight: 700, fontSize: "15px" }}>
                              {c.criterion}
                            </div>
                            {c.note && (
                              <p
                                style={{
                                  color: "rgba(26,26,26,0.62)",
                                  fontSize: "13px",
                                  marginTop: "5px",
                                  lineHeight: 1.6,
                                }}
                              >
                                {c.note}
                              </p>
                            )}
                          </div>
                          <span
                            style={{
                              backgroundColor: "#0D1F3C",
                              color: "#E8820C",
                              fontFamily: "monospace",
                              fontSize: "13px",
                              fontWeight: 700,
                              padding: "5px 10px",
                              whiteSpace: "nowrap",
                              flexShrink: 0,
                            }}
                          >
                            {c.weighting}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Empty text="No evaluation criteria set out in the supplied content." />
                  )}
                </Section>

                <Section
                  icon={AlertTriangle}
                  title="Risk flags"
                  count={result.risk_flags?.length}
                >
                  {result.risk_flags?.length ? (
                    <div className="space-y-3">
                      {result.risk_flags.map((r, i) => {
                        const sev = SEVERITY[r.severity] || SEVERITY.low;
                        return (
                          <div
                            key={i}
                            style={{
                              border: "1px solid #D6D3CD",
                              borderLeft: `4px solid ${sev.colour}`,
                              padding: "18px",
                              backgroundColor: "#F5F4F2",
                            }}
                          >
                            <div className="flex items-start justify-between gap-3 mb-2">
                              <h4 style={{ color: "#0D1F3C", fontWeight: 800, fontSize: "15px" }}>
                                {r.title}
                              </h4>
                              <span
                                style={{
                                  color: sev.colour,
                                  fontSize: "10px",
                                  fontWeight: 700,
                                  letterSpacing: "0.12em",
                                  textTransform: "uppercase",
                                  fontFamily: "monospace",
                                  whiteSpace: "nowrap",
                                  flexShrink: 0,
                                }}
                              >
                                {sev.label}
                              </span>
                            </div>
                            <p
                              style={{
                                color: "rgba(26,26,26,0.72)",
                                fontSize: "14px",
                                lineHeight: 1.7,
                              }}
                            >
                              {r.detail}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <Empty text="No document-specific risks identified from the supplied content." />
                  )}
                </Section>

                <Section
                  icon={ListChecks}
                  title="Mandatory requirements"
                  count={result.mandatory_requirements?.length}
                >
                  {result.mandatory_requirements?.length ? (
                    <ul className="space-y-2">
                      {result.mandatory_requirements.map((m, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span
                            style={{
                              display: "inline-block",
                              width: "6px",
                              height: "6px",
                              backgroundColor: "#A63232",
                              marginTop: "8px",
                              flexShrink: 0,
                            }}
                          />
                          <span
                            style={{ color: "#1A1A1A", opacity: 0.78, fontSize: "15px", lineHeight: 1.7 }}
                          >
                            {m}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <Empty text="None stated in the supplied content." />
                  )}
                </Section>

                <Section
                  icon={HelpCircle}
                  title="Clarifications to raise"
                  count={result.clarifications_to_raise?.length}
                >
                  {result.clarifications_to_raise?.length ? (
                    <ol className="space-y-3">
                      {result.clarifications_to_raise.map((c, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <span
                            style={{
                              color: "#E8820C",
                              fontFamily: "monospace",
                              fontWeight: 700,
                              fontSize: "13px",
                              marginTop: "3px",
                              flexShrink: 0,
                            }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span
                            style={{ color: "#1A1A1A", opacity: 0.78, fontSize: "15px", lineHeight: 1.7 }}
                          >
                            {c}
                          </span>
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <Empty text="No material ambiguities identified." />
                  )}
                </Section>

                {result.information_gaps?.length > 0 && (
                  <Section
                    icon={FileWarning}
                    title="Not in the supplied pack"
                    count={result.information_gaps.length}
                  >
                    <p
                      style={{
                        color: "rgba(26,26,26,0.6)",
                        fontSize: "14px",
                        lineHeight: 1.7,
                        marginBottom: "12px",
                      }}
                    >
                      A bidder would need these to price the work properly:
                    </p>
                    <ul className="space-y-2">
                      {result.information_gaps.map((g, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span
                            style={{
                              display: "inline-block",
                              width: "6px",
                              height: "6px",
                              backgroundColor: "#2A4A7F",
                              marginTop: "8px",
                              flexShrink: 0,
                            }}
                          />
                          <span
                            style={{ color: "#1A1A1A", opacity: 0.75, fontSize: "15px", lineHeight: 1.7 }}
                          >
                            {g}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Section>
                )}
              </ToolCard>
            </div>

            {/* Effort + CTA */}
            <div className="lg:col-span-4">
              <div style={{ position: "sticky", top: "104px" }}>
                <ToolCard dark>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock size={15} color="#E8820C" strokeWidth={2.2} />
                    <span
                      style={{
                        color: "#E8820C",
                        fontSize: "11px",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        fontFamily: "monospace",
                      }}
                    >
                      Estimated bid effort
                    </span>
                  </div>
                  <div
                    style={{
                      color: "#F5F4F2",
                      fontSize: "clamp(30px, 3.4vw, 42px)",
                      fontWeight: 900,
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                    }}
                  >
                    {result.effort_estimate?.low_days}–{result.effort_estimate?.high_days}
                    <span style={{ fontSize: "18px", opacity: 0.5, fontWeight: 700 }}> days</span>
                  </div>
                  <p
                    style={{
                      color: "rgba(245,244,242,0.65)",
                      fontSize: "14px",
                      lineHeight: 1.7,
                      marginTop: "14px",
                    }}
                  >
                    {result.effort_estimate?.rationale}
                  </p>

                  <div
                    style={{
                      borderTop: "1px solid rgba(214,211,205,0.15)",
                      marginTop: "22px",
                      paddingTop: "20px",
                    }}
                  >
                    <p
                      style={{
                        color: "rgba(245,244,242,0.72)",
                        fontSize: "14px",
                        lineHeight: 1.7,
                        marginBottom: "18px",
                      }}
                    >
                      If that's more capacity than you have available, that's what we do.
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 font-semibold"
                      style={{ backgroundColor: "#E8820C", color: "#0D1F3C", fontSize: "15px" }}
                    >
                      Discuss this tender <ArrowRight size={16} />
                    </Link>
                  </div>
                </ToolCard>

                <div style={{ marginTop: "16px" }}>
                  <Link
                    to="/tools/bid-no-bid"
                    style={{ color: "#2A4A7F", fontSize: "14px", fontWeight: 600 }}
                    className="inline-flex items-center gap-2"
                  >
                    Now score whether to bid it <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </ToolLayout>
  );
}
