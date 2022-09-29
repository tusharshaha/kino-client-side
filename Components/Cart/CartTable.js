import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { updateQty } from '../../redux/actions/cart.action';

const CartTable = ({ cartItems, handleRemove, handleClearCart }) => {
    const [cupon, setCupon] = useState('');
    const dispatch = useDispatch();
    const handleIncrase = (id, qty) => {
        const updatedQty = qty + 1;
        dispatch(updateQty(id, updatedQty));
    }
    const handleDecrase = (id, qty) => {
        const updatedQty = qty - 1;
        if (updatedQty <= 0) {
            return;
        }
        dispatch(updateQty(id, updatedQty));
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
                    cartItems.map(item => <tr key={item.id}>
                        <td className='border py-2 px-8 border-slate-200'>
                            <img src={item.img} alt="Product Img" className='w-[90px] mx-auto' />
                        </td>
                        <td className='border py-2 px-8 border-slate-200'>
                            {item.name}
                        </td>
                        <td className='border py-2 px-8 border-slate-200'>
                            &#163;{item.price}
                        </td>
                        <td className='border py-2 px-8 border-slate-200'>
                            <div className='bg-red-100 text-slate-500 flex justify-around items-center gap-4 p-2 rounded-full'>
                                <button onClick={() => handleDecrase(item.id, item.qty)} className='counter-btn'>-</button>
                                <span>{item.qty}</span>
                                <button onClick={() => handleIncrase(item.id, item.qty)} className='counter-btn'>+</button>
                            </div>
                        </td>
                        <td className='border py-2 px-8 border-slate-200'>
                            &#163;{item.subTotal}
                        </td>
                        <td className='border py-2 px-8 border-slate-200'>
                            <button onClick={() => handleRemove(item.id)} className='font-bold text-2xl'><IoClose /></button>
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