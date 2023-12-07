import { classNames, Mods } from 'shared/lib/classNames/classNames'
import s from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import ArrowRight from 'shared/assets/icons/arrow-right.svg'
import ArrowLeft from 'shared/assets/icons/arrow-left.svg'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
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
