import React, { useEffect, useState } from 'react';
import {FaGreaterThan} from 'react-icons/fa'
const DealsTimer = () => {
    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    let interval;
    const startTimer = () => {
        const countDownDate = new Date("May 30, 2022").getTime();
        interval = setInterval(() => {
            const newDate = new Date().getTime();
            const distance = countDownDate - newDate;
            const day = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hour = Math.floor((distance % (24 * 60 * 60 * 1000) / (60 * 60 * 1000)))
            const minute = Math.floor((distance % (60 * 60 * 1000) / (60 * 1000)))
            const second = Math.floor(((distance % (60 * 1000)) / 1000))
            if (distance < 0) {
                clearInterval(interval.current)
            } else {
                setDays(day);
                setHours(hour);
                setMinutes(minute);
                setSeconds(second)
            }
        }, 1000)
    }
    useEffect(() => {
        startTimer()
    }, [])
    return (
        <div className='cus-container text-center border-t-2 border-slate-500 pt-16 pb-10'>
            <h4 className='text-slate-600'>Deal Of This Week</h4>
            <p className='text-slate-500'>Sed ut perspiciatis unde omnis iste natus error</p>
            <div className='mt-8 flex items-center justify-center'>
                <div style={{width:'90px'}} className='text-center border border-slate-500 rounded-lg p-3'>
                    <span className='text-3xl'>{days < 10 ? '0' + days : days}</span>
                    <p className='text-slate-500'>Days</p>
                </div>
                <FaGreaterThan className='mx-3 text-2xl'/>
                <div style={{width:'90px'}} className='text-center border border-slate-500 rounded-lg p-3'>
                    <span className='text-3xl'>{hours < 10 ? '0' + hours : hours}</span>
                    <p className='text-slate-500'>Hours</p>
                </div>
                <FaGreaterThan className='mx-3 text-2xl'/>
                <div style={{width:'90px'}} className='text-center border border-slate-500 rounded-lg p-3'>
                    <span className='text-3xl'>{minutes < 10 ? '0' + minutes : minutes}</span>
                    <p className='text-slate-500'>Minutes</p>
                </div>
                <FaGreaterThan className='mx-3 text-2xl'/>
                <div style={{width:'90px'}} className='text-center border border-slate-500 rounded-lg p-3'>
                    <span className='text-3xl'>{seconds < 10 ? '0' + seconds : seconds}</span>
                    <p className='text-slate-500'>Seconds</p>
                </div>
            </div>
        </div>
    );
};

export default DealsTimer;