import Image from 'next/image';
import React from 'react';
import bannerImg from '/public/slider-hero-img.png'
import styles from '../../styles/Home/TopBanner.module.css'
import { useRouter } from 'next/router';
const TopBanner = () => {
    const router = useRouter();
    return (
        <div className={styles.top_banner}>
            <div className='cus-container grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='flex flex-col justify-center'>
                    <span className='uppercase bg-red-500 text-white w-48 font-bold rounded-lg py-0.5 mb-3 flex items-center justify-center'>COVID -19 PRODUCTS</span>
                    <h1 className='text-4xl md:text-6xl'>Face Mask <br /> Thermometer</h1>
                    <div className='text-slate-500 mt-4 pl-10 pr-24 border-l-4 border-red-500'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo atque quidem id aliquam non ex nulla asperiores doloribus.
                    </div>
                    <div className='mt-10 flex flex-wrap gap-4 sm:gap-0'>
                        <button onClick={()=>router.push('/products')} className='flex cus-btn py-4 px-8 mr-4 uppercase transition duration-300 hover:bg-red-500'>Shop Now <span className='ml-2'>+</span></button>

                        <button className={`${styles.btn_after} uppercase transition duration-300 hover:text-sky-500`}>Hot Collection<span className='ml-2'>+</span></button>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <Image src={bannerImg} height={400} width={450} alt='medical kit'/>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;