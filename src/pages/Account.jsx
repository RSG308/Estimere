import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader2, LogOut, ShieldCheck, ArrowRight } from "lucide-react";
import useSEO from "@/hooks/useSEO";
import { base44 } from "@/api/base44Client";

export default function Account() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fullName, setFullName] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useSEO({ title: "Your Account | Estimere", description: "Manage your account details." });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const me = await base44.auth.me();
        if (cancelled) return;
        setUser(me);
        setFullName(me?.full_name || "");
      } catch (err) {
        console.error(err);
        if (!cancelled) setError("Could not load your account details.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  async function save() {
    setSaving(true);
    setMessage("");
    setError("");
    try {
      await base44.auth.updateMyUserData({ full_name: fullName.trim() });
      setMessage("Saved.");
    } catch (err) {
      console.error(err);
      setError("Could not save. Try again.");
    } finally {
      setSaving(false);
    }
  }

  async function signOut() {
    try {
      await base44.auth.logout();
    } catch (err) {
      console.error(err);
    }
    window.location.href = "/";
  }

  const isAdmin = user?.role === "admin" || user?._app_role === "admin";

  return (
    <div>
      <section style={{ backgroundColor: "#0D1F3C", position: "relative" }} className="py-14">
        <div className="max-w-[820px] mx-auto px-6 lg:px-8">
          <div className="ref-label mb-3">REF: EST-ACC-001</div>
          <h1
            style={{
              color: "#F5F4F2",
              fontSize: "clamp(28px, 3.4vw, 42px)",
              fontWeight: 900,
              letterSpacing: "-0.025em",
            }}
          >
            Your account
          </h1>
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

      <section className="py-14" style={{ backgroundColor: "#F5F4F2", minHeight: "50vh" }}>
        <div className="max-w-[820px] mx-auto px-6 lg:px-8">
          {loading ? (
            <div className="flex items-center justify-center" style={{ padding: "80px" }}>
              <Loader2 size={22} className="animate-spin" color="#2A4A7F" />
            </div>
          ) : (
            <>
              {isAdmin && (
                <Link
                  to="/admin"
                  className="flex items-center justify-between gap-4 mb-6 transition-transform hover:-translate-y-0.5"
                  style={{
                    border: "1px solid #D6D3CD",
                    borderLeft: "4px solid #E8820C",
                    backgroundColor: "#FFFFFF",
                    padding: "20px 24px",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <ShieldCheck size={18} color="#E8820C" strokeWidth={2.2} />
                    <div>
                      <div style={{ color: "#0D1F3C", fontWeight: 700, fontSize: "15px" }}>
                        Admin panel
                      </div>
                      <div style={{ color: "rgba(26,26,26,0.6)", fontSize: "13px", marginTop: "2px" }}>
                        Enquiries and ITT check log
                      </div>
                    </div>
                  </div>
                  <ArrowRight size={16} color="#2A4A7F" />
                </Link>
              )}

              <div style={{ border: "1px solid #D6D3CD", backgroundColor: "#FFFFFF", padding: "32px" }}>
                <div
                  style={{
                    color: "#2A4A7F",
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    fontFamily: "monospace",
                    marginBottom: "24px",
                  }}
                >
                  Details
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label
                    style={{
                      display: "block",
                      color: "#0D1F3C",
                      fontWeight: 700,
                      fontSize: "14px",
                      marginBottom: "10px",
                    }}
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
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
                </div>

                <div style={{ marginBottom: "8px" }}>
                  <label
                    style={{
                      display: "block",
                      color: "#0D1F3C",
                      fontWeight: 700,
                      fontSize: "14px",
                      marginBottom: "10px",
                    }}
                  >
                    Email
                  </label>
                  <div
                    style={{
                      padding: "13px 14px",
                      fontSize: "15px",
                      border: "1px solid #D6D3CD",
                      backgroundColor: "rgba(13,31,60,0.03)",
                      color: "rgba(26,26,26,0.6)",
                    }}
                  >
                    {user?.email || "—"}
                  </div>
                  <p
                    style={{
                      color: "rgba(26,26,26,0.5)",
                      fontSize: "13px",
                      marginTop: "8px",
                      lineHeight: 1.6,
                    }}
                  >
                    Email addresses can't be changed here. Get in touch if you need it updated.
                  </p>
                </div>

                {(message || error) && (
                  <p
                    style={{
                      color: error ? "#A63232" : "#1F7A4D",
                      fontSize: "14px",
                      fontWeight: 600,
                      marginTop: "20px",
                    }}
                  >
                    {error || message}
                  </p>
                )}

                <button
                  type="button"
                  onClick={save}
                  disabled={saving}
                  className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold"
                  style={{
                    backgroundColor: "#E8820C",
                    color: "#0D1F3C",
                    fontSize: "15px",
                    border: "none",
                    cursor: saving ? "wait" : "pointer",
                    marginTop: "24px",
                    opacity: saving ? 0.6 : 1,
                  }}
                >
                  {saving ? <Loader2 size={15} className="animate-spin" /> : null}
                  {saving ? "Saving…" : "Save changes"}
                </button>
              </div>

              <button
                type="button"
                onClick={signOut}
                className="inline-flex items-center gap-2"
                style={{
                  border: "1px solid #D6D3CD",
                  padding: "12px 20px",
                  fontSize: "14px",
                  color: "rgba(26,26,26,0.7)",
                  backgroundColor: "#FFFFFF",
                  cursor: "pointer",
                  marginTop: "20px",
                }}
              >
                <LogOut size={14} /> Sign out
              </button>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
