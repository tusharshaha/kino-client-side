import Image from 'next/image';
import React from 'react';
import blog1 from '/public/blog-1.png';
import blog2 from '/public/blog-2.png';
import blog3 from '/public/blog-3.png';
import { BiCalendar } from 'react-icons/bi'
import styles from '../../styles/NewsBlogs.module.css'
const NewsBlogs = () => {
    const blogs = [
        { id: 1, img: blog1, cap: 'COVID-19', title: 'Mirage Deep Dive Under anding Timin Response' },
        { id: 2, img: blog2, cap: 'SANITIZER', title: 'How To Feel More Energe Even You’re Stuck' },
        { id: 3, img: blog3, cap: 'MEDICAL', title: 'Dolorem eum fugiat quo voluptas nulla pariatur' },
    ]
    return (
        <div className='cus-container pt-20'>
            <div className='text-center mb-10'>
                <h3>Latest News & Blog</h3>
                <p className='text-slate-500 mt-2'>Sed ut perspiciatis unde omnis iste natus error</p>
            </div>
            <div className='grid grid-rows-1'>
                <div className="grid grid-cols-3 gap-10">
                    {
                        blogs.map(bl => <div className={`border relative ${styles.card}`} key={bl.id}>
                            <div className='relative'>
                                <Image src={bl.img} height={250} width={400} alt='' />
                                <span className='absolute bottom-0 left-7 text-white bg-red-500 font-bold px-3 rounded-full'>{bl.cap}</span>
                            </div>
                            <div className='p-8'>
                                <div className='flex items-center text-slate-500 mb-3'>
                                    <BiCalendar className='mr-2' /> 26 Sep 2020
                                </div>
                                <h4 className='transition duration-300 hover:text-sky-500'>{bl.title}</h4>
                                <p className='py-5 text-slate-500'>Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium</p>
                                <button className={`uppercase text-slate-500 font-bold ${styles.btn_after}`}>Read More +</button>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default NewsBlogs;