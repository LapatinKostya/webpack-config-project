import { classNames, Mods } from "shared/lib/classNames/classNames"
import s from "./Sidebar.module.scss"
import { useState } from "react"
import { ThemeSwitcher } from "widgets/ThemeSwitcher"
import { LangSwitcher } from "widgets/LangSwitcher"

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
    <div className={classNames(s.Sidebar, mods, [className])}>
      <button onClick={onToggle}>toggle</button>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={s.lang} />
      </div>
    </div>
  )
}
