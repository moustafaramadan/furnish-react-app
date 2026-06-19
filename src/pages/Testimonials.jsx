import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "John Deo",
      position: "CEO, Company Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: "./assets/images/avatar/avatar-1.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Design Director",
      text: "Fantastic furniture! The quality is exceptional and the delivery was fast. Highly recommend Furnish for anyone looking for modern furniture.",
      avatar: "./assets/images/avatar/avatar-2.jpg",
      rating: 5,
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "Entrepreneur",
      text: "Great customer service and amazing products. I ordered multiple items for my office and everything was perfect.",
      avatar: "./assets/images/avatar/avatar-3.jpg",
      rating: 4,
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      position: "Home Owner",
      text: "The sofa I ordered is absolutely beautiful and so comfortable. It transformed my living room completely!",
      avatar: "./assets/images/avatar/avatar-1.jpg",
      rating: 5,
    },
    {
      id: 5,
      name: "David Brown",
      position: "Architect",
      text: "As a professional, I appreciate the attention to detail and modern design of these furniture pieces.",
      avatar: "./assets/images/avatar/avatar-2.jpg",
      rating: 5,
    },
    {
      id: 6,
      name: "Lisa Anderson",
      position: "Interior Designer",
      text: "I use Furnish products in all my client projects. The quality and style never disappoint.",
      avatar: "./assets/images/avatar/avatar-3.jpg",
      rating: 5,
    },
  ];

  return (
    <div className="testimonials-page">
      {/* Page Header */}
      <section className="py-lg-8 py-5 text-center testimonials-header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h1 className="display-5 mb-3">Customer Testimonials</h1>
              <p className="text-muted lead">
                See what our satisfied customers have to say about their Furnish
                experience.
              </p>
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
                        className={`bi bi-star-fill ${i < testimonial.rating ? "text-warning" : "text-muted"}`}
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
              <h2 className="mb-4">Share Your Experience</h2>
              <p className="text-muted lead mb-4">
                We'd love to hear about your Furnish experience. Share your
                feedback and help others make informed decisions.
              </p>
              <button className="btn btn-primary btn-lg">Write a Review</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
