import { ComponentProps } from 'react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'

export function Avatar() {
	return (
		<AvatarContainer>
			<AvatarImage />

			<AvatarFallback />
		</AvatarContainer>
	)
}

export type AvatarProps = ComponentProps<typeof Avatar>
