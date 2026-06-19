import { createClient } from "@sanity/client";
import fallbackProducts from "../data/products";
import testimonialBg from "../assets/images/couch-with-cushions-glass-table.jpg";
import avatar1 from "../assets/images/avatar/avatar-1.jpg";
import avatar2 from "../assets/images/avatar/avatar-2.jpg";
import avatar3 from "../assets/images/avatar/avatar-3.jpg";
import logo from "../assets/images/gulsen.png";
import aboutImage from "../assets/images/gulsen (5).jpg";
import gulsen1 from "../assets/images/slider/gulsen (1).jpg";
import gulsen2 from "../assets/images/slider/gulsen (2).jpg";
import gulsen3 from "../assets/images/slider/gulsen (3).jpg";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET || "production";
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || "2024-06-01";

// Debug (helps confirm the app is reading from the expected Sanity project/dataset)
// Will show up only in dev; safe to keep for troubleshooting.
// eslint-disable-next-line no-console
console.debug("[SanityClient] projectId/dataset/apiVersion:", {
  projectId,
  dataset,
  apiVersion,
});

export const isSanityConfigured =
  Boolean(projectId) && projectId !== "your_sanity_project_id";

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null;

const formatCurrency = (value) => {
  if (value === undefined || value === null || value === "") return "";
  if (typeof value === "string") return value;
  return `$${Number(value).toFixed(2)}`;
};

const normalizeProduct = (product) => ({
  ...product,
  id: product.slug || product.id || product._id,
  image: product.image || product.imageUrl,
  oldPrice: formatCurrency(product.oldPrice),
  price: formatCurrency(product.price),
  priceValue:
    typeof product.price === "number"
      ? product.price
      : Number(String(product.price).replace(/[^0-9.]/g, "")) || 0,
  details: product.details || [],
});

const fallbackTestimonials = [
  {
    id: "reem-ebrahim",
    author: "Reem Ebrahim",
    name: "Reem Ebrahim",
    position: "CEO, Company Name",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..",
    backgroundImage: testimonialBg,
    avatar: avatar1,
    rating: 5,
  },
  {
    id: "sarah-johnson",
    author: "Sarah Johnson",
    name: "Sarah Johnson",
    position: "Design Director",
    quote:
      "Fantastic furniture! The quality is exceptional and the delivery was fast.",
    text: "Fantastic furniture! The quality is exceptional and the delivery was fast.",
    avatar: avatar2,
    rating: 5,
  },
  {
    id: "michael-chen",
    author: "Michael Chen",
    name: "Michael Chen",
    position: "Entrepreneur",
    quote:
      "Great customer service and amazing products. I ordered multiple items for my office and everything was perfect.",
    text: "Great customer service and amazing products. I ordered multiple items for my office and everything was perfect.",
    avatar: avatar3,
    rating: 4,
  },
];

const normalizeTestimonial = (testimonial) => ({
  ...testimonial,
  id: testimonial._id || testimonial.id,
  name: testimonial.author || testimonial.name,
  text: testimonial.quote || testimonial.text,
  avatar: testimonial.avatar || testimonial.avatarUrl,
  backgroundImage:
    testimonial.backgroundImage || testimonial.backgroundImageUrl,
  rating: testimonial.rating || 5,
});

const socialLinks = [
  { label: "Facebook", icon: "bi-facebook", url: "#" },
  { label: "Twitter", icon: "bi-twitter", url: "#" },
  { label: "Instagram", icon: "bi-instagram", url: "#" },
  { label: "LinkedIn", icon: "bi-linkedin", url: "#" },
];

const fallbackSiteSettings = {
  brandName: "Gulsen",
  logo,
  navLinks: [
    { label: "Home", path: "/", order: 0 },
    { label: "About", path: "/about", order: 1 },
    { label: "Products", path: "/products", order: 2 },
    { label: "Testimonials", path: "/testimonials", order: 3 },
    { label: "Contact", path: "/contact", order: 4 },
  ],
  footerDescription:
    "Modern furniture solutions for your home and office. Quality craftsmanship with contemporary design.",
  phone: "+901234576",
  email: "info@furnish.com",
  address: "123 Main Street, City, Country",
  copyrightText: "Furnish. All rights reserved.",
  socialLinks,
};

const fallbackHomePage = {
  productsTitle: "Our Favourite Collection",
  productsIntro:
    "We are inspired by the realities of life today, in which traditional divides between personal and professional space are more fluid.",
  newsletterTitle: "Subscribe to our Newsletter",
  newsletterPlaceholder: "Enter your email",
  newsletterButton: "Subscribe",
  newsletterSuccess: "Thank you for subscribing!",
};

const fallbackHeroSlides = [
  {
    id: "hero-1",
    image: gulsen1,
    title: "Modern Living",
    subtitle: "Comfort meets Style",
  },
  {
    id: "hero-2",
    image: gulsen2,
    title: "Elegant Design",
    subtitle: "Crafted with Passion",
  },
  {
    id: "hero-3",
    image: gulsen3,
    title: "Premium Quality",
    subtitle: "Built to Last",
  },
];

const fallbackAboutPage = {
  heroTitle: "About Our Store",
  heroText:
    "Discover the story behind Furnish - where design meets comfort. We craft modern furniture that elevates your home experience.",
  missionImage: aboutImage,
  missionTitle: "Our Mission",
  missionParagraphs: [
    "At Furnish, our mission is to bring timeless style and comfort to every home. We combine craftsmanship, innovation, and sustainability to create furniture that lasts for generations.",
    "From sourcing eco-friendly materials to perfecting every curve and detail, we are dedicated to creating pieces that bring harmony and functionality to your living space.",
  ],
  valuesTitle: "Our Core Values",
  values: [
    {
      icon: "bi-star-fill",
      iconColor: "text-warning",
      title: "Quality",
      text: "We use premium materials and employ skilled craftsmen to ensure every piece meets our high standards.",
    },
    {
      icon: "bi-leaf-fill",
      iconColor: "text-success",
      title: "Sustainability",
      text: "We are committed to eco-friendly practices and sustainable sourcing in all our operations.",
    },
    {
      icon: "bi-heart-fill",
      iconColor: "text-danger",
      title: "Customer Care",
      text: "Your satisfaction is our priority. We provide exceptional service and support at every step.",
    },
  ],
};

const fallbackContactPage = {
  introText:
    "Have questions? We'd love to hear from you. Get in touch with our friendly team.",
  formTitle: "Send us a Message",
  successMessage: "Thank you for your message! We'll get back to you soon.",
  namePlaceholder: "Your Name",
  emailPlaceholder: "Your Email",
  subjectPlaceholder: "Subject",
  messagePlaceholder: "Your Message",
  submitLabel: "Send Message",
  infoTitle: "Contact Information",
  addressTitle: "Address",
  addressLines: ["123 Main Street", "New York, NY 10001", "United States"],
  phoneTitle: "Phone",
  phoneLines: ["+1 (555) 123-4576", "+1 (555) 987-6543"],
  emailTitle: "Email",
  emailLines: ["info@furnish.com", "support@furnish.com"],
  hoursTitle: "Business Hours",
  hoursLines: [
    "Monday - Friday: 9:00 AM - 6:00 PM",
    "Saturday: 10:00 AM - 4:00 PM",
    "Sunday: Closed",
  ],
  socialTitle: "Follow Us",
  socialLinks,
};

const fallbackProductsPage = {
  title: "Product List",
  intro:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ad sint quae sunt, molestiae consectetur vitae! Impedit nulla ea provident quis est eos dolores enim.",
  filtersTitle: "Filters",
  categoryTitle: "Category",
  categories: ["Living Room", "Bedroom", "Office", "Decor"],
  priceTitle: "Price",
  under100Label: "Under $100",
  between100And300Label: "$100-$300",
  above300Label: "Above $300",
  resetLabel: "Reset Filters",
  addToCartLabel: "Add to Cart",
  emptyText: "No products found. Try adjusting your filters.",
};

const fallbackTestimonialsPage = {
  title: "Customer Testimonials",
  intro:
    "See what our satisfied customers have to say about their Furnish experience.",
  ctaTitle: "Share Your Experience",
  ctaText:
    "We'd love to hear about your Furnish experience. Share your feedback and help others make informed decisions.",
  ctaButtonLabel: "Write a Review",
};

function buildTypeAliases() {
  // When documents are saved with different `_type` names,
  // we try a set of common aliases to still fetch the correct content.
  return {
    homePage: ["homePage", "home", "homePageContent"],
    productsPage: ["productsPage", "products", "productListPage"],
    testimonialsPage: [
      "testimonialsPage",
      "testimonials",
      "customerTestimonialsPage",
    ],
    productDetailsPage: [
      "productDetailsPage",
      "productDetails",
      "productDetailPage",
    ],
  };
}

async function fetchFirstDocument(types, projection, fallback) {
  if (!isSanityConfigured) return fallback;

  const list = Array.isArray(types) ? types : [types];

  try {
    const document = await sanityClient.fetch(
      `*[_type in $types][0]${projection}`,
      { types: list },
    );
    return document ? { ...fallback, ...document } : fallback;
  } catch (error) {
    console.error(`Sanity fetch failed for types:`, list, error);
    return fallback;
  }
}

export function getFallbackHomePage() {
  return fallbackHomePage;
}

export async function fetchSiteSettings() {
  return fetchFirstDocument(
    "siteSettings",
    `{
      brandName,
      "logo": logo.asset->url,
      navLinks[]|order(order asc){label,path,order},
      footerDescription,
      phone,
      email,
      address,
      copyrightText,
      socialLinks[]{label,icon,url}
    }`,
    fallbackSiteSettings,
  );
}

export async function fetchHomePage() {
  const aliases = buildTypeAliases();
  return fetchFirstDocument(
    aliases.homePage,
    `{productsTitle,productsIntro,newsletterTitle,newsletterPlaceholder,newsletterButton,newsletterSuccess}`,
    fallbackHomePage,
  );
}

export async function fetchAboutPage() {
  return fetchFirstDocument(
    "aboutPage",
    `{
      heroTitle,
      heroText,
      "missionImage": missionImage.asset->url,
      missionTitle,
      missionParagraphs,
      valuesTitle,
      values[]{icon,iconColor,title,text}
    }`,
    fallbackAboutPage,
  );
}

export async function fetchContactPage() {
  return fetchFirstDocument(
    "contactPage",
    `{
      introText,
      formTitle,
      successMessage,
      namePlaceholder,
      emailPlaceholder,
      subjectPlaceholder,
      messagePlaceholder,
      submitLabel,
      infoTitle,
      addressTitle,
      addressLines,
      phoneTitle,
      phoneLines,
      emailTitle,
      emailLines,
      hoursTitle,
      hoursLines,
      socialTitle,
      socialLinks[]{label,icon,url}
    }`,
    fallbackContactPage,
  );
}

export async function fetchProductsPage() {
  const aliases = buildTypeAliases();
  return fetchFirstDocument(
    aliases.productsPage,
    `{
      title,
      intro,
      filtersTitle,
      categoryTitle,
      categories,
      priceTitle,
      under100Label,
      between100And300Label,
      above300Label,
      resetLabel,
      addToCartLabel,
      emptyText
    }`,
    fallbackProductsPage,
  );
}

export async function fetchTestimonialsPage() {
  const aliases = buildTypeAliases();
  return fetchFirstDocument(
    aliases.testimonialsPage,
    `{title,intro,ctaTitle,ctaText,ctaButtonLabel}`,
    fallbackTestimonialsPage,
  );
}

const fallbackProductDetailsPage = {
  loadingLabel: "Loading product...",
  notFoundLabel: "Product not found",
  backToHomeLabel: "Back to Home",
  backToProductsLabel: "Back to products",
  purchaseHighlightsTitle: "Purchase Highlights",
  orderViaWhatsappLabel: "Order via WhatsApp",
  contactUsLabel: "Contact Us",
};

export async function fetchProductDetailsPage() {
  const aliases = buildTypeAliases();
  return fetchFirstDocument(
    aliases.productDetailsPage,
    `{
      loadingLabel,
      notFoundLabel,
      backToHomeLabel,
      backToProductsLabel,
      purchaseHighlightsTitle,
      orderViaWhatsappLabel,
      contactUsLabel
    }`,
    fallbackProductDetailsPage,
  );
}

export async function fetchHeroSlides() {
  if (!isSanityConfigured) return fallbackHeroSlides;

  const query = `*[_type == "heroSlide" && active == true]|order(order asc){
    _id,
    title,
    subtitle,
    "image": image.asset->url,
    order
  }`;

  try {
    const slides = await sanityClient.fetch(query);
    return slides.length
      ? slides.map((slide) => ({ ...slide, id: slide._id }))
      : fallbackHeroSlides;
  } catch (error) {
    console.error("Sanity hero slides fetch failed:", error);
    return fallbackHeroSlides;
  }
}

export async function fetchProducts({ featuredOnly = false } = {}) {
  if (!isSanityConfigured) {
    return fallbackProducts.map(normalizeProduct);
  }

  const featuredFilter = featuredOnly ? "&& featured == true" : "";
  const query = `*[_type == "product" ${featuredFilter}]|order(order asc, name asc){
    _id,
    name,
    "slug": slug.current,
    category,
    "image": image.asset->url,
    oldPrice,
    price,
    description,
    details,
    delivery,
    featured,
    order
  }`;

  try {
    const products = await sanityClient.fetch(query);
    return products.length
      ? products.map(normalizeProduct)
      : fallbackProducts.map(normalizeProduct);
  } catch (error) {
    console.error("Sanity products fetch failed:", error);
    return fallbackProducts.map(normalizeProduct);
  }
}

export async function fetchProductBySlug(slug) {
  if (!isSanityConfigured) {
    return fallbackProducts
      .map(normalizeProduct)
      .find((item) => String(item.id) === String(slug));
  }

  const query = `*[_type == "product" && slug.current == $slug][0]{
    _id,
    name,
    "slug": slug.current,
    category,
    "image": image.asset->url,
    oldPrice,
    price,
    description,
    details,
    delivery,
    featured,
    order
  }`;

  try {
    const product = await sanityClient.fetch(query, { slug });
    return (
      (product && normalizeProduct(product)) ||
      fallbackProducts
        .map(normalizeProduct)
        .find((item) => String(item.id) === String(slug)) ||
      null
    );
  } catch (error) {
    console.error("Sanity product fetch failed:", error);
    return fallbackProducts
      .map(normalizeProduct)
      .find((item) => String(item.id) === String(slug));
  }
}

export async function fetchTestimonials({ featuredOnly = false } = {}) {
  if (!isSanityConfigured) {
    return fallbackTestimonials.map(normalizeTestimonial);
  }

  const featuredFilter = featuredOnly ? "&& featured == true" : "";
  const query = `*[_type == "testimonial" ${featuredFilter}]|order(order asc, author asc){
    _id,
    author,
    position,
    quote,
    "avatar": avatar.asset->url,
    "backgroundImage": backgroundImage.asset->url,
    rating,
    featured,
    order
  }`;

  try {
    const testimonials = await sanityClient.fetch(query);
    return testimonials.length
      ? testimonials.map(normalizeTestimonial)
      : fallbackTestimonials.map(normalizeTestimonial);
  } catch (error) {
    console.error("Sanity testimonials fetch failed:", error);
    return fallbackTestimonials.map(normalizeTestimonial);
  }
}
