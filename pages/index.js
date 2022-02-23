import Head from 'next/head'
import AboutService from '../Components/Home/AboutService'
import Brands from '../Components/Home/Brands'
import DealsTimer from '../Components/Home/DealsTimer'
import FeatureProduct from '../Components/Home/FeatureProduct'
import NewsBlogs from '../Components/Home/NewsBlogs'
import ShortCategory from '../Components/Home/ShortCategory'
import ShortProduct from '../Components/Home/ShortProduct'
import ShowProducts from '../Components/Home/ShowProducts'
import TopBanner from '../Components/Home/TopBanner'
import UserReview from '../Components/Home/UserReview'

export default function Home() {
  return (
    <>
    {/* this is header  */}
      <Head>
        <title>Kino | Home</title>
      </Head>
    {/* this is main body  */}
      <main>
        <TopBanner></TopBanner>
        <ShortCategory></ShortCategory>
        <FeatureProduct></FeatureProduct>
        <DealsTimer></DealsTimer>
        <ShortProduct></ShortProduct>
        <ShowProducts></ShowProducts>
        <UserReview></UserReview>
        <NewsBlogs></NewsBlogs>
        <Brands></Brands>
        <AboutService></AboutService>
      </main>
    </>
  )
}
