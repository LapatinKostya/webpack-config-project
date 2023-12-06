import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/decorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { NotFoundPage } from './NotFoundPage'

const meta = {
  title: 'page/NotFoundPage',
  component: NotFoundPage,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof NotFoundPage>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: {},
}
export const Light: Story = {
  args: {},
}
Light.decorators = [ThemeDecorator(Theme.DARK)]
