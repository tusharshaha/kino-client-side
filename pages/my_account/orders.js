import Head from 'next/head';
import React from 'react';
import UserLayout from '../../Components/Account/UserLayout';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import TopBanner from '../../Shared/TopBanner';

const Orders = () => {
    return (
        <>
            <Head>
                <title>Kino | Orders</title>
            </Head>
            <main>
                <TopBanner name="My Account" route="My Account" />
                <div className='cus-container'>
                    <UserLayout>
                        <h3>This is order page</h3>
                    </UserLayout>
                </div>
            </main>
        </>
    );
};

export default PrivateRoute(Orders);