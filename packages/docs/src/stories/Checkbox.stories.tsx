import type { Meta, StoryObj } from '@storybook/react'
import { Box, Checkbox, CheckboxProps, Text } from '@jax-ui/react'

const meta: Meta<CheckboxProps> = {
	title: 'Form/Checkbox',
	component: Checkbox,
	decorators: [
		(Story) => {
			return (
				<Box as={'label'} css={{ display: 'flex', gap: '$2' }}>
					{Story()}
					<Text size="sm">Accept terms of use</Text>
				</Box>
			)
		},
	],
}
export const Primary: StoryObj<CheckboxProps> = {}

export default meta
