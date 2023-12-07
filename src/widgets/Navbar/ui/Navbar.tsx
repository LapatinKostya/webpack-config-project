import { classNames } from 'shared/lib/classNames/classNames'
import s from './Navbar.module.scss'
import { BugButton } from 'app/providers/ErrorBoundary'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(s.Navbar, {}, [className])}>
      <BugButton />
    </div>
  )
}
