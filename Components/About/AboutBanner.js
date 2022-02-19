import { useRouter } from 'next/router';
import React from 'react';
import styles from '../../styles/About/AboutBanner.module.css';

const AboutBanner = () => {
    const router = useRouter();
    return (
        <div className={`${styles.banner} mb-24 cus-container flex items-center justify-start`}>
            <div className='flex px-12'>
                <div>
                    <span style={{width:'110px', height:'26px'}} className='block  uppercase bg-red-500 text-white font-bold rounded-lg flex items-center justify-center mb-3'>COVID - 19</span>
                    <h2 className='my-6'>Needs For <br /> Consultations</h2>
                    <button onClick={()=>router.push('/products')} className='flex cus-btn py-4 px-8 uppercase transition duration-300 hover:bg-red-500'>Shop Now <span className='ml-2'>+</span></button>
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;