import Image from 'next/image';
import React from 'react';
import bannerImg from '/public/slider-hero-img.png'
import styles from '../../styles/TopBanner.module.css'
const TopBanner = () => {
    return (
        <div className={styles.top_banner}>
            <div className='cus-container grid grid-cols-2 gap-6'>
                <div className='flex flex-col justify-center'>
                    <span className='block uppercase bg-red-500 text-white w-48 font-bold rounded-lg py-0.5 mb-3 flex items-center justify-center'>COVID -19 PRODUCTS</span>
                    <h1>Face Mask Thermometer</h1>
                    <div className='text-slate-500 mt-4 pl-10 border-l-4 border-red-500'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est velit laboriosam obcaecati qui veritatis aut consequuntur. Culpa maiores autem necessitatibus?
                    </div>
                    <div className='mt-10 flex'>
                        <button className='flex cus-btn pt-1.5 mr-4 uppercase transition duration-300 hover:bg-red-500'>Shop Now <span className='ml-2'>+</span></button>

                        <button className={`${styles.btn_after} uppercase transition duration-300 hover:text-sky-500`}>Hot Collection<span className='ml-2'>+</span></button>
                    </div>
                </div>
                <div>
                    <Image src={bannerImg} height={400} width={450} alt='medical kit'/>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;