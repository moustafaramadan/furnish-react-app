import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { fetchSiteSettings } from "../../lib/sanityClient";

function Footer() {
  const currentYear = new Date().getFullYear();
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

  const navLinks = settings?.navLinks || [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];
  const socialLinks = settings?.socialLinks || [];

  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <h5 className="mb-4">{settings?.brandName || "Gulsen"}</h5>
            <p className="text-muted">
              {settings?.footerDescription ||
                "Modern furniture solutions for your home and office. Quality craftsmanship with contemporary design."}
            </p>
          </div>
          <div className="col-md-4">
            <h6 className="mb-4 fw-bold">Quick Links</h6>
            <ul className="list-unstyled footer-links">
              {navLinks.map((link) => (
                <li key={`${link.label}-${link.path}`}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-4">
            <h6 className="mb-4 fw-bold">Contact</h6>
            <p className="text-muted">
              <i className="bi bi-telephone me-2"></i>
              {settings?.phone || "+901234576"}
            </p>
            <p className="text-muted">
              <i className="bi bi-envelope me-2"></i>
              {settings?.email || "info@furnish.com"}
            </p>
            <p className="text-muted">
              <i className="bi bi-geo-alt me-2"></i>
              {settings?.address || "123 Main Street, City, Country"}
            </p>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-md-6 text-muted">
            <p className="mb-0">
              &copy; {currentYear}{" "}
              {settings?.copyrightText || "Furnish. All rights reserved."}
            </p>
          </div>
          <div className="col-md-6 text-end">
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={`${link.label}-${link.url}`}
                  href={link.url || "#"}
                  className={`text-muted ${index < socialLinks.length - 1 ? "me-3" : ""}`}
                  aria-label={link.label}
                >
                  <i className={`bi ${link.icon || "bi-link-45deg"}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
