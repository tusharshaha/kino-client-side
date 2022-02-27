import Head from 'next/head';
import Link from 'next/link';
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
                        <p className="text-slate-400"><Link href='/products'><a className='text-red-500'>Browse products</a></Link> No downloads available yet.</p>
                    </UserLayout>
                </div>
            </main>
        </>
    );
};



export default Downloads;

