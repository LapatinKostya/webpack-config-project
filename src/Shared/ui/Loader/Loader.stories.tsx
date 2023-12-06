import type { Meta, StoryObj } from '@storybook/react'
import { Loader } from 'shared/ui/Loader/Loader'
import { ThemeDecorator } from 'shared/config/decorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'shared/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: {},
}
export const Light: Story = {
  args: {},
}
Light.decorators = [ThemeDecorator(Theme.DARK)]
