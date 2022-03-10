import React from 'react';

const BillDetails = ({ bill }) => {
    return (
        <div className='overflow-auto'>
            <h4 className='font-medium mt-6 mb-4'>Bill Address</h4>
            <table className='cart-table text-left text-slate-400 w-[500px]'>
                <tbody>
                    <tr>
                        <th className='border p-2 border-slate-200'>Name</th>
                        <td className='border p-2 border-slate-200'>{`${bill?.FName} ${bill?.LName}`}</td>
                    </tr>
                    <tr>
                        <th className='border p-2 border-slate-200'>Email</th>
                        <td className='border p-2 border-slate-200'>{`${bill?.email}`}</td>
                    </tr>
                    <tr>
                        <th className='border p-2 border-slate-200'>Company</th>
                        <td className='border p-2 border-slate-200'>{`${bill?.company}`}</td>
                    </tr>
                    <tr>
                        <th className='border p-2 border-slate-200'>Address</th>
                        <td className='border p-2 border-slate-200'>{`${bill?.street1}, ${bill?.street2}`}</td>
                    </tr>
                    <tr>
                        <th className='border p-2 border-slate-200'>Country</th>
                        <td className='border p-2 border-slate-200'>{`${bill?.country}`}</td>
                    </tr>
                    <tr>
                        <th className='border p-2 border-slate-200'>City</th>
                        <td className='border p-2 border-slate-200'>{`${bill?.city}`}</td>
                    </tr>
                    <tr>
                        <th className='border p-2 border-slate-200'>Post Code</th>
                        <td className='border p-2 border-slate-200'>{`${bill?.post_code}`}</td>
                    </tr>
                    <tr>
                        <th className='border p-2 border-slate-200'>Phone</th>
                        <td className='border p-2 border-slate-200'>{`${bill?.phone}`}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BillDetails;