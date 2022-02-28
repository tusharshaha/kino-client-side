import React from 'react';
import Product from '../Home/Product';


const RelatedProduct = ({related}) => {
    return (
        <div className='mt-24'>
            <div className='border-b-2 pb-4 border-slate-300'>
                <h4 className='font-medium'>Related Products</h4>
            </div>
            <div className='grid grid-cols-3 mt-12 gap-6'>
                {
                    related.map(p => <Product key={p._id} product={p} mode="show product"/>)
                }
            </div>
        </div>
    );
};

export default RelatedProduct;