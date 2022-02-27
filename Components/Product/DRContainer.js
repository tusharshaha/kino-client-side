import React, { useState } from 'react';
import Descriptions from './Descriptions';
import offerImg from '../../public/shortProduct/cat-1.png';
import Image from 'next/image';
import styles from '../../styles/ProductDetails/ProductDetails.module.css';

const DRContainer = () => {
    const [section, setSection] = useState('d');
    return (
        <div className='flex flex-col lg:flex-row mt-24 gap-8'>
            <div className='grow'>
                <ul className='flex text-2xl flex-wrap gap-12 items-center mb-12 pb-4 border-b-2 border-slate-400'>
                    <li>
                        <button onClick={() => setSection('d')} className={`${section === 'd' && styles.selected} font-bold`}>Descripton</button>
                    </li>
                    <li>
                        <button onClick={() => setSection('r')} className={`${section === 'r' && styles.selected} font-bold`}>Review</button>
                    </li>
                </ul>

                <Descriptions></Descriptions>
            </div>

            <div className={`${styles.offer}`}>
                <div>
                    <Image src={offerImg} height={300} width={300} alt="Pressure meter image" />
                </div>
                <h5 className='font-medium mt-4'>Blood Pressure Meter</h5>
                <p className='font-bold text-red-500 my-4'>&#163;250.99</p>
                <button className='cus-btn py-3 px-8 transition duration-300 hover:bg-red-500'>Buy Now +</button>
            </div>
        </div>
    );
};

export default DRContainer;