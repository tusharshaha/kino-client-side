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
                    <table className='text-slate-400 border-collapse text-center border border-slate-400'>
                        <thead>
                            <tr>
                                <th className='border py-2 px-6 border-slate-400'></th>
                                <th className='border py-2 px-6 border-slate-400'>Product</th>
                                <th className='border py-2 px-6 border-slate-400'>Price</th>
                                <th className='border py-2 px-6 border-slate-400'>Quantity</th>
                                <th className='border py-2 px-6 border-slate-400'>Subtotal</th>
                                <th className='border py-2 px-6 border-slate-400'>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border py-2 px-6 border-slate-400'>sadfasdf</td>
                                <td className='border py-2 px-6 border-slate-400'>Medical Microscope</td>
                                <td className='border py-2 px-6 border-slate-400'>dsfasdfasdf</td>
                                <td className='border py-2 px-6 border-slate-400'>£190.00</td>
                                <td className='border py-2 px-6 border-slate-400'>£950.00</td>
                                <td className='border py-2 px-6 border-slate-400'></td>
                            </tr>
                            <tr>
                                <td colSpan={6} className='border py-2 px-4 border-slate-400'>f</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
};

export default Cart;