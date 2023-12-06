import { Theme } from 'app/providers/ThemeProvider'
import { Decorator } from '@storybook/react'

export const ThemeDecorator =
  (theme: Theme): Decorator =>
  (Story) => (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  )
