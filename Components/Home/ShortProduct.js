import Image from 'next/image';
import React from 'react';
import cat1 from '/public/shortProduct/cat-1.png'
import cat2 from '/public/shortProduct/cat-2.png'
import cat3 from '/public/shortProduct/cat-3.png'
import Styles from '../../styles/Home/ShortProduct.module.css'
const ShortProduct = () => {
    const products = [
        { img: cat1, category: 'Digital Meter', name: 'Blood Pressure Meter', prevPrice: '155.99', curPrice: '109.99', bg: 'bg-blue-50' },
        { img: cat2, category: 'Medical Equipment', name: 'Inhaler Machine', prevPrice: '250.99', curPrice: '239.99', bg: 'bg-purple-50' },
        { img: cat3, category: 'Accessories', name: 'Hand Sanitizer', prevPrice: '140.99', curPrice: '90.99', bg: 'bg-sky-50' }
    ]
    return (
        <div className='cus-container my-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    products.map((p, i) => <div className={`text-center relative p-8 ${p.bg}`} key={i}>
                        <div className={Styles.hot}>
                            <h5>Hot</h5>
                        </div>
                        <h5>{p.category}</h5>
                        <h4 className='font-medium mt-3 mb-6'>{p.name}</h4>
                        <Image src={p.img} width={250} height={250} alt='short product image' />
                        <div className='mt-6'>
                            <span className='text-slate-500 mr-3'><strike>&#36;{p.prevPrice}</strike></span>
                            <span className='text-red-500 text-2xl font-bold'>&#36;{p.curPrice}</span>
                        </div>
                        <button className='bg-sky-500 px-8 py-3 text-white font-bold rounded-full mt-6 hover:bg-red-500 transition duration-300'>Buy Now +</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ShortProduct;