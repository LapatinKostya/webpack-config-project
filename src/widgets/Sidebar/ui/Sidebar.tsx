import { classNames, Mods } from 'shared/lib/classNames/classNames'
import s from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [t] = useTranslation()
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
      <Button data-testid='sidebar-toggle' onClick={onToggle}>
        {t('toggle')}
      </Button>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={s.lang} />
      </div>
    </div>
  )
}
