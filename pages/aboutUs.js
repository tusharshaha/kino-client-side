import Head from "next/head";
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
                <UserReview></UserReview>
                <Brands></Brands>
            </main>
        </>
    )
}