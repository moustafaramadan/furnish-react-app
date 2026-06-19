import { useEffect, useState } from "react";
import "./NewsletterSection.css";
import { fetchHomePage, getFallbackHomePage } from "../../lib/sanityClient";

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [content, setContent] = useState(getFallbackHomePage());

  useEffect(() => {
    let isMounted = true;

    fetchHomePage().then((data) => {
      if (isMounted) setContent(data);
    });

    return () => {
      isMounted = false;
    };
  }, []);

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
              {content.newsletterTitle}
            </h2>

            {submitted && (
              <div className="alert alert-success mb-4" role="alert">
                {content.newsletterSuccess}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="d-flex justify-content-center gap-2 flex-column flex-sm-row"
            >
              <input
                type="email"
                className="form-control w-lg-50 w-100 newsletter-input"
                placeholder={content.newsletterPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary btn-subscribe">
                {content.newsletterButton}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
