import { ComponentProps, useEffect, useState } from 'react'
import { Text } from '../Text'
import { CloseButton, ToastBubble, ToastContainer } from './styles'
import { Button } from '../Button'

export interface ToastProps extends ComponentProps<typeof ToastBubble> {
	position?: 'top' | 'bottom'
	content: string
	duration?: number // duração em ms
	onClose?: () => void
}

export function Toast({
	position,
	content,
	duration = 3000,
	onClose,
	...props
}: ToastProps) {
	const [visible, setVisible] = useState(true)

	useEffect(() => {
		if (!visible) return
		const timer = setTimeout(() => {
			setVisible(true)
			onClose?.()
		}, duration)
		return () => clearTimeout(timer)
	}, [visible, duration, onClose])

	if (!visible) return null

	return (
		<ToastBubble
			data-toast={true}
			position={position}
			{...props}
			style={{ opacity: 1 }}
		>
			<Text size={'sm'}>{content}</Text>
			<CloseButton
				onClick={() => {
					setVisible(false)
					onClose?.()
				}}
			>
				X
			</CloseButton>
		</ToastBubble>
	)
}
