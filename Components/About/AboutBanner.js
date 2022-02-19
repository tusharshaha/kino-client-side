import Image from 'next/image';
import React from 'react';
import singlePic from '../../public/about/single-image.png';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const AboutBanner = () => {
    return (
        <div className='cus-container mb-28'>
            <div className='grid grid-cols-1 flex items-center lg:grid-cols-2 gap-24'>
                <div className='relative'>
                    <Image src={singlePic} height={550} width={550} alt='single picture' />
                    <div className='absolute rounded-lg top-0 right-0 bg-sky-500 text-white p-6'>
                        <h2 className='font-bold mb-2'>25</h2>
                        <p>Years of <br /> experience</p>
                    </div>
                </div>

                <div>
                    <div className='mb-8'>
                        <h4>What Our Client’s Say</h4>
                        <p className='text-slate-400 mt-2'>Sed ut perspiciatis unde omnis iste natus error</p>
                    </div>
                    <div className='mb-6'>
                        <h5><AiOutlineCheckCircle className='inline-block text-sky-500 mr-1'/> Our Mission & Vision</h5>
                        <p className='text-slate-400 text-1xl mt-3'>Quis autem vel eum iure reprehenderit quin voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum</p>
                    </div>
                    <div className='mb-12'>
                        <h5><AiOutlineCheckCircle className='inline-block text-sky-500 mr-1'/> Treatment For Covid -19</h5>
                        <p className='text-slate-400 text-1xl mt-3'>But I must explain to you how all this mistaken idea denouncing pleasure and praising pain was born and complete account</p>
                    </div>
                    <button className='flex cus-btn py-4 px-8 uppercase transition duration-300 hover:bg-red-500'>Meet With Doctors <span className='ml-2'>+</span></button>
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;