import Head from "next/head";
import AboutGoals from "../Components/About/AboutGoals";
import KinoAnalytics from "../Components/About/KinoAnalytics";
import Brands from "../Components/Home/Brands";
import UserReview from "../Components/Home/UserReview";
import TopBanner from "../Shared/TopBanner";
import AboutTop from "../Components/About/AboutTop";
import AboutBanner from "../Components/About/AboutBanner";

export default function AboutUs() {
    return(
        <>
            <Head>
                <title>Kino | About</title>
            </Head>
            <main>
                <TopBanner name='About Us' route='About'></TopBanner>
                <AboutTop></AboutTop>
                <KinoAnalytics></KinoAnalytics>
                <AboutGoals></AboutGoals>
                <AboutBanner></AboutBanner>
                <UserReview></UserReview>
                <Brands></Brands>
            </main>
        </>
    )
}