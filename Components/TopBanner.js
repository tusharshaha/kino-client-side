import Image from 'next/image';
import React from 'react';
import bannerImg from '/public/slider-hero-img.png'
import {AiOutlinePlus} from 'react-icons/ai'
import styles from '../styles/TopBanner.module.css'
const TopBanner = () => {
    return (
        <div className={styles.top_banner}>
            <div className='cus-container grid grid-cols-2 gap-6'>
                <div className='flex flex-col justify-center'>
                    <span className='block uppercase bg-red-500 text-white w-48 font-bold rounded-lg py-0.5 mb-3 flex justify-center'>COVID -19 PRODUCTS</span>
                    <h1>Face Mask Thermometer</h1>
                    <div className='text-slate-500 mt-3 pl-10 border-l-4 border-red-500'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est velit laboriosam obcaecati qui veritatis aut consequuntur. Culpa maiores autem necessitatibus?
                    </div>
                    <div className='mt-5 flex'>
                        <button className='flex cus-btn mr-2 uppercase'>Shop Now <AiOutlinePlus className='ml-2'/></button>
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