import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Проекти (Слайдер)",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Назва проекту", type: "string" }),
    defineField({
      name: "imageUrl",
      title: "Зображення",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "link",
      title: "Посилання (наприклад: /projects/my-work)",
      type: "string",
    }),
  ],
});
