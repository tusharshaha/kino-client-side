import React from 'react';

const CalcCart = ({subTotal, discountPrice}) => {
    return (
        <table className='cart-table text-[17px] text-left'>
            <tbody>
                <tr>
                    <th className='border py-2 px-4 border-slate-200'>SubTotal</th>
                    <td className='border py-2 px-4 border-slate-200'>&#163;{subTotal}</td>
                </tr>
                <tr>
                    <th className='border py-2 px-4 border-slate-200'>Total</th>
                    <th className='border py-2 px-4 border-slate-200'>&#163;{discountPrice || subTotal}</th>
                </tr>
            </tbody>
        </table>
    );
};

export default CalcCart;