import React from 'react';
import { BsHeart, BsClockHistory, BsPeople } from 'react-icons/bs';
import { MdOutlineTaskAlt } from 'react-icons/md';
import styles from '../../styles/About/KinoAnalytics.module.css'

const KinoAnalytics = () => {
    return (
        <div className='cus-container border-t-2'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-28 gap-6'>
                <div className='text-center'>
                    <BsHeart className='text-5xl mx-auto text-red-500 mb-3'/>
                    <h2 className={`${styles.counter} font-medium mb-4`}>2560</h2>
                    <p className='font-bold text-slate-500'>SATICFIED CLIENTS</p>
                </div>
                <div className='text-center'>
                    <MdOutlineTaskAlt className='text-5xl mx-auto text-red-500 mb-3'/>
                    <h2 className={`${styles.counter} font-medium mb-4`}>9862</h2>
                    <p className='font-bold text-slate-500'>FINISHED WORKS</p>
                </div>
                <div className='text-center'>
                    <BsPeople className='text-5xl mx-auto text-red-500 mb-3'/>
                    <h2 className={`${styles.counter} font-medium mb-4`}>7563</h2>
                    <p className='font-bold text-slate-500'>COVID -19 SPECIALIST</p>
                </div>
                <div className='text-center'>
                    <BsClockHistory className='text-5xl mx-auto text-red-500 mb-3'/>
                    <h2 className={`${styles.counter} font-medium mb-4`}>6534</h2>
                    <p className='font-bold text-slate-500'>GLOBAL BRANDS</p>
                </div>
            </div>
        </div>
    );
};

export default KinoAnalytics;