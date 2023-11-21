import { useTranslation } from 'react-i18next'
import s from './NotFoundPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(s.NotFoundPage, {}, [className])}>
      {t('page not found')}
    </div>
  )
}
