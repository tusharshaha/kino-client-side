import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import icon1 from '/public/about/f-01.png';
import icon2 from '/public/about/f-02.png';
import icon3 from '/public/about/f-03.png';
import icon4 from '/public/about/f-04.png';

const AboutGoals = () => {
    const goals = [
        {name:'Medical Accessories', img:icon1},
        {name:'Covid - 19 Treatment Center', img:icon2},
        {name:'24/7 Hours Emergency Care', img:icon3},
        {name:'Online Free Consultations', img:icon4},
    ]
    const router = useRouter();
    return (
        <div className='bg-slate-100 mb-24'>
            <div className='cus-container text-center py-24'>
                <h4>Our Main Goals</h4>
                <p className='mt-2 text-slate-400'>Sed ut perspiciatis unde omnis iste natus error</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 gap-6">
                    {
                        goals.map((g, i) => <div key={i} className='relative hover:scale-105 transition duration-300 bg-white p-8'>
                            <h5 className='font-medium mb-6 px-3'>{g.name}</h5>
                            <Image src={g.img} height={80} width={80} alt='goal image' />
                            <p className='text-slate-400 mt-4'>Sed ut perspiciatis unde omnis wste natsit volupta explic</p>
                            <button onClick={()=>router.push('/products')} className='text-slate-400 hover:text-red-500 transition duration-300 text-5xl'>&#8594;</button>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AboutGoals;