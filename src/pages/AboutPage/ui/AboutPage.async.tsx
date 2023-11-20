import { lazy } from "react"

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // Искусственная задержка для тестов
      // @ts-ignore
      setTimeout(() => resolve(import("./AboutPage")), 1500)
    }),
)
