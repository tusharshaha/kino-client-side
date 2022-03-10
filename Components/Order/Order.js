import { useRouter } from 'next/router';
import React from 'react';

const Order = ({ orders }) => {
    const router = useRouter();
    // this is subtotal count
    const itemContainer = orders.map(({ orders }) => orders);
    const items = itemContainer[0]?.map(item => item.price * item.qty);
    // get total subtotal
    const subTotal = items.reduce((prevPrice, curPrice) => prevPrice + curPrice, 0);

    return (
        <div className='overflow-auto'>
            <table className='cart-table text-left text-slate-400 text-[18px]'>
                <thead>
                    <tr>
                        <th className='border p-2 border-slate-200'>Order Id</th>
                        <th className='border p-2 border-slate-200'>Date</th>
                        <th className='border p-2 border-slate-200'>Status</th>
                        <th className='border p-2 border-slate-200'>Total</th>
                        <th className='border p-2 border-slate-200'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <tr key={order._id}>
                            <td className='border w-[50px] p-2 border-slate-200'>
                                <button onClick={() => router.push(`/my_account/view_order/${order._id}}`)} className='text-red-400'>
                                    {order._id}
                                </button>
                            </td>
                            <td className='border p-2 border-slate-200'>
                                {order.date}
                            </td>
                            <td className='border p-2 border-slate-200'>
                                {order.status}
                            </td>
                            <td className='border p-2 border-slate-200'>
                                &#163;{subTotal}.00 for {items.length} items
                            </td>
                            <td className='border p-2 border-slate-200'>
                                <button className='text-red-400'>
                                    View
                                </button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Order;