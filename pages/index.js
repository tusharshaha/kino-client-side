import Head from 'next/head'
import TopBanner from '../Components/TopBanner'
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
        <TopBanner></TopBanner>
      </main>
      <Footer></Footer>
    </>
  )
}
