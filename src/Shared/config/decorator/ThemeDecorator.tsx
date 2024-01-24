import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'
import { Decorator } from '@storybook/react'

export const ThemeDecorator =
  (theme: Theme): Decorator =>
  (Story) => (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  )
