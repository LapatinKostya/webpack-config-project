import { Loader } from 'shared/ui/Loader/Loader'
import s from './PageLoader.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface PageLoaderProps {
  className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={classNames(s.PageLoader, {}, [className])}>
    <Loader />
  </div>
)
