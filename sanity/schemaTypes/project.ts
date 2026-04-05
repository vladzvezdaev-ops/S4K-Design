import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Проект (Карточка)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Название проекта",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Обложка проекта",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "link",
      title: "Ссылка на проект",
      type: "string",
    }),
  ],
});
