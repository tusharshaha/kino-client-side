import React from 'react';

const Product = ({product}) => {
    return (
        <div className='text-center'>
            <div>
                <img src={product.img} height='100%' width='100%' alt='product img'/>
            </div>
            <div className='mt-6 font-bold'>
                <p>{product.name}</p>
                <div className='flex gap-4 text-red-500 justify-center items-center'>
                    {product.prevPrice && <p><strike>&#163;{product.prevPrice}</strike></p>}
                    <p>&#163;{product.curPrice}</p>
                </div>
            </div>
        </div>
    );
};

export default Product;