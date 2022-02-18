import Image from 'next/image';
import React from 'react';
import { GoLocation } from 'react-icons/go';
import { AiOutlinePhone, AiOutlineClockCircle } from 'react-icons/ai';
import { IoMailOpenOutline } from 'react-icons/io5'
import contactImg from '../../public/contact/contact.png';

const ContactInfo = () => {
    return (
        <div className='cus-container'>
            <div className='flex items-center justify-between flex-col md:flex-row gap-6'>
                {/* there have contact info */}
                <div>
                    <h4>Contact Us</h4>
                    <p className='text-slate-500 mt-1'>Sed ut perspiciatis unde omnis natus error</p>

                    <ul className='mt-8'>
                        <li className='flex gap-6 mb-5'>
                            <GoLocation className='text-sky-500 text-5xl' />
                            <div className=''>
                                <p className='font-bold text-slate-400 uppercase'>Address</p>
                                <p className='text-2xl mt-1 font-medium'>205 Middle Road, 2nd <br /> Floor, New York</p>
                            </div>
                        </li>
                        <li className='flex gap-6 mb-5'>
                            <AiOutlinePhone className='text-sky-500 text-5xl' />
                            <div className=''>
                                <p className='font-bold text-slate-400 uppercase'>Phone Number</p>
                                <p className='text-2xl mt-1'>+ 012 345 678 99 <br /> + 457 789 789 65</p>
                            </div>
                        </li>
                        <li className='flex gap-6 mb-5'>
                            <IoMailOpenOutline className='text-sky-500 text-5xl' />
                            <div className=''>
                                <p className='font-bold text-slate-400 uppercase'>Email</p>
                                <p className='text-2xl mt-1'>support@gmail.com <br /> contact@medibazar.net</p>
                            </div>
                        </li>
                        <li className='flex gap-6 mb-5'>
                            <AiOutlineClockCircle className='text-sky-500 text-5xl' />
                            <div className=''>
                                <p className='font-bold text-slate-400 uppercase'>Working Hours</p>
                                <p className='text-2xl mt-1'>Sunday - Monday, <br /> 08 am - 09 pm</p>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* this is contact image */}
                <div className='relative'>
                    <Image src={contactImg} height={600} width={700} alt="contact image" />
                    <img style={{
                        height: '200px',
                        width: '200px',
                        position: 'absolute',
                        bottom: '-90px',
                        left: '-90px',
                        zIndex: '-1'
                    }} className='hidden md:block' src='/contact/shape.png' alt="shape" />
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;