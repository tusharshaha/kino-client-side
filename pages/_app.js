import { useEffect, useState } from 'react'
import '../styles/index.css'
import '../styles/globals.css'
import Layout from '../Components/Layout/Layout'
import AuthProvider from '../Context/AuthProvider'
import Loader from '../Shared/Loader'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])
  return loading ?
    <Loader/>
    :
    <AuthProvider>
      <Layout>
        {
          <Component {...pageProps} />
        }
      </Layout>
    </AuthProvider>
}

export default MyApp
