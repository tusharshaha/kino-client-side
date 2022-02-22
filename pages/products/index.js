import Head from "next/head";
import Shop from "../../Components/Shop/Shop";
import TopBanner from "../../Shared/TopBanner";

export default function Products() {
    return(
        <>
            <Head>
                <title>Kino | Shop</title>
            </Head>
            <main>
                <TopBanner name='Products' route='Shop'></TopBanner>
                <Shop></Shop>
            </main>
        </>
    )
}
