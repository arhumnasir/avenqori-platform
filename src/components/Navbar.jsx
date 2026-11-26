import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";

const courseLinks = [
  { label: "Browse all courses", to: "/courses" },
  { label: "Live classes", to: "/courses?type=live" },
  { label: "Popular subjects", to: "/courses?type=popular" },
];

const mainLinks = [
  { label: "Find a Tutor", to: "/tutors" },
  { label: "Features", to: "/features" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  const closeMenus = () => {
    setMenuOpen(false);
    setCoursesOpen(false);
  };

  return (
    <header className="navbar">
      <Link to="/" className="brand" onClick={closeMenus}>
      <span className="brand-mark"><img src="/images/brandlogo.png" alt="logo" width={"100px"} /></span>
        
        <span>
          <b>AVENQORI</b>
          <small>Learn · Grow · Achieve</small>
        </span>
      </Link>

      <button
        className="mobile-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((current) => !current)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" end onClick={closeMenus}>
          Home
        </NavLink>

        <div className="nav-drop">
          <button
            type="button"
            aria-expanded={coursesOpen}
            onClick={() => setCoursesOpen((current) => !current)}
          >
            Courses <ChevronDown size={14} />
          </button>
          {coursesOpen && (
            <div className="dropdown">
              {courseLinks.map((item) => (
                <Link key={item.label} to={item.to} onClick={closeMenus}>
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {mainLinks.map((item) => (
          <NavLink key={item.to} to={item.to} onClick={closeMenus}>
            {item.label}
          </NavLink>
        ))}

        <div className="nav-actions">
          <ThemeToggle />
          <Link className="btn btn-white small" to="/login" onClick={closeMenus}>
            Login
          </Link>
          <Link className="btn small" to="/signup" onClick={closeMenus}>
            Sign Up ↗
          </Link>
        </div>
      </nav>
    </header>
  );
}
