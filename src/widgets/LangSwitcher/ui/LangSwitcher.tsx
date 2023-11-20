import { classNames } from "shared/lib/classNames/classNames"
import s from "./LangSwitcher.module.scss"
import React from "react"
import { useTranslation } from "react-i18next"
import { Button, ButtonTheme } from "shared/ui/Button/Button"

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const onTranslate = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en")
  }

  return (
    <Button
      className={classNames(s.LangSwitcher, {}, [className])}
      onClick={onTranslate}
      theme={ButtonTheme.KRINKY}
    >
      {t("lang")}
    </Button>
  )
}
