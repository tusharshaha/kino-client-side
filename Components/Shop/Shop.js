import React, { useState } from 'react';
import useProducts from '../../Hooks/useProducts';
import Skeleton from '../../Shared/Skeleton';
import Product from '../Home/Product';
import ShopFilters from './ShopFilters';

const Shop = () => {
    const { products } = useProducts();
    const [rangeFilter, setRangeFilter] = useState([]);
    const [selectCat, setSelectCat] = useState('');
    let filteredProduct;
    if (rangeFilter.length !== 0 && !selectCat) {
        filteredProduct = rangeFilter;
    } else if (rangeFilter.length > 0 && selectCat) {
        filteredProduct = rangeFilter.filter(p => p.categories.includes(selectCat));
    } else if (rangeFilter.length === 0) {
        filteredProduct = products.filter(p => p.categories.includes(selectCat));
    } else {
        filteredProduct = products;
    }
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
                        {
                            filteredProduct.map(product => <Product key={product._id} product={product} mode='show product' />)
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

