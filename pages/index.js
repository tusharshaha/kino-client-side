import Head from 'next/head'
import ShortCategory from '../Components/Home/ShortCategory'
import TopBanner from '../Components/Home/TopBanner'
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
        <ShortCategory></ShortCategory>
      </main>
      <Footer></Footer>
    </>
  )
}
