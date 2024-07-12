import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@jax-ui/react'
import { ArrowRight } from 'phosphor-react'

const meta: Meta<ButtonProps> = {
	title: 'Form/Button',
	component: Button,
	args: {
		children: 'Send',
	},
	argTypes: {
		variant: {
			options: ['primary', 'secondary', 'tertiary'],
			control: {
				type: 'inline-radio',
			},
		},
		onClick: { action: 'click' },
	},
}
export const Primary: StoryObj<ButtonProps> = {
	args: {
		variant: 'primary',
		size: 'md',
	},
}

export const Secondary: StoryObj<ButtonProps> = {
	args: {
		variant: 'secondary',
		size: 'md',
		children: 'Create new',
	},
}

export const Tertiary: StoryObj<ButtonProps> = {
	args: {
		variant: 'tertiary',
		size: 'md',
		children: 'Cancel',
	},
}

export const Small: StoryObj<ButtonProps> = {
	args: {
		size: 'sm',
	},
}

export const WithIcon: StoryObj<ButtonProps> = {
	args: {
		children: (
			<>
				Next Step
				<ArrowRight weight="bold" />
			</>
		),
	},
}

export const Disabled: StoryObj<ButtonProps> = {
	args: {
		disabled: true,
	},
}

export default meta
