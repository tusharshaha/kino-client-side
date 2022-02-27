import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const ProductTop = ({ product }) => {
    const [counter, setCounter] = useState(1)
    const handleDecrase = () => {
        if (counter <= 1) {
            return;
        }
        setCounter(prev => prev - 1)
    }
    console.log(product)
    return (
        <div className="flex flex-col md:flex-row gap-16">
            <div>
                <img src={product.img} className="h-[480px] w-[500px] sm:w-full" alt="Product Image" />
            </div>

            <div className='grow'>
                <h3 className='font-medium'>{product.name}</h3>
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
                        <span>{counter}</span>
                        <button onClick={() => setCounter(prev => prev + 1)} className='counter-btn'>+</button>
                    </div>
                    <button className="bg-red-500 text-white uppercase font-bold py-4 px-8 rounded-full">Add To Cart +</button>
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