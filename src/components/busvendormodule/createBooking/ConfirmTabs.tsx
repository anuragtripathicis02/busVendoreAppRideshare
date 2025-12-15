'use client'
import React from 'react'
import Image from "next/image";
import BusCur from '../../../../public/images/bus-sq.png'
import AdminImg from '../../../../public/images/admin-review-img.png'
import SummeryConfirm from './SummeryConfirm';
const ConfirmTabs = () => {
  return (
    <>
        <div className="sec-bus-card-list sec-gap confirm-booking-sec">
            <div className='row'>
                <div className='col-xl-6'>
                    <div className="card bus-card-item mb-4">
                        <div className="d-flex flex-md-nowrap flex-wrap justify-content-md-between justify-content-center gap-4">
                            <div className="booking-details-left">
                                <div className='areaName d-flex align-items-center justify-content-between w-100'>
                                    <span className='heading-name'>kumasi</span>
                                    <span className='icons'>
                                        <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.5254 4.94165L27.5837 9.99998L22.5254 15.0583" stroke="#652669" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.5 10L27.5 10" stroke="#652669" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    </span>
                                    <span className='heading-name'>kumasi</span>
                                </div>
                                <div className="time d-flex align-items-center w-100">
                                    <span className="start-time">16:00</span>
                                    <span className="duration-box position-relative w-100">
                                        <span className='duration'>6H 54M</span>
                                    </span>
                                    <span className="end-time">19:31</span>
                                </div>
                            </div>
                            <div className="price booking-details-right price-box-top">
                                <span className="amount">Route 132</span>
                                <span className="onwards">Tamele to Kumasi</span>
                            </div>
                        </div>
                        <div className='card-bottom'>
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
                        </div>
                    </div>
                    <div className='card bus-card-item mb-4'>
                        <div className='top-img position-relative'>
                            <Image src={BusCur} alt='' ></Image>
                            <div className='Verified d-flex align-items-center gap-1'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.29935 8.46667L6.36602 7.53333C6.23268 7.4 6.07713 7.33333 5.89935 7.33333C5.72157 7.33333 5.56602 7.4 5.43268 7.53333C5.29935 7.66667 5.23268 7.82511 5.23268 8.00867C5.23268 8.19222 5.29935 8.35045 5.43268 8.48334L6.83268 9.9C6.96602 10.0333 7.12157 10.1 7.29935 10.1C7.47713 10.1 7.63268 10.0333 7.76602 9.9L10.5993 7.06667C10.7327 6.93333 10.7993 6.77511 10.7993 6.592C10.7993 6.40889 10.7327 6.25045 10.5993 6.11667C10.466 5.98289 10.3078 5.91622 10.1247 5.91667C9.94157 5.91711 9.78313 5.98378 9.64935 6.11667L7.29935 8.46667ZM7.99935 14.6C7.92157 14.6 7.84935 14.5944 7.78268 14.5833C7.71602 14.5722 7.64935 14.5556 7.58268 14.5333C6.08268 14.0333 4.88824 13.1084 3.99935 11.7587C3.11046 10.4089 2.66602 8.956 2.66602 7.4V4.25C2.66602 3.97222 2.74668 3.72222 2.90802 3.5C3.06935 3.27778 3.27757 3.11667 3.53268 3.01667L7.53268 1.51667C7.68824 1.46111 7.84379 1.43333 7.99935 1.43333C8.1549 1.43333 8.31046 1.46111 8.46602 1.51667L12.466 3.01667C12.7216 3.11667 12.93 3.27778 13.0913 3.5C13.2527 3.72222 13.3331 3.97222 13.3327 4.25V7.4C13.3327 8.95556 12.8882 10.4084 11.9993 11.7587C11.1105 13.1089 9.91602 14.0338 8.41602 14.5333C8.34935 14.5556 8.28268 14.5722 8.21602 14.5833C8.14935 14.5944 8.07713 14.6 7.99935 14.6Z" fill="white"/></svg> Verified
                            </div>
                        </div>
                        <div className='bottom-text d-flex align-items-center gap-2 justify-content-between flex-md-nowrap flex-wrap'>
                            <h2>CR 1234-10</h2>
                            <span className='text-sub'>Volvo Multi-excel 2x1 AC Sleeper</span>
                        </div>
                    </div>
                    <div className='card bus-card-item adminDetails flex-row d-flex align-items-center justify-content-between gap-2 flex-md-nowrap flex-wrap'>
                        <div className='left-adminImg d-flex align-items-center gap-2'>
                            <div className='img-box'>
                                <Image src={AdminImg} alt='' ></Image>
                            </div>
                            <div className='text-box'>
                                <h3>Mike William</h3>
                                <span>Operator ID : #1234567890</span>
                            </div>
                        </div>
                        <div className='reviewBox d-flex gap-2 justify-content-md-between'>
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.01407 5.10769L4.67474 4.68904C5.03984 4.63188 5.48195 4.31583 5.64705 3.98369L6.65658 2.01636C7.30009 0.755701 8.3608 0.75626 9.01507 2.01175L10.1203 4.14731C10.3059 4.50419 10.7891 4.83025 11.1912 4.86035L13.3435 5.03641C15.0422 5.177 15.3907 6.21224 14.1186 7.34562L12.3415 8.92882C12.0171 9.2169 11.838 9.79682 11.933 10.213L12.4641 12.5291C12.8429 14.1867 11.9612 14.8328 10.4952 13.9658L8.64147 12.8641C8.29493 12.6582 7.71416 12.638 7.35727 12.8236L5.21595 13.9371C3.95923 14.5843 3.09371 13.9722 3.29435 12.5731L3.60912 10.3892C3.65939 10.0196 3.48988 9.50836 3.22114 9.25272L1.28768 7.37141C0.248933 6.34966 0.574654 5.33263 2.01407 5.10769Z" fill="#FFD500"/></svg>
                            <span>4.5 (25K ratings) 33k trips</span>
                        </div>
                    </div>
                </div>
                <div className='col-xl-6'>
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
        <SummeryConfirm />
    </>
  )
}

export default ConfirmTabs