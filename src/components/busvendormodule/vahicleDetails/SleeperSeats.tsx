'use client'
import React from 'react';
import Image from "next/image";
import Steering from "../../../../public/images/steering-wheel.svg";


const SleeperSeats = () => {
  return (
     <div className='sleeper-seat-sec card-box p-16 mt-0 mb-3'>
        <div className='driver-top'>
            <div className='driver d-flex align-items-center justify-content-between gap-3'>
                <p>Entrance 1</p>
                <Image src={Steering} alt=''/>
            </div>
        </div>
        <div className='passenger-sleeper-seat d-flex justify-content-between'>
            <div className='seat-book'></div>
            <div className='mx-auto'></div>
            <div className='seat-book'></div>
            <div className='seat-book'></div>
        </div>
        <div className='passenger-sleeper-seat d-flex justify-content-between'>
            <div className='seat-book'></div>
            <div className='mx-auto'></div>
            <div className='seat-book'></div>
            <div className='seat-book'></div>
        </div>
        <div className='passenger-sleeper-seat d-flex justify-content-between'>
            <div className='seat-book'></div>
            <div className='mx-auto'></div>
            <div className='seat-book'></div>
            <div className='seat-book'></div>
        </div>
        <div className='passenger-sleeper-seat d-flex justify-content-between'>
            <div className='seat-book'></div>
            <div className='mx-auto'></div>
            <div className='seat-book'></div>
            <div className='seat-book'></div>
        </div>
        <div className='passenger-sleeper-seat d-flex justify-content-between'>
            <div className='seat-book'></div>
            <div className='mx-auto'></div>
            <div className='seat-book'></div>
            <div className='seat-book'></div>
        </div>
        
    </div>
  )
}

export default SleeperSeats