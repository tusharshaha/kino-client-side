import React from 'react';

const Login = () => {
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    return (
        <div>
            <h3 className='border-b-2 pb-3 mb-5'>Login</h3>
            <form onSubmit={handleSubmit}>
                <label className='block mb-4'>
                    <span className="after:content-['*'] after:ml-2 after:text-red-500 block mb-2">Email Address</span>
                    <input className="input w-full" type="email" placeholder='Your Email' required/>
                </label>

                <label className='block mb-4'>
                    <span className="after:content-['*'] after:ml-2 after:text-red-500 block mb-2">Your Password</span>
                    <input className="input w-full" type="password" placeholder='Your Password' required/>
                </label>
                <div className='flex items-center justify-between mb-6'>
                    <label className='text-slate-400'><input type="checkbox" name="" id="" /> Remeber Me</label>
                    <p className='text-red-500'>Lost Your Password?</p>
                </div>
                <button type='submit' className="cus-btn px-8 py-3 transition duration-300 hover:bg-red-500">Login</button>
            </form>
        </div>
    );
};

export default Login;