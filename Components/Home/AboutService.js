import React from 'react';
import {AiOutlineDollarCircle} from 'react-icons/ai'
import {FaShip} from 'react-icons/fa'
import {BiLockOpen} from 'react-icons/bi'
const AboutService = () => {
    const services = [
        {id:1, title:'Free Shipping', icons: <FaShip/>, class:'text-sky-500'},
        {id:2, title:'Money Back', icons:<AiOutlineDollarCircle/>, class:'text-red-500'},
        {id:3, title:'Money Back', icons:<BiLockOpen/>, class:'text-amber-300'}
    ]
    return (
        <div className='bg-slate-100'>
            <div className='cus-container'>
                <div className='grid grid-rows-1 py-16'>
                    <div className='grid grid-cols-3 gap-6'>
                        {
                            services.map(sev =><div key={sev.id} className='flex items-center justify-center bg-white rounded-md text-slate-700 py-10 px-6 transition duration-300 hover:-translate-y-4'>
                                <div className={`${sev.class} text-6xl mr-3`}>
                                    {sev.icons}
                                </div>
                                <div>
                                    <h5>{sev.title}</h5>
                                    <p className='text-slate-500 mt-3'>Sed perspicia unde omnis iste nat error voluptate accus</p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutService;