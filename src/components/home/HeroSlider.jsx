import { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./HeroSlider.css";
import gulsen1 from "../../assets/images/slider/gulsen (1).jpg";
import gulsen2 from "../../assets/images/slider/gulsen (2).jpg";
import gulsen3 from "../../assets/images/slider/gulsen (3).jpg";

function HeroSlider() {
  useEffect(() => {
    new Swiper("#swiper-hero", {
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
  }, []);

  const slides = [
    {
      id: 1,
      image: gulsen1,
      title: "Modern Living",
      subtitle: "Comfort meets Style",
    },
    {
      id: 2,
      image: gulsen2,
      title: "Elegant Design",
      subtitle: "Crafted with Passion",
    },
    {
      id: 3,
      image: gulsen3,
      title: "Premium Quality",
      subtitle: "Built to Last",
    },
  ];

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
                        alt=""
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
