import React, { useState } from 'react';
import { BsShieldCheck } from 'react-icons/bs';
import Product from './Product';
import styles from '../../styles/Home/FeatureProduct.module.css';
import Skeleton from '../../Shared/Skeleton';
import useProducts from '../../Hooks/useProducts';

const FeatureProduct = (props) => {
    const [cat, setCat] = useState('Best Seller');
    const { products } = useProducts();
    // filter products
    const ftProducts = products?.filter(product => product.categories.includes(cat));

    return (
        <div className='cus-container my-20'>
            <div className='flex justify-between items-end border-b-2 border-slate-300 pb-3 mb-12'>
                <div className='hidden sm:block'>
                    <h3 className='text-slate-700'>Featured Products</h3>
                    <p className='text-slate-500'>Sed ut perspiciatis unde omnis iste natus error</p>
                </div>
                <div>
                    <ul className='flex flex-wrap gap-4'>
                        <li>
                            <button onClick={() => setCat('Best Seller')} className={`${styles.filter} ${cat === 'Best Seller' && styles.selected}`}><BsShieldCheck />Best Seller</button>
                        </li>
                        <li>
                            <button onClick={() => setCat('Popular')} className={`${styles.filter} ${cat === 'Popular' && styles.selected}`}><BsShieldCheck />Popular</button>
                        </li>
                        <li>
                            <button onClick={() => setCat('Top Rated')} className={`${styles.filter} ${cat === 'Top Rated' && styles.selected}`}><BsShieldCheck />Top Rated</button>
                        </li>
                    </ul>
                </div>
            </div>

            {products.length !== 0 ?
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        ftProducts.slice(0, 6).map(product => <Product key={product._id} product={product} />)
                    }
                </div>
                :
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} />)
                    }
                </div>
            }
        </div>
    );
};

export default FeatureProduct;


