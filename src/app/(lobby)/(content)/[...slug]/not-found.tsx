import { ErrorCard } from "@/components/error-card"
import { Shell } from "@/components/shell"

export default function PageNotFound() {
  return (
    <Shell variant="centered" className="max-w-md">
      <ErrorCard
        title="Страница не найдена"
        description="Страница, которую вы ищете, не существует"
        retryLink="/"
        retryLinkText="Вернуться на главную страницу"
      />
    </Shell>
  )
}
