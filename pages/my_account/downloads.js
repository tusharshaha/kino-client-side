import Head from 'next/head';
import React from 'react';
import UserLayout from '../../Components/Account/UserLayout';
import TopBanner from '../../Shared/TopBanner';

const Downloads = () => {
    return (
        <>
            <Head>
                <title>Kino | Downloads</title>
            </Head>
            <main>
                <TopBanner name='My Account' route='My Account' />
                <div className='cus-container'>
                    <UserLayout>
                        <h3>This is download page</h3>
                    </UserLayout>
                </div>
            </main>
        </>
    );
};



export default Downloads;

