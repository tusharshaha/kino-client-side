import Head from 'next/head';
import React from 'react';
import UserLayout from '../../../Components/Account/UserLayout';

const BillAddress = () => {
    return (
        <>
            <Head>
                <title>Kino | Address</title>
            </Head>
            <main>
                <div className='cus-container'>
                    <UserLayout>
                        
                    </UserLayout>
                </div>
            </main>
        </>
    );
};

export default BillAddress;