import { ComponentType } from "react"
import "styles/globals.css"
import { GlobalStyles } from "twin.macro"

export default function App<Props extends JSX.IntrinsicAttributes>({
	Component,
	pageProps,
}: {
	Component: ComponentType<Props>
	pageProps: Props
}) {
	return (
		<>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	)
}
