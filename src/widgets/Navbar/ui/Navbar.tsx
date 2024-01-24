import { classNames } from 'shared/lib/classNames/classNames'
import s from './Navbar.module.scss'
import { BugButton } from 'app/providers/ErrorBoundary'
import { Modal } from 'shared/ui/Modal/Modal'
import { useCallback, useState } from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
  }, [])

  return (
    <div className={classNames(s.Navbar, {}, [className])}>
      <BugButton />
      <Button theme={ButtonTheme.KRINKY} onClick={onToggleModal}>
        {t('sing in')}
      </Button>
      <Modal
        isOpen={isAuthModal}
        onClose={onToggleModal}
        children={
          'bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf bwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjffbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf  fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf fbwhbfjwebfjbwjehbfewbjf '
        }
      />
    </div>
  )
}
