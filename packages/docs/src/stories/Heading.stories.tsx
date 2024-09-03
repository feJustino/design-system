import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@jax-ui/react'

const meta: Meta<HeadingProps> = {
	title: 'Typography/Heading',
	component: Heading,
	args: {
		children: 'Custom Title',
		size: 'md',
	},
}

export const Primary: StoryObj<HeadingProps> = {}
export const CustomTag: StoryObj<HeadingProps> = {
	args: {
		children: 'H1 Heading',
		as: 'h1',
	},
}

export default meta
