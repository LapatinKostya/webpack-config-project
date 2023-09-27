import {lazy} from "react";

export const MainPageAsync = lazy(() => new Promise(resolve => {
  // Искусственная задержка для тестов
  // @ts-ignore
  setTimeout(() => resolve(import('./MainPage')), 1500)
}));
