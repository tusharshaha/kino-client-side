import Image from 'next/image';
import React from 'react';
import img1 from '/public/brands/01-2.png';
import img2 from '/public/brands/02-1.png';
import img3 from '/public/brands/03.png';
import img4 from '/public/brands/04.png';
import img5 from '/public/brands/05.png';
import img6 from '/public/brands/06.png';
import img7 from '/public/brands/07.png';
import img8 from '/public/brands/08.png';
import img9 from '/public/brands/09.png';
import img10 from '/public/brands/10.png';
import img11 from '/public/brands/11.png';
import img12 from '/public/brands/12.png';

const Brands = () => {
    const brands = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]
    return (
        <div className='cus-container py-28'>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-20'>
                {
                    brands.map((br, i) => <Image key={i} src={br} height={100} width={100} alt='brand image' />)
                }
            </div>

        </div>
    );
};

export default Brands;