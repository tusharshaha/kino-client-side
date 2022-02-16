import { useEffect, useState } from 'react'
import '../styles/index.css'
import '../styles/globals.css'
import { BsSuitHeartFill } from 'react-icons/bs'
import Layout from '../Components/Layout/Layout'
import useProducts from '../Components/Hooks/useProducts'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const { products } = useProducts();
  return products.length !== 0 ?
    <Layout>
      <Component {...pageProps} />
    </Layout>
    :
    <div className='heart'>
      <BsSuitHeartFill />
    </div>
}

export default MyApp
