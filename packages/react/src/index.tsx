import { ComponentProps } from 'react'

import { styled } from './styles'

export const Button = styled('button', {
	fontFamily: '$default',
	backgroundColor: '$ignite300',
	borderRadius: '$sm',
	padding: '$2 $4',
	border: 0,
	cursor: 'pointer',
	fontWeight: 'bold',
	color: '$white',

	variants: {
		size: {
			small: {
				fontSize: '14',
			},
			big: {
				fontSize: '16',
				padding: '$3 $6',
			},
		},
		variant: {
			primary: {
				backgroundColor: '$ignite500',
			},
			secondary: {
				backgroundColor: '$ignite300',
			},
			tertiary: {
				backgroundColor: '$ignite700',
			},
		},
	},
	defaultVariants: {
		size: 'small',
		variant: 'primary',
	},
})

export type ButtonProps = ComponentProps<typeof Button>
