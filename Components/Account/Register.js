import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const { createUser, loading, regError } = useAuth();
    const handleSubmit = (e) => {
        e.preventDefault()
        createUser(name, email, password, Swal);
    }

    return (
        <div>
            <h3 className='border-b-2 pb-3 mb-5'>Register</h3>
            <form onSubmit={handleSubmit}>
                <label className='block mb-4'>
                    <span className="after:content-['*'] after:ml-2 after:text-red-500 block mb-2">Your Name</span>
                    <input onBlur={(e) => setName(e.target.value)} className="input w-full" type="text" placeholder='Your Name' required />
                </label>

                <label className='block mb-4'>
                    <span className="after:content-['*'] after:ml-2 after:text-red-500 block mb-2">Email Address</span>
                    <input onBlur={(e) => setEmail(e.target.value)} className="input w-full" type="email" placeholder='Your Email' required />
                </label>

                <label className='block mb-4'>
                    <span className="after:content-['*'] after:ml-2 after:text-red-500 block mb-2">Your Password</span>
                    <input onBlur={(e) => setPassword(e.target.value)} className="input w-full" type="password" placeholder='Your Password' required />
                </label>
                <p className='text-slate-400 mb-6'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>

                <button type='sumit' className="cus-btn px-8 py-3 transition duration-300 hover:bg-red-500">Register</button>
            </form>
            <div className='text-center mt-12 text-red-500'>
                {regError}
            </div>
        </div>
    );
};

export default Register;