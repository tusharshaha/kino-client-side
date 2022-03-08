import Head from 'next/head';
import React from 'react';
import UserLayout from '../../../Components/Account/UserLayout';
import BillAdd from '../../../Components/Address/BillAdd';
import PrivateRoute from '../../../PrivateRoute/PrivateRoute';
import TopBanner from '../../../Shared/TopBanner';

const BillAddress = () => {
    return (
        <>
            <Head>
                <title>Kino | Address</title>
            </Head>
            <main>
                <TopBanner name="My Account" route="My Account"></TopBanner>
                <div className='cus-container'>
                    <UserLayout>
                        <BillAdd></BillAdd>
                    </UserLayout>
                </div>
            </main>
        </>
    );
};

export default PrivateRoute(BillAddress);