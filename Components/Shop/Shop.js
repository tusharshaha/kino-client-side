import React, { useEffect, useState } from 'react';
import useProducts from '../../Hooks/useProducts';
import Skeleton from '../../Shared/Skeleton';
import Product from '../Home/Product';
import ShopFilters from './ShopFilters';
import ReactPaginate from 'react-paginate';

const Shop = () => {
    const { products } = useProducts();
    const [rangeFilter, setRangeFilter] = useState([]);
    const [selectCat, setSelectCat] = useState('');
    const [ppProduct, setPpProduct] = useState(products?.slice(0, 12));
    const [pageNumber, setPageNumber] = useState(0);
    // set page paer page
    useEffect(()=>{
        setPpProduct(products?.slice(0, 12))
    },[products])

    const productPerPage = 12;
    const pagesVisited = pageNumber * productPerPage

    let filteredProduct;
    if (rangeFilter.length !== 0 && !selectCat) {
        filteredProduct = rangeFilter;
    } else if (rangeFilter.length > 0 && selectCat) {
        filteredProduct = rangeFilter.filter(p => p.categories.includes(selectCat));
    } else if (rangeFilter.length === 0) {
        filteredProduct = ppProduct.filter(p => p.categories.includes(selectCat));
    } else {
        filteredProduct = ppProduct;
    }
    
    return (
        <div className='cus-container'>
            <div className='flex gap-6'>
                {/* this is shop filter component */}
                <ShopFilters
                    products={ppProduct}
                    setCat={setSelectCat}
                    setRangeFilter={setRangeFilter}
                />

                {products.length !== 0 ?
                    <div className="grid grow grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            filteredProduct.slice(pagesVisited, pagesVisited + productPerPage).map(product =>
                            <Product key={product._id} product={product} mode='show product' />)
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

