"use client"; // Пометка компонента как клиентского

import * as React from "react"
import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface ContentSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  href: string
  linkText?: string
  children: React.ReactNode
  asChild?: boolean
  desktopBackgroundUrl?: string
  mobileBackgroundUrl?: string
}

export function ContentSection({
  title,
  description,
  href,
  linkText = "View all",
  children,
  className,
  asChild = false,
  desktopBackgroundUrl = "",
  mobileBackgroundUrl = "",
  ...props
}: ContentSectionProps) {
  const ChildrenShell = asChild ? Slot : "div"

  return (
    <section
      className={cn("space-y-6 rounded-lg overflow-hidden m-4 p-6", className)}
      {...props}
    >
      <style jsx>{`
        @media (min-width: 640px) {
          section {
            background-image: url('${desktopBackgroundUrl}');
            background-size: cover;
            background-position: center;
          }
        }
        @media (max-width: 639px) {
          section {
            background-image: url('${mobileBackgroundUrl}');
            background-size: cover;
            background-position: center;
          }
        }
      `}</style>
      <div className="flex flex-col items-start gap-4 p-4 rounded-lg">
        <div className="flex max-w-[61.25rem] flex-1 flex-col gap-0.5">
          <h2 className="text-2xl font-bold mb-4 leading-[1.1] md:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="max-w-[25.875rem] text-balance text-md leading-normal sm:text-base sm:leading-7">
              {description}
            </p>
          ) : null}
          <div className="max-w-[16rem]">
          <Button variant="customGreen" className="text-2xl mt-12 py-6 mr-4 sm:flex" asChild>
            <Link href={href}>
              {linkText}
              <ArrowRightIcon className="ml-2 size-6" aria-hidden="true" />
              <span className="sr-only"> {linkText}</span>
            </Link>
          </Button>
          </div>
        </div>
      </div>
      <div className="space-y-8 p-4 rounded-lg">
        <ChildrenShell
          className={cn(
            !asChild &&
              "grid gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          )}
        >
          {children}
        </ChildrenShell>
        {/* <Button
          variant="default"
          className="flex w-fit sm:hidden text-sm md:text-lg mt-4 py-2 px-4"
          asChild
        >
          <Link href={href}>
            {linkText}
            <ArrowRightIcon className="ml-2 size-4" aria-hidden="true" />
            <span className="sr-only"> {linkText}</span>
          </Link>
        </Button> */}
      </div>
    </section>
  )
}
