import type { Meta, StoryObj } from '@storybook/react'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ThemeDecorator } from 'shared/config/decorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {
    to: '/',
  },
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const Krinky: Story = {
  args: {
    children: 'Krinky',
    theme: AppLinkTheme.KRINKY,
  },
}

export const KrinkyDark: Story = {
  args: {
    children: 'Krinky Dark',
    theme: AppLinkTheme.KRINKY,
  },
}
KrinkyDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Primary: Story = {
  args: {
    children: 'Primary',
    theme: AppLinkTheme.PRIMARY,
  },
}

export const PrimaryDark: Story = {
  args: {
    children: 'Primary Dark',
    theme: AppLinkTheme.PRIMARY,
  },
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    theme: AppLinkTheme.SECONDARY,
  },
}

export const SecondaryDark: Story = {
  args: {
    children: 'Secondary Dark',
    theme: AppLinkTheme.SECONDARY,
  },
}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
