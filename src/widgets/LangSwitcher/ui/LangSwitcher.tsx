import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { IconWrap } from 'shared/ui/IconWrap/IconWrap'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const onTranslate = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  return (
    <Button className={classNames('', {}, [className])} onClick={onTranslate}>
      <IconWrap>{t('lang')}</IconWrap>
    </Button>
  )
}
