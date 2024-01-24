import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from 'shared/ui/Modal/Modal'
import { ThemeDecorator } from 'shared/config/decorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    children: 'modal light',
    isOpen: true,
  },
}
export const Dark: Story = {
  args: {
    children: 'modal dark',
    isOpen: true,
  },
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
