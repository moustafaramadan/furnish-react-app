import { useEffect, useState } from "react";
import "./Testimonials.css";
import { fetchTestimonials, fetchTestimonialsPage } from "../lib/sanityClient";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [pageContent, setPageContent] = useState(null);

  useEffect(() => {
    let isMounted = true;

    Promise.all([fetchTestimonials(), fetchTestimonialsPage()]).then(
      ([items, page]) => {
        if (!isMounted) return;
        setTestimonials(items);
        setPageContent(page);
      },
    );

    return () => {
      isMounted = false;
    };
  }, []);

  if (!pageContent) return null;

  return (
    <div className="testimonials-page">
      {/* Page Header */}
      <section className="py-lg-8 py-5 text-center testimonials-header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h1 className="display-5 mb-3">{pageContent.title}</h1>
              <p className="text-muted lead">{pageContent.intro}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-lg-10 py-5 testimonials-content">
        <div className="container">
          <div className="row g-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="col-lg-4 col-md-6">
                <div className="testimonial-card card border-0 shadow-sm h-100">
                  {/* Rating */}
                  <div className="rating mb-3 px-4 pt-4">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`bi bi-star-fill ${
                          i < testimonial.rating ? "text-warning" : "text-muted"
                        }`}
                      ></i>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <div className="card-body">
                    <p className="testimonial-text">{testimonial.text}</p>
                  </div>

                  {/* Author Info */}
                  <div className="card-footer bg-transparent border-top px-4 py-3 pb-4">
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="avatar-img"
                      />
                      <div className="author-info">
                        <h6 className="mb-0 author-name">{testimonial.name}</h6>
                        <small className="text-muted author-position">
                          {testimonial.position}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-lg-8 py-5 testimonials-cta bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 className="mb-4">{pageContent.ctaTitle}</h2>
              <p className="text-muted lead mb-4">{pageContent.ctaText}</p>
              <button className="btn btn-primary btn-lg">
                {pageContent.ctaButtonLabel}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
