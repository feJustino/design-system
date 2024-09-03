import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
	backgroundColor: '$gray900',
	padding: '$3 $4',
	borderRadius: '$sm',
	boxSizing: 'border-box',
	border: '2px solid $gray900',
	display: 'flex',
	alignItems: 'baseline',

	'&:has(input:focus)': {
		borderColor: '$ignite300',
	},
	'&:has(input:disabled)': {
		cursor: 'not-allowed',
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
})

TextInputContainer.displayName = 'TextInput.Root'
Input.displayName = 'TextInput.Input'
Prefix.displayName = 'TextInput.Prefix'
