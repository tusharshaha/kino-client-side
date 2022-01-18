import Head from 'next/head'
import Footer from '../Shared/Footer'
import Header from '../Shared/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kino | Home</title>
      </Head>
      <Header></Header>
      <main>
        <div className='cus-container'>
          <h2 className='font-bold underline'>this is main part</h2>
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}
