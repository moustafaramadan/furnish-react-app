import { useEffect, useState } from "react";
import "./About.css";
import { fetchAboutPage } from "../lib/sanityClient";

function About() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetchAboutPage().then((data) => {
      if (isMounted) setContent(data);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!content) return null;

  return (
    <div className="about-page">
      <section className="py-lg-8 py-5 text-center about-hero">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h1 className="display-5 mb-3">{content.heroTitle}</h1>
              <p className="text-muted lead">{content.heroText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-lg-8 py-5 about-mission">
        <div className="container">
          <div className="row align-items-center g-5 mx-lg-8">
            <div className="col-md-6">
              <img
                src={content.missionImage}
                alt={content.missionTitle}
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <div className="ms-lg-8">
                <h2 className="mb-3">{content.missionTitle}</h2>
                {(content.missionParagraphs || []).map((paragraph) => (
                  <p className="text-muted" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-lg-9 py-5 bg-light about-values">
        <div className="container text-center">
          <h2 className="mb-5">{content.valuesTitle}</h2>
          <div className="row g-4">
            {(content.values || []).map((value) => (
              <div className="col-md-4" key={value.title}>
                <div className="card rounded-0 border-0 shadow-sm h-100 p-4 value-card">
                  <div className="value-icon mb-3">
                    <i
                      className={`bi ${value.icon || "bi-star-fill"} fs-1 ${
                        value.iconColor || "text-warning"
                      }`}
                    ></i>
                  </div>
                  <h5 className="mb-3">{value.title}</h5>
                  <p className="text-muted">{value.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
