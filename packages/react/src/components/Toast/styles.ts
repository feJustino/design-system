import { styled } from '../../styles'
const InlineFlexBox = {
	display: 'inline-flex',
	alignItems: 'center',
}

export const ToastBubble = styled('span', {
	whiteSpace: 'nowrap',
	position: 'absolute',
	borderRadius: '$sm',
	right: '$2',
	padding: '$4',
	zIndex: 999,
	backgroundColor: '$gray800',
	...InlineFlexBox,

	variants: {
		position: {
			top: {
				top: '$2',
			},
			bottom: {
				bottom: '$2',
			},
		},
	},
	defaultVariants: {
		position: 'top',
	},
})
