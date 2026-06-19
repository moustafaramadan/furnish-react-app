import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <h5 className="mb-4">Gülşen </h5>
            <p className="text-muted">
              Modern furniture solutions for your home and office. Quality
              craftsmanship with contemporary design.
            </p>
          </div>
          <div className="col-md-4">
            <h6 className="mb-4 fw-bold">Quick Links</h6>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6 className="mb-4 fw-bold">Contact</h6>
            <p className="text-muted">
              <i className="bi bi-telephone me-2"></i>+901234576
            </p>
            <p className="text-muted">
              <i className="bi bi-envelope me-2"></i>info@furnish.com
            </p>
            <p className="text-muted">
              <i className="bi bi-geo-alt me-2"></i>123 Main Street, City,
              Country
            </p>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-md-6 text-muted">
            <p className="mb-0">
              &copy; {currentYear} Furnish. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-end">
            <div className="social-links">
              <a href="#" className="text-muted me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-muted me-3">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-muted me-3">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-muted">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
