import React, { useState } from 'react';
import useProducts from '../../Hooks/useProducts';
import Skeleton from '../../Shared/Skeleton';
import Product from '../Home/Product';
import ShopFilters from './ShopFilters';
import ReactPaginate from 'react-paginate';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';

const Shop = () => {
    const { products } = useProducts();
    const [rangeFilter, setRangeFilter] = useState([]);
    const [selectCat, setSelectCat] = useState('');

    // pagination funtionality here
    const [pageNumber, setPageNumber] = useState(0);
    const productPerPage = 12;
    const pagesVisited = pageNumber * productPerPage;
    const handlePageChange = ({ selected }) => {
        setPageNumber(selected);
    };

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
    const pageCount = Math.ceil(filteredProduct?.length / productPerPage);

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
                    <div className='flex flex-col gap-12'>
                        <div className="grid grow grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {
                                filteredProduct.slice(pagesVisited, pagesVisited + productPerPage).map(product =>
                                    <Product key={product._id} product={product} mode='show product' />)
                            }
                        </div>
                        <ReactPaginate
                            previousLabel={<GrFormPreviousLink />}
                            nextLabel={<GrFormNextLink />}
                            pageCount={pageCount}
                            onPageChange={handlePageChange}
                            containerClassName={"flex items-center gap-4"}
                            pageClassName={"bg-slate-200 pagin-btn"}
                            pageLinkClassName={"pagin-btn pagin-btn-hover"}
                            previousLinkClassName={"bg-slate-200 pagin-btn pagin-btn-hover"}
                            nextLinkClassName={"bg-slate-200 pagin-btn pagin-btn-hover"}
                            disabledClassName={"hidden"}
                            activeLinkClassName={"pagin-btn-hover text-white bg-sky-500"}
                        />
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

