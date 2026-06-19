import { useEffect, useState } from "react";
import "./Contact.css";
import { fetchContactPage } from "../lib/sanityClient";

function Contact() {
  const [content, setContent] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let isMounted = true;

    fetchContactPage().then((data) => {
      if (isMounted) setContent(data);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setTimeout(() => setSubmitted(false), 3000);
  };

  if (!content) return null;

  const renderLines = (lines = []) =>
    lines.map((line) => (
      <span key={line}>
        {line}
        <br />
      </span>
    ));

  return (
    <div className="contact-page">
      <section className="py-lg-8 py-5 text-center contact-header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <p className="text-muted lead lead-highlight">
                {content.introText}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-lg-10 py-5 contact-content">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="contact-form-wrapper">
                <h2 className="mb-4">{content.formTitle}</h2>

                {submitted && (
                  <div className="alert alert-success mb-4" role="alert">
                    {content.successMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control form-control-lg"
                        placeholder={content.namePlaceholder}
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        name="email"
                        className="form-control form-control-lg"
                        placeholder={content.emailPlaceholder}
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <input
                      type="text"
                      name="subject"
                      className="form-control form-control-lg"
                      placeholder={content.subjectPlaceholder}
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <textarea
                      name="message"
                      className="form-control form-control-lg"
                      placeholder={content.messagePlaceholder}
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg">
                    {content.submitLabel}
                  </button>
                </form>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="contact-info">
                <h2 className="mb-5">{content.infoTitle}</h2>

                <div className="contact-item mb-5">
                  <div className="contact-icon">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div className="contact-details">
                    <h6>{content.addressTitle}</h6>
                    <p>{renderLines(content.addressLines)}</p>
                  </div>
                </div>

                <div className="contact-item mb-5">
                  <div className="contact-icon">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div className="contact-details">
                    <h6>{content.phoneTitle}</h6>
                    <p>{renderLines(content.phoneLines)}</p>
                  </div>
                </div>

                <div className="contact-item mb-5">
                  <div className="contact-icon">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div className="contact-details">
                    <h6>{content.emailTitle}</h6>
                    <p>{renderLines(content.emailLines)}</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="bi bi-clock-fill"></i>
                  </div>
                  <div className="contact-details">
                    <h6>{content.hoursTitle}</h6>
                    <p>{renderLines(content.hoursLines)}</p>
                  </div>
                </div>

                <div className="social-links mt-5 pt-3 border-top">
                  <h6 className="mb-3">{content.socialTitle}</h6>
                  <div className="d-flex gap-3">
                    {(content.socialLinks || []).map((link) => (
                      <a
                        href={link.url || "#"}
                        className="social-icon"
                        key={`${link.label}-${link.url}`}
                        aria-label={link.label}
                      >
                        <i className={`bi ${link.icon || "bi-link-45deg"}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
