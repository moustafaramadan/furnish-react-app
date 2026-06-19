import { defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "productsTitle",
      title: "Products Section Title",
      type: "string",
    }),
    defineField({
      name: "productsIntro",
      title: "Products Section Intro",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "newsletterTitle",
      title: "Newsletter Title",
      type: "string",
    }),
    defineField({
      name: "newsletterPlaceholder",
      title: "Newsletter Input Placeholder",
      type: "string",
    }),
    defineField({
      name: "newsletterButton",
      title: "Newsletter Button",
      type: "string",
    }),
    defineField({
      name: "newsletterSuccess",
      title: "Newsletter Success Message",
      type: "string",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Home Page Content" }),
  },
});
