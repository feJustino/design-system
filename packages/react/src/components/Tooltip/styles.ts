import { styled } from '../../styles'
import { Text } from '../Text'

export const Label = styled(Text, {

})

const InlineFlexBox = {
	display: 'inline-flex',
	flexDirection: 'column',
	alignItems: 'center',
}
export const TooltipContainer = styled('div', {
	position: 'relative',
	cursor: 'pointer',
	...InlineFlexBox,
	'&:hover > span[data-tooltip="true"]': {
		opacity: 1,
		visibility: 'visible',
	},
})

export const TooltipBubble = styled('span', {
	whiteSpace: 'nowrap',
	position: 'absolute',
	borderRadius: '$sm',
	padding: '$1 $2',
	zIndex: 999,
	backgroundColor: '$gray900',
	opacity: 0,
	visibility: 'hidden',
	transition: 'opacity 0.2s ease-in-out, visibility 0.2s ease-in-out',
	...InlineFlexBox,
	'&:before': {
		content: '',
		position: 'absolute',
		width: 0,
		height: 0,
		transition: 'opacity 0.2s ease-in-out, visibility 0.2s ease-in-out',
	},
	variants: {
		position: {
			top: {
				marginBottom: '$2',
				bottom: '100%',
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
