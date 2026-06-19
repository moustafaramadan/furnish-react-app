import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import { fetchProducts, fetchProductsPage } from "../lib/sanityClient";

function Products() {
  const [products, setProducts] = useState([]);
  const [priceFilter, setPriceFilter] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [content, setContent] = useState(null);

  useEffect(() => {
    let isMounted = true;

    Promise.all([fetchProducts(), fetchProductsPage()]).then(
      ([items, page]) => {
        if (!isMounted) return;
        setProducts(items);
        setContent(page);
      },
    );

    return () => {
      isMounted = false;
    };
  }, []);

  const getPriceRange = (price) => {
    if (price < 100) return "under-100";
    if (price < 300) return "100-300";
    return "above-300";
  };

  const handlePriceChange = (range) => {
    setPriceFilter((prev) =>
      prev.includes(range) ? prev.filter((p) => p !== range) : [...prev, range],
    );
  };

  const handleCategoryChange = (category) => {
    setCategoryFilter((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const filteredProducts = products.filter((product) => {
    const priceRange = getPriceRange(product.priceValue);
    const priceMatch =
      priceFilter.length === 0 || priceFilter.includes(priceRange);
    const categoryMatch =
      categoryFilter.length === 0 || categoryFilter.includes(product.category);
    return priceMatch && categoryMatch;
  });

  const categories = content?.categories || [];

  if (!content) return null;

  return (
    <div className="products-page">
      {/* Page Header */}
      <section className="py-lg-8 py-5 text-center products-header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h1 className="display-5 mb-3">{content.title}</h1>
              <p className="text-muted lead">{content.intro}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Page Content */}
      <section className="py-lg-8 py-5 products-content">
        <div className="container">
          <div className="row">
            {/* Sidebar Filters */}
            <aside className="col-lg-3 mb-4 filters-sidebar">
              <h3 className="fw-semibold mb-3 h5">{content.filtersTitle}</h3>

              {/* Category Filter */}
              <div className="mb-4 bg-light border bg-opacity-50 p-4 filter-section">
                <h6 className="fw-semibold mb-3 text-xs text-uppercase">
                  {content.categoryTitle}
                </h6>
                <ul className="list-unstyled lh-lg small mb-0">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id={`cat-${cat}`}
                          checked={categoryFilter.includes(cat)}
                          onChange={() => handleCategoryChange(cat)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`cat-${cat}`}
                        >
                          {cat}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Filter */}
              <div className="mb-4 bg-light border bg-opacity-50 p-4 filter-section">
                <h6 className="fw-semibold mb-3 text-xs text-uppercase">
                  {content.priceTitle}
                </h6>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="price1"
                    checked={priceFilter.includes("under-100")}
                    onChange={() => handlePriceChange("under-100")}
                  />
                  <label className="form-check-label" htmlFor="price1">
                    {content.under100Label}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="price2"
                    checked={priceFilter.includes("100-300")}
                    onChange={() => handlePriceChange("100-300")}
                  />
                  <label className="form-check-label" htmlFor="price2">
                    {content.between100And300Label}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="price3"
                    checked={priceFilter.includes("above-300")}
                    onChange={() => handlePriceChange("above-300")}
                  />
                  <label className="form-check-label" htmlFor="price3">
                    {content.above300Label}
                  </label>
                </div>
              </div>

              {/* Reset Filters */}
              <button
                className="btn btn-outline-primary w-100"
                onClick={() => {
                  setPriceFilter([]);
                  setCategoryFilter([]);
                }}
              >
                {content.resetLabel}
              </button>
            </aside>

            {/* Products Grid */}
            <div className="col-lg-9 products-grid">
              {filteredProducts.length > 0 ? (
                <div className="row g-4">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="col-md-4 col-sm-6">
                      <div className="product-item">
                        <div className="product-img-wrapper">
                          <Link to={`/product/${product.id}`}>
                            <img
                              src={product.image}
                              alt={product.name}
                              className="img-fluid product-img"
                            />
                          </Link>
                          <div className="overlay">
                            <button className="btn btn-primary btn-sm">
                              {content.addToCartLabel}
                            </button>
                          </div>
                        </div>
                        <div className="product-info text-center mt-3">
                          <h5 className="product-name mb-2">{product.name}</h5>
                          <p className="product-category text-muted small mb-2">
                            {product.category}
                          </p>
                          <p className="product-price fw-bold">
                            {product.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-5">
                  <p className="text-muted">{content.emptyText}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
