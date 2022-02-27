import Head from "next/head";
import Link from "next/link";
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
                                    <UserLayout>
                                        <div className="text-slate-400">
                                            <p className="capitalize mb-3">Hello {user?.displayName},</p>
                                            <p>From your account dashboard you can view your <Link href='/orders'><a className="text-red-500">recent orders</a></Link>, manage your <Link href="my_account/address"><a className="text-red-500">shipping and billing</a></Link> addresses, and view your <Link href="/wishlist"><a className="text-red-500">wishlisted product</a></Link>.</p>
                                        </div>
                                    </UserLayout>
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