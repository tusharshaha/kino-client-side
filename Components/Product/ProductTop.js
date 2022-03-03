import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaRegStar, FaStarHalfAlt, FaStar } from 'react-icons/fa';
import ReactStars from "react-rating-stars-component";
import useGStore from '../../Hooks/useGStore';

const ProductTop = ({ product, gallary, productRev }) => {
    const [qty, setQty] = useState(1);
    const [src, setSrc] = useState(product.img);
    const { addToCart } = useGStore();
    const totalReview = productRev?.length;
    const totalRating = productRev.reduce((prev, curr) => prev + curr.rating, 0);
    const countAvg = parseFloat(totalRating / totalReview).toFixed(1);
    const avgRating = parseFloat(countAvg);

    const handleDecrase = () => {
        if (qty <= 1) {
            return;
        }
        setQty(prev => prev - 1)
    }
    return (
        <div className="flex flex-col lg:flex-row gap-16">
            <div>
                <img src={src} className="h-[390px] sm:h-[490px] w-[500px] sm:w-full" alt="Product Image" />
                <div className='grid grid-cols-4 gap-2 mt-4'>
                    {
                        gallary.slice(0, 4).map((img, i) =>
                            <img key={i} src={img} onClick={() => setSrc(img)} className="w-[140px] cursor-pointer" alt='gallary image' />
                        )
                    }
                </div>
            </div>

            <div className='grow'>
                <h3 className='font-medium'>{product.name}</h3>
                {productRev.length > 0 &&
                    <div className='flex items-center mt-2 gap-2'>
                        <ReactStars
                            count={5}
                            size={20}
                            value={avgRating}
                            emptyIcon={<FaRegStar />}
                            halfIcon={<FaStarHalfAlt />}
                            fullIcon={<FaStar />}
                            activeColor="#ffd700"
                            edit={false}
                            isHalf={true}
                            color="#bebcbc"
                        />
                        <span className='text-slate-400 font-bold'>({avgRating})</span>
                    </div>
                }
                <div className='flex gap-2 text-red-500 mt-3 font-bold text-[18px] items-center'>
                    {product?.prevPrice && <p><strike>&#163;{product?.prevPrice}</strike></p>}
                    <p>&#163;{product?.curPrice}</p>
                </div>
                <p className="text-slate-400 mt-6">On the other hand, we denounce with righteous indigna <br /> tion and dislike men who are so beguiled and demor</p>
                <p className="text-sky-500 font-bold my-6">In Stock</p>

                {/* this is product quantity handle section  */}

                <div className='flex items-center flex-wrap gap-4 mb-8'>
                    <div className='bg-red-100 text-slate-500 flex items-center gap-6 p-2 rounded-full'>
                        <button onClick={handleDecrase} className='counter-btn'>-</button>
                        <span>{qty}</span>
                        <button onClick={() => setQty(prev => prev + 1)} className='counter-btn'>+</button>
                    </div>
                    <button onClick={()=> addToCart(product._id, qty)} className="bg-red-500 text-white uppercase font-bold py-4 px-8 rounded-full transition duration-300 hover:bg-red-600">Add To Cart +</button>
                </div>
                <p className='text-slate-400'><span className='font-bold text-black text-[18px]'>SKU:</span> {product.sku}</p>
                <p className='my-4 text-slate-400'>Category: {product.categories}</p>
                <div className='flex gap-3 items-center'>
                    <span className='font-bold text-[18px]'>Share Now:</span>
                    <div className='flex gap-2'>
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
            </div>
        </div>
    );
};

export default ProductTop;