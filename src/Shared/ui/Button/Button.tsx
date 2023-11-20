import { classNames, Mods } from 'shared/lib/classNames/classNames'
import { ButtonHTMLAttributes, FC } from 'react'
import s from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  KRINKY = 'krinky',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
  disabled?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme = ButtonTheme.CLEAR,
    square,
    disabled,
    size = ButtonSize.M,
    ...otherProps
  } = props

  const mods: Mods = {
    [s.square]: square,
    [s.disabled]: disabled,
  }

  return (
    <button
      type='button'
      disabled={disabled}
      className={classNames(s.Button, mods, [className, s[theme], s[size]])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
