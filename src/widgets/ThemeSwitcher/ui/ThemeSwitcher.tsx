import {Theme, useTheme} from "app/providers/ThemeProvider";

export const ThemeSwitcher = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <button
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? 'light' : 'dark'}
    </button>
  );
};
