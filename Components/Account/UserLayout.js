import Link from 'next/link';
import React from 'react';
import useAuth from '../../Hooks/useAuth';

const UserLayout = ({ children }) => {
    const { user, logOut, verifyUserEmail } = useAuth();
    return (
        <>
            <div className='mb-32'>
                <div className='flex items-center gap-2 flex-wrap'>
                    <Link href='/my_account'><a className='acc-btn'>Dashboard</a></Link>
                    <Link href='/my_account/orders'><a className='acc-btn'>Orders</a></Link>
                    <Link href='/wishlist'><a className='acc-btn'>Wishlist</a></Link>
                    <Link href='/my_account/downloads'><a className='acc-btn'>Download</a></Link>
                    <Link href='/my_account/address'><a className='acc-btn'>Addresses</a></Link>
                    {!user.emailVerified && <button onClick={verifyUserEmail} className='acc-btn'>Verify Email</button>}
                    <button onClick={logOut} className='acc-btn'>Logout</button>
                </div>
                <div className='mt-10'>
                    {children}
                </div>
            </div>
        </>
    );
};

export default UserLayout;