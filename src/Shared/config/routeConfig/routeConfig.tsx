import { RouteProps } from "react-router-dom"
import { MainPage } from "pages/MainPage"
import { AboutPage } from "pages/AboutPage"

export enum AppRoutes {
  MAIN = "main",
  About = "about",
}

export const RouterPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.About]: "/about",
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RouterPath.main,
    element: <MainPage />,
  },
  [AppRoutes.About]: {
    path: RouterPath.about,
    element: <AboutPage />,
  },
}
