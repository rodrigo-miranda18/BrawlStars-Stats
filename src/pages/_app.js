import GlobalStyle from "../styles/global"
import {DataProvider} from "../context/DataContext"

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
    </>
  )
}