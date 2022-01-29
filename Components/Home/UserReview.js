import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import {BsStarFill, BsStarHalf} from 'react-icons/bs'
import Styles from '../../styles/UserReview.module.css'
import SwiperCore, {
    Pagination, Navigation
} from 'swiper';
SwiperCore.use([Pagination, Navigation]);

const UserReview = () => {
    const reviews = [
        {img:'https://i.pinimg.com/236x/56/78/4d/56784dfcc624e322c04e1037ba83ae09.jpg',name:'Disay Lana', role:'Designer'},
        {img:'https://i.pinimg.com/564x/6e/b9/34/6eb9348adb10b42ce591b83b3c803f27.jpg',name:'Sebastian Barry', role:'Business Manager'},
        {img:'https://i.pinimg.com/236x/35/cc/54/35cc5458085e73e66fd89b5bb5d47771.jpg', name:'Oliver Greenwood', role:'Designer'},
        {img:'https://i.pinimg.com/236x/78/f7/c5/78f7c57534670a8ae692921b9822607f.jpg', name:'Alden Smith', role:'Designer'},
    ]
    return (
        <div className='bg-slate-100 py-20'>
            <div className='text-center mb-10'>
                <h4>What Our Client’s Say</h4>
                <p className='text-slate-500 mt-2'>Sed ut perspiciatis unde omnis iste natus error</p>
            </div>
            <div className='cus-container'>
                <Swiper slidesPerView={2} spaceBetween={30} slidesPerGroup={1} loop={true} loopFillGroupWithBlank={true} pagination={{
                    "clickable": true
                }} navigation={true} className="mySwiper">
                    {
                        reviews.map((rv,i)=><SwiperSlide className='mb-16' key={i}>
                            <div className='bg-white p-16'>
                                <div className={Styles.user}>
                                    <img src={rv.img} alt="" />
                                    <div className='flex'>
                                        <BsStarFill className='text-amber-400'/>
                                        <BsStarFill className='text-amber-400 ml-1'/>
                                        <BsStarFill className='text-amber-400 ml-1'/>
                                        <BsStarFill className='text-amber-400 ml-1'/>
                                        <BsStarHalf className='text-amber-400 ml-1'/>
                                    </div>
                                </div>
                                <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, distinctio? Ipsam illo, voluptatem fuga sapiente accusantium autem veritatis itaque temporibus officiis similique eaque maiores. Natus velit odio corporis minus nam?</p>
                                <div>
                                    <h5 className='font-bold'>{rv.name}</h5>
                                    <p className='text-red-500'>{rv.role}</p>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default UserReview;