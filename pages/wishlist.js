import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import WishlistTable from '../Components/Wishlist/WishlistTable';
import useGStore from '../Hooks/useGStore';
import useProducts from '../Hooks/useProducts';
import TopBanner from '../Shared/TopBanner';

const Wishlist = () => {
    const [cartItem, setCartItem] = useState([]);
    const [update, setUpdate] = useState(false);
    const [change, setChange] = useState(false);
    const { products } = useProducts();
    const { getStore, removeStore } = useGStore();
    useEffect(() => {
        const cart = getStore("wishlist")
        const storedCart = [];
        if (cart) {
            for (const key in cart) {
                const addedProduct = products.find(p => p._id === key);
                if (addedProduct) {
                    addedProduct.wDate = cart[key];
                    storedCart.push(addedProduct);
                }
            }
            setCartItem(storedCart);
        }
        
    }, [update, change, products])
    const handleRemove = (id) => {
        removeStore("wishlist", id)
        setChange(!change)
    }
    return (
        <>
            <Head>
                <title>Kino | Wishlist</title>
            </Head>
            <main>
                <TopBanner name="Wishlist" route="Wishlist" />
                <div className="cus-container">
                    {cartItem.length > 0 ?
                        <>
                            <h3 className='font-medium mb-8'>Your Wishlist</h3>
                            <div className='overflow-auto'>
                                <WishlistTable
                                    cartItem={cartItem}
                                    handleRemove={handleRemove}
                                />
                            </div>
                        </>
                        :
                        <p className='text-slate-400'>You have no product in wishlist. <Link href='/products'><a className="text-red-500">Browse Products</a></Link>.</p>
                    }
                </div>
            </main>
        </>
    );
};

export default Wishlist;
