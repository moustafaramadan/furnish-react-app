import "./About.css";
import aboutImage from "../assets/images/gulsen (5).jpg";

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="py-lg-8 py-5 text-center about-hero">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h1 className="display-5 mb-3">About Our Store</h1>
              <p className="text-muted lead">
                Discover the story behind Furnish — where design meets comfort.
                We craft modern furniture that elevates your home experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-lg-8 py-5 about-mission">
        <div className="container">
          <div className="row align-items-center g-5 mx-lg-8">
            <div className="col-md-6">
              <img
                src={aboutImage}
                alt="Gulsen furniture"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <div className="ms-lg-8">
                <h2 className="mb-3">Our Mission</h2>
                <p className="text-muted">
                  At Furnish, our mission is to bring timeless style and comfort
                  to every home. We combine craftsmanship, innovation, and
                  sustainability to create furniture that lasts for generations.
                </p>
                <p className="text-muted">
                  From sourcing eco-friendly materials to perfecting every curve
                  and detail, we are dedicated to creating pieces that bring
                  harmony and functionality to your living space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-lg-9 py-5 bg-light about-values">
        <div className="container text-center">
          <h2 className="mb-5">Our Core Values</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card rounded-0 border-0 shadow-sm h-100 p-4 value-card">
                <div className="value-icon mb-3">
                  <i className="bi bi-star-fill fs-1 text-warning"></i>
                </div>
                <h5 className="mb-3">Quality</h5>
                <p className="text-muted">
                  We use premium materials and employ skilled craftsmen to
                  ensure every piece meets our high standards.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded-0 border-0 shadow-sm h-100 p-4 value-card">
                <div className="value-icon mb-3">
                  <i className="bi bi-leaf-fill fs-1 text-success"></i>
                </div>
                <h5 className="mb-3">Sustainability</h5>
                <p className="text-muted">
                  We are committed to eco-friendly practices and sustainable
                  sourcing in all our operations.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded-0 border-0 shadow-sm h-100 p-4 value-card">
                <div className="value-icon mb-3">
                  <i className="bi bi-heart-fill fs-1 text-danger"></i>
                </div>
                <h5 className="mb-3">Customer Care</h5>
                <p className="text-muted">
                  Your satisfaction is our priority. We provide exceptional
                  service and support at every step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
