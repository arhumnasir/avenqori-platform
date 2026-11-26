import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  return (
    <div className="simple-auth">
      <div className="simple-card">
        <h2>Forgot Password?</h2>
        <p>
          Enter your email address. Password reset will be sent when the backend is
          connected.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!/^\S+@\S+\.\S+$/.test(email)) {
              toast.error("Enter a valid email");
              return;
            }
            toast.success("Demo request received. Connect POST /auth/forgot-password.");
          }}
        >
          <input
            type="email"
            required
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn">Send reset link</button>
        </form>
        <Link to="/login">Back to Login</Link>
      </div>
    </div>
  );
}
