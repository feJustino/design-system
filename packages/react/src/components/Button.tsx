import { ComponentProps, ElementType } from 'react'

import { styled } from '../styles'

export const Button = styled('button', {
	all: 'unset',
	borderRadius: '$sm',
	fontSize: '$sm',
	fontFamily: '$default',
	fontWeight: 'medium',
	textAlign: 'center',

	minWidth: 120,
	boxSizing: 'border-box',

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '$2',

	cursor: 'pointer',

	svg: {
		width: '$4',
		height: '$4',
	},

	'&:disabled': {
		cursor: 'not-allowed',
	},

	variants: {
		size: {
			sm: {
				padding: '0 $4',
				height: 38,
			},
			md: {
				padding: '0 $4',
				height: 46,
			},
		},
		variant: {
			primary: {
				color: '$white',
				backgroundColor: '$ignite500',

				'&:not(:disabled):hover': {
					backgroundColor: '$ignite300',
				},

				'&:disabled': {
					backgroundColor: '$gray200',
				},
			},
			secondary: {
				color: '$ignite300',
				border: '2px solid $ignite500',

				'&:not(:disabled):hover': {
					backgroundColor: '$ignite500',
					color: '$white',
				},

				'&:disabled': {
					backgroundColor: '$gray200',
					color: '$gray200',
				},
			},
			tertiary: {
				color: '$gray100',

				'&:not(:disabled):hover': {
					color: '$white',
				},

				'&:disabled': {
					backgroundColor: '$gray600',
					color: '$gray200',
				},
			},
		},
	},
	defaultVariants: {
		size: 'md',
		variant: 'primary',
	},
})

export interface ButtonProps extends ComponentProps<typeof Button> {
	as?: ElementType
}

Button.displayName = 'Button'
