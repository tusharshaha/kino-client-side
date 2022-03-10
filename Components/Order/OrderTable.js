import React from 'react';

const OrderTable = ({ orders, subTotal, payment }) => {
    return (
        <div className='overflow-auto'>
            <h4 className='font-medium my-4'>Order Details</h4>
            <table className='cart-table text-left text-slate-400 w-[800px]'>
                <thead>
                    <tr>
                        <th className='border p-2 border-slate-200'>Product</th>
                        <th className='border p-2 border-slate-200'>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.map((order, i) => <tr key={i}>
                            <td className='border p-2 border-slate-200'>
                                <button className='text-red-400'>{order.pName}</button>
                                <span className='font-bold ml-2'>x {order.qty}</span>
                            </td>
                            <td className='border p-2 border-slate-200'>
                                &#163;{order.price * order.qty}.00
                            </td>
                        </tr>)
                    }
                    <tr>
                        <th className='border p-2 border-slate-200'>Subtotal:</th>
                        <td className='border p-2 border-slate-200'>&#163;{subTotal}.00</td>
                    </tr>
                    <tr>
                        <th className='border p-2 border-slate-200'>Payment Method:</th>
                        <td className='border p-2 border-slate-200'>{payment}</td>
                    </tr>
                    <tr>
                        <th className='border p-2 border-slate-200'>Total:</th>
                        <td className='border p-2 border-slate-200'>&#163;{subTotal}.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OrderTable;