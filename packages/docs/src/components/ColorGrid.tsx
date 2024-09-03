import { colors } from '@jax-ui/tokens'
import { getContrast } from 'polished'

export function ColorGrid() {
	return Object.entries(colors).map(([key, color]) => {
		return (
			<div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
				<div
					style={{
						color: getContrast(color, '#fff') > 3.5 ? '#fff' : '#000',
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<strong>${key}</strong>
					<span>{color}</span>
				</div>
			</div>
		)
	})
}
