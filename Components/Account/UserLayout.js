import Link from 'next/link';
import React from 'react';
import useAuth from '../../Hooks/useAuth';

const UserLayout = ({ children }) => {
    const { logOut } = useAuth();
    return (
        <>
            <div className='mb-32'>
                <div className='flex items-center gap-2 flex-wrap'>
                    <Link href='/my_account'><a className='acc-btn visited:bg-red-500'>Dashboard</a></Link>
                    <Link href='orders'><a className='acc-btn'>Orders</a></Link>
                    <Link href='downloads'><a className='acc-btn'>Downloads</a></Link>
                    <Link href='address'><a className='acc-btn'>Addresses</a></Link>
                    <Link href='/wishlist'><a className='acc-btn'>Wishlist</a></Link>
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