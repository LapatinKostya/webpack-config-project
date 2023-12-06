import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/decorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { PageError } from './PageError'

const meta = {
  title: 'widget/PageError',
  component: PageError,
  parameters: {
    margin: 0,
  },
  argTypes: {},
} satisfies Meta<typeof PageError>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {},
}
export const Dark: Story = {
  args: {},
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
