import Head from "next/head";
import Login from "../Components/Account/Login";
import Register from "../Components/Account/Register";
import TopBanner from "../Shared/TopBanner";

export default function MyAccount() {

    return (
        <>
            <Head>
                <title>Kino | Account</title>
            </Head>
            <main>
                <TopBanner name='My Account' route='My Account'></TopBanner>
                <div className="cus-container mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Login></Login>
                        <Register></Register>
                    </div>
                </div>
            </main>
        </>
    )
}