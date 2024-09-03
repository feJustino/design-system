import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@jax-ui/react'

const meta: Meta<TextInputProps> = {
	title: 'Form/Text Input',
	component: TextInput,
	decorators: [
		(Story) => {
			return (
				<Box
					as={'label'}
					css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
				>
					<Text size="sm">Email Address</Text>
					{Story()}
				</Box>
			)
		},
	],
}

export const Primary: StoryObj<TextInputProps> = {
	args: {
		placeholder: 'Type your name',
	},
}

export const WithPrefix: StoryObj<TextInputProps> = {
	args: {
		prefix: 'cal.com/',
	},
}

export const Disabled: StoryObj<TextInputProps> = {
	args: {
		disabled: true,
	},
}

export default meta
