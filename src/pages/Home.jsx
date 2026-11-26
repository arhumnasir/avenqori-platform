import { Link } from "react-router-dom";
import {
  ArrowRight,
  Play,
  GraduationCap,
  Users,
  Microchip,
  ShieldCheck,
  Globe,
  Trophy,
  Star,
  Sparkles,
  BookOpen,
  CheckCircle,
  Rocket,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TutorCard from "../components/TutorCard";
import Testimonials from "../components/Testimonials";
const tutors = [
  [
    "Ayesha Malik",
    "English Specialist",
    "4.9",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500",
  ],
  [
    "Usman Ahmad",
    "Mathematics Expert",
    "4.9",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
  ],
  [
    "Sarah Khan",
    "Programming Tutor",
    "4.8",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500",
  ],
  [
    "Ahmed Raza",
    "Science Expert",
    "4.8",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
  ],
  [
    "Fatima Noor",
    "Physics Tutor",
    "4.9",
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500",
  ],
];
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero wrap">
          <div className="hero-copy">
            <span className="eyebrow">
              <Sparkles size={14} /> AI-Powered Learning Platform
            </span>
            <h1>
              Learn Smarter,
              <br />
              Grow Bigger with
              <br />
              <em>AVENQORI</em>
            </h1>
            <p>
              Connect with verified tutors, access world-class courses, and achieve your
              goals — anytime, anywhere.
            </p>
            <div className="hero-buttons">
              <Link className="btn" to="/signup">
                Start Learning Free <ArrowRight size={16} />
              </Link>
              <Link className="btn btn-outline" to="/features">
                <Play size={15} fill="currentColor" /> Watch Demo
              </Link>
            </div>
            <div className="trust">
              <div className="avatars">
                <span>👨🏻</span>
                <span>👩🏻</span>
                <span>👨🏽</span>
                <span>👩🏽</span>
              </div>
              <small>Trusted by 500K+ learners worldwide</small>
              <b className="stars">★★★★★</b>
              <b>4.9/5</b>
            </div>
          </div>
          <div className="hero-art">
            <img
              src="/images/hero.jpeg"
              alt="AVENQORI learning illustration from supplied design reference"
            />
           
          </div>
        </section>
        <section className="feature-strip wrap">
          {[
            [Play, "Smart Courses", "& Live Classes"],
            [Users, "Verified", "Tutors"],
            [Microchip, "AI Study", "Planner"],
            [ShieldCheck, "Secure &", "Trusted"],
            [Globe, "Multi-Language", "Support"],
            [Trophy, "Certificates", "& Rewards"],
          ].map(([I, a, b]) => (
            <div className="feature-mini" key={a}>
              <I />
              <b>
                {a}
                <br />
                {b}
              </b>
            </div>
          ))}
        </section>
        <section className="tutors-section wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">★ Top Rated Tutors</span>
              <h2>Find Your Perfect Tutor</h2>
              <p>
                Learn from the best. Get personalized guidance from expert tutors around
                the world.
              </p>
            </div>
            <Link to="/tutors" className="btn btn-outline">
              Browse All Tutors <ArrowRight size={15} />
            </Link>
          </div>
          <div className="tutor-layout">
            <div className="tutor-list">
              {tutors.map((t) => (
                <TutorCard
                  key={t[0]}
                  name={t[0]}
                  subject={t[1]}
                  rating={t[2]}
                  photo={t[3]}
                />
              ))}
            </div>
            <aside className="premium">
              {/* <div className="crown"><img src="/images/upgrate.jpeg" alt="" /></div> */}
              <h3>Go Premium</h3>
              <p>Unlock more features and learn faster!</p>
              {["Unlimited Access", "Priority Support", "Exclusive Resources"].map(
                (x) => (
                  <div className="check" key={x}>
                    <CheckCircle /> {x}
                  </div>
                ),
              )}
              <Link to="/pricing" className="btn gold">
                Upgrade Now <ArrowRight size={14} />
              </Link>
            </aside>
          </div>
        </section>
        <section className="stats wrap">
          {[
            ["500K+", "Active Learners", Users],
            ["50K+", "Expert Tutors", Users],
            ["10K+", "Premium Courses", BookOpen],
            ["4.9/5", "User Rating", Star],
            ["150+", "Countries", Globe],
          ].map(([n, l, I]) => (
            <div key={l}>
              <I />
              <b>{n}</b>
              <small>{l}</small>
            </div>
          ))}
        </section>
        <section className="reviews-section wrap">
          <div className="reviews-left">
            <span className="eyebrow">★ What Our Students Say</span>
            <h2>Trusted by Learners Worldwide</h2>
            <Testimonials />
          </div>
          
          <div className="cta-card">
          
            {/* <Rocket size={38} /> */}
            <h2>
              Ready to Start
              <br />
              Your Learning Journey?
            </h2>
            <p>Join AVENQORI today and take the first step towards a brighter future.</p>
            <Link to="/signup" className="btn btn-white">
              Create Free Account <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
