import { classNames, Mods } from 'shared/lib/classNames/classNames'
import s from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import ArrowRight from 'shared/assets/icons/arrow-right.svg'
import ArrowLeft from 'shared/assets/icons/arrow-left.svg'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import MainPageIcon from 'shared/assets/icons/main-page-icon.svg'
import AboutPageIcon from 'shared/assets/icons/about-page-icon.svg'
import { IconWrap } from 'shared/ui/IconWrap/IconWrap'
import { RouterPath } from 'shared/config/routeConfig/routeConfig'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation()
  const [collapsed, setCollapsed] = useState(false)

  const mods: Mods = {
    [s.collapsed]: collapsed,
  }
  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div
      data-testid={'sidebar'}
      className={classNames(s.Sidebar, mods, [className])}
    >
      <div className={s.navigateItems}>
        <AppLink to={RouterPath.main} className={s.navigateItem}>
          <IconWrap className={s.icon}>
            <MainPageIcon />
          </IconWrap>
          {!collapsed && 'Main page'}
        </AppLink>
        <AppLink to={RouterPath.about} className={s.navigateItem}>
          <IconWrap className={s.icon}>
            <AboutPageIcon />
          </IconWrap>
          {!collapsed && 'About page'}
        </AppLink>
      </div>

      <Button
        data-testid='sidebar-toggle'
        onClick={onToggle}
        className={s.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.XL}
        square
      >
        {collapsed ? <ArrowRight className={'test'} /> : <ArrowLeft />}
      </Button>
      <div className={`${s.switchers}`}>
        <ThemeSwitcher />
        <LangSwitcher className={s.lang} />
      </div>
    </div>
  )
}
