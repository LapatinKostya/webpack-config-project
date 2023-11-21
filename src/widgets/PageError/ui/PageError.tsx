import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import s from './PageError.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface PageErrorProps {
  className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation()

  const reloadPage = () => {
    location.reload()
  }

  return (
    <div className={classNames(s.PageError, {}, [className])}>
      <h1>{t('something went wrong')}</h1>
      <Button theme={ButtonTheme.KRINKY} onClick={reloadPage}>
        {t('reload page')}
      </Button>
    </div>
  )
}
