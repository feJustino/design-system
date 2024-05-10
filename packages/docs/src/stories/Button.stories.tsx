import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@jax-ui/react'

const meta: Meta<ButtonProps> = {
	title: 'Button',
	component: Button,
	args: {
		children: 'Create account',
	},
}
export const Primary: StoryObj<ButtonProps> = {}
export const Big: StoryObj<ButtonProps> = {
	args: {
		size: 'big',
	},
}

export default meta
