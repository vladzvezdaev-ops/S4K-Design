import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Проект (Карточка + Страница)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Название проекта",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    // SLUG
    defineField({
      name: "slug",
      title: "URL адрес (Slug)",
      type: "slug",
      description: "Нажми кнопку Generate после ввода названия",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Обложка проекта (Карточка)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "link",
      title: "Внешняя ссылка (Legacy)",
      type: "string",
      description: "Описание",
    }),
    // КОНСТРУКТОР СТРАНИЦЫ
    defineField({
      name: "content",
      title: "Конструктор страницы",
      description: "Сборка страницы из блоков",
      type: "array",
      of: [
        // Блок Текста (Тайтлы, абзацы)
        { 
          type: "block",
          title: "Текстовый блок"
        },
        // Блок Изображения с выбором размера
        {
          type: "image",
          title: "Фотография",
          options: { hotspot: true },
          fields: [
            {
              name: "size",
              type: "string",
              title: "Размер фото на странице",
              options: {
                list: [
                  { title: "Маленькое (30%)", value: "small" },
                  { title: "Среднее (60%)", value: "medium" },
                  { title: "На всю ширину (100%)", value: "full" },
                ],
                layout: "radio", // Кнопки выбора
              },
              initialValue: "full",
            },
            {
              name: "alt",
              type: "string",
              title: "Описание для SEO (Alt текст)",
            }
          ],
        },
      ],
    }),
  ],
});