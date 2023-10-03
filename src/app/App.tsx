import React from "react";

import {classNames} from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import './styles/index.scss'

const App = () => {
  const {theme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar/>
      <AppRouter/>
      <ThemeSwitcher/>
    </div>
  );
}

export default App
