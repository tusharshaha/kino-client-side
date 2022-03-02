import { useRouter } from 'next/router';
import React from 'react';
import { FiHeart, FiSearch } from 'react-icons/fi'
import { MdAddShoppingCart } from 'react-icons/md'
import useStore from '../../Hooks/useStore';
import styles from '../../styles/Home/Product.module.css'
const Product = ({ product, mode }) => {
    const router = useRouter();
    const showDiscount = () => {
        const prevPrice = parseInt(product.prevPrice);
        const curPrice = parseInt(product.curPrice);
        const calcDiscount = 100 - ((curPrice / prevPrice) * 100);
        return parseInt(Math.ceil(calcDiscount));
    }
    const discount = String(showDiscount());
    const { addToWishlit, addToCart, cartNum } = useStore();
    console.log(cartNum)
    return (
        <div className={`${styles.shop_card} ${mode === 'show product' && styles.show} text-center`}>
            <div className='relative'>
                {/* discount showing  */}
                {discount !== 'NaN' && mode === 'show product' &&
                    <span className=' absolute top-6 left-6 bg-red-500 text-white rounded-md py-0.5 px-2 font-bold'>
                        -{discount}%
                    </span>
                }
                <img src={product?.img} height='100%' width='100%' alt='product img' />

                <div className={`${styles.shopping} flex gap-3 justify-center items-center`}>
                    <button className='product-btn'><FiHeart /></button>

                    <button onClick={()=>addToWishlit(product._id, 'sdf')} className='product-btn'><MdAddShoppingCart /></button>

                    <button onClick={() => { router.push(`/products/${product._id}`) }} className='product-btn'><FiSearch /></button>
                </div>
            </div>
            <div className='mt-6 font-bold pb-8'>
                <p>{product?.name}</p>
                <div className='flex gap-2 text-red-500 justify-center items-center'>
                    {product?.prevPrice && <p><strike>&#163;{product?.prevPrice}</strike></p>}
                    <p>&#163;{product?.curPrice}</p>
                </div>
            </div>
        </div>
    );
};

export default Product;