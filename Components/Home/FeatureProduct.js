import React, { useState } from 'react';
import { BsShieldCheck } from 'react-icons/bs';
import useProducts from '../Hooks/useProducts'
import Product from './Product';


const FeatureProduct = (props) => {
    const [cat, setCat] = useState('Best Seller');
    const {products} = useProducts();

    // filter products
    const ftProducts = products.filter(product => product.categories.includes(cat));

    return (
        <div className='cus-container my-20'>
            <div className='flex justify-between items-end border-b-2 border-slate-400 pb-3'>
                <div className='hidden sm:block'>
                    <h3 className='text-slate-700'>Featured Products</h3>
                    <p className='text-slate-500'>Sed ut perspiciatis unde omnis iste natus error</p>
                </div>
                <div>
                    <ul className='flex text-1xl sm:text-2xl'>
                        <li>
                            <button onClick={()=>setCat('Best Seller')} className='flex items-center mr-4'><BsShieldCheck className='text-sky-500 mr-2' />Best Seller</button>
                        </li>
                        <li>
                            <button onClick={()=>setCat('Popular')} className='flex items-center mr-4'><BsShieldCheck className='text-sky-500 mr-2' />Popular</button>
                        </li>
                        <li>
                            <button onClick={()=>setCat('Top Rated')} className='flex items-center mr-4'><BsShieldCheck className='text-sky-500 mr-2' />Top Rated</button>
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


