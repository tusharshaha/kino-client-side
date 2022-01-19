import Link from 'next/link';
import React from 'react';
import { BsSuitHeartFill, BsHeart } from 'react-icons/bs'
import { AiOutlinePhone, AiOutlineShoppingCart } from 'react-icons/ai'
import { FiLock, FiSearch, FiMenu } from 'react-icons/fi'
import { FaRegUserCircle, FaBriefcaseMedical } from 'react-icons/fa'
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css'
const Header = () => {
    const route = useRouter();
    return (
        <>
            {/* this is navbar is user navbar */}
            <nav id='top' className='py-3 px-2 border-b-2 nav-container flex items-center justify-between'>
                <div className='flex items-center'>
                    <p className='text-slate-500 md:flex hidden'><BsSuitHeartFill className='text-2xl text-red-600 mr-2' />Welcome to Medibazae. We provides <span className='text-sky-500 font-bold mx-2'>Covid-19</span> medical accessories</p>
                    <span className='flex items-center py-1 px-3 bg-sky-500 text-white font-bold rounded-full ml-2'>
                        <AiOutlinePhone className='text-2xl' />
                        <a href="tel:+123 (456) 7879">+123 (456) 7879</a>
                    </span>
                </div>
                <div className='flex items-center text-slate-500'>
                    <button onClick={() => route.push('/login')} className='flex items-center'>
                        <FiLock className='mr-2' />
                        <span className=''>Login</span>
                    </button>
                    <button onClick={() => route.push('/signup')} className='flex items-center mx-3'>
                        <FaRegUserCircle className='mr-2' />
                        <span className=''>Sigh Up</span>
                    </button>
                    <button onClick={() => route.push('/wishlist')} className='flex items-center'>
                        <BsHeart className='mr-2' />
                        <span className=''>Wishlist</span>
                    </button>
                </div>
            </nav>
            {/* this is shop navbar  */}
            <nav className='py-3 px-2 nav-container sticky top-0 bg-white z-10'>
                <div className='nav-container flex items-center justify-between'>
                    <h3 className='logo'><FaBriefcaseMedical className='text-sky-400 mr-2'/> Kino</h3>
                    <ul className={`${styles.shop_menu}  text-slate-600`}>
                        <li>
                            <Link href='/'><a className='transition duration-300 hover:text-sky-500'>Home</a></Link>
                        </li>
                        <li>
                            <Link href='/shop'><a className='transition duration-300 hover:text-sky-500'>Shop</a></Link>
                        </li>
                        <li>
                            <Link href='/category'><a className='transition duration-300 hover:text-sky-500'>Category</a></Link>
                        </li>
                        <li>
                            <Link href='/Blog'><a className='transition duration-300 hover:text-sky-500'>Blog</a></Link>
                        </li>
                        <li>
                            <Link href='/pages'><a className='transition duration-300 hover:text-sky-500'>Pages</a></Link>
                        </li>
                        <li>
                            <Link href='/Contact Us'><a className='transition duration-300 hover:text-sky-500'>Contact Us</a></Link>
                        </li>
                        <li>
                            <div className={`${styles.search_field} relative`}>
                                <input className='py-3 w-full outline-0 px-5 rounded-full bg-slate-50' type="text" placeholder='Search' />
                                <button className='absolute top-3.5 right-5'><FiSearch /></button>
                            </div>
                        </li>
                        <li>
                            <button><FiMenu className='text-2xl' /></button>
                        </li>
                        <li>
                            <button className='flex cus-btn py-2'>
                                <AiOutlineShoppingCart className='text-2xl'/>
                                <div className='bg-white mx-2 px-2 rounded-full text-blue-600'>0</div> My Cart
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Header;