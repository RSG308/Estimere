import { useEffect, useMemo, useState } from "react";
import { Loader2, RefreshCw, Mail, Phone, Building2, Check, Inbox, FileSearch } from "lucide-react";
import useSEO from "@/hooks/useSEO";
import { base44 } from "@/api/base44Client";

const STATUSES = [
  { value: "new", label: "New", colour: "#E8820C" },
  { value: "contacted", label: "Contacted", colour: "#2A4A7F" },
  { value: "closed", label: "Closed", colour: "#6B7280" },
];

function fmt(iso) {
  if (!iso) return "—";
  return new Date(iso).toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function StatusPill({ status }) {
  const s = STATUSES.find((x) => x.value === status) || STATUSES[0];
  return (
    <span
      style={{
        backgroundColor: s.colour,
        color: "#FFFFFF",
        fontSize: "10px",
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        fontFamily: "monospace",
        padding: "4px 9px",
        whiteSpace: "nowrap",
      }}
    >
      {s.label}
    </span>
  );
}

export default function Admin() {
  const [tab, setTab] = useState("enquiries");
  const [enquiries, setEnquiries] = useState([]);
  const [checks, setChecks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");
  const [saving, setSaving] = useState(null);

  useSEO({ title: "Admin | Estimere", description: "Internal enquiry management." });

  async function load() {
    setLoading(true);
    setError("");
    try {
      const [e, c] = await Promise.all([
        base44.entities.Enquiry.list("-submitted_date", 200).catch(() => []),
        base44.entities.IttCheck.list("-run_date", 200).catch(() => []),
      ]);
      setEnquiries(Array.isArray(e) ? e : []);
      setChecks(Array.isArray(c) ? c : []);
    } catch (err) {
      console.error(err);
      setError("Could not load records. Try refreshing.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const counts = useMemo(
    () => ({
      new: enquiries.filter((e) => (e.status || "new") === "new").length,
      contacted: enquiries.filter((e) => e.status === "contacted").length,
      closed: enquiries.filter((e) => e.status === "closed").length,
    }),
    [enquiries]
  );

  const visible = useMemo(
    () =>
      filter === "all"
        ? enquiries
        : enquiries.filter((e) => (e.status || "new") === filter),
    [enquiries, filter]
  );

  const pendingChecks = checks.filter((c) => !c.followed_up).length;

  async function setStatus(id, status) {
    setSaving(id);
    try {
      await base44.entities.Enquiry.update(id, { status });
      setEnquiries((prev) => prev.map((e) => (e.id === id ? { ...e, status } : e)));
    } catch (err) {
      console.error(err);
      setError("Could not update that record.");
    } finally {
      setSaving(null);
    }
  }

  async function markFollowedUp(id) {
    setSaving(id);
    try {
      await base44.entities.IttCheck.update(id, { followed_up: true });
      setChecks((prev) => prev.map((c) => (c.id === id ? { ...c, followed_up: true } : c)));
    } catch (err) {
      console.error(err);
      setError("Could not update that record.");
    } finally {
      setSaving(null);
    }
  }

  return (
    <div>
      {/* Header */}
      <section style={{ backgroundColor: "#0D1F3C", position: "relative" }} className="py-14">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="ref-label mb-3">REF: EST-ADM-001</div>
              <h1
                style={{
                  color: "#F5F4F2",
                  fontSize: "clamp(28px, 3.4vw, 42px)",
                  fontWeight: 900,
                  letterSpacing: "-0.025em",
                }}
              >
                Admin
              </h1>
            </div>
            <button
              type="button"
              onClick={load}
              className="inline-flex items-center gap-2"
              style={{
                border: "1px solid rgba(245,244,242,0.25)",
                padding: "10px 16px",
                fontSize: "14px",
                color: "rgba(245,244,242,0.85)",
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
            >
              <RefreshCw size={14} /> Refresh
            </button>
          </div>

          {/* Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            {[
              { l: "New enquiries", v: counts.new, accent: true },
              { l: "Contacted", v: counts.contacted },
              { l: "Closed", v: counts.closed },
              { l: "ITT checks to follow up", v: pendingChecks, accent: true },
            ].map((c) => (
              <div
                key={c.l}
                style={{
                  border: "1px solid rgba(245,244,242,0.12)",
                  padding: "18px",
                  backgroundColor: "rgba(245,244,242,0.03)",
                }}
              >
                <div
                  style={{
                    color: c.accent ? "#E8820C" : "#F5F4F2",
                    fontSize: "30px",
                    fontWeight: 900,
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  {c.v}
                </div>
                <div
                  style={{
                    color: "rgba(245,244,242,0.5)",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontFamily: "monospace",
                    marginTop: "8px",
                  }}
                >
                  {c.l}
                </div>
              </div>
            ))}
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

      <section className="py-12" style={{ backgroundColor: "#F5F4F2", minHeight: "50vh" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex gap-2 mb-8">
            {[
              { v: "enquiries", l: "Enquiries", i: Inbox, n: enquiries.length },
              { v: "checks", l: "ITT Checks", i: FileSearch, n: checks.length },
            ].map(({ v, l, i: I, n }) => {
              const active = tab === v;
              return (
                <button
                  key={v}
                  type="button"
                  onClick={() => setTab(v)}
                  className="inline-flex items-center gap-2"
                  style={{
                    padding: "11px 18px",
                    fontSize: "14px",
                    fontWeight: active ? 700 : 500,
                    border: `1px solid ${active ? "#E8820C" : "#D6D3CD"}`,
                    backgroundColor: active ? "#E8820C" : "#FFFFFF",
                    color: active ? "#0D1F3C" : "rgba(26,26,26,0.7)",
                    cursor: "pointer",
                  }}
                >
                  <I size={15} /> {l} ({n})
                </button>
              );
            })}
          </div>

          {error && (
            <div
              style={{
                border: "1px solid rgba(166,50,50,0.3)",
                borderLeft: "4px solid #A63232",
                backgroundColor: "rgba(166,50,50,0.05)",
                padding: "16px",
                marginBottom: "20px",
                color: "#A63232",
                fontSize: "14px",
              }}
            >
              {error}
            </div>
          )}

          {loading ? (
            <div className="flex items-center justify-center" style={{ padding: "80px" }}>
              <Loader2 size={22} className="animate-spin" color="#2A4A7F" />
            </div>
          ) : tab === "enquiries" ? (
            <>
              {/* Status filter */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["all", ...STATUSES.map((s) => s.value)].map((f) => {
                  const active = filter === f;
                  return (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFilter(f)}
                      style={{
                        padding: "7px 14px",
                        fontSize: "13px",
                        fontWeight: active ? 700 : 500,
                        border: `1px solid ${active ? "#2A4A7F" : "#D6D3CD"}`,
                        backgroundColor: active ? "rgba(42,74,127,0.08)" : "transparent",
                        color: active ? "#0D1F3C" : "rgba(26,26,26,0.6)",
                        cursor: "pointer",
                        textTransform: "capitalize",
                      }}
                    >
                      {f}
                    </button>
                  );
                })}
              </div>

              {visible.length === 0 ? (
                <div
                  style={{
                    border: "1px dashed #D6D3CD",
                    padding: "64px",
                    textAlign: "center",
                    color: "rgba(26,26,26,0.5)",
                    fontSize: "15px",
                  }}
                >
                  No enquiries{filter !== "all" ? ` with status "${filter}"` : ""}.
                </div>
              ) : (
                <div className="space-y-4">
                  {visible.map((e) => (
                    <div
                      key={e.id}
                      style={{
                        border: "1px solid #D6D3CD",
                        backgroundColor: "#FFFFFF",
                        padding: "24px",
                      }}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h3 style={{ color: "#0D1F3C", fontWeight: 800, fontSize: "17px" }}>
                              {e.name || "—"}
                            </h3>
                            <StatusPill status={e.status || "new"} />
                          </div>
                          <div
                            className="flex flex-wrap items-center gap-x-5 gap-y-1"
                            style={{ color: "rgba(26,26,26,0.6)", fontSize: "13px" }}
                          >
                            {e.company && (
                              <span className="inline-flex items-center gap-1.5">
                                <Building2 size={12} /> {e.company}
                              </span>
                            )}
                            {e.email && (
                              <a
                                href={`mailto:${e.email}`}
                                className="inline-flex items-center gap-1.5"
                                style={{ color: "#2A4A7F" }}
                              >
                                <Mail size={12} /> {e.email}
                              </a>
                            )}
                            {e.phone && (
                              <a
                                href={`tel:${e.phone}`}
                                className="inline-flex items-center gap-1.5"
                                style={{ color: "#2A4A7F" }}
                              >
                                <Phone size={12} /> {e.phone}
                              </a>
                            )}
                          </div>
                        </div>
                        <div
                          style={{
                            color: "rgba(26,26,26,0.45)",
                            fontFamily: "monospace",
                            fontSize: "12px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {fmt(e.submitted_date || e.created_date)}
                        </div>
                      </div>

                      {e.project_type && (
                        <div
                          style={{
                            display: "inline-block",
                            border: "1px solid #D6D3CD",
                            padding: "4px 10px",
                            fontSize: "12px",
                            color: "rgba(26,26,26,0.65)",
                            fontFamily: "monospace",
                            marginBottom: "14px",
                          }}
                        >
                          {e.project_type}
                        </div>
                      )}

                      <p
                        style={{
                          color: "#1A1A1A",
                          opacity: 0.78,
                          fontSize: "15px",
                          lineHeight: 1.75,
                          whiteSpace: "pre-wrap",
                          backgroundColor: "#F5F4F2",
                          padding: "16px",
                          borderLeft: "3px solid #D6D3CD",
                        }}
                      >
                        {e.message || "—"}
                      </p>

                      <div
                        className="flex flex-wrap gap-2"
                        style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #D6D3CD" }}
                      >
                        {STATUSES.map((s) => {
                          const current = (e.status || "new") === s.value;
                          return (
                            <button
                              key={s.value}
                              type="button"
                              disabled={current || saving === e.id}
                              onClick={() => setStatus(e.id, s.value)}
                              style={{
                                padding: "8px 14px",
                                fontSize: "13px",
                                fontWeight: 600,
                                border: `1px solid ${current ? s.colour : "#D6D3CD"}`,
                                backgroundColor: current ? s.colour : "#FFFFFF",
                                color: current ? "#FFFFFF" : "rgba(26,26,26,0.65)",
                                cursor: current ? "default" : "pointer",
                                opacity: saving === e.id ? 0.5 : 1,
                              }}
                            >
                              {current ? `● ${s.label}` : `Mark ${s.label.toLowerCase()}`}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            // ITT Checks
            <>
              {checks.length === 0 ? (
                <div
                  style={{
                    border: "1px dashed #D6D3CD",
                    padding: "64px",
                    textAlign: "center",
                    color: "rgba(26,26,26,0.5)",
                    fontSize: "15px",
                  }}
                >
                  No ITT Health Checks run yet.
                </div>
              ) : (
                <div style={{ border: "1px solid #D6D3CD", backgroundColor: "#FFFFFF" }}>
                  {checks.map((c, i) => (
                    <div
                      key={c.id}
                      className="flex flex-wrap items-center justify-between gap-4"
                      style={{
                        padding: "18px 24px",
                        borderTop: i === 0 ? "none" : "1px solid #D6D3CD",
                        backgroundColor: c.followed_up ? "rgba(13,31,60,0.02)" : "#FFFFFF",
                      }}
                    >
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <a
                            href={`mailto:${c.email}`}
                            style={{ color: "#2A4A7F", fontWeight: 700, fontSize: "15px" }}
                          >
                            {c.email}
                          </a>
                          {c.company && (
                            <span style={{ color: "rgba(26,26,26,0.6)", fontSize: "14px" }}>
                              {c.company}
                            </span>
                          )}
                          {!c.followed_up && (
                            <span
                              style={{
                                backgroundColor: "#E8820C",
                                color: "#0D1F3C",
                                fontSize: "10px",
                                fontWeight: 700,
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                fontFamily: "monospace",
                                padding: "3px 8px",
                              }}
                            >
                              Follow up
                            </span>
                          )}
                        </div>
                        <div
                          style={{
                            color: "rgba(26,26,26,0.5)",
                            fontSize: "12.5px",
                            fontFamily: "monospace",
                            marginTop: "5px",
                          }}
                        >
                          {c.document_name || "—"} · {c.input_method === "upload" ? "upload" : "pasted"} ·{" "}
                          {fmt(c.run_date || c.created_date)}
                        </div>
                      </div>

                      {!c.followed_up && (
                        <button
                          type="button"
                          disabled={saving === c.id}
                          onClick={() => markFollowedUp(c.id)}
                          className="inline-flex items-center gap-2"
                          style={{
                            border: "1px solid #D6D3CD",
                            padding: "8px 14px",
                            fontSize: "13px",
                            color: "rgba(26,26,26,0.7)",
                            backgroundColor: "#FFFFFF",
                            cursor: "pointer",
                            opacity: saving === c.id ? 0.5 : 1,
                          }}
                        >
                          <Check size={13} /> Mark followed up
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
