export type ProductConfig = typeof productConfig

export const productConfig = {
  categories: [
    {
      name: "Каталог",
      description: "The best skateboards for all levels of skaters.",
      subcategories: [
        {
          name: "Подушки и матрасы",
          description: "Ортопедические подушки и матрасы для здорового сна",
          image: "/images/deck-one.webp",
          slug: "pillows-mattresses",
        },
        {
          name: "Бандажи, корсеты и фиксаторы",
          description: "Средства для поддержки и реабилитации",
          image: "/images/wheel-one.webp",
          slug: "bandages-corsets",
        },
        {
          name: "Одежда, обувь и трикотаж",
          description: "Ортопедическая одежда и обувь для комфорта",
          image: "/images/truck-one.webp",
          slug: "clothing-footwear",
        },
        {
          name: "Для детей и мам, будущих мам",
          description: "Изделия для детей и беременных женщин",
          image: "/images/bearing-one.webp",
          slug: "children-maternity",
        },
        {
          name: "Средства реабилитации",
          description: "Продукты для восстановления после травм",
          image: "/images/griptape-one.webp",
          slug: "rehabilitation",
        },
        {
          name: "Для тренировок и фитнеса",
          description: "Ортопедические изделия для тренировок",
          image: "/images/hardware-one.webp",
          slug: "fitness",
        },
        {
          name: "Корректоры осанки",
          description: "Средства для исправления осанки",
          image: "/images/tool-one.webp",
          slug: "posture-correctors",
        },
      ],
    },
  ],
  tags: [
    "new",
    "sale",
    "bestseller",
    "featured",
    "popular",
    "trending",
    "limited",
    "exclusive",
  ],
}
