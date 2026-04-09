import { defineField, defineType } from "sanity";

export default defineType({
  name: "homepage",
  title: "Главная страница",
  type: "document",
  groups: [
    { name: "portfolio", title: "Portfolio Slider" },
    { name: "about", title: "About Me" },
    { name: "instagram", title: "Instagram" },
    { name: "discount", title: "Discount/Offer" },
  ],
  fields: [
    // --- HERO ---
    defineField({
      name: "heroTitleTop",
      title: "Hero заголовок (верх)",
      type: "string",
      initialValue: "My design",
    }),
    defineField({
      name: "heroTitleBottom",
      title: "Hero заголовок (низ)",
      type: "string",
      initialValue: "Your level up",
    }),
    defineField({
      name: "heroDesktopImage",
      title: "Hero фоновое фото (Desktop)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroMobileImage",
      title: "Hero фоновое фото (Mobile)",
      type: "image",
      options: { hotspot: true },
    }),
    // --- PORTFOLIO ---
    defineField({
      name: "portfolioTitle",
      title: "Заголовок Портфолио",
      type: "string",
      group: "portfolio",
      initialValue: "PORTFOLIO",
    }),
    defineField({
      name: "portfolioProjects",
      title: "Проекты для слайдера",
      type: "array",
      group: "portfolio",
      of: [
        {
          type: "reference",
          title: "Выбрать проект",
          to: [{ type: "project" }],
        },
      ],
    }),

    // --- ABOUT ME ---
    defineField({
      name: "aboutTitle",
      title: "Заголовок секции",
      type: "string",
      group: "about",
      initialValue: "ABOUT ME",
    }),
    defineField({
      name: "aboutDesktopImage",
      title: "Главное фото (Desktop)",
      type: "image",
      options: { hotspot: true },
      group: "about",
    }),
    defineField({
      name: "aboutMobileImage",
      title: "Главное фото (Mobile)",
      type: "image",
      options: { hotspot: true },
      group: "about",
    }),
    defineField({
      name: "aboutDescription",
      title: "Текстовые поля",
      type: "array",
      of: [{ type: "text" }],
      group: "about",
    }),
    defineField({
      name: "aboutSkills",
      title: "Навыки (UX/UI & Brand)",
      type: "array",
      of: [{ type: "string" }],
      group: "about",
    }),
    defineField({
      name: "aboutStats",
      title: "Статистика (опыт, проекты)",
      type: "array",
      of: [{ type: "string" }],
      group: "about",
    }),

    // --- MY INSTAGRAM ---
    defineField({
      name: "instagramTitle",
      title: "Заголовок секции",
      type: "string",
      group: "instagram",
      initialValue: "MY INSTAGRAM",
    }),
    defineField({
      name: "instagramUrl",
      title: "Ссылка на профиль",
      type: "url",
      group: "instagram",
      initialValue: "https://www.instagram.com/s4k.design",
    }),
    defineField({
      name: "instagramImages",
      title: "Фотографии из Instagram",
      description: "4 фотографии для My Instagram",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      group: "instagram",
    }),

    // --- OFFER / DISCOUNT ---
    defineField({
      name: "offerTitle",
      title: "Заголовок оффера",
      type: "string",
      group: "discount",
      initialValue: "OFFER FROM ME",
    }),
    defineField({
      name: "offerImage",
      title: "Картинка с дисконтом (20%)",
      type: "image",
      options: { hotspot: true },
      group: "discount",
    }),
    defineField({
      name: "offerText",
      title: "Описание под картинкой",
      type: "text",
      group: "discount",
    }),
    defineField({
      name: "offerBtnText",
      title: "Текст на кнопке",
      type: "string",
      group: "discount",
      initialValue: "Launch project",
    }),
  ],
});
