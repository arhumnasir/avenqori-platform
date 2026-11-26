import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Headphones,
  Languages,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";

const courses = [
  {
    title: "English Communication",
    category: "Language",
    level: "Beginner",
    lessons: "24 lessons",
    price: "$19",
    icon: Languages,
  },
  {
    title: "Modern JavaScript",
    category: "Programming",
    level: "Intermediate",
    lessons: "32 lessons",
    price: "$29",
    icon: BookOpen,
  },
  {
    title: "Mathematics Masterclass",
    category: "Mathematics",
    level: "All levels",
    lessons: "18 lessons",
    price: "$24",
    icon: GraduationCap,
  },
  {
    title: "Science Foundations",
    category: "Science",
    level: "Beginner",
    lessons: "20 lessons",
    price: "$21",
    icon: Sparkles,
  },
];

const tutors = [
  {
    name: "Ayesha Malik",
    subject: "English Specialist",
    rating: "4.9",
    experience: "8 years experience",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500",
  },
  {
    name: "Usman Ahmad",
    subject: "Mathematics Expert",
    rating: "4.9",
    experience: "6 years experience",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
  },
  {
    name: "Sarah Khan",
    subject: "Programming Tutor",
    rating: "4.8",
    experience: "5 years experience",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500",
  },
  {
    name: "Ahmed Raza",
    subject: "Science Expert",
    rating: "4.8",
    experience: "7 years experience",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
  },
  {
    name: "Fatima Noor",
    subject: "Physics Tutor",
    rating: "4.9",
    experience: "9 years experience",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500",
  },
];

const features = [
  [
    BookOpen,
    "Smart courses",
    "Structured lessons, learning resources and progress tracking in one place.",
  ],
  [
    Users,
    "Verified tutors",
    "Discover tutor profiles and choose guidance that fits your goals.",
  ],
  [
    Sparkles,
    "AI study planner",
    "Plan study sessions and keep your learning goals organized.",
  ],
  [
    ShieldCheck,
    "Secure learning",
    "A learning experience designed with account safety in mind.",
  ],
  [
    Languages,
    "Multi-language support",
    "Learn across subjects with a platform designed for a global audience.",
  ],
  [
    Headphones,
    "Live support",
    "Get help when you need assistance with your learning journey.",
  ],
];

function PageIntro({ eyebrow = "LEARN · GROW · ACHIEVE", title, description }) {
  return (
    <div className="page-intro">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

function CoursesPage() {
  const [searchParams] = useSearchParams();
  const liveOnly = searchParams.get("type") === "live";
  return (
    <>
      <PageIntro
        title={
          liveOnly
            ? "Learn Live with Expert Tutors"
            : "Explore Courses That Move You Forward"
        }
        description="Build practical skills with guided courses, expert instruction and flexible learning."
      />
      <div className="catalog-grid">
        {courses.map((course) => {
          const Icon = course.icon;
          return (
            <article className="catalog-card" key={course.title}>
              <div className="catalog-icon">
                <Icon size={28} />
              </div>
              <span className="catalog-category">{course.category}</span>
              <h2>{course.title}</h2>
              <p>
                {course.level} · {course.lessons}
              </p>
              <div className="catalog-card-bottom">
                <b>{course.price}</b>
                <Link className="btn small" to="/signup">
                  View course <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
      <div className="page-banner">
        <h2>Your next skill starts here.</h2>
        <p>Create a free account to explore learning opportunities.</p>
        <Link className="btn" to="/signup">
          Get started <ArrowRight size={15} />
        </Link>
      </div>
    </>
  );
}

function TutorsPage() {
  return (
    <>
      <PageIntro
        title="Find Your Perfect Tutor"
        description="Meet experienced educators who can help you learn with confidence and reach your goals."
      />
      <div className="directory-grid">
        {tutors.map((tutor) => (
          <article className="directory-tutor" key={tutor.name}>
            <img src={tutor.image} alt={tutor.name} loading="lazy" />
            <div>
              <span className="online-label">● Available online</span>
              <h2>{tutor.name}</h2>
              <p>{tutor.subject}</p>
              <small>{tutor.experience}</small>
              <b className="directory-rating">
                <Star size={15} fill="currentColor" /> {tutor.rating}/5
              </b>
              <Link className="btn" to="/signup">
                Book a session <ArrowRight size={14} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

function FeaturesPage() {
  return (
    <>
      <PageIntro
        title="Everything You Need to Learn Better"
        description="AVENQORI brings courses, expert tutors and helpful learning tools together in one place."
      />
      <div className="feature-page-grid">
        {features.map(([Icon, title, description]) => (
          <article className="catalog-card feature-page-card" key={title}>
            <div className="catalog-icon">
              <Icon size={27} />
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </>
  );
}

function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Start exploring and build your learning habit.",
      items: [
        "Browse public courses",
        "Create your learner profile",
        "Explore tutor profiles",
      ],
    },
    {
      name: "Premium",
      price: "$12",
      description: "More tools and flexibility for committed learners.",
      items: [
        "Premium learning resources",
        "Priority support",
        "Personal study planning",
      ],
      featured: true,
    },
    {
      name: "Tutor Plus",
      price: "$19",
      description: "Tools to help tutors grow their teaching presence.",
      items: ["Enhanced tutor profile", "Student enquiry tools", "Profile insights"],
    },
  ];
  return (
    <>
      <PageIntro
        title="Simple, Flexible Pricing"
        description="Choose a starting point that fits your learning or teaching goals. Plans shown are illustrative and can be connected to billing later."
      />
      <div className="pricing-grid">
        {plans.map((plan) => (
          <article
            className={`price-card ${plan.featured ? "featured" : ""}`}
            key={plan.name}
          >
            <span className="catalog-category">{plan.name}</span>
            <h2>
              {plan.price}
              <small>/ month</small>
            </h2>
            <p>{plan.description}</p>
            {plan.items.map((item) => (
              <div className="price-feature" key={item}>
                <CheckCircle2 size={17} />
                {item}
              </div>
            ))}
            <Link className="btn" to="/signup">
              Choose plan <ArrowRight size={14} />
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageIntro
        title="Learning Without Limits"
        description="AVENQORI is a learning platform concept built to bring learners and educators closer through accessible digital education."
      />
      <div className="about-panel">
        <div className="about-number">A</div>
        <div>
          <h2>Our mission</h2>
          <p>
            Make it easier for learners to discover useful courses, connect with tutors
            and stay motivated. We believe that the right guidance and a clear learning
            path can help people make meaningful progress.
          </p>
          <div className="about-stats">
            <span>
              <b>500K+</b> learners goal
            </span>
            <span>
              <b>50K+</b> tutor community goal
            </span>
            <span>
              <b>150+</b> countries vision
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  function submit(event) {
    event.preventDefault();
    if (!form.name.trim() || !/^\S+@\S+\.\S+$/.test(form.email) || !form.message.trim()) {
      toast.error("Please complete your name, valid email and message.");
      return;
    }
    toast.success("Thanks! Your message is ready for the support team.");
    setForm({ name: "", email: "", subject: "", message: "" });
  }
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  return (
    <>
      <PageIntro
        title="We’re Here to Help"
        description="Have a question about learning, tutoring or your account? Send our team a message."
      />
      <div className="contact-layout">
        <div className="contact-details">
          <h2>Contact AVENQORI</h2>
          <p>
            Use the form and our support team can follow up. This frontend demo does not
            send messages to a live server yet.
          </p>
          <div>
            <Headphones /> Learning support
          </div>
          <div>
            <Clock3 /> Support hours: Monday–Friday
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <label>
            Your name
            <input
              name="name"
              value={form.name}
              onChange={update}
              placeholder="Full name"
            />
          </label>
          <label>
            Email address
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={update}
              placeholder="you@example.com"
            />
          </label>
          <label>
            Subject
            <input
              name="subject"
              value={form.subject}
              onChange={update}
              placeholder="How can we help?"
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={update}
              rows="5"
              placeholder="Write your message..."
            />
          </label>
          <button className="btn" type="submit">
            Send message <ArrowRight size={15} />
          </button>
        </form>
      </div>
    </>
  );
}

function LegalPage({ privacy = false }) {
  return (
    <div className="legal-copy">
      <h2>{privacy ? "Your information" : "Using the platform"}</h2>
      <p>
        {privacy
          ? "A production version of AVENQORI should clearly explain what account information is collected, why it is used, how long it is retained and how users can request access or deletion."
          : "A production version of AVENQORI should publish complete terms covering account responsibilities, tutor and learner conduct, payments, cancellations, intellectual property and dispute handling."}
      </p>
      <h2>{privacy ? "Your choices" : "Platform availability"}</h2>
      <p>
        {privacy
          ? "Users should be able to review their account details and contact the platform team about privacy-related requests. This frontend demonstration does not collect or transmit form data to a live service."
          : "Features in this frontend are demonstration interfaces. Live courses, bookings, payments and account services require a connected backend and applicable policies."}
      </p>
      <p className="legal-note">
        This is placeholder legal content for development and must be reviewed by a
        qualified professional before public launch.
      </p>
    </div>
  );
}

export default function InfoPage({ title, page }) {
  let content;
  switch (page) {
    case "courses":
      content = <CoursesPage />;
      break;
    case "tutors":
      content = <TutorsPage />;
      break;
    case "features":
      content = <FeaturesPage />;
      break;
    case "pricing":
      content = <PricingPage />;
      break;
    case "about":
      content = <AboutPage />;
      break;
    case "contact":
      content = <ContactPage />;
      break;
    case "privacy":
      content = (
        <>
          <PageIntro
            title={title}
            description="How a live AVENQORI service should explain privacy and user data."
          />
          <LegalPage privacy />
        </>
      );
      break;
    case "terms":
      content = (
        <>
          <PageIntro
            title={title}
            description="Important information about using the AVENQORI learning platform."
          />
          <LegalPage />
        </>
      );
      break;
    default:
      content = (
        <>
          <PageIntro
            title={title}
            description="The page you requested could not be found."
          />
          <Link className="btn" to="/">
            Return to home <ArrowRight size={15} />
          </Link>
        </>
      );
  }
  return <main className="info-page wrap">{content}</main>;
}
