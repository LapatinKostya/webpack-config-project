import type { Preview } from '@storybook/react'
import { StyleDecorator } from 'shared/config/decorator/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from 'shared/config/decorator/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT)],
}

export default preview
