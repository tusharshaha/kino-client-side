import Image from 'next/image';
import React from 'react';
import { FaRegStar, FaStarHalfAlt, FaStar } from 'react-icons/fa';
import ReactStars from "react-rating-stars-component";

const Review = ({ review }) => {
    return (
        <div className='flex gap-3'>
            <div className='rounded-full w-[45px] h-[50px] overflow-hidden'>
                <Image src={ review.userImg || "/user.png"} height={200} width={200} alt="User Image" />
            </div>
            <div className='w-[200px] grow'>
                <ReactStars
                    count={5}
                    value={review.rating}
                    edit={false}
                    size={20}
                    emptyIcon={<FaRegStar />}
                    halfIcon={<FaStarHalfAlt />}
                    fullIcon={<FaStar />}
                    activeColor="#ffd700"
                    isHalf={true}
                    color="#bebcbc"
                />
                <p className='text-slate-400 text-[15px]'><span className='font-bold capitalize'>{review.name}</span> --{review.revDate}</p>
                <p className='text-slate-400 mt-2'>{review.review}</p>
            </div>
        </div>
    );
};

export default Review;