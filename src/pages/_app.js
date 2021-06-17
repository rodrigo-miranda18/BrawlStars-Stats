import GlobalStyle from "../styles/global"
import { Container } from "../styles/app"

import Layout from "../components/Layout"

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Layout>
    </>
  )
}
