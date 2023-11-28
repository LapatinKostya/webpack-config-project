import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonTheme } from './Button'

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Clear: Story = {
  args: {
    children: 'Test',
  },
}

export const Krinky: Story = {
  args: {
    children: 'Test',
    theme: ButtonTheme.KRINKY,
  },
}
