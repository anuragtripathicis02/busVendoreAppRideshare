'use client'
import React, { useState } from 'react'
import Image from "next/image";
import BusCur from '../../../../public/images/bus-sq.png'
import AdminImg from '../../../../public/images/admin-review-img.png'
import AddReminder from '../../../../public/images/AddReminder.png'
import DateChangeIcon from '../../../../public/images/dateChange.png'
import CancelBookingIcon from '../../../../public/images/cancelBooking.png'
import PointDetails from '../../../../public/images/point-details.png'
import { Button } from 'react-bootstrap';
import DateChangeModal from './DateChange'; // Make sure this is the modal component
import CancelBookingModal from './CancelBooking'; // Make sure this is the modal component
import Link from 'next/link';

const BookingDetails = () => {
    // const [showReminder, setShowReminder] = useState(false);
    const [showDateChange, setShowDateChange] = useState(false);
    const [showCancelBooking, setShowCancelBooking] = useState(false);

  return (
    <div className="sec-bus-card-list sec-gap confirm-booking-sec">
        <div className='row'>
            <div className='col-xl-7'>
                <div className="card bus-card-item mb-4">
                    <div className="d-flex flex-md-nowrap flex-wrap justify-content-md-between justify-content-center gap-4">
                        <div className="booking-details-left">
                            <div className='areaName d-flex align-items-center justify-content-between w-100'>
                                <span className='heading-name'>kumasi <span className='sub-heading-title d-block'>Metro Mass Transport Station</span></span>
                                <span className='icons'>
                                    <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.5254 4.94165L27.5837 9.99998L22.5254 15.0583" stroke="#652669" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.5 10L27.5 10" stroke="#652669" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                </span>
                                <span className='heading-name text-end'>kumasi <span className='sub-heading-title d-block'>Metro Mass Transport Station</span></span>
                            </div>
                            <div className="time d-flex align-items-center w-100">
                                <span className="start-time w-25">16:00 <span className='sub-heading-title d-block'>Friday, 27 Dec</span></span>
                                <span className="duration-box position-relative w-100">
                                    <span className='duration'>6H 54M</span>
                                </span>
                                <span className="end-time w-25 text-end">19:31 <span className='sub-heading-title d-block'>Friday, 27 Dec</span></span>
                            </div>
                        </div>
                    </div>
                    <div className='card-bottom d-flex flex-md-nowrap flex-wrap gap-3'>
                        <ul className='d-flex align-items-center gap-2 flex-wrap'>
                            <li className='book-area'>Kumasi</li>
                            <li className='book-area'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5306 8.5306L6.5306 13.5306C6.3897 13.6715 6.19861 13.7506 5.99935 13.7506C5.80009 13.7506 5.60899 13.6715 5.4681 13.5306C5.3272 13.3897 5.24805 13.1986 5.24805 12.9993C5.24805 12.8001 5.3272 12.609 5.4681 12.4681L9.93747 7.99997L5.46935 3.5306C5.39958 3.46083 5.34424 3.37801 5.30649 3.28686C5.26873 3.19571 5.2493 3.09801 5.2493 2.99935C5.2493 2.90069 5.26873 2.80299 5.30649 2.71184C5.34424 2.62069 5.39958 2.53786 5.46935 2.4681C5.53911 2.39833 5.62194 2.34299 5.71309 2.30524C5.80424 2.26748 5.90194 2.24805 6.0006 2.24805C6.09926 2.24805 6.19696 2.26748 6.28811 2.30524C6.37926 2.34299 6.46208 2.39833 6.53185 2.4681L11.5318 7.4681C11.6017 7.53786 11.6571 7.62072 11.6948 7.71193C11.7326 7.80313 11.7519 7.9009 11.7518 7.99961C11.7517 8.09832 11.7321 8.19604 11.6941 8.28715C11.6562 8.37827 11.6006 8.461 11.5306 8.5306Z" fill="#6D6D6D"/></svg>
                            </li>
                            <li className='book-area'>Ejisu</li>
                            <li className='book-area'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5306 8.5306L6.5306 13.5306C6.3897 13.6715 6.19861 13.7506 5.99935 13.7506C5.80009 13.7506 5.60899 13.6715 5.4681 13.5306C5.3272 13.3897 5.24805 13.1986 5.24805 12.9993C5.24805 12.8001 5.3272 12.609 5.4681 12.4681L9.93747 7.99997L5.46935 3.5306C5.39958 3.46083 5.34424 3.37801 5.30649 3.28686C5.26873 3.19571 5.2493 3.09801 5.2493 2.99935C5.2493 2.90069 5.26873 2.80299 5.30649 2.71184C5.34424 2.62069 5.39958 2.53786 5.46935 2.4681C5.53911 2.39833 5.62194 2.34299 5.71309 2.30524C5.80424 2.26748 5.90194 2.24805 6.0006 2.24805C6.09926 2.24805 6.19696 2.26748 6.28811 2.30524C6.37926 2.34299 6.46208 2.39833 6.53185 2.4681L11.5318 7.4681C11.6017 7.53786 11.6571 7.62072 11.6948 7.71193C11.7326 7.80313 11.7519 7.9009 11.7518 7.99961C11.7517 8.09832 11.7321 8.19604 11.6941 8.28715C11.6562 8.37827 11.6006 8.461 11.5306 8.5306Z" fill="#6D6D6D"/></svg>
                            </li>
                            <li className='book-area'>Techiman</li>
                            <li className='book-area'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5306 8.5306L6.5306 13.5306C6.3897 13.6715 6.19861 13.7506 5.99935 13.7506C5.80009 13.7506 5.60899 13.6715 5.4681 13.5306C5.3272 13.3897 5.24805 13.1986 5.24805 12.9993C5.24805 12.8001 5.3272 12.609 5.4681 12.4681L9.93747 7.99997L5.46935 3.5306C5.39958 3.46083 5.34424 3.37801 5.30649 3.28686C5.26873 3.19571 5.2493 3.09801 5.2493 2.99935C5.2493 2.90069 5.26873 2.80299 5.30649 2.71184C5.34424 2.62069 5.39958 2.53786 5.46935 2.4681C5.53911 2.39833 5.62194 2.34299 5.71309 2.30524C5.80424 2.26748 5.90194 2.24805 6.0006 2.24805C6.09926 2.24805 6.19696 2.26748 6.28811 2.30524C6.37926 2.34299 6.46208 2.39833 6.53185 2.4681L11.5318 7.4681C11.6017 7.53786 11.6571 7.62072 11.6948 7.71193C11.7326 7.80313 11.7519 7.9009 11.7518 7.99961C11.7517 8.09832 11.7321 8.19604 11.6941 8.28715C11.6562 8.37827 11.6006 8.461 11.5306 8.5306Z" fill="#6D6D6D"/></svg>
                            </li>
                            <li className='book-area'>Kintampo</li>
                            <li className='book-area'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5306 8.5306L6.5306 13.5306C6.3897 13.6715 6.19861 13.7506 5.99935 13.7506C5.80009 13.7506 5.60899 13.6715 5.4681 13.5306C5.3272 13.3897 5.24805 13.1986 5.24805 12.9993C5.24805 12.8001 5.3272 12.609 5.4681 12.4681L9.93747 7.99997L5.46935 3.5306C5.39958 3.46083 5.34424 3.37801 5.30649 3.28686C5.26873 3.19571 5.2493 3.09801 5.2493 2.99935C5.2493 2.90069 5.26873 2.80299 5.30649 2.71184C5.34424 2.62069 5.39958 2.53786 5.46935 2.4681C5.53911 2.39833 5.62194 2.34299 5.71309 2.30524C5.80424 2.26748 5.90194 2.24805 6.0006 2.24805C6.09926 2.24805 6.19696 2.26748 6.28811 2.30524C6.37926 2.34299 6.46208 2.39833 6.53185 2.4681L11.5318 7.4681C11.6017 7.53786 11.6571 7.62072 11.6948 7.71193C11.7326 7.80313 11.7519 7.9009 11.7518 7.99961C11.7517 8.09832 11.7321 8.19604 11.6941 8.28715C11.6562 8.37827 11.6006 8.461 11.5306 8.5306Z" fill="#6D6D6D"/></svg>
                            </li>
                            <li className='book-area'>Babator or Fufulso</li>
                            <li className='book-area'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5306 8.5306L6.5306 13.5306C6.3897 13.6715 6.19861 13.7506 5.99935 13.7506C5.80009 13.7506 5.60899 13.6715 5.4681 13.5306C5.3272 13.3897 5.24805 13.1986 5.24805 12.9993C5.24805 12.8001 5.3272 12.609 5.4681 12.4681L9.93747 7.99997L5.46935 3.5306C5.39958 3.46083 5.34424 3.37801 5.30649 3.28686C5.26873 3.19571 5.2493 3.09801 5.2493 2.99935C5.2493 2.90069 5.26873 2.80299 5.30649 2.71184C5.34424 2.62069 5.39958 2.53786 5.46935 2.4681C5.53911 2.39833 5.62194 2.34299 5.71309 2.30524C5.80424 2.26748 5.90194 2.24805 6.0006 2.24805C6.09926 2.24805 6.19696 2.26748 6.28811 2.30524C6.37926 2.34299 6.46208 2.39833 6.53185 2.4681L11.5318 7.4681C11.6017 7.53786 11.6571 7.62072 11.6948 7.71193C11.7326 7.80313 11.7519 7.9009 11.7518 7.99961C11.7517 8.09832 11.7321 8.19604 11.6941 8.28715C11.6562 8.37827 11.6006 8.461 11.5306 8.5306Z" fill="#6D6D6D"/></svg>
                            </li>
                            <li className='book-area'>Buipe</li>
                            <li className='book-area'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5306 8.5306L6.5306 13.5306C6.3897 13.6715 6.19861 13.7506 5.99935 13.7506C5.80009 13.7506 5.60899 13.6715 5.4681 13.5306C5.3272 13.3897 5.24805 13.1986 5.24805 12.9993C5.24805 12.8001 5.3272 12.609 5.4681 12.4681L9.93747 7.99997L5.46935 3.5306C5.39958 3.46083 5.34424 3.37801 5.30649 3.28686C5.26873 3.19571 5.2493 3.09801 5.2493 2.99935C5.2493 2.90069 5.26873 2.80299 5.30649 2.71184C5.34424 2.62069 5.39958 2.53786 5.46935 2.4681C5.53911 2.39833 5.62194 2.34299 5.71309 2.30524C5.80424 2.26748 5.90194 2.24805 6.0006 2.24805C6.09926 2.24805 6.19696 2.26748 6.28811 2.30524C6.37926 2.34299 6.46208 2.39833 6.53185 2.4681L11.5318 7.4681C11.6017 7.53786 11.6571 7.62072 11.6948 7.71193C11.7326 7.80313 11.7519 7.9009 11.7518 7.99961C11.7517 8.09832 11.7321 8.19604 11.6941 8.28715C11.6562 8.37827 11.6006 8.461 11.5306 8.5306Z" fill="#6D6D6D"/></svg>
                            </li>
                            <li className='book-area'>Daboya Junction</li>
                            <li className='book-area'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5306 8.5306L6.5306 13.5306C6.3897 13.6715 6.19861 13.7506 5.99935 13.7506C5.80009 13.7506 5.60899 13.6715 5.4681 13.5306C5.3272 13.3897 5.24805 13.1986 5.24805 12.9993C5.24805 12.8001 5.3272 12.609 5.4681 12.4681L9.93747 7.99997L5.46935 3.5306C5.39958 3.46083 5.34424 3.37801 5.30649 3.28686C5.26873 3.19571 5.2493 3.09801 5.2493 2.99935C5.2493 2.90069 5.26873 2.80299 5.30649 2.71184C5.34424 2.62069 5.39958 2.53786 5.46935 2.4681C5.53911 2.39833 5.62194 2.34299 5.71309 2.30524C5.80424 2.26748 5.90194 2.24805 6.0006 2.24805C6.09926 2.24805 6.19696 2.26748 6.28811 2.30524C6.37926 2.34299 6.46208 2.39833 6.53185 2.4681L11.5318 7.4681C11.6017 7.53786 11.6571 7.62072 11.6948 7.71193C11.7326 7.80313 11.7519 7.9009 11.7518 7.99961C11.7517 8.09832 11.7321 8.19604 11.6941 8.28715C11.6562 8.37827 11.6006 8.461 11.5306 8.5306Z" fill="#6D6D6D"/></svg>
                            </li>
                            <li className='book-area'>Tamale</li>
                        </ul>
                        <div className="price booking-details-right price-box-top">
                            <span className="amount">Route 132</span>
                            <span className="onwards">Tamele to Kumasi</span>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='card bus-card-item mb-4'>
                            <div className='top-img position-relative'>
                                <Image src={BusCur} alt='' ></Image>
                                <div className='Verified d-flex align-items-center gap-1'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.29935 8.46667L6.36602 7.53333C6.23268 7.4 6.07713 7.33333 5.89935 7.33333C5.72157 7.33333 5.56602 7.4 5.43268 7.53333C5.29935 7.66667 5.23268 7.82511 5.23268 8.00867C5.23268 8.19222 5.29935 8.35045 5.43268 8.48334L6.83268 9.9C6.96602 10.0333 7.12157 10.1 7.29935 10.1C7.47713 10.1 7.63268 10.0333 7.76602 9.9L10.5993 7.06667C10.7327 6.93333 10.7993 6.77511 10.7993 6.592C10.7993 6.40889 10.7327 6.25045 10.5993 6.11667C10.466 5.98289 10.3078 5.91622 10.1247 5.91667C9.94157 5.91711 9.78313 5.98378 9.64935 6.11667L7.29935 8.46667ZM7.99935 14.6C7.92157 14.6 7.84935 14.5944 7.78268 14.5833C7.71602 14.5722 7.64935 14.5556 7.58268 14.5333C6.08268 14.0333 4.88824 13.1084 3.99935 11.7587C3.11046 10.4089 2.66602 8.956 2.66602 7.4V4.25C2.66602 3.97222 2.74668 3.72222 2.90802 3.5C3.06935 3.27778 3.27757 3.11667 3.53268 3.01667L7.53268 1.51667C7.68824 1.46111 7.84379 1.43333 7.99935 1.43333C8.1549 1.43333 8.31046 1.46111 8.46602 1.51667L12.466 3.01667C12.7216 3.11667 12.93 3.27778 13.0913 3.5C13.2527 3.72222 13.3331 3.97222 13.3327 4.25V7.4C13.3327 8.95556 12.8882 10.4084 11.9993 11.7587C11.1105 13.1089 9.91602 14.0338 8.41602 14.5333C8.34935 14.5556 8.28268 14.5722 8.21602 14.5833C8.14935 14.5944 8.07713 14.6 7.99935 14.6Z" fill="white"/></svg> Verified
                                </div>
                            </div>
                            <div className='bottom-text '>
                                <h2>CR 1234-10</h2>
                                <span className='text-sub'>Volvo Multi-excel 2x1 AC Sleeper</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='card bus-card-item adminDetails details-booking-admin mb-3'>
                            <div className='left-adminImg text-center'>
                                <div className='img-box'>
                                    <Image src={AdminImg} alt='' ></Image>
                                </div>
                                <div className='text-box'>
                                    <h3>Mike William</h3>
                                    <span>Operator ID : #1234567890</span>
                                </div>
                                <div className='admin-text-list-bottom'>
                                    <div className='admin-text'>
                                        <ul className='d-flex align-items-center justify-content-between gap-2 m-0'>
                                            <li>50 Trips</li>
                                            <li>
                                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2C4 2.39556 3.8827 2.78224 3.66294 3.11114C3.44318 3.44004 3.13082 3.69638 2.76537 3.84776C2.39991 3.99913 1.99778 4.03874 1.60982 3.96157C1.22186 3.8844 0.865492 3.69392 0.585787 3.41421C0.306083 3.13451 0.115601 2.77814 0.0384303 2.39018C-0.0387401 2.00222 0.000866566 1.60009 0.152242 1.23463C0.303617 0.869181 0.559962 0.556823 0.88886 0.337061C1.21776 0.117298 1.60444 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2Z" fill="#838383"/></svg>
                                            </li>
                                            <li>130 Ratings</li>
                                            <li>
                                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2C4 2.39556 3.8827 2.78224 3.66294 3.11114C3.44318 3.44004 3.13082 3.69638 2.76537 3.84776C2.39991 3.99913 1.99778 4.03874 1.60982 3.96157C1.22186 3.8844 0.865492 3.69392 0.585787 3.41421C0.306083 3.13451 0.115601 2.77814 0.0384303 2.39018C-0.0387401 2.00222 0.000866566 1.60009 0.152242 1.23463C0.303617 0.869181 0.559962 0.556823 0.88886 0.337061C1.21776 0.117298 1.60444 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2Z" fill="#838383"/></svg>
                                            </li>
                                            <li>4.5 Rating</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card bus-card-item card-modal-box'>
                            <ul className='d-flex flex-wrap align-items-center gap-2 justify-content-between'>
                                <li>
                                    <Button variant="" >
                                        <span className='modal-icons'>
                                            <Image src={AddReminder} alt='' />
                                        </span>
                                        <span className='modal-text'>Add Reminder</span>
                                    </Button>
                                </li>
                                <li>
                                    <Button variant="" onClick={() => setShowDateChange(true)}>
                                        <span className='modal-icons'>
                                            <Image src={DateChangeIcon} alt='' />
                                        </span>
                                        <span className='modal-text'>Date Change</span>
                                    </Button>
                                </li>
                                <li>
                                    <Button variant="" onClick={() => setShowCancelBooking(true)}>
                                        <span className='modal-icons'>
                                            <Image src={CancelBookingIcon} alt='' />
                                        </span>
                                        <span className='modal-text'>Cancel Booking</span>
                                    </Button>
                                </li>
                            </ul>
                        </div>
                        {/* <AddReminderModal show={showReminder} handleClose={() => setShowReminder(false)} /> */}
                        <DateChangeModal show={showDateChange} handleClose={() => setShowDateChange(false)}/>
                        <CancelBookingModal show={showCancelBooking} handleClose={() => setShowCancelBooking(false)} />
                    
                    </div>
                </div>
                <div className='card bus-card-item live-tracking-sec'>
                    <div className='live-tracking-box'>
                        <h3>Live Tracking</h3>
                        <div className='tracking-iframe'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d180.89957547626102!2d-88.54482391039177!3d43.49413216379642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880415c08b62b449%3A0x71d2ba87a66cbd5b!2sMayville%2C%20WI%2053050%2C%20USA!5e0!3m2!1sen!2sin!4v1745408676113!5m2!1sen!2sin" width="600" height="250" loading="lazy" ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xl-5'>
                <div className='card bus-card-item list-item-admin mb-4'>
                    <h4>Guest List</h4>
                    <div className='admin-card-items d-flex align-items-center justify-content-between gap-2'>
                        <div className='admin-item-com d-flex align-items-center gap-2'>
                            <div className='admin-img'>
                                <h5>JD</h5>
                            </div>
                            <div className='admin-text'>
                                <h6>John Doe</h6>
                                <ul className='d-flex align-items-center gap-2 m-0'>
                                    <li>Seat No.  A-17</li>
                                    <li>
                                        <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2C4 2.39556 3.8827 2.78224 3.66294 3.11114C3.44318 3.44004 3.13082 3.69638 2.76537 3.84776C2.39991 3.99913 1.99778 4.03874 1.60982 3.96157C1.22186 3.8844 0.865492 3.69392 0.585787 3.41421C0.306083 3.13451 0.115601 2.77814 0.0384303 2.39018C-0.0387401 2.00222 0.000866566 1.60009 0.152242 1.23463C0.303617 0.869181 0.559962 0.556823 0.88886 0.337061C1.21776 0.117298 1.60444 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2Z" fill="#838383"/></svg>
                                    </li>
                                    <li>M</li>
                                    <li>
                                        <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2C4 2.39556 3.8827 2.78224 3.66294 3.11114C3.44318 3.44004 3.13082 3.69638 2.76537 3.84776C2.39991 3.99913 1.99778 4.03874 1.60982 3.96157C1.22186 3.8844 0.865492 3.69392 0.585787 3.41421C0.306083 3.13451 0.115601 2.77814 0.0384303 2.39018C-0.0387401 2.00222 0.000866566 1.60009 0.152242 1.23463C0.303617 0.869181 0.559962 0.556823 0.88886 0.337061C1.21776 0.117298 1.60444 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2Z" fill="#838383"/></svg>
                                    </li>
                                    <li>75 Yrs</li>
                                </ul>
                            </div>
                        </div>
                        <div className='price-box'>
                            <span className='price-text'>₵ 178</span>
                        </div>
                    </div>
                    <div className='admin-card-items d-flex align-items-center justify-content-between gap-2'>
                        <div className='admin-item-com d-flex align-items-center gap-2'>
                            <div className='admin-img'>
                                <h5>JD</h5>
                            </div>
                            <div className='admin-text'>
                                <h6>John Doe</h6>
                                <ul className='d-flex align-items-center gap-2 m-0'>
                                    <li>Seat No.  A-17</li>
                                    <li>
                                        <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2C4 2.39556 3.8827 2.78224 3.66294 3.11114C3.44318 3.44004 3.13082 3.69638 2.76537 3.84776C2.39991 3.99913 1.99778 4.03874 1.60982 3.96157C1.22186 3.8844 0.865492 3.69392 0.585787 3.41421C0.306083 3.13451 0.115601 2.77814 0.0384303 2.39018C-0.0387401 2.00222 0.000866566 1.60009 0.152242 1.23463C0.303617 0.869181 0.559962 0.556823 0.88886 0.337061C1.21776 0.117298 1.60444 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2Z" fill="#838383"/></svg>
                                    </li>
                                    <li>M</li>
                                    <li>
                                        <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2C4 2.39556 3.8827 2.78224 3.66294 3.11114C3.44318 3.44004 3.13082 3.69638 2.76537 3.84776C2.39991 3.99913 1.99778 4.03874 1.60982 3.96157C1.22186 3.8844 0.865492 3.69392 0.585787 3.41421C0.306083 3.13451 0.115601 2.77814 0.0384303 2.39018C-0.0387401 2.00222 0.000866566 1.60009 0.152242 1.23463C0.303617 0.869181 0.559962 0.556823 0.88886 0.337061C1.21776 0.117298 1.60444 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2Z" fill="#838383"/></svg>
                                    </li>
                                    <li>75 Yrs</li>
                                </ul>
                            </div>
                        </div>
                        <div className='price-box'>
                            <span className='price-text'>₵ 178</span>
                        </div>
                    </div>
                    <div className='admin-card-items d-flex align-items-center justify-content-between gap-2'>
                        <div className='admin-item-com d-flex align-items-center gap-2'>
                            <div className='admin-img'>
                                <h5>JD</h5>
                            </div>
                            <div className='admin-text'>
                                <h6>John Doe</h6>
                                <ul className='d-flex align-items-center gap-2 m-0'>
                                    <li>Seat No.  A-17</li>
                                    <li>
                                        <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2C4 2.39556 3.8827 2.78224 3.66294 3.11114C3.44318 3.44004 3.13082 3.69638 2.76537 3.84776C2.39991 3.99913 1.99778 4.03874 1.60982 3.96157C1.22186 3.8844 0.865492 3.69392 0.585787 3.41421C0.306083 3.13451 0.115601 2.77814 0.0384303 2.39018C-0.0387401 2.00222 0.000866566 1.60009 0.152242 1.23463C0.303617 0.869181 0.559962 0.556823 0.88886 0.337061C1.21776 0.117298 1.60444 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2Z" fill="#838383"/></svg>
                                    </li>
                                    <li>M</li>
                                    <li>
                                        <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2C4 2.39556 3.8827 2.78224 3.66294 3.11114C3.44318 3.44004 3.13082 3.69638 2.76537 3.84776C2.39991 3.99913 1.99778 4.03874 1.60982 3.96157C1.22186 3.8844 0.865492 3.69392 0.585787 3.41421C0.306083 3.13451 0.115601 2.77814 0.0384303 2.39018C-0.0387401 2.00222 0.000866566 1.60009 0.152242 1.23463C0.303617 0.869181 0.559962 0.556823 0.88886 0.337061C1.21776 0.117298 1.60444 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2Z" fill="#838383"/></svg>
                                    </li>
                                    <li>75 Yrs</li>
                                </ul>
                            </div>
                        </div>
                        <div className='price-box'>
                            <span className='price-text'>₵ 168</span>
                        </div>
                    </div>
                    <div className='admin-card-items d-flex align-items-center justify-content-between gap-2'>
                        <div className='admin-item-com d-flex align-items-center gap-2'>
                            <div className='admin-img'>
                                <h5>JD</h5>
                            </div>
                            <div className='admin-text'>
                                <h6>John Doe</h6>
                                <ul className='d-flex align-items-center gap-2 m-0'>
                                    <li>Seat No.  A-17</li>
                                    <li>
                                        <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2C4 2.39556 3.8827 2.78224 3.66294 3.11114C3.44318 3.44004 3.13082 3.69638 2.76537 3.84776C2.39991 3.99913 1.99778 4.03874 1.60982 3.96157C1.22186 3.8844 0.865492 3.69392 0.585787 3.41421C0.306083 3.13451 0.115601 2.77814 0.0384303 2.39018C-0.0387401 2.00222 0.000866566 1.60009 0.152242 1.23463C0.303617 0.869181 0.559962 0.556823 0.88886 0.337061C1.21776 0.117298 1.60444 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2Z" fill="#838383"/></svg>
                                    </li>
                                    <li>M</li>
                                    <li>
                                        <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2C4 2.39556 3.8827 2.78224 3.66294 3.11114C3.44318 3.44004 3.13082 3.69638 2.76537 3.84776C2.39991 3.99913 1.99778 4.03874 1.60982 3.96157C1.22186 3.8844 0.865492 3.69392 0.585787 3.41421C0.306083 3.13451 0.115601 2.77814 0.0384303 2.39018C-0.0387401 2.00222 0.000866566 1.60009 0.152242 1.23463C0.303617 0.869181 0.559962 0.556823 0.88886 0.337061C1.21776 0.117298 1.60444 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2Z" fill="#838383"/></svg>
                                    </li>
                                    <li>75 Yrs</li>
                                </ul>
                            </div>
                        </div>
                        <div className='price-box'>
                            <span className='price-text'>₵ 168</span>
                        </div>
                    </div>
                </div>
                
                <div className='card bus-card-item list-item-admin boarding-details-sec mb-4'>
                    <h4>Boarding Point Details</h4>
                    <div className='inner-boarding-details d-flex gap-2 align-items-center'>
                        <div className='text-box'>
                            <h6>Metro Mass Transport Station</h6>
                            <p>more information about the boarding point</p>
                        </div>
                        <div className='img-box'>
                            <Image src={PointDetails} alt=''></Image>
                        </div>
                    </div>
                    <Link href="" className='btn btn-grey d-flex align-items-center justify-content-center gap-2 text-center'>
                        <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_11319_48619)"><path d="M3.87109 14.8156C4.44948 15.5527 4.97593 16.3292 5.44663 17.1394C5.84848 17.9013 6.016 18.418 6.30968 19.3361C6.48979 19.8434 6.65257 19.9948 7.00254 19.9948C7.3839 19.9948 7.55693 19.7372 7.6906 19.3389C7.96821 18.4719 8.18603 17.8102 8.52968 17.1849C9.20401 15.9779 10.0419 14.9052 10.8653 13.8743C11.0882 13.5825 12.5292 11.8828 13.178 10.5416C13.178 10.5416 13.9754 9.06827 13.9754 7.01066C13.9754 5.08598 13.189 3.7511 13.189 3.7511L10.925 4.35742L9.55006 7.97873L9.2099 8.47807L9.14188 8.56854L9.05142 8.68178L8.89262 8.86265L8.6657 9.08952L7.44134 10.087L4.3803 11.8544L3.87109 14.8156Z" fill="#34A853"/><path d="M0.711914 10.2938C1.459 12.0002 2.89965 13.5003 3.87437 14.8167L9.05153 8.68404C9.05153 8.68404 8.32216 9.63794 6.99911 9.63794C5.52538 9.63794 4.3348 8.4611 4.3348 6.97717C4.3348 5.95957 4.94701 5.2605 4.94701 5.2605L1.43262 6.20219L0.711914 10.2938Z" fill="#FBBC04"/><path d="M9.1096 0.315308C10.8291 0.869695 12.3008 2.03356 13.191 3.7498L9.05336 8.68048C9.05336 8.68048 9.66557 7.96877 9.66557 6.95749C9.66557 5.43901 8.38693 4.30463 7.00562 4.30463C5.69941 4.30463 4.94922 5.25694 4.94922 5.25694V2.15068L9.1096 0.315308Z" fill="#4285F4"/><path d="M1.66016 2.494C2.68713 1.26529 4.49422 0 6.98555 0C8.19427 0 9.1049 0.31733 9.1049 0.31733L4.9449 5.25973H1.99749L1.66016 2.494Z" fill="#1A73E8"/><path d="M0.711717 10.2939C0.711717 10.2939 0.0244141 8.94792 0.0244141 6.99805C0.0244141 5.15516 0.740817 3.54426 1.66011 2.49402L4.94719 5.26018L0.711717 10.2939Z" fill="#EA4335"/></g><defs><clipPath id="clip0_11319_48619"><rect width="13.951" height="20" fill="white" transform="translate(0.0244141)"/></clipPath></defs></svg>
                        <span>Get Direction</span>
                    </Link>
                </div>
                
                <div className='card bus-card-item list-item-admin billing-summery mb-4'>
                    <h4>Billing Summery</h4>
                    <div className='summery-item'>
                        <ul>
                            <li className='d-flex align-items-center justify-content-between gap-2'>
                                <span className='line-shape'></span>
                                <span className='name-summery'>Total Bus Fair</span>
                                <span className='price-summery'>₵ 692</span>
                            </li>
                            <li className='d-flex align-items-center justify-content-between gap-2'>
                                <span className='line-shape'></span>
                                <span className='name-summery'>Taxes & Charges</span>
                                <span className='price-summery'>₵ 8</span>
                            </li>
                            <li className='d-flex align-items-center justify-content-between gap-2'>
                                <span className='line-shape'></span>
                                <span className='name-summery'>Total</span>
                                <span className='price-summery'>₵ 700</span>
                            </li>
                            <li className='d-flex align-items-center justify-content-between gap-2'>
                                <span className='line-shape'></span>
                                <span className='name-summery'>Vendor Discount</span>
                                <span className='price-summery'>₵ 20</span>
                            </li>
                            <li className='d-flex align-items-center total-price-box justify-content-between gap-2'>
                                <span className='line-shape'></span>
                                <span className='name-summery'>Total Payable</span>
                                <span className='price-summery'>₵ 680</span>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default BookingDetails