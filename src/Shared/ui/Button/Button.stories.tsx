import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonSize, ButtonTheme } from './Button'
import { ThemeDecorator } from 'shared/config/decorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

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
Krinky.decorators = [ThemeDecorator(Theme.DARK)]

export const Outline: Story = {
  args: {
    children: 'Outline',
    theme: ButtonTheme.OUTLINE,
  },
}
export const BackgroundTheme: Story = {
  args: {
    children: 'BackgroundTheme',
    theme: ButtonTheme.BACKGROUND,
  },
}
export const BackgroundInvertedTheme: Story = {
  args: {
    children: 'BackgroundInvertedTheme',
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
}
export const SquareSizeM: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.KRINKY,
    square: true,
    size: ButtonSize.M,
  },
}
export const SquareSizeL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.KRINKY,
    square: true,
    size: ButtonSize.L,
  },
}
export const SquareSizeXL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.KRINKY,
    square: true,
    size: ButtonSize.XL,
  },
}
export const Disabled: Story = {
  args: {
    children: 'Disabled',
    theme: ButtonTheme.KRINKY,
    disabled: true,
  },
}
