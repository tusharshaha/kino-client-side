import { useRouter } from 'next/router';
import React from 'react';

const Order = ({ orders }) => {
    const router = useRouter();
    // this is subtotal count
    const subTotalCount = orders.map(item => item.price * item.qty);
    // get total subtotal
    const subTotal = subTotalCount.reduce((prevPrice, curPrice) => prevPrice + curPrice, 0);
    return (
        <div>
            <h4 className='mb-6 font-medium'>Order Details</h4>
            <table className='cart-table w-[800px] text-left text-slate-400 text-[18px]'>
                <thead>
                    <tr>
                        <th className='border py-2 px-6 border-slate-200'>Products</th>
                        <th className='border py-2 px-6 border-slate-200'>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <tr key={order._id}>
                            <td className='border py-2 px-6 border-slate-200'>
                                <button onClick={() => router.push(`/products/${order.productId}`)} className='text-red-400'>
                                    {order.pName}
                                </button>
                                <span className='font-bold'> x {order.qty}</span>
                            </td>
                            <td className='border py-2 px-6 border-slate-200'>
                                &#163;{order.price * order.qty}.00
                            </td>
                        </tr>)
                    }
                    <tr>
                        <th className='border py-2 px-6 border-slate-200'>Subtotal</th>
                        <td className='border py-2 px-6 border-slate-200'>
                            &#163;{subTotal}.00
                        </td>
                    </tr>
                    <tr>
                        <th className='border py-2 px-6 border-slate-200'>Payment Method</th>
                        <td className='border py-2 px-6 border-slate-200'>
                            &#163;{orders.payment}.00
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Order;