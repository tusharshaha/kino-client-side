import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import BillAdd from '../Components/Address/BillAdd';
import YourOrder from '../Components/Checkout/YourOrder';
import useAuth from '../Hooks/useAuth';
import useGStore from '../Hooks/useGStore';
import useProducts from '../Hooks/useProducts';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import TopBanner from '../Shared/TopBanner';

const Checkout = () => {
    const { user } = useAuth();
    const [cartItem, setCartItem] = useState([]);
    const [billInfo, setBillInfo] = useState({})
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
    const handleBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newBill = { ...billInfo };
        newBill[field] = value;
        setBillInfo(newOrder);
    }
    // this is subtotal count
    const subTotalCount = cartItem.map(item => item.curPrice * item.qty);
    // get total subtotal
    const subTotal = subTotalCount.reduce((prevPrice, curPrice) => prevPrice + curPrice, 0);

    return (
        <>
            <Head>
                <title>Kino | Checkout</title>
            </Head>
            <main>
                <TopBanner route="Checkout" name="Checkout" />
                <div className='cus-container'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div>
                            <BillAdd handleBlur={handleBlur} order="order" />
                            <div className='mt-8'>
                                <h5 className='font-medium border-b-2 pb-3 mb-4'>Additional information</h5>

                                <label className='flex flex-col gap-2'>
                                    <span className="cursor-pointer">Orders Notes (optional)</span>
                                    <textarea
                                        className='input'
                                        cols="10"
                                        rows="3"
                                        placeholder='Notes about your order, e.g. special notes for delivery'
                                    />
                                </label>
                            </div>
                        </div>
                        {/* this is order detail section  */}
                        <YourOrder
                            subTotal={subTotal}
                            cartItem={cartItem}
                        />
                    </div>
                </div>
            </main>
        </>
    );
};

export default PrivateRoute(Checkout);