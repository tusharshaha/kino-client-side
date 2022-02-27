import Head from 'next/head';
import React from 'react';
import UserLayout from '../../../Components/Account/UserLayout';

const ShippingAddress = () => {
    return (
        <>
            <Head>
                <title>Kino | Address</title>
            </Head>
            <main>
                <div className='cus-container'>
                    <UserLayout>
                        <h4 className='font-medium'>Shipping Address</h4>
                        <div className='grid grid-cols-1 gap-5'>
                            <form>
                                <label>

                                </label>
                            </form>
                        </div>
                    </UserLayout>
                </div>
            </main>
        </>
    );
};

export default ShippingAddress;