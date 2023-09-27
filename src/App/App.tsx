import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutPage, MainPage} from "../pages";
import {Suspense, useState} from "react";

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

const App = () => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT)

  const changeThemeHandle = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
  }

  return (
    <div className={`app app_${theme}_theme`}>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={'...loading'}>
        <Routes>
          <Route path={'/'} element={<MainPage/>}/>
          <Route path={'/about'} element={<AboutPage/>}/>
        </Routes>
      </Suspense>
      <button onClick={changeThemeHandle}>change theme</button>
    </div>
  );
}
export default App
