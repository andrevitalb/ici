import LoginWrapper from "components/auth/LoginWrapper"
import { Page, PageContentWrapper } from "components/common/layout/layout.atoms"
import Head from "next/head"

const Login = () => {
	return (
		<div>
			<Head>
				<title>Login | ICI</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1"
				/>
			</Head>
			<Page>
				<PageContentWrapper>
					<LoginWrapper />
				</PageContentWrapper>
			</Page>
		</div>
	)
}

export default Login
