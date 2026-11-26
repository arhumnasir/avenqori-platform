import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  GraduationCap,
  UserRound,
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle,
  ShieldCheck,
  Trophy,
  Users,
  ArrowRight,
  Chrome,
  Apple,
  Facebook,
  Globe,
} from "lucide-react";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
const copy = {
  student: {
    login: "Smarter Learning for a Brighter Future",
    signup: "Join AVENQORI and Start Your Learning Journey",
    desc: "Connect with expert tutors, access world-class courses, and achieve your goals with AVENQORI.",
    loginImg: "/images/studentlogin.jpeg",
    signupImg: "/images/studentsignup.jpeg",
  },
  tutor: {
    login: "Teach, Inspire and Earn",
    signup: "Become a Tutor and Make an Impact",
    desc: "Share your knowledge, help learners and grow your income with AVENQORI.",
    loginImg: "/images/tutorlogin.jpeg",
    signupImg: "/images/tutorsignup.jpeg",
  },
};
export function Auth({ mode = "login" }) {
  const [role, setRole] = useState("student"),
    [show, setShow] = useState(false),
    [busy, setBusy] = useState(false),
    [remember, setRemember] = useState(true),
    [form, setForm] = useState({
      name: "",
      email: "",
      password: "",
      title: "",
      terms: false,
    });
  const { login, signup } = useAuth(),
    nav = useNavigate(),
    loc = useLocation();
  const data = copy[role];
  const change = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  async function submit(e) {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      toast.error("Please enter a valid email");
      return;
    }
    if (form.password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }
    if (mode === "signup" && !form.terms) {
      toast.error("Please accept the Terms & Conditions");
      return;
    }
    setBusy(true);
    try {
      if (mode === "login") {
        await login({ email: form.email, password: form.password, role });
        toast.success("Demo login successful");
        nav(role === "student" ? "/student-dashboard" : "/tutor-dashboard");
      } else {
        const r = await signup({ ...form, role });
        toast.success(r.message || "Signup submitted");
        nav("/login");
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Request failed. Check your API connection.",
      );
    } finally {
      setBusy(false);
    }
  }
  return (
    <div className="auth-page">
      <div className="auth-shell">
        <aside
          className="auth-art"
          style={{
            backgroundImage: `linear-gradient(180deg,rgba(35,0,110,.18),rgba(30,0,90,.35)),url(${mode === "login" ? data.loginImg : data.signupImg})`,
          }}
        >
          <Link to="/" className="brand light-brand">
            <span className="brand-mark"><img src="/images/brandlogo.png" alt="logo" width={"100px"} /></span>
            <span>
              <b>AVENQORI</b>
              <small>Learn · Grow · Achieve</small>
            </span>
          </Link>
          <div className="auth-art-copy">
            <h1>{data[mode]}</h1>
            <p>
              {mode === "signup"
                ? role === "student"
                  ? "Access expert tutors • Join live classes • Get certified • Track your progress"
                  : "Teach online • Earn online • Grow your profile • Reach global students"
                : data.desc}
            </p>
          </div>
          <div className="auth-art-stats">
            <span>
              <Users /> <b>500K+</b>
              <small>Learners</small>
            </span>
            <span>
              <GraduationCap />
              <b>50K+</b>
              <small>Tutors</small>
            </span>
            <span>
              <Globe />
              <b>150+</b>
              <small>Countries</small>
            </span>
          </div>
        </aside>
        <section className="auth-form-panel">
          <div className="auth-form-wrap">
            <h2>{mode === "login" ? "Welcome Back!" : "Create Your Account"}</h2>
            <p className="muted">
              {mode === "login"
                ? "Login to your AVENQORI account"
                : "Choose your role and sign up to get started"}
            </p>
            <div className="role-switch">
              <button
                className={role === "student" ? "selected" : ""}
                onClick={() => setRole("student")}
              >
                <GraduationCap />
                <b>Student</b>
                <small>Learn & Grow</small>
              </button>
              <button
                className={role === "tutor" ? "selected" : ""}
                onClick={() => setRole("tutor")}
              >
                <UserRound />
                <b>Tutor</b>
                <small>Teach & Earn</small>
              </button>
            </div>
            <form onSubmit={submit} className="auth-form">
              {mode === "signup" && (
                <label>
                  Full Name
                  <div className="input-wrap">
                    <UserRound />
                    <input
                      name="name"
                      value={form.name}
                      onChange={change}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </label>
              )}
              <label>
                Email Address
                <div className="input-wrap">
                  <Mail />
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={change}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </label>
              <label>
                Password
                <div className="input-wrap">
                  <Lock />
                  <input
                    name="password"
                    type={show ? "text" : "password"}
                    value={form.password}
                    onChange={change}
                    placeholder={
                      mode === "login" ? "Enter your password" : "Create a password"
                    }
                    minLength="8"
                    required
                  />
                  <button
                    type="button"
                    className="field-action"
                    onClick={() => setShow(!show)}
                  >
                    {show ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </label>
              {mode === "signup" && role === "tutor" && (
                <label>
                  Professional Title (Optional)
                  <div className="input-wrap">
                    <Trophy />
                    <input
                      name="title"
                      value={form.title}
                      onChange={change}
                      placeholder="e.g. Mathematics Expert"
                    />
                  </div>
                </label>
              )}
              {mode === "login" ? (
                <div className="form-options">
                  <label className="check-label">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                    />{" "}
                    Remember me
                  </label>
                  <Link to="/forgot-password">Forgot password?</Link>
                </div>
              ) : (
                <label className="check-label terms">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={form.terms}
                    onChange={change}
                  />{" "}
                  I agree to the <Link to="/terms">Terms & Conditions</Link> and{" "}
                  <Link to="/privacy">Privacy Policy</Link>
                </label>
              )}
              <button className="btn submit-btn" disabled={busy}>
                {busy ? "Please wait…" : mode === "login" ? "Login →" : "Sign Up →"}
              </button>
            </form>
            {mode === "login" && (
              <>
                <div className="or">
                  <span />
                  or continue with
                  <span />
                </div>
                <div className="social-login">
                  <button
                    onClick={() =>
                      toast("Connect Google OAuth credentials to enable sign-in.")
                    }
                  >
                    <Chrome /> Google
                  </button>
                  <button
                    onClick={() =>
                      toast("Connect Apple OAuth credentials to enable sign-in.")
                    }
                  >
                    <Apple /> Apple
                  </button>
                  <button
                    onClick={() =>
                      toast("Connect Facebook OAuth credentials to enable sign-in.")
                    }
                  >
                    <Facebook /> Facebook
                  </button>
                </div>
              </>
            )}
            <p className="auth-bottom">
              {mode === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
              <Link to={mode === "login" ? "/signup" : "/login"}>
                {mode === "login" ? "Sign Up" : "Login"}
              </Link>
            </p>
            <Link to="/" className="back-home">
              ← Back to Home
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
