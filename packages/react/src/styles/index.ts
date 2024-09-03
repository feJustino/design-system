import {
	colors,
	fonts,
	fontSizes,
	fontWeights,
	lineHeights,
	radii,
	space,
} from '@jax-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const { styled, css, globalCss, keyframes, getCssText, theme } =
	createStitches({
		themeMap: {
			...defaultThemeMap,
			height: 'space',
			width: 'space',
		},
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
