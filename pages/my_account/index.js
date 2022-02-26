import Head from "next/head";
import Login from "../../Components/Account/Login";
import Register from "../../Components/Account/Register";
import UserLayout from "../../Components/Account/UserLayout";
import useAuth from "../../Hooks/useAuth";
import Loader from "../../Shared/Loader";
import TopBanner from "../../Shared/TopBanner";

export default function MyAccount() {
    const { loading, user } = useAuth();

    return (
        <>
            <Head>
                <title>Kino | Account</title>
            </Head>
            <main>
                <TopBanner name='My Account' route='My Account'></TopBanner>
                <div className="cus-container mb-16">
                    {loading ?
                        <div className="relative py-52">
                            <Loader />
                        </div>
                        :
                        <>
                            {
                                user?.email ?
                                    <UserLayout></UserLayout>
                                    :
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <Login></Login>
                                        <Register></Register>
                                    </div>
                            }
                        </>

                    }
                </div>
            </main>
        </>
    )
}