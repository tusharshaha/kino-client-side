import React, { useState } from 'react';
import useProducts from '../../Hooks/useProducts';
import Skeleton from '../../Shared/Skeleton';
import Product from '../Home/Product';
import ShopFilters from './ShopFilters';

const Shop = () => {
    const { products } = useProducts();
    const [rangeFilter, setRangeFilter] = useState([]);
    const [selectCat, setSelectCat] = useState('');
    return (
        <div className='cus-container'>
            <div className='flex gap-6'>
                {/* this is shop filter component */}
                <ShopFilters
                    products={products}
                    setCat={setSelectCat}
                    setRangeFilter={setRangeFilter}
                />

                {products.length !== 0 ?
                    <div className="grid grow grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {rangeFilter.length !== 0 ?
                            rangeFilter.map(product => <Product key={product._id} product={product} mode='show product' />)
                            :
                            products.map(product => <Product key={product._id} product={product} mode='show product' />)
                        }
                    </div>
                    :
                    <div className='grid grow grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                            Array.from({ length: 12 }).map((_, i) => <Skeleton key={i} />)
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default Shop;

