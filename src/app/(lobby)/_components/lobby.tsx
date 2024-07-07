import Link from "next/link"

import { siteConfig } from "@/config/site"
import type { getCategories, getFeaturedProducts } from "@/lib/actions/product"
import { type getGithubStars } from "@/lib/queries/github"
import { type getFeaturedStores } from "@/lib/queries/store"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { ContentSection } from "@/components/content-section"
import { Icons } from "@/components/icons"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { ProductCard } from "@/components/product-card"
import { Shell } from "@/components/shell"
import { StoreCard } from "@/components/store-card"

import { CategoryCard } from "./category-card"

interface LobbyProps {
  githubStarsPromise: ReturnType<typeof getGithubStars>
  productsPromise: ReturnType<typeof getFeaturedProducts>
  categoriesPromise: ReturnType<typeof getCategories>
  storesPromise: ReturnType<typeof getFeaturedStores>
}

export async function Lobby({
  githubStarsPromise,
  productsPromise,
  categoriesPromise,
  storesPromise,
}: LobbyProps) {
  // @see the "Parallel data fetching" docs: https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#parallel-data-fetching
  const [githubStars, products, categories, stores] = await Promise.all([
    githubStarsPromise,
    productsPromise,
    categoriesPromise,
    storesPromise,
  ])

  return (
    <Shell className="max-w-6xl gap-0">
      <PageHeader
        as="section"
        className="mx-auto items-center gap-2 text-center"
        withPadding
      >
        <Link
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
          className="animate-fade-up"
          style={{ animationDelay: "0.10s", animationFillMode: "both" }}
        >
  
        </Link>
        <PageHeaderHeading
          className="animate-fade-up"
          style={{ animationDelay: "0.20s", animationFillMode: "both" }}
        >
          Добро пожаловать в магазин ортопедических изделий
        </PageHeaderHeading>
        <PageHeaderDescription
          className="max-w-[46.875rem] animate-fade-up"
          style={{ animationDelay: "0.30s", animationFillMode: "both" }}
        >
          Наша миссия – помочь вам жить без боли и дискомфорта, предоставляя качественные и надёжные ортопедические решения.
        </PageHeaderDescription>
        <PageActions
          className="animate-fade-up"
          style={{ animationDelay: "0.40s", animationFillMode: "both" }}
        >
          <Link href="/products" className={cn(buttonVariants({ variant: "customGreen", size: "xl" }))}>
             Посмотреть товары
          </Link>
          <Link
            href="/about"
            className={cn(buttonVariants({ variant: "customWhite", size: "xl" }))}
          >
            О нас
          </Link>
        </PageActions>
      </PageHeader>
      <section
        className="grid animate-fade-up grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-4"
        style={{ animationDelay: "0.50s", animationFillMode: "both" }}
      >
        {categories.map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </section>
      <ContentSection
        title="Бесплатная доставка"
        description="При покупке товаров на сумму свыше 15000 тенге."
        href="/products"
        linkText="Все продукты"
        // className="pt-14 md:pt-20 lg:pt-24"
        desktopBackgroundUrl="/images/delivery.png"
        mobileBackgroundUrl="/images/delivery-mobile.png"
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ContentSection>
      <ContentSection
        title="Записаться на прием"
        description="Мы предоставляем профессиональную оценку и рекомендации по выбору продукции"
        href="/appointment"
        linkText="Записаться"
        desktopBackgroundUrl="/images/appointment.png"
        mobileBackgroundUrl="/images/appointment-mobile.png"
      >
        {stores.map((store) => (
          <StoreCard
            key={store.id}
            store={store}
            href={`/products?store_ids=${store.id}`}
          />
        ))}
      </ContentSection>
    </Shell>
  )
}
