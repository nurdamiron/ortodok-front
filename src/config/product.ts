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
    {
      name: "Акции",
      description: "Stylish and comfortable skateboarding clothing.",
      subcategories: [
        {
          name: "Low Tops",
          description: "Rad low tops shoes for a stylish low-profile look.",
          slug: "low-tops",
        },
        {
          name: "High Tops",
          description: "Elevate your style with rad high top shoes.",
          slug: "high-tops",
        },
      ],
    },
    {
      name: "shoes",
      description: "Rad shoes for long skate sessions.",
      subcategories: [
        {
          name: "Low Tops",
          description: "Rad low tops shoes for a stylish low-profile look.",
          slug: "low-tops",
        },
        {
          name: "High Tops",
          description: "Elevate your style with rad high top shoes.",
          slug: "high-tops",
        },
        {
          name: "Slip-ons",
          description: "Effortless style with rad slip-on shoes.",
          slug: "slip-ons",
        },
        {
          name: "Pros",
          description: "Performance-driven rad shoes for the pros.",
          slug: "pros",
        },
        {
          name: "Classics",
          description: "Timeless style with rad classic shoes.",
          slug: "classics",
        },
      ],
    },
    {
      name: "accessories",
      description:
        "The essential skateboarding accessories to keep you rolling.",
      subcategories: [
        {
          name: "Skate Tools",
          description:
            "Essential tools for maintaining your skateboard, all rad.",
          slug: "skate-tools",
        },
        {
          name: "Bushings",
          description: "Upgrade your ride with our rad selection of bushings.",
          slug: "bushings",
        },
        {
          name: "Shock & Riser Pads",
          description:
            "Enhance your skateboard's performance with rad shock and riser pads.",
          slug: "shock-riser-pads",
        },
        {
          name: "Skate Rails",
          description:
            "Add creativity and style to your tricks with our rad skate rails.",
          slug: "skate-rails",
        },
        {
          name: "Wax",
          description:
            "Keep your board gliding smoothly with our rad skate wax.",
          slug: "wax",
        },
        {
          name: "Socks",
          description: "Keep your feet comfy and stylish with our rad socks.",
          slug: "socks",
        },
        {
          name: "Backpacks",
          description: "Carry your gear in style with our rad backpacks.",
          slug: "backpacks",
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
