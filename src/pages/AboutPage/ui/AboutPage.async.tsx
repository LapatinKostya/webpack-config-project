import { lazy } from 'react'

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // Искусственная задержка для тестов
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setTimeout(() => resolve(import('./AboutPage')), 1500)
    }),
)
