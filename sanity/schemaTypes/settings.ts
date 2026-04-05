import { defineField, defineType } from "sanity";

export default defineType({
  name: "settings",
  title: "Настройки сайта",
  type: "document",
  fields: [
    defineField({
      name: "phone",
      title: "Номер телефона",
      type: "string",
      initialValue: "+(48) 517 365 658",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      initialValue: "slialina.design@gmail.com",
    }),
    defineField({
      name: "instagram",
      title: "Ссылка Instagram",
      type: "url",
    }),
    defineField({
      name: "linkedin",
      title: "Ссылка LinkedIn",
      type: "url",
    }),
  ],
});