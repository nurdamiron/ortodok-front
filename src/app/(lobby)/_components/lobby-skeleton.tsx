import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { ContentSection } from "@/components/content-section"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { ProductCardSkeleton } from "@/components/product-card-skeleton"
import { Shell } from "@/components/shell"
import { StoreCardSkeleton } from "@/components/store-card-skeleton"

import { CategoryCardSkeleton } from "./category-card-skeleton"

export function LobbySkeleton() {
  return (
    <Shell className="max-w-6xl gap-0">
      <PageHeader
        as="section"
        className="mx-auto items-center gap-2 text-center"
        withPadding
      >
        <Skeleton className="h-7 w-44 rounded-full" />
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
          <Link href="/products" className={cn(buttonVariants())}>
            Посмотреть товары
          </Link>
          <Link
            href="/dashboard/stores"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            О нас
          </Link>
        </PageActions>
      </PageHeader>
      <section className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <CategoryCardSkeleton key={i} />
        ))}
      </section>
      <ContentSection
        title="Бесплатная доставка"
        description="Мы предлагаем бесплатную доставку при покупке товаров на сумму свыше 15000 тенге. Это удобное решение для тех, кто хочет получить свои ортопедические изделия быстро и без лишних затрат"
        href="/products"
        linkText="Просмотреть все продукты"
        className="pt-14 md:pt-20 lg:pt-24"
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </ContentSection>
      <ContentSection
        title="Записаться на прием"
        description="Мы предоставляем профессиональную оценку и рекомендации по выбору продукции"
        href="/stores"
        linkText="Записаться"
        className="py-14 md:py-20 lg:py-24"
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <StoreCardSkeleton key={i} />
        ))}
      </ContentSection>
    </Shell>
  )
}
