import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import { Auth } from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import InfoPage from "./pages/Pages";

const informationPages = [
  { path: "/courses", title: "Explore Courses", page: "courses" },
  { path: "/tutors", title: "Find Your Perfect Tutor", page: "tutors" },
  { path: "/features", title: "Everything You Need to Learn Better", page: "features" },
  { path: "/pricing", title: "Simple, Flexible Pricing", page: "pricing" },
  { path: "/about", title: "About AVENQORI", page: "about" },
  { path: "/contact", title: "We’re Here to Help", page: "contact" },
  { path: "/terms", title: "Terms & Conditions", page: "terms" },
  { path: "/privacy", title: "Privacy Policy", page: "privacy" },
];

function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Auth mode="login" />} />
      <Route path="/signup" element={<Auth mode="signup" />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route
        path="/student-dashboard"
        element={
          <ProtectedRoute>
            <Dashboard role="student" />
          </ProtectedRoute>
        }
      />
      <Route
        path="/tutor-dashboard"
        element={
          <ProtectedRoute>
            <Dashboard role="tutor" />
          </ProtectedRoute>
        }
      />
      {informationPages.map(({ path, title, page }) => (
        <Route
          key={path}
          path={path}
          element={
            <PublicLayout>
              <InfoPage title={title} page={page} />
            </PublicLayout>
          }
        />
      ))}
      <Route
        path="*"
        element={
          <PublicLayout>
            <InfoPage title="Page not found" page="not-found" />
          </PublicLayout>
        }
      />
    </Routes>
  );
}
