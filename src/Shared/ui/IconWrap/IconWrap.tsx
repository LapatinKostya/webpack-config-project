import { classNames } from 'shared/lib/classNames/classNames'
import s from './IconWrap.module.scss'
import React, { FC } from 'react'

export enum IconSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface IconProps {
  className?: string
  size?: IconSize
  children: React.ReactNode
}

export const IconWrap: FC<IconProps> = (props) => {
  const { className, size = IconSize.M, children, ...otherProps } = props

  return (
    <div
      className={classNames(s.IconWrap, {}, [className, s[size]])}
      {...otherProps}
    >
      {children}
    </div>
  )
}
