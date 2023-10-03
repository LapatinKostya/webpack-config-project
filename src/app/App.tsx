import React from "react";
import {Link} from "react-router-dom";

import {classNames} from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {useTheme} from "app/providers/ThemeProvider";

import './styles/index.scss'
import {AppRouter} from "app/providers/router";

const App = () => {
  const {theme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <AppRouter/>
      <ThemeSwitcher/>
    </div>
  );
}

export default App
