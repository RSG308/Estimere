import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientInstance } from "@/lib/query-client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";
import { AuthProvider } from "@/lib/AuthContext";
import ScrollToTop from "./components/ScrollToTop";

// Layout
import Layout from "@/components/Layout";

// Pages
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import Sectors from "@/pages/Sectors";
import SectorDetail from "@/pages/SectorDetail";
import Insights from "@/pages/Insights";
import InsightDetail from "@/pages/InsightDetail";
import Tools from "@/pages/Tools";
import FeeEstimator from "@/pages/tools/FeeEstimator";
import BidNoBidScorer from "@/pages/tools/BidNoBidScorer";
import ProgrammePlanner from "@/pages/tools/ProgrammePlanner";
import IttHealthCheck from "@/pages/tools/IttHealthCheck";
import Admin from "@/pages/Admin";
import Account from "@/pages/Account";
import AdminRoute from "@/components/AdminRoute";
import Pricing from "@/pages/Pricing";
import CaseStudies from "@/pages/CaseStudies";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import ClientLogin from "@/pages/ClientLogin";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Cookies from "@/pages/Cookies";

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <Routes>
            {/* Client Login — standalone (full-screen, no shared layout) */}
            <Route path="/login" element={<ClientLogin />} />

            {/* All public marketing pages share the Layout (Navbar + Footer) */}
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/sectors" element={<Sectors />} />
              <Route path="/sectors/:slug" element={<SectorDetail />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/insights/:slug" element={<InsightDetail />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/tools/fee-estimator" element={<FeeEstimator />} />
              <Route path="/tools/bid-no-bid" element={<BidNoBidScorer />} />
              <Route path="/tools/programme-planner" element={<ProgrammePlanner />} />
              <Route path="/tools/itt-health-check" element={<IttHealthCheck />} />

              {/* Authenticated */}
              <Route
                path="/account"
                element={
                  <ProtectedRoute>
                    <Account />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin"
                element={
                  <AdminRoute>
                    <Admin />
                  </AdminRoute>
                }
              />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              {/* Legal */}
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;