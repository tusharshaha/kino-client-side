import React from 'react';
import {BsShieldCheck} from 'react-icons/bs'
const FeatureProduct = () => {
    return (
        <div className='cus-container mt-20'>
            <div className='flex justify-between items-end border-b-2 border-slate-400 pb-3'>
                <div>
                    <h3 className='text-slate-700'>Featured Products</h3>
                    <p className='text-slate-500'>Sed ut perspiciatis unde omnis iste natus error</p>
                </div>
                <div>
                    <ul className='flex'>
                        <li className='flex items-center mr-4 text-2xl'><BsShieldCheck className='text-sky-500 mr-2'/>Best Seller</li>
                        <li className='flex items-center mr-4 text-2xl'><BsShieldCheck className='text-sky-500 mr-2'/>Popular</li>
                        <li className='flex items-center mr-4 text-2xl'><BsShieldCheck className='text-sky-500 mr-2'/>Top Rated</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FeatureProduct;