import { Button } from "components/common/button"
import {
	FieldError,
	FieldLabel,
	FieldWrapper,
	TextField,
} from "components/common/fields"
import { Form, Formik } from "formik"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import * as Yup from "yup"

const emailError = "Proporcione un correo válido"

const LoginSchema = Yup.object({
	email: Yup.string().email(emailError).required(emailError),
	password: Yup.string().required("Ingrese su contraseña"),
})
type Values = Yup.InferType<typeof LoginSchema>

const initialValues = {
	email: "",
	password: "",
}

const LoginForm = () => {
	const auth = getAuth()

	const handleSubmit = async ({ email, password }: Values) => {
		const userCredentials = await signInWithEmailAndPassword(
			auth,
			email,
			password,
		)

		console.log(userCredentials)
	}

	return (
		<div tw="flex flex-col justify-center items-center">
			<h1 tw="font-display text-2xl">Login</h1>
			<Formik<Values>
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={LoginSchema}
			>
				{({ errors, isValid, isSubmitting, dirty }) => {
					return (
						<Form>
							<div tw="grid grid-cols-1 gap-3 mt-5">
								<FieldWrapper name="email">
									<FieldLabel>
										Email
										<TextField name="email" tw="w-full" />
										<FieldError>{errors.email}</FieldError>
									</FieldLabel>
								</FieldWrapper>
								<FieldWrapper name="password">
									<FieldLabel>
										Contraseña
										<TextField name="password" type="password" tw="w-full" />
										<FieldError>{errors.password}</FieldError>
									</FieldLabel>
								</FieldWrapper>
								<Button disabled={!isValid || !dirty || isSubmitting}>
									Login
								</Button>
							</div>
						</Form>
					)
				}}
			</Formik>
		</div>
	)
}

export default LoginForm
