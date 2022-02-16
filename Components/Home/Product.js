import { useRouter } from 'next/router';
import React from 'react';
import {FiHeart, FiSearch} from 'react-icons/fi'
import {MdAddShoppingCart} from 'react-icons/md'
import styles from '../../styles/Home/Product.module.css'
const Product = ({product, mode}) => {
    const router = useRouter();
    return (
        <div className={`${styles.shop_card} ${mode === 'show product' && styles.show} text-center`}>
            <div className='relative'>
                <img src={product?.img} height='100%' width='100%' alt='product img'/>

                <div className={`${styles.shopping} flex gap-3 justify-center items-center`}>
                    <button className='cus-btn p-4 uppercase transition duration-300 hover:bg-red-500'><FiHeart/></button>

                    <button className='cus-btn p-4 uppercase transition duration-300 hover:bg-red-500'><MdAddShoppingCart/></button>

                    <button onClick={()=>{router.push(`products/${product._id}`)}} className='cus-btn p-4 uppercase transition duration-300 hover:bg-red-500'><FiSearch/></button>
                </div>
            </div>
            <div className='mt-6 font-bold pb-8'>
                <p>{product?.name}</p>
                <div className='flex gap-4 text-red-500 justify-center items-center'>
                    {product?.prevPrice && <p><strike>&#163;{product?.prevPrice}</strike></p>}
                    <p>&#163;{product?.curPrice}</p>
                </div>
            </div>
        </div>
    );
};

export default Product;