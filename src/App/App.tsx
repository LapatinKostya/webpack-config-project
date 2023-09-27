import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutPage, MainPage} from "../pages";
import {Suspense} from "react";
import {useTheme} from "./providers/ThemeProvider/ThemeProvider";
import {ThemeSwitcher} from "../widgets/ThemeSwitcher/ui/ThemeSwitcher";

const App = () => {
  const {theme} = useTheme()

  return (
    <div className={`app ${theme}`}>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={'...loading'}>
        <Routes>
          <Route path={'/'} element={<MainPage/>}/>
          <Route path={'/about'} element={<AboutPage/>}/>
        </Routes>
      </Suspense>
      <ThemeSwitcher/>
    </div>
  );
}
export default App
