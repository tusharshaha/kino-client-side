import Image from 'next/image';
import React from 'react';
import team1 from '../../public/about/team01.png';
import team2 from '../../public/about/team02.png';
import team3 from '../../public/about/team03.png';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

const Team = () => {
    const teams = [
        { img: team1, name: 'DR. Michael Coleman' },
        { img: team2, name: 'Alexander Knowles' },
        { img: team3, name: 'DR. Finley Johnson' },
    ]
    return (
        <div className='cus-container mb-60'>
            <div className='flex justify-between mb-24'>
                <div className='hidden sm:block'>
                    <h4>Our Main Goals</h4>
                    <p className='text-slate-400 mt-2'>Sed ut perspiciatis unde omnis iste natus error</p>
                </div>
                <button className='flex py-3 md:py-0.5 cus-btn px-8 uppercase transition duration-300 hover:bg-red-500'>View All Doctors <span className='ml-2'>+</span></button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    teams.map((team, i) =>
                        <div className='relative mb-28 lg:mb-0' key={i}>
                            <Image src={team.img} height={400} width={500} alt='team image' />
                            <div style={{left:`calc(50% - 140px)`}} className='absolute -bottom-20 text-center bg-white rounded-lg shadow-lg py-6 px-16'>

                                <div className='flex justify-center gap-2'>
                                    <div className='icon outline-0 bg-slate-100 p-3'>
                                        <FaFacebookF />
                                    </div>
                                    <div className='icon outline-0 bg-slate-100 p-3'>
                                        <FaTwitter />
                                    </div>
                                    <div className='icon outline-0 bg-slate-100 p-3'>
                                        <FaInstagram />
                                    </div>
                                </div>
                                <p className='mt-2 font-bold'>{team.name}</p>
                                <p className='font-bold text-sky-500 uppercase'><small>Covid -19 Doctors</small></p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Team;