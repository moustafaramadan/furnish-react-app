import { useEffect, useState } from "react";
import "./TestimonialSection.css";
import { fetchTestimonials } from "../../lib/sanityClient";
import testimonialBg from "../../assets/images/couch-with-cushions-glass-table.jpg";

function TestimonialSection() {
  const [testimonial, setTestimonial] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetchTestimonials({ featuredOnly: true }).then((items) => {
      if (isMounted) setTestimonial(items[0]);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const backgroundImage = testimonial?.backgroundImage || testimonialBg;

  return (
    <section
      className="testimonial-section py-lg-11 py-6"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-lg rounded-0 testimonial-card">
              <div className="card-body p-6">
                <div className="text-center">
                  <p className="fst-italic testimonial-text">
                    "{testimonial?.text ||
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.."}"
                  </p>
                  <div className="lh-1 testimonial-author">
                    <h4 className="fs-5 mb-1">
                      {testimonial?.name || "Reem Ebrahim"}
                    </h4>
                    <small className="text-sm">
                      {testimonial?.position || "CEO, Company Name"}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
