'use client'
import React from 'react';
import Image from "next/image";
import Steering from "../../../../public/images/steering-wheel.svg";

const SettingSeats = () => {
  return (
    <div className='setting-seat-sec card-box p-16 mt-4'>
        <div className='driver-top'>
            <div className='driver d-flex align-items-center justify-content-between gap-3'>
                <p>Entrance 1</p>
                 <Image src={Steering} alt=''/>
            </div>
        </div>
        <div className='passenger-seat d-flex justify-content-between'>
            <div className='seat-book'></div>
            <div className='mx-auto'></div>
            <div className='seat-book'></div>
            <div className='seat-book'></div>
        </div>
        <div className='passenger-seat d-flex justify-content-between'>
            <div className='seat-book'></div>
            <div className='mx-auto'></div>
            <div className='seat-book'></div>
            <div className='seat-book'></div>
        </div>
        <div className='passenger-seat d-flex justify-content-between'>
            <div className='seat-book'></div>
            <div className='mx-auto'></div>
            <div className='seat-book'></div>
            <div className='seat-book'></div>
        </div>
        <div className='passenger-seat d-flex justify-content-between'>
            <div className='seat-book'></div>
            <div className='mx-auto'></div>
            <div className='seat-book'></div>
            <div className='seat-book'></div>
        </div>
        <div className='passenger-seat d-flex justify-content-between'>
            <div className='seat-book'></div>
            <div className='mx-auto'></div>
            <div className='seat-book'></div>
            <div className='seat-book'></div>
        </div>
        <div className='passenger-seat d-flex justify-content-between'>
            <div className='seat-book'></div>
            <div className='mx-auto'></div>
            <div className='seat-book'></div>
            <div className='seat-book'></div>
        </div>
        <div className='passenger-seat d-flex justify-content-between'>
            <div className='seat-book'></div>
            <div className='mx-auto'></div>
            <div className='seat-book'></div>
            <div className='seat-book'></div>
        </div>
        <div className='passenger-seat d-flex justify-content-between'>
            <div className='seat-book'></div>
            <div className='mx-auto'></div>
            <div className='seat-book'></div>
            <div className='seat-book'></div>
        </div>
        <div className='passenger-seat d-flex justify-content-between'>
            <div className='seat-book'></div>
            <div className='mx-auto'></div>
            <div className='seat-book'></div>
            <div className='seat-book'></div>
        </div>
        <div className='passenger-seat d-flex justify-content-between'>
            <div className='seat-book'></div>
            <div className='mx-auto'></div>
            <div className='seat-book'></div>
            <div className='seat-book'></div>
        </div>
        <div className='passenger-seat d-flex justify-content-between'>
            <div className='seat-book'></div>
            <div className='mx-auto'></div>
            <div className='seat-book'></div>
            <div className='seat-book'></div>
        </div>
        <div className='passenger-seat d-flex justify-content-between'>
            <div className='seat-book'></div>
            <div className='mx-auto'></div>
            <div className='seat-book'></div>
            <div className='seat-book'></div>
        </div>
        <div className='passenger-seat mb-0 d-flex justify-content-between'>
            <div className='seat-book'></div>
            <div className='mx-auto'></div>
            <div className='seat-book'></div>
            <div className='seat-book'></div>
        </div>
        
    </div>
  )
}

export default SettingSeats