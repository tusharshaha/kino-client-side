import React from 'react';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineInfoCircle } from 'react-icons/ai';
import { TiPencil } from 'react-icons/ti';

const ContactForm = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    return (
        <div className='cus-container text-center'>
            <h4>Send Us a Message</h4>
            <p className='mt-2 text-slate-500'>Sed ut perspiciatis unde omnis iste natus error</p>

            <form onSubmit={handleSubmit} className='my-12'>
                <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-6'>
                    <label className='relative'>
                        <input className='input py-5' type="text" placeholder='Your Name' required />
                        <BsPerson className='text-2xl absolute right-5 top-4 text-slate-400' />
                    </label>
                    <label className='relative'>
                        <input className='input py-5' type="email" placeholder='Your Email' required />
                        <AiOutlineMail className='text-2xl absolute right-5 top-4 text-slate-400' />
                    </label>
                    <label className='relative'>
                        <input className='input py-5' type="text" placeholder='Subject' required />
                        <AiOutlineInfoCircle className='text-2xl absolute right-5 top-4 text-slate-400' />
                    </label>
                </div>
                <textarea className='input mt-6' name="" id="" cols="30" rows="10" placeholder='Your Message' required></textarea>

                <button type='submit' className='cus-btn px-8 py-4 mt-8 uppercase hover:bg-red-500 transition duration-300'>Send Message</button>
            </form>
        </div>
    );
};

export default ContactForm;