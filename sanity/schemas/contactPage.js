import { defineField, defineType } from "sanity";

const linesField = (name, title) =>
  defineField({
    name,
    title,
    type: "array",
    of: [{ type: "string" }],
  });

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    defineField({ name: "introText", title: "Intro Text", type: "text", rows: 3 }),
    defineField({ name: "formTitle", title: "Form Title", type: "string" }),
    defineField({ name: "successMessage", title: "Success Message", type: "string" }),
    defineField({ name: "namePlaceholder", title: "Name Placeholder", type: "string" }),
    defineField({ name: "emailPlaceholder", title: "Email Placeholder", type: "string" }),
    defineField({ name: "subjectPlaceholder", title: "Subject Placeholder", type: "string" }),
    defineField({ name: "messagePlaceholder", title: "Message Placeholder", type: "string" }),
    defineField({ name: "submitLabel", title: "Submit Button Label", type: "string" }),
    defineField({ name: "infoTitle", title: "Info Title", type: "string" }),
    defineField({ name: "addressTitle", title: "Address Title", type: "string" }),
    linesField("addressLines", "Address Lines"),
    defineField({ name: "phoneTitle", title: "Phone Title", type: "string" }),
    linesField("phoneLines", "Phone Lines"),
    defineField({ name: "emailTitle", title: "Email Title", type: "string" }),
    linesField("emailLines", "Email Lines"),
    defineField({ name: "hoursTitle", title: "Business Hours Title", type: "string" }),
    linesField("hoursLines", "Business Hours Lines"),
    defineField({ name: "socialTitle", title: "Social Title", type: "string" }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "icon", title: "Bootstrap Icon Class", type: "string" },
            { name: "url", title: "URL", type: "url" },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Contact Page Content" }),
  },
});
