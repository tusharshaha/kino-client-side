import React from 'react';
import useProducts from '../Hooks/useProducts';
import Product from './Product';
import styles from '../../styles/Home/ShowProducts.module.css';
import { useRouter } from 'next/router';

const ShowProducts = () => {
    const { products } = useProducts();
    const router = useRouter();
    return (
        <div className='cus-container my-20'>
            <div className='flex justify-between items-end mb-12'>
                <div className='hidden sm:block'>
                    <h3 className='text-slate-700'>Featured Products</h3>
                    <p className='text-slate-500'>Sed ut perspiciatis unde omnis iste natus error</p>
                </div>
                <div>
                    <button onClick={()=>{router.push('/shop')}} className={`${styles.view} uppercase text-slate-500 font-bold`}>View all Products <span className='text-3xl'>&#8594;</span></button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    products.slice(0,8).map(product => <Product key={product._id} product={product} mode='show product'/>)
                }
            </div>
        </div>
    );
};

export default ShowProducts;