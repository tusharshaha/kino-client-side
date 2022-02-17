import Link from 'next/link';
import React from 'react';
import { FaGreaterThan } from 'react-icons/fa'

const TopBanner = ({ name, route }) => {
    return (
        <div style={{
            backgroundImage: `url(${'/breadcrumb.png'})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'rgba(0, 0, 0, 0.340)',
            backgroundBlendMode: 'darken',
            height: '350px',
            width: '100%',
            marginBottom: '100px'
        }}>
            <div className='cus-container flex items-center justify-start h-full relative'>
                <h2 className='text-white font-bold'>{name}</h2>
                <div className='
                    absolute
                    rounded-full bg-white
                    drop-shadow-md flex flex-wrap justify-center
                    items-center px-6 sm:px-12 gap-3
                    text-slate-500 -bottom-8
                    left-0 py-4'>
                    <h4><Link href='/'>Home</Link></h4>
                    <FaGreaterThan />
                    <h4 className='text-sky-500'>{route}</h4>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;