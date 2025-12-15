'use client'
import React from 'react';
import Image from "next/image";
import Steering from "../../../../public/images/steering-wheel.svg";


const SleeperSeats = () => {
  return (
      <div className='bus-seat-box bus-sleeper-seat-box d-flex align-items-end gap-3'>
        <div className='setting-seat-sec card-box p-16 mt-0 mb-3'>
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
        </div>
        <div className='row-box'>
            <div className='row-count'>
                <span>Row 1</span>
            </div>
            <div className='row-count'>
                <span>Row 2</span>
            </div>
            <div className='row-count'>
                <span>Row 3</span>
            </div>
            <div className='row-count'>
                <span>Row 4</span>
            </div>
        </div> 
    </div>
  )
}

export default SleeperSeats