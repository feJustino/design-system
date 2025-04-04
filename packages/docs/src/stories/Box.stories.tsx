import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@jax-ui/react'

const meta: Meta<BoxProps> = {
	title: 'Surfaces/Box',
	component: Box,
	args: {
		children: (
			<>
				<span>Testando o elemento Box</span>
			</>
		),
	},
	argTypes: {
		children: {
			options: ['string', 'ReactNode'],
			type: 'symbol',
			control: { disable: true },
		},
	},
}

export const Primary: StoryObj<BoxProps> = {}

export default meta
