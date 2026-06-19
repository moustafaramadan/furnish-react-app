import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./ProductsSection.css";
import AnimateOnScroll from "../shared/AnimateOnScroll";
import products from "../../data/products";

function ProductsSection() {
  return (
    <section className="products-section py-lg-10 mx-3 mx-lg-0 bg-white">
      <div className="container">
        <div className="row justify-content-center mb-md-8 mb-4">
          <div className="col-lg-8 text-center mb-8">
            <h2 className="display-4 mb-3">Our Favourite Collection</h2>
            <p className="mb-0 lead">
              We are inspired by the realities of life today, in which
              traditional divides between personal and professional space are
              more fluid.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <Swiper
              modules={[Pagination]}
            </div>
          </div>

          <div className="col-lg-12">
            <Swiper
              modules={[Pagination]}
              slidesPerView={3}
              spaceBetween={30}
              speed={400}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="pb-10">
                    <AnimateOnScroll>
                      <div className="product-card">
                        <div className="product-image-wrapper">
                          <Link to={`/product/${product.id}`}>
                            <img
                              src={product.image}
                              alt={product.name}
                              className="product-image"
                            />
                          </Link>
                        </div>
                        <div className="text-center product-info">
                          <h3 className="mt-3 h5">
                            <Link to={`/product/${product.id}`}>
                              {product.name}
                            </Link>
                          </h3>
                          <div className="product-price">
                            <span className="old-price">
                              {product.oldPrice}
                            </span>
                            <span className="fw-semibold">{product.price}</span>
                          </div>
                        </div>
                      </div>
                    </AnimateOnScroll>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-pagination mb-3"></div>
            </Swiper>
          </div>
      </div>
    </section>
  );
}

export default ProductsSection;
