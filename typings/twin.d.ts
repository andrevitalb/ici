
// The 'as' prop on styled components
declare global {
	namespace JSX {
		interface IntrinsicAttributes<T> extends DOMAttributes<T> {
			as?: string
		}
	}
}
