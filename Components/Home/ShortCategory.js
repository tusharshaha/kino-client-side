import React from 'react';
import styles from '../../styles/Home/ShortCategory.module.css';
const ShortCategory = () => {
    const categories = [
        { id: 1, category: 'Super Sale', title: 'New Collection', bgImg: '/01-banner.png' },
        { id: 2, category: 'Gun Covid -19', title: 'Temperature', bgImg: '/02-banner.png' },
        { id: 3, category: 'Pulse', title: 'Oximeter', bgImg: '/03-banner.png' },
        { id: 4, category: 'Lab Surgery', title: 'N95 Face Mask', bgImg: '/04-banner.png' },
        { id: 5, category: 'Surgery Lab', title: 'Hand Gloves', bgImg: '/05-banner.png' },
    ]
    return (
        <div className='cus-container mt-6'>
            <div className='grid grid-rows-2 gap-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        categories.slice(0, 3).map(cat => <div style={{
                            backgroundImage: `url(${cat.bgImg})`, backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            padding: '50px 25px'
                        }} key={cat.id}>
                            <h5 className='text-slate-500 mb-3'>{cat.category}</h5>
                            <h3>{cat.title}</h3>
                            <button className={`uppercase transition duration-300 hover:text-sky-500 text-red-500 font-bold mt-5 ${styles.btn_after}`}>Shop Now <span className='ml-2'>+</span></button>
                        </div>)
                    }
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {
                        categories.slice(3, 5).map(cat => <div style={{
                            backgroundImage: `url(${cat.bgImg})`, backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            padding: '50px 25px'
                        }} key={cat.id}>
                            <h5 className='text-slate-500 mb-3'>{cat.category}</h5>
                            <h3>{cat.title}</h3>
                            <button className={`uppercase transition duration-300 hover:text-sky-500 text-red-500 font-bold mt-5 ${styles.btn_after}`}>Shop Now <span className='ml-2'>+</span></button>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ShortCategory;