import { useEffect, useState } from 'react'
import '../styles/index.css'
import '../styles/globals.css'
import { BsSuitHeartFill } from 'react-icons/bs'
import Layout from '../Components/Layout/Layout'
import AuthProvider from '../Context/AuthProvider'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])
  return loading ?
    <div className='heart'>
      <BsSuitHeartFill />
    </div>
    :
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
}

export default MyApp
