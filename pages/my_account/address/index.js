import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import UserLayout from '../../../Components/Account/UserLayout';
import PrivateRoute from '../../../PrivateRoute/PrivateRoute';
import TopBanner from '../../../Shared/TopBanner';

const Address = () => {
    return (
        <>
            <Head>
                <title>Kino | Address</title>
            </Head>
            <main>
                <TopBanner name="My Account" route="My Account"/>
                <div className='cus-container'>
                    <UserLayout>
                        <p className='text-slate-400'>The following addresses will be used on the checkout page by default.</p>
                        <div className='flex gap-24 flex-wrap mt-3'>
                            <div>
                                <h4 className='font-medium'>Billing address</h4>
                                <Link href="address/bill_address"><a className='text-red-500'>Add</a></Link>
                                <p className='text-slate-400'>You have not set up this type of address yet.</p>
                            </div>
                            <div>
                                <h4 className='font-medium'>Shipping address</h4>
                                <Link href="address/shipping_address"><a className='text-red-500'>Add</a></Link>
                                <p className='text-slate-400'>You have not set up this type of address yet.</p>
                            </div>
                        </div>
                    </UserLayout>
                </div>
            </main>
        </>
    );
};

export default PrivateRoute(Address);