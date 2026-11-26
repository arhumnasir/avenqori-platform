import { Link } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { Instagram, Youtube, Facebook, Linkedin, Mail } from "lucide-react";
export default function Footer() {
  const [email, setEmail] = useState("");
  function submit(e) {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Enter a valid email address");
      return;
    }
    toast.success("Thanks for subscribing!");
    setEmail("");
  }
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="brand light-brand">
            <span className="brand-mark"><img src="/images/brandlogo.png" alt="logo" width={"100px"} /></span>
            <span>
              <b>AVENQORI</b>
              <small>Learn · Grow · Achieve</small>
            </span>
          </div>
          <p>Learn smarter. Grow bigger. Achieve your goals with AVENQORI.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/tutors">Find a Tutor</Link>
          <Link to="/about">About Us</Link>
        </div>
        <div>
          <h4>Support</h4>
          <Link to="/contact">Help Center</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
        <div>
          <h4>Follow Us</h4>
          <div className="socials">
            <a href="https://youtube.com" aria-label="YouTube">
              <Youtube />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="https://facebook.com" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <Linkedin />
            </a>
          </div>
        </div>
        <div className="newsletter">
          <h4>
            <Mail size={17} /> Subscribe to our Newsletter
          </h4>
          <p>Get the latest updates and learning tips.</p>
          <form onSubmit={submit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
            />
            <button className="btn">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="copyright">
        © 2026 AVENQORI. All rights reserved. <span>Learn Smarter. Grow Bigger.</span>
      </div>
    </footer>
  );
}
