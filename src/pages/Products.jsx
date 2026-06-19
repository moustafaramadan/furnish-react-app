import { useState } from "react";
import "./Products.css";

function Products() {
  const [priceFilter, setPriceFilter] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);

  const products = [
    {
      id: 1,
      name: "Modern Chair",
      price: 89,
      category: "Office",
      image: "./assets/images/product-img-1.jpg",
    },
    {
      id: 2,
      name: "Floor Lamp",
      price: 45,
      category: "Decor",
      image: "./assets/images/product-img-2.jpg",
    },
    {
      id: 3,
      name: "High Back Boss Chair",
      price: 199,
      category: "Office",
      image: "./assets/images/product-img-5.jpg",
    },
    {
      id: 4,
      name: "Fancy Metal Clock",
      price: 65,
      category: "Decor",
      image: "./assets/images/product-img-6.jpg",
    },
    {
      id: 5,
      name: "Comfort Chair",
      price: 299,
      category: "Living Room",
      image: "./assets/images/product-img-3.jpg",
    },
    {
      id: 6,
      name: "Sofa Bed",
      price: 599,
      category: "Bedroom",
      image: "./assets/images/product-img-1.jpg",
    },
  ];

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
    const priceRange = getPriceRange(product.price);
    const priceMatch =
      priceFilter.length === 0 || priceFilter.includes(priceRange);
    const categoryMatch =
      categoryFilter.length === 0 || categoryFilter.includes(product.category);
    return priceMatch && categoryMatch;
  });

  return (
    <div className="products-page">
      {/* Page Header */}
      <section className="py-lg-8 py-5 text-center products-header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h1 className="display-5 mb-3">Product List</h1>
              <p className="text-muted lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quaerat ad sint quae sunt, molestiae consectetur vitae! Impedit
                nulla ea provident quis est eos dolores enim.
              </p>
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
              <h3 className="fw-semibold mb-3 h5">Filters</h3>

              {/* Category Filter */}
              <div className="mb-4 bg-light border bg-opacity-50 p-4 filter-section">
                <h6 className="fw-semibold mb-3 text-xs text-uppercase">
                  Category
                </h6>
                <ul className="list-unstyled lh-lg small mb-0">
                  {["Living Room", "Bedroom", "Office", "Decor"].map((cat) => (
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
                  Price
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
                    Under $100
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
                    $100-$300
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
                    Above $300
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
                Reset Filters
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
                          <img
                            src={product.image}
                            alt={product.name}
                            className="img-fluid product-img"
                          />
                          <div className="overlay">
                            <button className="btn btn-primary btn-sm">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                        <div className="product-info text-center mt-3">
                          <h5 className="product-name mb-2">{product.name}</h5>
                          <p className="product-category text-muted small mb-2">
                            {product.category}
                          </p>
                          <p className="product-price fw-bold">
                            ${product.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-5">
                  <p className="text-muted">
                    No products found. Try adjusting your filters.
                  </p>
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
