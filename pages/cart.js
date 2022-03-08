import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CalcCart from '../Components/Cart/CalcCart';
import CartTable from '../Components/Cart/CartTable';
import useGStore from '../Hooks/useGStore';
import useProducts from '../Hooks/useProducts';
import TopBanner from '../Shared/TopBanner';

const Cart = () => {
    const [cartItem, setCartItem] = useState([]);
    const [update, setUpdate] = useState(false);
    const { getStore, removeStore, clearStore } = useGStore();
    const { products } = useProducts();
    const router = useRouter();
    // remove cart product
    const handleRemove = (id) => {
        removeStore("cart", id)
        setUpdate(!update)
    }
    // clear cart
    const handleClearCart = () => {
        clearStore("cart")
        setUpdate(prev => !prev);
    }
    // get the cart product
    useEffect(() => {
        const cart = getStore("cart")
        const storedCart = [];
        if (cart) {
            for (const key in cart) {
                const addedProduct = products.find(p => p._id === key);
                if (addedProduct) {
                    addedProduct.qty = cart[key];
                    storedCart.push(addedProduct);
                }
            }
            setCartItem(storedCart);
        }
    }, [update, products])
    // this is subtotal count
    const subTotalCount = cartItem.map(item => item.curPrice * item.qty);
    // get total subtotal
    const subTotal = subTotalCount.reduce((prevPrice, curPrice) => prevPrice + curPrice, 0);
    return (
        <>
            <Head>
                <title>Kino | Cart</title>
            </Head>
            <main>
                <TopBanner name="Cart" route="Cart" />
                <div className='cus-container'>
                    {cartItem.length > 0 ?
                        <div className='overflow-auto'>
                            <CartTable
                                cartItem={cartItem}
                                handleRemove={handleRemove}
                                setUpdate={setUpdate}
                                handleClearCart={handleClearCart}
                            />
                            <h5 className='mt-12 mb-6 font-medium'>Cart Totals</h5>
                            <CalcCart
                                subTotal={subTotal}
                            />
                            <button onClick={() => router.push("/checkout")} className='addr-btn py-4 mt-6 w-[300px]'>Proceed To Checkout</button>
                        </div>
                        :
                        <p className='text-slate-400'>You have no product in cart. <Link href='/products'><a className="text-red-500">Browse Products</a></Link>.</p>
                    }
                </div>
            </main>
        </>
    );
};

export default Cart;