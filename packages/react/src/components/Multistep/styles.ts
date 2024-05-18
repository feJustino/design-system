import { styled } from '../../styles'
import { Text } from '../Text'

export const MultiStepContainer = styled('div', {})

export const Label = styled(Text, {
	color: '$gray200',
	display: 'block',

	defaultVariants: {
		size: 'xs',
	},
})

export const Steps = styled('div', {
	display: 'grid',
	gap: '$2',
	marginTop: '$1',
	gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
})

export const Step = styled('div', {
	height: '$1',
	borderRadius: '$px',
	backgroundColor: '$gray600',
	transition: '0.5s',

	variants: {
		active: {
			true: {
				backgroundColor: '$gray100',
			},
		},
	},
})

MultiStepContainer.displayName = 'MultiStep.Container'
Label.displayName = 'MultiStep.Label'
Steps.displayName = 'MultiStep.Steps'
Step.displayName = 'MultiStep.Step'
