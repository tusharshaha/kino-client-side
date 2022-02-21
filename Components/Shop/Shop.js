import React from 'react';
import useProducts from '../../Hooks/useProducts';
import Skeleton from '../../Shared/Skeleton';
import Product from '../Home/Product';
import ShopFilters from './ShopFilters';

const Shop = () => {
    const { products } = useProducts();
    return (
        <div className='cus-container'>
            <div className='flex gap-6'>
                {/* this is shop filter component */}
                <ShopFilters/>

                {products.length !== 0 ?
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        products.map(product => <Product key={product._id} product={product} mode='show product'/>)
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
        </div>
    );
};

export default Shop;