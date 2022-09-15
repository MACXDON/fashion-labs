import Layout from '../components/Layout'
import '../styles/globals.css'
import { AppProvider } from '../util/contextAPI/ContextAPI'

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  )
}

export default MyApp
