import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import BillAdd from '../Components/Address/BillAdd';
import useAuth from '../Hooks/useAuth';
import useGStore from '../Hooks/useGStore';
import useProducts from '../Hooks/useProducts';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import TopBanner from '../Shared/TopBanner';

const Checkout = () => {
    const { user } = useAuth();
    const [cartItem, setCartItem] = useState([]);
    const { getStore } = useGStore();
    const { products } = useProducts();
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
    }, [products])
    // set order date
    const date = new Date().getDate();
    const month = new Date().toLocaleDateString("default", { month: 'long' });
    const year = new Date().getFullYear()
    const orderDate = `${month} ${date}, ${year}`
    // set the order document
    const orders = cartItem.map(item => {
        return {
            productId: item._id,
            pName: item.name,
            qty: item.qty,
            user: user.email,
            date: orderDate,
            status: "Processing"
        }
    });
    // this is subtotal count
    const subTotalCount = cartItem.map(item => item.curPrice * item.qty);
    // get total subtotal
    const subTotal = subTotalCount.reduce((prevPrice, curPrice) => prevPrice + curPrice, 0);
    console.log(orders)
    return (
        <>
            <Head>
                <title>Kino | Checkout</title>
            </Head>
            <main>
                <TopBanner route="Checkout" name="Checkout" />
                <div className='cus-container'>
                    <div className='grid grid-cols-2 gap-6'>
                        <BillAdd></BillAdd>
                        <div>

                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default PrivateRoute(Checkout);