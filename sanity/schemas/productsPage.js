import { defineField, defineType } from "sanity";

export const productsPage = defineType({
  name: "productsPage",
  title: "Products Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Page Title", type: "string" }),
    defineField({ name: "intro", title: "Page Intro", type: "text", rows: 3 }),

    defineField({
      name: "filtersTitle",
      title: "Filters Title",
      type: "string",
    }),
    defineField({
      name: "categoryTitle",
      title: "Category Title",
      type: "string",
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({ name: "priceTitle", title: "Price Title", type: "string" }),
    defineField({
      name: "under100Label",
      title: "Under 100 Label",
      type: "string",
    }),
    defineField({
      name: "between100And300Label",
      title: "100-300 Label",
      type: "string",
    }),
    defineField({
      name: "above300Label",
      title: "Above 300 Label",
      type: "string",
    }),

    defineField({
      name: "resetLabel",
      title: "Reset Button Label",
      type: "string",
    }),
    defineField({
      name: "addToCartLabel",
      title: "Add To Cart Label",
      type: "string",
    }),
    defineField({
      name: "emptyText",
      title: "Empty State Text",
      type: "string",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Products Page Content" }),
  },
});
