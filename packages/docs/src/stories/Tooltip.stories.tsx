import { Box, Button, Text, Tooltip, TooltipProps } from '@jax-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<TooltipProps> = {
	title: 'Display/Tooltip',
	component: Tooltip,
	decorators: [
		(Story) => {
			return (
				<Box>
					<Text>Isso aqui é um exemplo de texto</Text>
					{Story()}
				</Box>
			)
		},
	],
	args: {
		children: <Button>Enviar</Button>,
		content: 'Essem é o texto do tooltip',
	},
	argTypes: {
		children: {
			type: 'symbol',
			control: {
				type: 'text',
				disable: true,
			},
			description: 'Elemento que será envolvido pelo tooltip',
		},
		content: {
			control: {
				type: 'text',
			},
			description: 'Texto que será exibido dentro do tooltip',
		},
		position: {
			type: 'string',
			control: {
				type: 'inline-radio',
				labels: {
					top: 'Top',
					bottom: 'Bottom',
				},
			},
			options: ['top', 'bottom'],
			description: 'Define a posição do tooltip em relação ao elemento pai',
			table: {
				type: {
					summary: 'top | bottom',
				},
				defaultValue: {
					summary: 'top',
				},
			},
		},
	},
}

export const Primary: StoryObj<TooltipProps> = {}

export default meta
