import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/gulsen.png";
import { fetchSiteSettings } from "../../lib/sanityClient";

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetchSiteSettings().then((data) => {
      if (isMounted) setSettings(data);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const isActive = (path) => (location.pathname === path ? "active" : "");
  const navLinks = settings?.navLinks || [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-2 sticky-top navbar-custom">
      <div className="container-fluid px-0">
        <Link className="navbar-brand" to="/">
          <img
            src={settings?.logo || logo}
            alt={settings?.brandName || "Gulsen"}
            className="navbar-logo"
          />
        </Link>

        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""} justify-content-center`}
        >
          <ul className="navbar-nav mb-2 mb-lg-0 gap-lg-3">
            {navLinks.map((link) => (
              <li className="nav-item" key={`${link.label}-${link.path}`}>
                <Link
                  className={`nav-link fw-medium ${isActive(link.path)}`}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
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
