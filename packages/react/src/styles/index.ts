import {
	colors,
	fonts,
	fontSizes,
	fontWeights,
	lineHeights,
	radii,
	space,
} from '@jax-ui/tokens'
import { createStitches } from '@stitches/react'

export const { styled, css, globalCss, keyframes, getCssText, theme } =
	createStitches({
		theme: {
			colors,
			fonts,
			fontSizes,
			fontWeights,
			lineHeights,
			radii,
			space,
		},
	})
