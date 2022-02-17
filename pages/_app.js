import { useEffect, useState } from 'react'
import '../styles/index.css'
import '../styles/globals.css'
import { BsSuitHeartFill } from 'react-icons/bs'
import Layout from '../Components/Layout/Layout'
import useProducts from '../Components/Hooks/useProducts'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])
  return loading ?
    <div className='heart'>
      <BsSuitHeartFill />
    </div>
    :
    <Layout>
      <Component {...pageProps} />
    </Layout>
}

export default MyApp
