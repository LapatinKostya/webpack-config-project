import {useTheme} from "../../../app/providers/ThemeProvider/ThemeProvider";
import {Theme} from "../../../app/providers/ThemeProvider/ThemeProvider";

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
