import { useEffect, useState } from "react";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./HeroSlider.css";
import { fetchHeroSlides } from "../../lib/sanityClient";

function HeroSlider() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    let isMounted = true;

    fetchHeroSlides().then((items) => {
      if (isMounted) setSlides(items);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!slides.length) return undefined;

    const swiper = new Swiper("#swiper-hero", {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 1,
      spaceBetween: 100,
      speed: 800,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });

    return () => swiper.destroy(true, true);
  }, [slides]);

  return (
    <div className="hero-slider-section py-lg-8 pt-6">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-12">
            <div
              className="swiper-container swiper swiper-pagination-light"
              id="swiper-hero"
            >
              <div className="swiper-wrapper">
                {slides.map((slide) => (
                  <div key={slide.id} className="swiper-slide px-md-8">
                    <div className="slide-content position-relative text-center image-effect-container">
                      <img
                        src={slide.image}
                        alt={slide.title || ""}
                        className="hero-slide-image"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="swiper-pagination mt-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSlider;
