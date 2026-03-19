import { defineField, defineType } from "sanity";

export const homeType = defineType({
  name: "home",
  title: "Головна сторінка",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Заголовок Hero (MY DESIGN...)",
      type: "string",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Підзаголовок Hero (YOUR LEVEL UP)",
      type: "string",
    }),
    defineField({
      name: "instagramUrl",
      title: "Посилання на Instagram",
      type: "url",
    }),
    defineField({
      name: "heroImage",
      title: "Головне фото (фон)",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
