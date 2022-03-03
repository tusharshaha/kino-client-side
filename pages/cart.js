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
    const [change, setChange] = useState(false);
    const { getStore, removeStore } = useGStore();
    const { products } = useProducts();
    const { user } = useAuth();
    // set the order document
    const orders = cartItem.map(item => {
        return {
            productId: item._id,
            qty: item.qty,
            user: user.email,
            status: "PENDING"
        }
    });
    // remove cart product
    const handleRemove = (id) => {
        removeStore("cart", id)
        setChange(!change)
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
    }, [update, change, products])
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
                    <div className='overflow-auto'>
                        <table className='cart-table text-center'>
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
                                            <button onClick={() => handleRemove(item._id)} className='font-bold text-2xl'><IoClose /></button>
                                        </td>
                                    </tr>)
                                }

                                <tr>
                                    <td colSpan={6}>
                                        <div style={{ justifyContent: 'space-between' }} className='flex items-center py-4 px-2 '>
                                            <div className='flex gap-2'>
                                                <input type="text" className="input" placeholder='Cupon Code' />
                                                <button className='addr-btn w-full'>Apply Cupon</button>
                                            </div>
                                            <div>
                                                <button className={`${update ? "addr-btn" : "disabled-btn"}`} disabled>Update</button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <h5 className='mt-12 mb-6 font-medium'>Cart Totals</h5>
                        <table className='cart-table text-[17px] text-left'>
                            <tbody>
                                <tr>
                                    <th className='border py-2 px-4 border-slate-200'>SubTotal</th>
                                    <td className='border py-2 px-4 border-slate-200'>&#163;{subTotal}</td>
                                </tr>
                                <tr>
                                    <th className='border py-2 px-4 border-slate-200'>Total</th>
                                    <th className='border py-2 px-4 border-slate-200'>&#163;{subTotal}</th>
                                </tr>
                            </tbody>
                        </table>
                        <button className='addr-btn py-4 mt-6 w-[300px]'>Proceed To Checkout</button>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Cart;