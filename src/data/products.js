import product1 from "../assets/images/product-img-1.jpg";
import product2 from "../assets/images/product-img-2.jpg";
import product3 from "../assets/images/product-img-3.jpg";
import product5 from "../assets/images/product-img-5.jpg";
import product6 from "../assets/images/product-img-6.jpg";

const products = [
  {
    id: "modern-chair",
    name: "Modern Chair",
    image: product1,
    oldPrice: "$59.00",
    price: "$29.00",
    description:
      "A clean, comfortable chair designed for everyday living rooms, reading corners, and compact home offices.",
    details: ["Solid wooden frame", "Soft upholstered seat", "Easy to clean fabric"],
    delivery: "Delivery within 3-5 business days",
  },
  {
    id: "floor-lamp",
    name: "Floor Lamp",
    image: product2,
    oldPrice: "$95.00",
    price: "$89.00",
    description:
      "A simple floor lamp that adds warm light beside sofas, beds, and lounge chairs.",
    details: ["Stable metal base", "Warm ambient light", "Works with standard bulbs"],
    delivery: "Delivery within 2-4 business days",
  },
  {
    id: "high-back-boss-chair",
    name: "High Back Boss Chair",
    image: product5,
    oldPrice: "$78.00",
    price: "$68.00",
    description:
      "A supportive high-back chair made for long work sessions with a polished office look.",
    details: ["High back support", "Padded armrests", "Adjustable sitting height"],
    delivery: "Delivery within 4-6 business days",
  },
  {
    id: "fancy-metal-clock",
    name: "Fancy Metal Clock",
    image: product6,
    oldPrice: "$58.00",
    price: "$38.00",
    description:
      "A decorative metal clock that brings a refined finishing detail to walls and shelves.",
    details: ["Metal finish", "Quiet movement", "Lightweight wall mounting"],
    delivery: "Delivery within 2-4 business days",
  },
  {
    id: "comfort-chair",
    name: "Comfort Chair",
    image: product3,
    oldPrice: "$38.00",
    price: "$28.00",
    description:
      "A cozy accent chair with a relaxed profile for bedrooms, corners, and casual seating areas.",
    details: ["Comfortable seat padding", "Compact footprint", "Modern neutral style"],
    delivery: "Delivery within 3-5 business days",
  },
];

export default products;
