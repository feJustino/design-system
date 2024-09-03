import '../styles/token-grid.css'

interface TokensGridProps {
	tokens: Record<string, string>
	hasRems?: boolean
}

export function TokenGrid({ tokens, hasRems = false }: TokensGridProps) {
	return (
		<table className="token-grid">
			<thead>
				<tr>
					<th>Name</th>
					<th>Value</th>
					{hasRems && <th>Pixels</th>}
				</tr>
			</thead>
			<tbody>
				{Object.entries(tokens).map(([key, value]) => {
					return (
						<tr key={key}>
							<td>{key}</td>
							<td>{value}</td>
							{hasRems && <td>{Number(value.replace('rem', '')) * 16}px</td>}
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}
