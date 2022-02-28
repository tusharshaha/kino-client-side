import Head from 'next/head';
import React from 'react';
import TopBanner from '../Shared/TopBanner';

const Cart = () => {
    return (
        <>
            <Head>
                <title>Kino | Cart</title>
            </Head>
            <main>
                <TopBanner name="Cart" route="Cart"/>
                <div className='cus-container'>
                    <h3>This is cart</h3>
                </div>
            </main>
        </>
    );
};

export default Cart;