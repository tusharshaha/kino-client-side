import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { BiArrowToTop } from 'react-icons/bi'
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
import styles from '../styles/Footer.module.css'
const Footer = () => {
    const [topClass, setTopClass] = useState('hidden')
    const handleGoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    // handle visibality for go to btn
    const handleGoTopBtn = () => {
        if (window.scrollY >= 500) {
            setTopClass("");
        } else { setTopClass("hidden") }
    }
    useEffect(()=>{
        window.addEventListener('scroll', handleGoTopBtn);
        return ()=> window.removeEventListener('scroll', handleGoTopBtn);
    },[])
    return (
        <footer>
            <div className='cus-container'>
                {/* footer top part  */}
                <div className='grid grid-rows-1 border-b-2 border-plate-500 pt-16'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-slate-500 pb-16'>
                        <div>
                            <h5 className='text-slate-600'>About Company</h5>
                            <p className='py-3'>But must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born</p>
                            <div className='flex gap-4'>
                                <div className='icon'>
                                    <FaFacebookF />
                                </div>
                                <div className='icon'>
                                    <FaTwitter />
                                </div>
                                <div className='icon'>
                                    <FaInstagram />
                                </div>
                                <div className='icon'>
                                    <FaLinkedinIn />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h5 className='text-slate-600'>Useful Links</h5>
                            <ul className={styles.links}>
                                <li>Shipping Options</li>
                                <li>My Wishlist</li>
                                <li>My Account</li>
                                <li>Return Policy</li>
                                <li>Product Categories</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className='text-slate-600'>Categories</h5>
                            <ul className={styles.links}>
                                <li>Hand Gloves</li>
                                <li>Vitamins & Supplements</li>
                                <li>Health & Medicine</li>
                                <li>Oxygen Mmeter & Mask</li>
                                <li>Medical Equipment</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className='text-slate-600'>Contact Us</h5>
                            <ul className={styles.contact_list}>
                                <li>
                                    <div className='icon2 mr-3'><GoLocation /></div>KlbTheme, 789 Main rd, Anytown, CA 12345 USA
                                </li>
                                <li>
                                    <div className='icon2 mr-3'><AiOutlinePhone /></div>+ 888 456-7890
                                </li>
                                <li>
                                    <div className='icon2 mr-3'><AiOutlineMail /></div>medibazar@klbtheme.com
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button onClick={handleGoTop} className={`${topClass} go-top`}>
                        <BiArrowToTop />
                    </button>
                </div>
                {/* footer bootom part  */}
                <div className='py-5 text-center flex gap-4 flex-col flex-col-reverse text-slate-500 md:gap-0 md:flex-row justify-between'>
                    <p className='flex flex-wrap mx-auto md:mx-0'>Copyright 2022. Kino. All rights reserved.</p>
                    <ul className={`${styles.menu}`}>
                        <li>
                            <Link href="/home"><a>Home</a></Link>
                        </li>
                        <li>
                            <Link href="/aboutUs"><a>About Us</a></Link>
                        </li>
                        <li>
                            <Link href="/products"><a>Our Products</a></Link>
                        </li>
                        <li>
                            <Link href="/categories"><a>Categories</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;