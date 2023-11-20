import { lazy } from 'react'

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // Искусственная задержка для тестов
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setTimeout(() => resolve(import('./MainPage')), 1500)
    }),
)
