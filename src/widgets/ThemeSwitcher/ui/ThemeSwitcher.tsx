import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import s from './ThemeSwitcher.module.scss'
import { Button } from 'shared/ui/Button/Button'
import { IconWrap } from 'shared/ui/IconWrap/IconWrap'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      onClick={toggleTheme}
      className={classNames(s.ThemeSwitcher, {}, [className])}
    >
      <IconWrap>
        {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
      </IconWrap>
    </Button>
  )
}
