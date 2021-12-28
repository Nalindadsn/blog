import '../styles/globals.css'
import '../styles/index.css'
import Layout from '../components/Layout'
import { StoreProvider } from '../utils/Store'


import "prismjs/themes/prism-tomorrow.css";

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  )
}

export default MyApp
