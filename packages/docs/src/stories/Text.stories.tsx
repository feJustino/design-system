import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@jax-ui/react'

const meta: Meta<TextProps> = {
	title: 'Typography/Text',
	component: Text,
	args: {
		children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		size: 'md',
	},
}

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
	args: {
		children: 'Strong text',
		as: 'strong',
	},
}

export default meta
