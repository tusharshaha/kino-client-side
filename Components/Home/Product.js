import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FiHeart, FiSearch } from 'react-icons/fi';
import { MdAddShoppingCart } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { addToCart } from '../../redux/actions/cart.action';
import { addToWishlist } from '../../redux/actions/wishlist.action';
import styles from '../../styles/Home/Product.module.css';

const Product = ({ product, mode }) => {
    const router = useRouter();
    const [load, setLoad] = useState(true);
    const dispatch = useDispatch();
    const showDiscount = () => {
        const prevPrice = parseInt(product.prevPrice);
        const curPrice = parseInt(product.curPrice);
        const calcDiscount = 100 - ((curPrice / prevPrice) * 100);
        return parseInt(Math.ceil(calcDiscount));
    }
    const discount = String(showDiscount());
    const handleAddToCart = (product) => {
        const item = {
            id: product._id,
            img: product.img,
            name: product.name,
            price: product.curPrice,
            qty: 1
        }
        dispatch(addToCart(item));
        Swal.fire({
            icon: "success",
            showConfirmButton: false,
            timer: 1500
        })
    }
    const handleAddToWishlist = (product) => {
        const item = {
            id: product._id,
            img: product.img,
            name: product.name,
            price: product.curPrice
        }
        dispatch(addToWishlist(item))
    }
    // handle image load
    const handleLoad = () => { setLoad(false) }
    return (
        <div className={`${styles.shop_card} ${mode === 'show product' && styles.show} text-center`}>
            <div className='relative'>
                {/* discount showing  */}
                {discount !== 'NaN' && mode === 'show product' &&
                    <span className=' absolute top-6 left-6 bg-red-500 text-white rounded-md py-0.5 px-2 font-bold'>
                        -{discount}%
                    </span>
                }
                <img
                    src={product?.img}
                    onLoad={handleLoad}
                    height='100%'
                    width='100%'
                    alt='product img'
                />
                <div className={`${load ? "" : "hidden"} loader`} />
                <div className={`${styles.shopping} flex gap-3 justify-center items-center`}>
                    <button onClick={() => handleAddToWishlist(product)} className='product-btn'>
                        <FiHeart />
                    </button>
                    <button onClick={() => { handleAddToCart(product) }} className='product-btn'>
                        <MdAddShoppingCart />
                    </button>
                    <button onClick={() => { router.push(`/products/${product._id}`) }} className='product-btn'>
                        <FiSearch />
                    </button>
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