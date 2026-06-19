import { defineField, defineType } from "sanity";

export const productDetailsPage = defineType({
  name: "productDetailsPage",
  title: "Product Details Page",
  type: "document",
  fields: [
    defineField({
      name: "loadingLabel",
      title: "Loading Label",
      type: "string",
    }),
    defineField({
      name: "notFoundLabel",
      title: "Not Found Label",
      type: "string",
    }),
    defineField({
      name: "backToHomeLabel",
      title: "Back To Home Label",
      type: "string",
    }),

    defineField({
      name: "backToProductsLabel",
      title: "Back To Products Label",
      type: "string",
    }),

    defineField({
      name: "purchaseHighlightsTitle",
      title: "Purchase Highlights Title",
      type: "string",
    }),

    defineField({
      name: "orderViaWhatsappLabel",
      title: "Order Via WhatsApp Label",
      type: "string",
    }),
    defineField({
      name: "contactUsLabel",
      title: "Contact Us Label",
      type: "string",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Product Details Copy" }),
  },
});
