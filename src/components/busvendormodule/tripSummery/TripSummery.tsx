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
// import DateChangeModal from './DateChange'; // Make sure this is the modal component
// import CancelBookingModal from './CancelBooking'; // Make sure this is the modal component
import Link from 'next/link';

const TripSummery = () => {
        // const [showReminder, setShowReminder] = useState(false);
        // const [showDateChange, setShowDateChange] = useState(false);
        // const [showCancelBooking, setShowCancelBooking] = useState(false);
    
  return (
     <div className="sec-bus-card-list sec-gap confirm-booking-sec tripSummery-sec">
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
                    </div>
                    <div className='row'>
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
                            <div className='card bus-card-item mb-4'>
                                <div className='top-img position-relative'>
                                    <Image src={BusCur} alt='' className='w-100'></Image>
                                    <div className='Verified d-flex align-items-center gap-1'>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.29935 8.46667L6.36602 7.53333C6.23268 7.4 6.07713 7.33333 5.89935 7.33333C5.72157 7.33333 5.56602 7.4 5.43268 7.53333C5.29935 7.66667 5.23268 7.82511 5.23268 8.00867C5.23268 8.19222 5.29935 8.35045 5.43268 8.48334L6.83268 9.9C6.96602 10.0333 7.12157 10.1 7.29935 10.1C7.47713 10.1 7.63268 10.0333 7.76602 9.9L10.5993 7.06667C10.7327 6.93333 10.7993 6.77511 10.7993 6.592C10.7993 6.40889 10.7327 6.25045 10.5993 6.11667C10.466 5.98289 10.3078 5.91622 10.1247 5.91667C9.94157 5.91711 9.78313 5.98378 9.64935 6.11667L7.29935 8.46667ZM7.99935 14.6C7.92157 14.6 7.84935 14.5944 7.78268 14.5833C7.71602 14.5722 7.64935 14.5556 7.58268 14.5333C6.08268 14.0333 4.88824 13.1084 3.99935 11.7587C3.11046 10.4089 2.66602 8.956 2.66602 7.4V4.25C2.66602 3.97222 2.74668 3.72222 2.90802 3.5C3.06935 3.27778 3.27757 3.11667 3.53268 3.01667L7.53268 1.51667C7.68824 1.46111 7.84379 1.43333 7.99935 1.43333C8.1549 1.43333 8.31046 1.46111 8.46602 1.51667L12.466 3.01667C12.7216 3.11667 12.93 3.27778 13.0913 3.5C13.2527 3.72222 13.3331 3.97222 13.3327 4.25V7.4C13.3327 8.95556 12.8882 10.4084 11.9993 11.7587C11.1105 13.1089 9.91602 14.0338 8.41602 14.5333C8.34935 14.5556 8.28268 14.5722 8.21602 14.5833C8.14935 14.5944 8.07713 14.6 7.99935 14.6Z" fill="white"/></svg> Verified
                                    </div>
                                </div>
                                <div className='bottom-text '>
                                    <h2>CR 1234-10</h2>
                                    <span className='text-sub'>Volvo Multi-excel 2x1 AC Sleeper</span>
                                </div>
                                <div className=' bus-card-item adminDetails details-booking-admin'>
                                    <div className='left-adminImg text-center w-100'>
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
                            </div>
                                    
                            <div className='card bus-card-item list-item-admin boarding-details-sec mb-4'>
                                <h4>Next Stoping Point</h4>
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
                        </div>
                        <div className='col-md-6'>
                            <div className='card bus-card-item list-item-admin boarding-details-sec mb-4'>
                                <h4>Route #1725</h4>
                                <div className=" card-roadMape">
                                    <div className="location-group">
                                        <h5>Kumasi</h5>
                                        <p>Asafo VIP Terminal, Departure Time: 6:00 AM</p>
                                    </div>
                                    <div className="timeline">
                                        <div className="timeline-item prev-active d-flex ">
                                            <div className="time"> <span className='d-block'>6:10 AM</span> 6:15 AM </div>
                                            <div className='station-right-box position-relative'>
                                                <div className="station-name">Kumasi Suburbs</div>
                                                <div className="station-desc">Tech Junction</div>
                                            </div>
                                        </div>
                                        <div className="timeline-item active d-flex ">
                                            <div className="time highlight"><span className='d-block'> 6:45 AM </span> 6:55 AM </div>
                                            <div className='station-right-box position-relative'>
                                                <div className="station-name">Offinso</div>
                                                <div className="station-desc">Offinso Lorry Park</div>
                                            </div>
                                        </div>
                                        <div className="timeline-item d-flex ">
                                            <div className="time"> <span className='d-block'>7:45 AM </span> 8:00 AM </div>
                                            <div className='station-right-box position-relative'>
                                                <div className="station-name">Ejura</div>
                                                <div className="station-desc">Ejura Main Station</div>
                                            </div>
                                        </div>
                                        <div className="timeline-item d-flex">
                                            <div className="time"> <span className='d-block'>9:00 AM </span> 9:10 AM </div>
                                            <div className='station-right-box position-relative'>
                                                <div className="station-name">Atebubu</div>
                                                <div className="station-desc">Atebubu Lorry Park</div>
                                            </div>
                                        </div>
                                        <div className="timeline-item d-flex">
                                            <div className="time"> <span className='d-block'>10:00 AM </span> 10:15 AM </div>
                                            <div className='station-right-box position-relative'>
                                                <div className="station-name">Yeji</div>
                                                <div className="station-desc">Yeji Bus Terminal</div>
                                            </div>
                                        </div>
                                        <div className="timeline-item d-flex">
                                            <div className="time"> <span className='d-block'>11:15 AM </span> 11:30 AM </div>
                                            <div className='station-right-box position-relative'>
                                                <div className="station-name">Salaga</div>
                                                <div className="station-desc">Salaga Lorry Station</div>
                                            </div>
                                        </div>
                                        <div className="timeline-item d-flex">
                                            <div className="time"> <span className='d-block'>12:30 PM </span> 12:45 PM </div>
                                            <div className='station-right-box position-relative'>
                                                <div className="station-name">Bimbilla</div>
                                                <div className="station-desc">Bimbilla Station</div>
                                            </div>
                                        </div>
                                        <div className="timeline-item d-flex">
                                            <div className="time"> <span className='d-block'>1:30 PM </span> 1:45 PM </div>
                                            <div className='station-right-box  position-relative'>
                                                <div className="station-name">Yendi</div>
                                                <div className="station-desc">Yendi Lorry Station</div>
                                            </div>
                                        </div>
                                        <div className="timeline-item d-flex">
                                            <div className="time"> <span className='d-block'>2:30 PM </span> 2:35 PM</div>
                                            <div className='station-right-box position-relative'>
                                                <div className="station-name">Tamale Suburb</div>
                                                <div className="station-desc">Savelugu Station</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="arrival">
                                        <h5>Tamale</h5>
                                        <p className='m-0'>Tamale Central Bus Terminal, Arrival Time: 3:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xl-5'>
                    <div className='card bus-card-item live-tracking-sec'>
                        <div className='live-tracking-box'>
                            <h3>Live Tracking</h3>
                            <div className='tracking-iframe'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d180.89957547626102!2d-88.54482391039177!3d43.49413216379642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880415c08b62b449%3A0x71d2ba87a66cbd5b!2sMayville%2C%20WI%2053050%2C%20USA!5e0!3m2!1sen!2sin!4v1745408676113!5m2!1sen!2sin" width="600" height="250" loading="lazy" ></iframe>
                            </div>
                        </div>
                    </div>
                    <div className='card bus-card-item list-item-admin  boarding-details-sec mb-4'>
                        <h4>Guest List (43)</h4>

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
        
                        <div className='w-100'>
                            <Link href="" className='btn-load-more d-flex align-items-center gap-2 justify-content-center'>
                                <span>Load More</span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.14635 12.6463C3.09989 12.6927 3.06304 12.7479 3.0379 12.8086C3.01276 12.8693 2.99982 12.9343 2.99982 13C2.99982 13.0657 3.01276 13.1308 3.0379 13.1915C3.06304 13.2522 3.09989 13.3073 3.14635 13.3538C3.1928 13.4002 3.24795 13.4371 3.30865 13.4622C3.36934 13.4874 3.4344 13.5003 3.5001 13.5003C3.56579 13.5003 3.63085 13.4874 3.69154 13.4622C3.75224 13.4371 3.80739 13.4002 3.85385 13.3538L8.85385 8.35378C8.90033 8.30735 8.93721 8.2522 8.96237 8.1915C8.98754 8.13081 9.00049 8.06574 9.00049 8.00003C9.00049 7.93433 8.98754 7.86926 8.96237 7.80856C8.93721 7.74786 8.90033 7.69272 8.85385 7.64628L3.85385 2.64628C3.76003 2.55246 3.63278 2.49976 3.5001 2.49976C3.36741 2.49976 3.24017 2.55246 3.14635 2.64628C3.05252 2.7401 2.99982 2.86735 2.99982 3.00003C2.99982 3.13272 3.05252 3.25996 3.14635 3.35378L7.79322 8.00003L3.14635 12.6463ZM12.7932 8.00003L8.14634 3.35378C8.05252 3.25996 7.99982 3.13272 7.99982 3.00003C7.99982 2.86735 8.05252 2.7401 8.14634 2.64628C8.24016 2.55246 8.36741 2.49976 8.50009 2.49976C8.63278 2.49976 8.76003 2.55246 8.85385 2.64628L13.8538 7.64628C13.9003 7.69272 13.9372 7.74786 13.9624 7.80856C13.9875 7.86926 14.0005 7.93433 14.0005 8.00003C14.0005 8.06574 13.9875 8.13081 13.9624 8.1915C13.9372 8.2522 13.9003 8.30735 13.8538 8.35378L8.85385 13.3538C8.80739 13.4002 8.75224 13.4371 8.69154 13.4622C8.63085 13.4874 8.56579 13.5003 8.50009 13.5003C8.4344 13.5003 8.36934 13.4874 8.30865 13.4622C8.24795 13.4371 8.1928 13.4002 8.14634 13.3538C8.09989 13.3073 8.06304 13.2522 8.0379 13.1915C8.01276 13.1308 7.99982 13.0657 7.99982 13C7.99982 12.9343 8.01276 12.8693 8.0379 12.8086C8.06304 12.7479 8.09989 12.6927 8.14634 12.6463L12.7932 8.00003Z" fill="#652669"/></svg>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
  )
}

export default TripSummery