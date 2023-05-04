import { useEffect, useState } from 'react'
import '../styles/index.css'
import '../styles/globals.css'
import Layout from '../Components/Layout/Layout'
import AuthProvider from '../Context/AuthProvider'
import Loader from '../Shared/Loader'
import { Provider } from 'react-redux'
import store, { persistor } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleComplete = () => setLoading(false);

    window.addEventListener('load', handleComplete);
    return () => window.removeEventListener('load', handleComplete);
  }, []);
  return loading ?
    <Loader />
    :
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </PersistGate>
    </Provider>
}

export default MyApp
