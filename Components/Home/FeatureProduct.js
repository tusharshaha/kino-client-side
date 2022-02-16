import React, { useState } from 'react';
import { BsShieldCheck } from 'react-icons/bs';
import useProducts from '../Hooks/useProducts'
import Product from './Product';
import styles from '../../styles/Home/FeatureProduct.module.css';

const FeatureProduct = (props) => {
    const [cat, setCat] = useState('Best Seller');
    const {products} = useProducts();
    // filter products
    const ftProducts = products.filter(product => product.categories.includes(cat));

    return (
        <div className='cus-container my-20'>
            <div className='flex justify-between items-end border-b-2 border-slate-400 pb-3 mb-12'>
                <div className='hidden sm:block'>
                    <h3 className='text-slate-700'>Featured Products</h3>
                    <p className='text-slate-500'>Sed ut perspiciatis unde omnis iste natus error</p>
                </div>
                <div>
                    <ul className='flex gap-4 text-1xl sm:text-2xl'>
                        <li>
                            <button onClick={()=>setCat('Best Seller')} className={`${styles.filter} ${cat === 'Best Seller' && styles.selected}`}><BsShieldCheck/>Best Seller</button>
                        </li>
                        <li>
                            <button onClick={()=>setCat('Popular')} className={`${styles.filter} ${cat === 'Popular' && styles.selected}`}><BsShieldCheck/>Popular</button>
                        </li>
                        <li>
                            <button onClick={()=>setCat('Top Rated')} className={`${styles.filter} ${cat === 'Top Rated' && styles.selected}`}><BsShieldCheck/>Top Rated</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    ftProducts.slice(0,6).map(product => <Product key={product._id} product={product}/>)
                }
            </div>
        </div>
    );
};

export default FeatureProduct;


