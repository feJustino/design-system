import type { Meta, StoryObj } from '@storybook/react'
import { MultiStep, MultiStepProps } from '@jax-ui/react'

const meta: Meta<MultiStepProps> = {
	title: 'Form/MultiStep',
	component: MultiStep,
	args: {
		size: 4,
		currentStep: 1,
	},
	decorators: [
		(Story) => {
			return Story()
		},
	],
}

export const Primary: StoryObj<MultiStepProps> = {}

export const Disabled: StoryObj<MultiStepProps> = {}

export default meta
