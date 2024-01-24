import { useTranslation } from 'react-i18next'
import { Counter } from 'entities/Counter'

const MainPage = () => {
  const { t } = useTranslation('mainPage')

  return (
    <div>
      <Counter />
      {t('Main page')}
    </div>
  )
}

export default MainPage
