import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const { login, resetPassword, authError } = useAuth();
    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password, Swal)
    }
    const handlePassReset = () => {
        if (!email) {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'Type Your Email First!',
                showConfirmButton: false,
                timer: 2000
            })
            return;
        }
        resetPassword(email, Swal);
    }
    return (
        <div>
            <h3 className='border-b-2 pb-3 mb-5'>Login</h3>
            <form onSubmit={handleSubmit}>
                <label className='block mb-4'>
                    <span className="after:content-['*'] after:ml-2 after:text-red-500 block mb-2">Email Address</span>
                    <input onBlur={(e) => setEmail(e.target.value)} className="input w-full" type="email" placeholder='Your Email' required />
                </label>

                <label className='block mb-4'>
                    <span className="after:content-['*'] after:ml-2 after:text-red-500 block mb-2">Your Password</span>
                    <input onBlur={(e) => setPassword(e.target.value)} className="input w-full" type="password" placeholder='Your Password' required />
                </label>
                <div className='flex items-center justify-between mb-6'>
                    <label className='text-slate-400'><input type="checkbox" name="" id="" /> Remeber Me</label>
                    <p onClick={handlePassReset} className='text-red-500 cursor-pointer transition duration-200 hover:text-red-600'>Lost Your Password?</p>
                </div>
                <button type='submit' className="cus-btn px-8 py-3 transition duration-300 hover:bg-red-500">Login</button>
            </form>

            <div className='text-center mt-12 text-red-500'>
                {authError}
            </div>
        </div>
    );
};

export default Login;