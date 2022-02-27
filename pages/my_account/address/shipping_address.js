import Head from 'next/head';
import React from 'react';
import UserLayout from '../../../Components/Account/UserLayout';
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
                        <h4 className='font-medium'>Shipping Address</h4>
                        <form onSubmit={(e) => e.preventDefault()} className='grid grid-cols-1 mt-5 gap-4'>
                            <label className='flex flex-col gap-2'>
                                <span className="after:content-['*'] after:ml-1 after:text-red-500 cursor-pointer">First Name</span>
                                <input className='input' type="text" required />
                            </label>
                            <label className='flex flex-col gap-2'>
                                <span className="after:content-['*'] after:ml-1 after:text-red-500 cursor-pointer">Last Name</span>
                                <input className='input' type="text" required />
                            </label>
                            <label className='flex flex-col gap-2'>
                                <span className="">Company Name (optional)</span>
                                <input className='input' type="text" />
                            </label>
                            <label className='flex flex-col gap-2'>
                                <span className="after:content-['*'] after:ml-1 after:text-red-500 cursor-pointer">Country / Region</span>
                                <select className='input' required>
                                    <option selected disabled>Select Country / Region</option>
                                    <option>Bangladesh</option>
                                    <option>China</option>
                                    <option>India</option>
                                </select>
                            </label>
                            <label className='flex flex-col gap-2'>
                                <span className="after:content-['*'] after:ml-1 after:text-red-500 cursor-pointer">Street Address</span>
                                <input className='input' type="text" placeholder='House Number and Street Name' required />

                                <input className='input mt-2' type="text" placeholder='Appartment, Suite, Unit, etc (optional)' />
                            </label>
                            <label className='flex flex-col gap-2'>
                                <span className="after:content-['*'] after:ml-1 after:text-red-500 cursor-pointer">Town / City</span>
                                <input className='input' type="text" required />
                            </label>
                            <label className='flex flex-col gap-2'>
                                <span className="after:content-['*'] after:ml-1 after:text-red-500 cursor-pointer">Post Code</span>
                                <input className='input' type="text" required />
                            </label>
                            <button className='addr-btn mt-6'>Save Address</button>
                        </form>
                    </UserLayout>
                </div>
            </main>
        </>
    );
};

export default PrivateRoute(ShippingAddress);