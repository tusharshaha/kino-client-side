import { useEffect, useState } from 'react'
import '../styles/index.css'
import '../styles/globals.css'
import Layout from '../Components/Layout/Layout'
import AuthProvider from '../Context/AuthProvider'
import Loader from '../Shared/Loader'
import StoreProvider from '../Context/StorePriovider'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])
  return loading ?
    <Loader />
    :
    <AuthProvider>
      <StoreProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StoreProvider>
    </AuthProvider>
}

export default MyApp
