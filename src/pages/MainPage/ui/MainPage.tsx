import { useTranslation } from 'react-i18next'

const MainPage = () => {
  const { t } = useTranslation('mainPage')

  return (
    <div>
      {/*<Counter />*/}
      {t('Main page')}
    </div>
  )
}

export default MainPage
