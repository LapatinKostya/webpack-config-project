import { Suspense, useState } from 'react'
import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { PageLoader } from 'widgets/PageLoader'
import { Modal } from 'shared/ui/Modal/Modal'

const App = () => {
  const { theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <button onClick={() => setIsOpen(true)}>toggle</button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          children={
            'bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjffbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf  fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf '
          }
        />
        <div className={'content-page'}>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
