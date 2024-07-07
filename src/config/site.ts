import type { FooterItem, MainNavItem } from "@/types"

import { productConfig } from "@/config/product"
import { slugify } from "@/lib/utils"

export type SiteConfig = typeof siteConfig

const links = {
  x: "https://twitter.com/sadmann17",
  github: "https://github.com/sadmann7/skateshop",
  githubAccount: "https://github.com/sadmann7",
  discord: "https://discord.com/users/sadmann7",
  calDotCom: "https://cal.com/sadmann7",
}

export const siteConfig = {
  name: "Ortodok",
  description:
    "Компания по реализации медицинских ортопедических изделий в г. Астана с доставкой по всему Казахстану.",
  url: "https://skateshop.sadmn.com",
  ogImage: "https://skateshop.sadmn.com/opengraph-image.png",
  links,
  mainNav: [
    {
      title: "Главная",
      items: [
        {
          title: "Каталог",
          href: "/products",
          description: "Все продукты, которые мы можем предложить.",
          items: [],
        },
        {
          title: "Записаться на прием",
          href: "/build-a-board",
          description: "Мы предоставляем рекомендации по выбору продукции.",
          items: [],
        },
        {
          title: "Блог",
          href: "/blog",
          description: "Читайте наши последние записи в блоге.",
          items: [],
        },
      ],
    },
    ...productConfig.categories.map((category) => ({
      title: category.name,
      items: [
        {
          title: "Каталог продукции",
          href: `/categories/${slugify(category.name)}`,
          description: `Весь ${category.name}`,
          items: [],
        },
        ...category.subcategories.map((subcategory) => ({
          title: subcategory.name,
          href: `/categories/${slugify(category.name)}/${subcategory.slug}`,
          description: subcategory.description,
          // items: [],
        })),
      ],
    })),
    {
      title: "Акции",
      href: "/promotions",
      description: "Информация о нашей компании и миссии.",
      // items: [],
    },
    {
      title: "Доставка и оплата",
      href: "/shipping-payment",
      description: "Информация о нашей компании и миссии.",
      // items: [],
    },
    {
      title: "О нас",
      href: "/about",
      description: "Информация о нашей компании и миссии.",
      // items: [],
    },
    {
      title: "Контакты",
      href: "/contact",
      description: "Информация о нашей компании и миссии.",
      // items: [],
    },
  ]   satisfies MainNavItem[],
  footerNav: [
    {
      title: "Помощь",
      items: [
        {
          title: "О нас",
          href: "/about",
          external: false,
        },
        {
          title: "Контакты",
          href: "/contact",
          external: false,
        },
        {
          title: "Условия",
          href: "/terms",
          external: false,
        },
        {
          title: "Конфиденциальность",
          href: "/privacy",
          external: false,
        },
      ],
    },
    // {
    //   title: "Social",
    //   items: [
    //     {
    //       title: "X",
    //       href: links.x,
    //       external: true,
    //     },
    //     {
    //       title: "GitHub",
    //       href: links.githubAccount,
    //       external: true,
    //     },
    //     {
    //       title: "Discord",
    //       href: links.discord,
    //       external: true,
    //     },
    //     {
    //       title: "cal.com",
    //       href: links.calDotCom,
    //       external: true,
    //     },
    //   ],
    // },
  ] satisfies FooterItem[],
}
