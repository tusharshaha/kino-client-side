import React from 'react';
import useAuth from '../../Hooks/useAuth';

const BillAdd = ({order, handleBlur}) => {
    const { user } = useAuth();
    return (
        <div>
            <h4 className='font-medium border-b-2 pb-3 '>Bill Address</h4>
            <form onSubmit={(e) => e.preventDefault()} className='grid grid-cols-1 mt-5 gap-4'>
                <label className='flex flex-col gap-2'>
                    <span className="after:content-['*'] after:ml-1 after:text-red-500 cursor-pointer">First Name</span>
                    <input className='input' type="text" name='FName' required />
                </label>
                <label className='flex flex-col gap-2'>
                    <span className="after:content-['*'] after:ml-1 after:text-red-500 cursor-pointer">Last Name</span>
                    <input className='input' type="text" name='LName' required />
                </label>
                <label className='flex flex-col gap-2'>
                    <span className="">Company Name (optional)</span>
                    <input className='input' name='company' type="text" />
                </label>
                <label className='flex flex-col gap-2'>
                    <span className="after:content-['*'] after:ml-1 after:text-red-500 cursor-pointer">Country / Region</span>
                    <select className='input' name='country' required>
                        <option selected disabled>Select Country / Region</option>
                        <option>Bangladesh</option>
                        <option>China</option>
                        <option>India</option>
                    </select>
                </label>
                <label className='flex flex-col gap-2'>
                    <span className="after:content-['*'] after:ml-1 after:text-red-500 cursor-pointer">Street Address</span>
                    <input className='input' type="text" name='street1' placeholder='House Number and Street Name' required />

                    <input className='input mt-2' type="text" name='street2' placeholder='Appartment, Suite, Unit, etc (optional)' />
                </label>
                <label className='flex flex-col gap-2'>
                    <span className="after:content-['*'] after:ml-1 after:text-red-500 cursor-pointer">Town / City</span>
                    <input className='input' type="text" name='city' required />
                </label>
                <label className='flex flex-col gap-2'>
                    <span className="after:content-['*'] after:ml-1 after:text-red-500 cursor-pointer">Post Code</span>
                    <input className='input' type="text" name='post_code' required />
                </label>
                <label className='flex flex-col gap-2'>
                    <span className="after:content-['*'] after:ml-1 after:text-red-500 cursor-pointer">Phone</span>
                    <input className='input' type="text" name='phone' required />
                </label>
                <label className='flex flex-col gap-2'>
                    <span className="after:content-['*'] after:ml-1 after:text-red-500 cursor-pointer">Email Address</span>
                    <input className='input' type="email" name='email' defaultValue={user?.email} required />
                </label>
                {!order && <button className='addr-btn mt-6'>Save Address</button>}
            </form>
        </div>
    );
};

export default BillAdd;