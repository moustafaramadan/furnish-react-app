import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

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

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="py-lg-8 py-5 text-center contact-header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <p className="text-muted lead">
                Have questions? We'd love to hear from you. Get in touch with
                our friendly team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-lg-10 py-5 contact-content">
        <div className="container">
          <div className="row g-5">
            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="contact-form-wrapper">
                <h2 className="mb-4">Send us a Message</h2>

                {submitted && (
                  <div className="alert alert-success mb-4" role="alert">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control form-control-lg"
                        placeholder="Your Name"
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
                        placeholder="Your Email"
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
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <textarea
                      name="message"
                      className="form-control form-control-lg"
                      placeholder="Your Message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="col-lg-5">
              <div className="contact-info">
                <h2 className="mb-5">Contact Information</h2>

                <div className="contact-item mb-5">
                  <div className="contact-icon">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div className="contact-details">
                    <h6>Address</h6>
                    <p>
                      123 Main Street
                      <br />
                      New York, NY 10001
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="contact-item mb-5">
                  <div className="contact-icon">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div className="contact-details">
                    <h6>Phone</h6>
                    <p>
                      +1 (555) 123-4576
                      <br />
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>

                <div className="contact-item mb-5">
                  <div className="contact-icon">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div className="contact-details">
                    <h6>Email</h6>
                    <p>
                      info@furnish.com
                      <br />
                      support@furnish.com
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="bi bi-clock-fill"></i>
                  </div>
                  <div className="contact-details">
                    <h6>Business Hours</h6>
                    <p>
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="social-links mt-5 pt-3 border-top">
                  <h6 className="mb-3">Follow Us</h6>
                  <div className="d-flex gap-3">
                    <a href="#" className="social-icon">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-lg-8 py-5 contact-map">
        <div className="container-fluid px-0">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Furnish Store Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
