import React from 'react';
import { FaBriefcaseMedical, FaRegWindowClose, FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import styles from '../../styles/Sidebar.module.css';
const Sidebar = ({ setToggle, toggle }) => {
    const bgImages = ['/sidebar1.jpg', '/sidebar2.jpg', '/sidebar3.jpg', '/sidebar4.jpg', '/sidebar5.jpg', '/sidebar6.jpg']
    return (
        <div className={toggle ? styles.sidebar : styles.hide_sidebar}>
            <button onClick={() => setToggle(!toggle)} className={`${styles.close_icon} text-sky-500`}>
                <FaRegWindowClose />
            </button>
            <div className='border-b-2 border-slate-500 pb-5'>
                <h3 className='logo'><FaBriefcaseMedical className='text-white mr-2' /> Kino</h3>
            </div>
            <div className='pt-5'>
                <div className='mb-6'>
                    <h5>Office Address</h5>
                    <p className='text-gray-400 mt-2'>23/A, Miranda City Likaoli Prikano, Dope</p>
                </div>
                <div className='mb-6'>
                    <h5>Phone Number</h5>
                    <p className='text-gray-400 mt-2'>+ 012 345 678 99 <br />
                        + 457 789 789 65</p>
                </div>
                <div className='mb-6'>
                    <h5>Email Address</h5>
                    <p className='text-gray-400 mt-2'>support@gmail.com <br />
                        contact@medibazar.net</p>
                </div>
            </div>
            <div className='grid grid-rows-1 gap-3'>
                <div className='grid grid-cols-3 gap-3'>
                    {
                        bgImages.map((img, i) =>
                            <div key={i} style={{
                                background: `url(${img})`, height: '90px', width: '90px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover'
                            }}>
                                <div className={styles.link_hover}>
                                    <FaInstagram />
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className='flex mt-6'>
                <div className='icon mr-4'>
                    <FaFacebookF />
                </div>
                <div className='icon mr-4'>
                    <FaTwitter />
                </div>
                <div className='icon mr-4'>
                    <FaInstagram />
                </div>
                <div className='icon'>
                    <FaLinkedinIn />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;