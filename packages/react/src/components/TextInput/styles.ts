import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
	backgroundColor: '$gray900',
	borderRadius: '$sm',
	boxSizing: 'border-box',
	border: '2px solid $gray900',
	display: 'flex',
	alignItems: 'center',

	variants: {
		size: {
			sm: {
				padding: '$2 $3',
			},
			md: {
				padding: '$3 $4',
			},
		},
	},

	'&:has(input:focus)': {
		borderColor: '$ignite300',
	},
	'&:has(input:disabled)': {
		cursor: 'not-allowed',
	},

	defaultVariants: {
		size: 'sm',
	},
})

export const Prefix = styled('span', {
	fontFamily: '$default',
	fontSize: '$sm',
	fontWeight: '$regular',
	color: '$gray400',
})

export const Input = styled('input', {
	all: 'unset',
	background: 'transparent',
	width: '100%',

	fontFamily: '$default',
	fontSize: '$sm',
	fontWeight: '$regular',
	color: '$gray100',

	'&:focus': {
		outline: 'none',
	},

	'&:disabled': {
		cursor: 'not-allowed',
	},
	'&::placeholder': {
		color: '$gray400',
	},
})

TextInputContainer.displayName = 'TextInput.Root'
Input.displayName = 'TextInput.Input'
Prefix.displayName = 'TextInput.Prefix'
