import Head from 'next/head';
import React from 'react';
import UserLayout from '../../../Components/Account/UserLayout';
import ShippingAdd from '../../../Components/Address/ShippingAdd';
import PrivateRoute from '../../../PrivateRoute/PrivateRoute';
import TopBanner from '../../../Shared/TopBanner';

const ShippingAddress = () => {
    return (
        <>
            <Head>
                <title>Kino | Address</title>
            </Head>
            <main>
                <TopBanner name="My Account" route="My Account"></TopBanner>
                <div className='cus-container'>
                    <UserLayout>
                        <ShippingAdd></ShippingAdd>
                    </UserLayout>
                </div>
            </main>
        </>
    );
};

export default PrivateRoute(ShippingAddress);