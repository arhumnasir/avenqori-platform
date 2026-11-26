import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export default function Dashboard({ role }) {
  const { user, logout } = useAuth();
  return (
    <main className="info-page wrap">
      <span className="eyebrow">DEMO DASHBOARD</span>
      <h1>Welcome, {user?.name || role}</h1>
      <p>
        This is a frontend demo dashboard. Real student/tutor data will load after backend
        integration.
      </p>
      <div className="info-panel">
        <h2>{role === "student" ? "Student" : "Tutor"} Dashboard</h2>
        <button className="btn" onClick={logout}>
          Log out
        </button>{" "}
        <Link to="/">Home</Link>
      </div>
    </main>
  );
}
