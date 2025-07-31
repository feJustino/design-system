import { PropsWithChildren } from 'react'

import { Label, TooltipBubble, TooltipContainer } from './styles'

export interface TooltipProps extends PropsWithChildren<typeof TooltipBubble> {
	position?: 'top' | 'bottom'
	content: string
}
export function Tooltip({ children, position, content }: TooltipProps) {
	return (
		<TooltipContainer>
			<TooltipBubble data-tooltip={true} position={position}>
				<Label size={'sm'}>{content}</Label>
			</TooltipBubble>
			{children}
		</TooltipContainer>
	)
}

Tooltip.displayName = 'Tooltip'
