import Head from "next/head";
import AboutBanner from "../Components/About/AboutBanner";
import AboutGoals from "../Components/About/AboutGoals";
import KinoAnalytics from "../Components/About/KinoAnalytics";
import Brands from "../Components/Home/Brands";
import UserReview from "../Components/Home/UserReview";
import TopBanner from "../Shared/TopBanner";

export default function AboutUs() {
    return(
        <>
            <Head>
                <title>Kino | About</title>
            </Head>
            <main>
                <TopBanner name='About Us' route='About'></TopBanner>
                <AboutBanner></AboutBanner>
                <KinoAnalytics></KinoAnalytics>
                <AboutGoals></AboutGoals>
                <UserReview></UserReview>
                <Brands></Brands>
            </main>
        </>
    )
}