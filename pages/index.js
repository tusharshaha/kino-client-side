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
        <h2 className='text-3xl font-bold underline'>this is main part</h2>
      </main>
      <Footer></Footer>
    </>
  )
}
