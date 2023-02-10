import classNames from "classnames"
import { Field as FieldBase, useFormikContext } from "formik"
import { get } from "lodash"
import tw, { css, styled } from "twin.macro"

/**
 * Use this component to wrap a set of field, label, and error message
 * components. Automatically applies the `haserror` class if appropriate.
 */
export function FieldWrapper<Values>({
	name,
	...props
}: { name: keyof Values } & React.HTMLAttributes<HTMLDivElement>) {
	const form = useFormikContext<Values>()
	const hasError = get(form.touched, name) && Boolean(get(form.errors, name))
	return (
		<div
			{...props}
			className={classNames(props.className, { haserror: hasError })}
		>
			{props.children}
		</div>
	)
}
export const FieldLabel = styled.label`
	${tw`flex flex-col text-base text-blue-500`}
	.haserror & {
		${tw`text-red`}
	}
`

export const textFieldStyle = css`
	${tw`
      w-full p-4
      text-base
      border-blue-400 border rounded
      text-blue-500
      focus:border-blue-500 valid:border-blue-500
  `}
`

export const TextField = styled(FieldBase)`
	${textFieldStyle}
	.haserror & {
		${tw`border-red`}
	}
`

// Simple wrapper that reveals children when a parent has a .haserror class
export const FieldError = styled.div`
	${tw`hidden text-xs text-red`}
	.haserror & {
		${tw`block`}
	}
`
