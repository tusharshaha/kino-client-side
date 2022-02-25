import React, { useState } from 'react';
import styles from '../../styles/Shop/Shop.module.css';
import Slider from './Slider';

const ShopFilters = ({ products, setCat, setRangeFilter }) => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(190);
    const filters = ['Best Seller', 'Hand Gloves', 'Hand Sanitizer', 'Health & Medicine', 'Home Accessories', 'Medical Equipment', 'Popular', 'Pressure Meter', 'Top Rated'];
    // filter by price range
    const ftProducts = products.filter(p => p.curPrice >= minPrice && p.curPrice <= maxPrice);
    const handleRangeFilter = () => {
        setRangeFilter(ftProducts)
    }
    // filter by category
    const handleCategory = e => {
        if (e.target.checked) {
            setCat(e.target.name)
        }else{
            setCat('')
        }
    }
    return (
        <div className={`hidden md:flex flex-col gap-6`}>
            {/* this is price range filter */}
            <div className={`${styles.filter_box} ${styles.range_box}`}>
                <h5 className='mb-6 font-medium'>Filter By Price</h5>
                <Slider
                    min={0}
                    max={190}
                    onChange={({ min, max }) => {
                        setMinPrice(min);
                        setMaxPrice(max)
                    }}
                />

                <div className='flex items-center justify-between mt-6'>
                    <button onClick={handleRangeFilter} className={styles.filter_btn}>Filter</button>
                    <p className='text-slate-400'>Price: &#163;{minPrice} - &#163;{maxPrice}</p>
                </div>
            </div>

            {/* this is category filter */}
            <div className={`${styles.filter_box} ${styles.cat_filter}`}>
                <h5 className='mb-6 font-medium'>Categories</h5>
                {
                    filters.map((ft, i) =>
                        <label className='text-slate-400' key={i}>
                            <input type="checkbox" onChange={(e) => handleCategory(e)} name={ft} />
                            {ft}
                        </label>)
                }
            </div>
        </div>
    );
};

export default ShopFilters;