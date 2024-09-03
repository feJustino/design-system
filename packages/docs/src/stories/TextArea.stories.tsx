import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@jax-ui/react'

const meta: Meta<TextAreaProps> = {
	title: 'Form/Text Area',
	component: TextArea,
	decorators: [
		(Story) => {
			return (
				<Box
					as={'label'}
					css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
				>
					<Text size="sm">Comment</Text>
					{Story()}
				</Box>
			)
		},
	],
}

export const Primary: StoryObj<TextAreaProps> = {
	args: {
		placeholder: 'Type your comment',
	},
}

export const Disabled: StoryObj<TextAreaProps> = {
	args: {
		disabled: true,
	},
}

export default meta
