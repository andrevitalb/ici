import tw, { styled, TwStyle } from "twin.macro"

type Sizes = "md"
type Colors = "blue" | "blueTransparent" | "red"

export interface ButtonProps {
	size?: Sizes
	color?: Colors
}

export const buttonColors: Record<Colors, TwStyle> = {
	blue: tw`bg-blue-400 hover:bg-blue-500 disabled:bg-blue-200`,
	blueTransparent: tw`bg-transparent border-4 border-blue-400 hover:(bg-white bg-opacity-10)`,
	red: tw`bg-red border-4 border-red hover:(text-red bg-transparent)`,
}

export const buttonSizes: Record<Sizes, TwStyle> = {
	md: tw`py-4 px-12 text-base text-white md:px-16`,
}

export const baseButtonStyles = tw`
	inline-block no-underline
	font-semibold font-display
  rounded
	disabled:(opacity-50 cursor-default)
`

export const Button = styled.button(
	({ color = "blue", size = "md" }: ButtonProps) => [
		baseButtonStyles,
		buttonColors[color],
		buttonSizes[size],
	],
)
