import { styled } from '../../styles'
const InlineFlexBox = {
	display: 'inline-flex',
	alignItems: 'center',
}

export const ToastBubble = styled('span', {
	whiteSpace: 'nowrap',
	position: 'absolute',
	borderRadius: '$sm',
	padding: '$1 $2',
	zIndex: 999,
	backgroundColor: '$gray900',
	opacity: 0,
	...InlineFlexBox,

	variants: {
		position: {
			top: {
				marginBottom: '$2',
				right: '0',
				'&:before': {
					borderLeft: 'transparent solid 6px',
					borderRight: 'transparent solid 6px',
					borderTop: '$gray900 solid 6px',
					borderBottom: 'transparent',
					top: '100%',
				},
			},
			bottom: {
				marginTop: '$2',
				top: '100%',
				'&:before': {
					borderLeft: 'transparent solid 6px',
					borderRight: 'transparent solid 6px',
					borderBottom: '$gray900 solid 6px',
					borderTop: 'transparent',
					bottom: '100%',
				},
			},
		},
	},
	defaultVariants: {
		position: 'top',
	},
})

export const CloseButton = styled('button', {
	all: 'unset',
	borderRadius: '$sm',
	fontSize: '$sm',
	fontFamily: '$default',
	fontWeight: 'medium',
	textAlign: 'center',
	width: '$3',
	height: '$3',
	margin: '$1',
	boxSizing: 'border-box',

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '$2',

	cursor: 'pointer',
	color: '$gray500',

	'&:not(:disabled):hover': {
		color: '$white',
	},

	'&:disabled': {
		backgroundColor: '$gray600',
		color: '$gray200',
	},
})
