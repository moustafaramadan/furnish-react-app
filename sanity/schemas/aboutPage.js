import { defineField, defineType } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({ name: "heroTitle", title: "Hero Title", type: "string" }),
    defineField({ name: "heroText", title: "Hero Text", type: "text", rows: 3 }),
    defineField({
      name: "missionImage",
      title: "Mission Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "missionTitle",
      title: "Mission Title",
      type: "string",
    }),
    defineField({
      name: "missionParagraphs",
      title: "Mission Paragraphs",
      type: "array",
      of: [{ type: "text" }],
    }),
    defineField({
      name: "valuesTitle",
      title: "Values Section Title",
      type: "string",
    }),
    defineField({
      name: "values",
      title: "Values",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "icon", title: "Bootstrap Icon Class", type: "string" },
            { name: "iconColor", title: "Bootstrap Text Color Class", type: "string" },
            { name: "title", title: "Title", type: "string" },
            { name: "text", title: "Text", type: "text", rows: 3 },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "About Page Content" }),
  },
});
