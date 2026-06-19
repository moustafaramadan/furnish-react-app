import { useState } from "react";
import "./NewsletterSection.css";

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="newsletter-section py-lg-10 py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="mb-5 newsletter-title">
              Subscribe to our Newsletter
            </h2>

            {submitted && (
              <div className="alert alert-success mb-4" role="alert">
                Thank you for subscribing!
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="d-flex justify-content-center gap-2 flex-column flex-sm-row"
            >
              <input
                type="email"
                className="form-control w-lg-50 w-100 newsletter-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary btn-subscribe">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
