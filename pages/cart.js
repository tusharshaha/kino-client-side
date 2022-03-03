import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import useGStore from '../Hooks/useGStore';
import useProducts from '../Hooks/useProducts';
import TopBanner from '../Shared/TopBanner';
import { IoClose } from "react-icons/io5";

const Cart = () => {
    const [cartItem, setCartItem] = useState([]);
    const [update, setUpdate] = useState(false);
    const { getStore } = useGStore();
    const { products } = useProducts();
    const { user } = useAuth();
    // set the order document
    const orders = cartItem.map(item => {
        return {
            productId: item._id,
            qty: item.qty,
            user: user.email
        }
    });
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
    console.log(cartItem)
    return (
        <>
            <Head>
                <title>Kino | Cart</title>
            </Head>
            <main>
                <TopBanner name="Cart" route="Cart" />
                <div className='cus-container'>
                    <div className='overflow-auto'>
                        <table className='text-slate-400 table-auto w-full border-collapse text-center border border-slate-200'>
                            <thead>
                                <tr>
                                    <th className='border py-2 px-6 border-slate-200'></th>
                                    <th className='border py-2 px-6 border-slate-200'>Product</th>
                                    <th className='border py-2 px-6 border-slate-200'>Price</th>
                                    <th className='border py-2 px-6 border-slate-200'>Quantity</th>
                                    <th className='border py-2 px-6 border-slate-200'>Subtotal</th>
                                    <th className='border py-2 px-6 border-slate-200'>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItem.map(item => <tr key={item._id}>
                                        <td className='border py-2 px-8 border-slate-200'>
                                            <img src={item.img} alt="Product Img" className='w-[90px] mx-auto' />
                                        </td>
                                        <td className='border py-2 px-8 border-slate-200'>
                                            {item.name}
                                        </td>
                                        <td className='border py-2 px-8 border-slate-200'>
                                            &#163;{item.curPrice}
                                        </td>
                                        <td className='border py-2 px-8 border-slate-200'>
                                            <div className='bg-red-100 text-slate-500 flex justify-around items-center gap-4 p-2 rounded-full'>
                                                <button className='counter-btn'>-</button>
                                                <span>{item.qty}</span>
                                                <button className='counter-btn'>+</button>
                                            </div>
                                        </td>
                                        <td className='border py-2 px-8 border-slate-200'>
                                            &#163;{item.curPrice * item.qty}
                                        </td>
                                        <td className='border py-2 px-8 border-slate-200'>
                                            <button className='font-bold text-2xl'><IoClose /></button>
                                        </td>
                                    </tr>)
                                }
                                <tr>
                                    <td colSpan={6} className='border py-2 px-4 border-slate-200'>f</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Cart;