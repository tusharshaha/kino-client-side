import Head from 'next/head';
import React from 'react';
import TopBanner from '../Shared/TopBanner';

const wishlist = () => {
    return (
        <>
            <Head>
                <title>Kino | Wishlist</title>
            </Head>
            <main>
                <TopBanner name="Wishlist" route="Wishlist" />
                <div className="cus-container">
                    <h3>This is Wishlist page</h3>
                </div>
            </main>
        </>
    );
};

export default wishlist;