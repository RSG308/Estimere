import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";

/**
 * Restricts a route to users with the admin role.
 * Distinct from ProtectedRoute, which only checks authentication.
 */
export default function AdminRoute({ children }) {
  const [state, setState] = useState("checking"); // checking | allowed | denied | anon

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const me = await base44.auth.me();
        if (cancelled) return;
        if (!me) setState("anon");
        else if (me.role === "admin" || me._app_role === "admin") setState("allowed");
        else setState("denied");
      } catch {
        if (!cancelled) setState("anon");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (state === "checking") {
    return (
      <div
        className="flex items-center justify-center"
        style={{ minHeight: "60vh", backgroundColor: "#F5F4F2" }}
      >
        <Loader2 size={22} className="animate-spin" color="#2A4A7F" />
      </div>
    );
  }

  if (state === "anon") return <Navigate to="/login" replace />;

  if (state === "denied") {
    return (
      <div
        className="flex items-center justify-center px-6"
        style={{ minHeight: "60vh", backgroundColor: "#F5F4F2" }}
      >
        <div style={{ maxWidth: "440px", textAlign: "center" }}>
          <h1 style={{ color: "#0D1F3C", fontWeight: 900, fontSize: "26px", marginBottom: "12px" }}>
            Not available
          </h1>
          <p style={{ color: "#1A1A1A", opacity: 0.68, fontSize: "16px", lineHeight: 1.7 }}>
            This area is restricted to administrators. If you think you should have access, get in
            touch.
          </p>
        </div>
      </div>
    );
  }

  return children;
}
