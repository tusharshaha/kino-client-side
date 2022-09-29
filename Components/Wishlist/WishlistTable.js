import React from 'react';
import { IoClose } from 'react-icons/io5';

const WishlistTable = ({ wishlistItems, handleRemove, handleClearWishlist }) => {
    return (
        <table className='cart-table text-center'>
            <thead>
                <tr>
                    <th className='border py-2 px-6 border-slate-200'></th>
                    <th className='border py-2 px-6 border-slate-200'></th>
                    <th className='border py-2 px-6 border-slate-200'></th>
                    <th className='border py-2 px-6 border-slate-200'>Product Name</th>
                    <th className='border py-2 px-6 border-slate-200'>Unit Price</th>
                    <th className='border py-2 px-6 border-slate-200'>Date Added</th>
                    <th className='border py-2 px-6 border-slate-200'>Stock Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    wishlistItems.map(item => <tr key={item.id}>
                        <td className='border py-2 px-1 border-slate-200'>
                            <input type="checkbox" name="" id="" />
                        </td>
                        <td className='border py-2 px-1 border-slate-200'>
                            <button onClick={() => handleRemove(item.id)} className='font-bold text-2xl'><IoClose /></button>
                        </td>
                        <td className='border py-2 px-1 border-slate-200'>
                            <img src={item.img} alt="Product Img" className='w-[80px] mx-auto' />
                        </td>
                        <td className='border py-2 px-1 border-slate-200'>
                            {item.name}
                        </td>
                        <td className='border py-2 px-1 border-slate-200'>
                            &#163;{item.price}
                        </td>
                        <td className='border py-2 px-1 border-slate-200'>
                            {item.date}
                        </td>
                        <td className='border py-2 px-1 border-slate-200'>
                            <span className='font-bold text-sky-500'>In Stock</span>
                        </td>
                    </tr>)
                }

                <tr>
                    <td colSpan={7}>
                        <div style={{ justifyContent: 'space-between' }} className='flex items-center py-4 px-2 '>
                            <div className=''>
                                <button className='addr-btn w-full'>Add Selected To Cart</button>
                            </div>
                            <div className=''>
                                <button onClick={handleClearWishlist} className="addr-btn">Clear</button>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default WishlistTable;