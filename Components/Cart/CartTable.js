import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import useGStore from '../../Hooks/useGStore';

const CartTable = ({ cartItem, handleRemove, setUpdate, handleClearCart }) => {
    const [cupon, setCupon] = useState('');
    const { addToCart } = useGStore();
    const handleIncrase = (id, qty) => {
        const updatedQty = qty + 1;
        addToCart(id, updatedQty, "update");
        setUpdate(prev => !prev);
    }
    const handleDecrase = (id, qty) => {
        const updatedQty = qty - 1;
        if (updatedQty <= 0) {
            return;
        }
        addToCart(id, updatedQty, "update");
        setUpdate(prev => !prev);
    }
    return (
        <table className='cart-table text-center'>
            <thead>
                <tr>
                    <th className='border py-2 px-6 border-slate-200'> </th>
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
                                <button onClick={() => handleDecrase(item._id, item.qty)} className='counter-btn'>-</button>
                                <span>{item.qty}</span>
                                <button onClick={() => handleIncrase(item._id, item.qty)} className='counter-btn'>+</button>
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
                                <input onBlur={(e) => setCupon(e.target.value)} type="text" className="input" placeholder='Cupon Code' />
                                <button className='addr-btn w-full'>Apply Cupon</button>
                            </div>
                            <div>
                                <button onClick={handleClearCart} className="addr-btn">Clear</button>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default CartTable;