import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@jax-ui/react'

const meta: Meta<AvatarProps> = {
	title: 'Display/Avatar',
	component: Avatar,
	args: {
		src: 'https://github.com/feJustino.png',
		alt: 'Felipe Justino',
	},
}

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
	args: {
		src: undefined,
	},
	argTypes: {
		src: {
			description: 'URL da imagem',
			type: 'string',
			control: {
				type: 'text',
			},
		},
	},
}

export default meta
