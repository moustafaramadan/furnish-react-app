import { createClient } from "@sanity/client";

// Load env vars (SANITY_STUDIO_PROJECT_ID / SANITY_STUDIO_DATASET) without extra deps.
// تقدر تشغل الأمر من نفس التيرمنال بعد ما تعمل set للـ env على ويندوز.

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET || "production";
const apiVersion = "2024-06-01";

if (!projectId) {
  throw new Error("Missing SANITY_STUDIO_PROJECT_ID in sanity/.env");
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

const run = async () => {
  // 1) Ensure Documents exist

  // siteSettings
  // Note: logo/social/navLinks are optional in this seed. Images require importing asset refs.
  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    brandName: "Gulsen",
    footerDescription:
      "Modern furniture solutions for your home and office. Quality craftsmanship with contemporary design.",
    phone: "+901234576",
    email: "info@furnish.com",
    address: "123 Main Street, City, Country",
    copyrightText: "Furnish. All rights reserved.",
    navLinks: [
      { label: "Home", path: "/", order: 0 },
      { label: "About", path: "/about", order: 1 },
      { label: "Products", path: "/products", order: 2 },
      { label: "Testimonials", path: "/testimonials", order: 3 },
      { label: "Contact", path: "/contact", order: 4 },
    ],
    socialLinks: [
      { label: "Facebook", icon: "bi-facebook", url: "#" },
      { label: "Twitter", icon: "bi-twitter", url: "#" },
      { label: "Instagram", icon: "bi-instagram", url: "#" },
      { label: "LinkedIn", icon: "bi-linkedin", url: "#" },
    ],
  });

  // homePage
  await client.createOrReplace({
    _id: "homePage",
    _type: "homePage",
    productsTitle: "Our Favourite Collection",
    productsIntro:
      "We are inspired by the realities of life today, in which traditional divides between personal and professional space are more fluid.",
    newsletterTitle: "Subscribe to our Newsletter",
    newsletterPlaceholder: "Enter your email",
    newsletterButton: "Subscribe",
    newsletterSuccess: "Thank you for subscribing!",
  });

  // aboutPage (basic)
  await client.createOrReplace({
    _id: "aboutPage",
    _type: "aboutPage",
    heroTitle: "About Our Store",
    heroText:
      "Discover the story behind Furnish - where design meets comfort. We craft modern furniture that elevates your home experience.",
    missionTitle: "Our Mission",
    missionParagraphs: [
      "At Furnish, our mission is to bring timeless style and comfort to every home.",
      "From sourcing eco-friendly materials to perfecting every curve and detail, we are dedicated to creating pieces that bring harmony and functionality.",
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
  });

  // contactPage
  await client.createOrReplace({
    _id: "contactPage",
    _type: "contactPage",
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
    socialLinks: [
      { label: "Facebook", icon: "bi-facebook", url: "#" },
      { label: "Instagram", icon: "bi-instagram", url: "#" },
    ],
  });

  // productsPage copy
  await client.createOrReplace({
    _id: "productsPage",
    _type: "productsPage",
    title: "Product List",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ad sint quae sunt, molestiae consectetur vitae!",
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
  });

  // testimonialsPage copy
  await client.createOrReplace({
    _id: "testimonialsPage",
    _type: "testimonialsPage",
    title: "Customer Testimonials",
    intro:
      "See what our satisfied customers have to say about their Furnish experience.",
    ctaTitle: "Share Your Experience",
    ctaText:
      "We'd love to hear about your Furnish experience. Share your feedback and help others make informed decisions.",
    ctaButtonLabel: "Write a Review",
  });

  // productDetailsPage copy
  await client.createOrReplace({
    _id: "productDetailsPage",
    _type: "productDetailsPage",
    loadingLabel: "Loading product...",
    notFoundLabel: "Product not found",
    backToHomeLabel: "Back to Home",
    backToProductsLabel: "Back to products",
    purchaseHighlightsTitle: "Purchase Highlights",
    orderViaWhatsappLabel: "Order via WhatsApp",
    contactUsLabel: "Contact Us",
  });

  // NOTE ABOUT IMAGES
  // Assets (images) are not automatically imported in this seed unless you implement asset import.
  // This seed focuses on documents + labels so the UI becomes editable right away.
  // Products/Testimonial/HeroSlides can be added manually in Studio, or extended later with a proper asset importer.

  console.log("Seed completed (copy + settings). Images not auto-imported.");
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
