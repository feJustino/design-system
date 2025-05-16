import { Box, Text, Toast, ToastProps } from '@jax-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<ToastProps> = {
	title: 'Display/Toast',
	component: Toast,
	decorators: [
		(Story) => {
			return (
				<Box>
					<Text>Isso aqui é um exemplo de texto</Text>
					<Text>Isso aqui é um exemplo de texto</Text>

					{Story()}
				</Box>
			)
		},
	],
	args: {
		content: 'Essem é o texto do Toast',
	},
	argTypes: {
		children: {
			type: 'symbol',
			control: {
				type: 'text',
				disable: true,
			},
			description: 'Elemento que será envolvido pelo Toast',
		},
		content: {
			control: {
				type: 'text',
			},
			description: 'Texto que será exibido dentro do Toast',
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
			description: 'Define a posição do Toast em relação ao elemento pai',
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

export const Primary: StoryObj<ToastProps> = {}

export default meta
