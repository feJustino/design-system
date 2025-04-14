import { PropsWithChildren } from 'react'
import { Text } from '../Text'
import { TooltipBubble, TooltipContainer } from './styles'

export interface TooltipProps extends PropsWithChildren<typeof TooltipBubble> {
	position?: 'top' | 'bottom'
	content: string
}
export function Tooltip({ children, position, content }: TooltipProps) {
	return (
		<TooltipContainer>
			<TooltipBubble data-tooltip={true} position={position}>
				<Text size={'sm'}>{content}</Text>
			</TooltipBubble>
			{children}
		</TooltipContainer>
	)
}

Tooltip.displayName = 'Tooltip'
