import { Link, useParams } from "react-router-dom";
import products from "../data/products";
import "./ProductDetails.css";

function ProductDetails() {
  const { productId } = useParams();
  const product = products.find(
    (item) => String(item.id) === String(productId),
  );

  if (!product) {
    return (
      <section className="product-details-page py-5">
        <div className="container text-center">
          <h1 className="h2 mb-3">Product not found</h1>
          <Link className="btn btn-primary" to="/">
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hello, I want to buy ${product.name} for ${product.price}.`,
  );
  const whatsappUrl = `https://wa.me/201022935578?text=${whatsappMessage}`;

  return (
    <section className="product-details-page py-lg-8 py-5">
      <div className="container">
        <Link className="product-back-link" to="/">
          <i className="bi bi-arrow-left me-2"></i>
          Back to products
        </Link>

        <div className="row g-5 align-items-center mt-2">
          <div className="col-lg-6">
            <div className="product-details-image image-effect-container">
              <img src={product.image} alt={product.name} />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="product-details-content">
              <h1>{product.name}</h1>
              <p className="product-details-description">
                {product.description}
              </p>

              <div className="product-details-price">
                <span className="old-price">{product.oldPrice}</span>
                <span className="current-price">{product.price}</span>
              </div>

              <div className="purchase-box bg-light p-4 border-start border-primary border-4 mb-4">
                <h2 className="h5 fw-bold mb-3">Purchase Highlights</h2>
                <ul className="list-unstyled mb-0">
                  {product.details.map((detail) => (
                    <li key={detail} className="mb-2 d-flex align-items-center">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      <span>{detail}</span>
                    </li>
                  ))}
                  <li className="d-flex align-items-center">
                    <i className="bi bi-truck text-primary me-2"></i>
                    <span>{product.delivery}</span>
                  </li>
                </ul>
              </div>

              <div className="product-actions d-flex gap-3">
                <a
                  className="btn btn-primary btn-lg flex-grow-1"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-whatsapp me-2"></i>
                  Order via WhatsApp
                </a>
                <Link
                  className="btn btn-outline-dark btn-lg px-4"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
