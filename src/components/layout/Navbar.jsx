import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/gulsen.png";

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-2 sticky-top navbar-custom">
      <div className="container-fluid px-0">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Gulsen" className="navbar-logo" />
        </Link>

        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""} justify-content-center`}
        >
          <ul className="navbar-nav mb-2 mb-lg-0 gap-lg-3">
            <li className="nav-item">
              <Link
                className={`nav-link fw-medium ${isActive("/")}`}
                to="/"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link fw-medium ${isActive("/about")}`}
                to="/about"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link fw-medium ${isActive("/contact")}`}
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <button
          className="navbar-toggler d-lg-none border-0 shadow-none"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`bi ${isMenuOpen ? "bi-x-lg" : "bi-list"} fs-2`}></i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
