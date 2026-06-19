import "./TestimonialSection.css";

function TestimonialSection() {
  return (
    <section
      className="testimonial-section py-lg-11 py-6"
      style={{
        backgroundImage:
          "url(./assets/images/couch-with-cushions-glass-table.jpg)",
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
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.."
                  </p>
                  <div className="lh-1 testimonial-author">
                    <h4 className="fs-5 mb-1">Reem Ebrahim</h4>
                    <small className="text-sm">CEO, Company Name</small>
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
