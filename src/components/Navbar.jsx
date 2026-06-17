import "./Navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        <div className="logo">
          <a href="#">
            <img
              src="/images/logo.svg"
              alt="Aimfit Logo"
            />
          </a>
        </div>

        {/* Desktop Links */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#get-fit-home" onClick={() => setMenuOpen(false)}>
            Get Fit At Home
          </a>

          <a href="#plan" onClick={() => setMenuOpen(false)}>
            Plan
          </a>

          <a href="#team" onClick={() => setMenuOpen(false)}>
            Instructors
          </a>

          <a href="#family" onClick={() => setMenuOpen(false)}>
            Community
          </a>

          <div className="mobile-buttons">
            <button className="login-btn">
              Login
            </button>

            <button className="signup-btn">
              Sign up
            </button>
          </div>
        </nav>

        {/* Desktop Buttons */}
        <div className="nav-buttons">
          <button className="login-btn">
            Login
          </button>

          <button className="signup-btn">
            Sign up
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </header>
  );
}

export default Navbar;