import Link from 'next/link'
import React, { useState } from 'react'
import NotificationDetailsModal from './NotificationDetailsModal'

const Notification = () => {
        const [show, setShow] = useState(false);
      
        const handleShow = () => setShow(true);
        const handleClose = () => setShow(false);

  return (
    <div className='notification-vendor-sec'>
        <div className='card-notification mb-4'>
            <div className='noti-box mb-3'>
                <h6>Today, Feb 2025</h6>
            </div>
            <div className='notification-card-box'>
                <div className='notification-card mb-3 d-flex align-items-center gap-2 justify-content-between flex-md-nowrap flex-wrap'>
                    <div className='card-icons-text d-flex align-items-center gap-2 flex-md-nowrap flex-wrap'>
                        <div className='icons'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.50032 0C2.01482 0 0 2.01478 0 4.50025C0 6.98571 2.01482 9.00049 4.50032 9.00049H9.00065V4.50025C9.00065 2.01478 6.98583 0 4.50032 0Z" fill="#AE3DBC"/><path d="M0 13.5002C0 15.9857 2.01482 18.0005 4.50032 18.0005C6.98583 18.0005 9.00065 15.9857 9.00065 13.5002V9H4.50032C2.01482 9 0 11.0148 0 13.5002Z" fill="#FB7E6A"/><path d="M18.0006 4.50025C18.0006 2.01478 15.9858 0 13.5003 0C11.0148 0 9 2.01478 9 4.50025V9.00049H13.5003C15.9858 9.00049 18.0006 6.98571 18.0006 4.50025Z" fill="#DB8AE8"/><path d="M13.2678 15.7523C14.7597 15.7523 15.9692 14.5429 15.9692 13.051C15.9692 11.559 14.7597 10.3496 13.2678 10.3496C11.7759 10.3496 10.5664 11.559 10.5664 13.051C10.5664 14.5429 11.7759 15.7523 13.2678 15.7523Z" fill="#AE3DBC"/></svg>
                        </div>
                        <div className='text'>
                            <h6>Squch Dine-In New Year Offers <span>New</span></h6>
                            <p>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing,</p>
                        </div>
                    </div>
                    <div className='delete-btn-date'>
                        <ul className='d-flex align-items-center gap-2 list-unstyled p-0 m-0'>
                            <li>08:24 am</li>
                            <li>
                                <Link href="" className='delete-btn'>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.4" y="0.4" width="31.2" height="31.2" rx="6" fill="#FFD0C9"/><rect x="0.4" y="0.4" width="31.2" height="31.2" rx="6" stroke="#FB7E6A" stroke-width="0.8"/><path d="M23.1969 11.1852C20.5329 10.9212 17.8529 10.7852 15.1809 10.7852C13.5969 10.7852 12.0129 10.8652 10.4289 11.0252L8.79688 11.1852" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.1992 10.376L13.3752 9.328C13.5032 8.568 13.5992 8 14.9512 8H17.0472C18.3992 8 18.5032 8.6 18.6232 9.336L18.7992 10.376" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21.4756 13.7129L20.9556 21.7689C20.8676 23.0249 20.7956 24.0009 18.5636 24.0009H13.4276C11.1956 24.0009 11.1236 23.0249 11.0356 21.7689L10.5156 13.7129" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.6602 19.5996H17.3242" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 16.4004H18" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='notification-card mb-3 d-flex align-items-center gap-2 justify-content-between flex-md-nowrap flex-wrap'>
                    <div className='card-icons-text d-flex align-items-center gap-2 flex-md-nowrap flex-wrap'>
                        <div className='icons'>
                            M
                        </div>
                        <div className='text'>
                            <h6>Squch Dine-In New Year Offers <span>New</span></h6>
                            <p>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing,</p>
                        </div>
                    </div>
                    <div className='delete-btn-date'>
                        <ul className='d-flex align-items-center gap-2 list-unstyled p-0 m-0'>
                            <li>08:24 am</li>
                            <li>
                                <Link href="" className='delete-btn'>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.4" y="0.4" width="31.2" height="31.2" rx="6" fill="#FFD0C9"/><rect x="0.4" y="0.4" width="31.2" height="31.2" rx="6" stroke="#FB7E6A" stroke-width="0.8"/><path d="M23.1969 11.1852C20.5329 10.9212 17.8529 10.7852 15.1809 10.7852C13.5969 10.7852 12.0129 10.8652 10.4289 11.0252L8.79688 11.1852" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.1992 10.376L13.3752 9.328C13.5032 8.568 13.5992 8 14.9512 8H17.0472C18.3992 8 18.5032 8.6 18.6232 9.336L18.7992 10.376" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21.4756 13.7129L20.9556 21.7689C20.8676 23.0249 20.7956 24.0009 18.5636 24.0009H13.4276C11.1956 24.0009 11.1236 23.0249 11.0356 21.7689L10.5156 13.7129" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.6602 19.5996H17.3242" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 16.4004H18" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <div className='card-notification'>
            <div className='noti-box mb-3'>
                <h6>Today, Feb 2025</h6>
            </div>
            <div className='notification-card-box'>
                <div className='notification-card mb-3 d-flex align-items-center gap-2 justify-content-between flex-md-nowrap flex-wrap' onClick={handleShow}>
                    <div className='card-icons-text d-flex align-items-center gap-2 flex-md-nowrap flex-wrap'>
                        <div className='icons'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.50032 0C2.01482 0 0 2.01478 0 4.50025C0 6.98571 2.01482 9.00049 4.50032 9.00049H9.00065V4.50025C9.00065 2.01478 6.98583 0 4.50032 0Z" fill="#AE3DBC"/><path d="M0 13.5002C0 15.9857 2.01482 18.0005 4.50032 18.0005C6.98583 18.0005 9.00065 15.9857 9.00065 13.5002V9H4.50032C2.01482 9 0 11.0148 0 13.5002Z" fill="#FB7E6A"/><path d="M18.0006 4.50025C18.0006 2.01478 15.9858 0 13.5003 0C11.0148 0 9 2.01478 9 4.50025V9.00049H13.5003C15.9858 9.00049 18.0006 6.98571 18.0006 4.50025Z" fill="#DB8AE8"/><path d="M13.2678 15.7523C14.7597 15.7523 15.9692 14.5429 15.9692 13.051C15.9692 11.559 14.7597 10.3496 13.2678 10.3496C11.7759 10.3496 10.5664 11.559 10.5664 13.051C10.5664 14.5429 11.7759 15.7523 13.2678 15.7523Z" fill="#AE3DBC"/></svg>
                        </div>
                        <div className='text'>
                            <h6>Squch Dine-In New Year Offers <span>New</span></h6>
                            <p>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing,</p>
                        </div>
                    </div>
                    <div className='delete-btn-date'>
                        <ul className='d-flex align-items-center gap-2 list-unstyled p-0 m-0'>
                            <li>08:24 am</li>
                            <li>
                                <Link href="" className='delete-btn'>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.4" y="0.4" width="31.2" height="31.2" rx="6" fill="#FFD0C9"/><rect x="0.4" y="0.4" width="31.2" height="31.2" rx="6" stroke="#FB7E6A" stroke-width="0.8"/><path d="M23.1969 11.1852C20.5329 10.9212 17.8529 10.7852 15.1809 10.7852C13.5969 10.7852 12.0129 10.8652 10.4289 11.0252L8.79688 11.1852" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.1992 10.376L13.3752 9.328C13.5032 8.568 13.5992 8 14.9512 8H17.0472C18.3992 8 18.5032 8.6 18.6232 9.336L18.7992 10.376" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21.4756 13.7129L20.9556 21.7689C20.8676 23.0249 20.7956 24.0009 18.5636 24.0009H13.4276C11.1956 24.0009 11.1236 23.0249 11.0356 21.7689L10.5156 13.7129" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.6602 19.5996H17.3242" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 16.4004H18" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='notification-card mb-3 d-flex align-items-center gap-2 justify-content-between flex-md-nowrap flex-wrap'>
                    <div className='card-icons-text d-flex align-items-center gap-2 flex-md-nowrap flex-wrap'>
                        <div className='icons'>
                            M
                        </div>
                        <div className='text'>
                            <h6>Squch Dine-In New Year Offers <span>New</span></h6>
                            <p>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing,</p>
                        </div>
                    </div>
                    <div className='delete-btn-date'>
                        <ul className='d-flex align-items-center gap-2 list-unstyled p-0 m-0'>
                            <li>08:24 am</li>
                            <li>
                                <Link href="" className='delete-btn'>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.4" y="0.4" width="31.2" height="31.2" rx="6" fill="#FFD0C9"/><rect x="0.4" y="0.4" width="31.2" height="31.2" rx="6" stroke="#FB7E6A" stroke-width="0.8"/><path d="M23.1969 11.1852C20.5329 10.9212 17.8529 10.7852 15.1809 10.7852C13.5969 10.7852 12.0129 10.8652 10.4289 11.0252L8.79688 11.1852" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.1992 10.376L13.3752 9.328C13.5032 8.568 13.5992 8 14.9512 8H17.0472C18.3992 8 18.5032 8.6 18.6232 9.336L18.7992 10.376" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21.4756 13.7129L20.9556 21.7689C20.8676 23.0249 20.7956 24.0009 18.5636 24.0009H13.4276C11.1956 24.0009 11.1236 23.0249 11.0356 21.7689L10.5156 13.7129" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.6602 19.5996H17.3242" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 16.4004H18" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='notification-card mb-3 d-flex align-items-center gap-2 justify-content-between flex-md-nowrap flex-wrap'>
                    <div className='card-icons-text d-flex align-items-center gap-2 flex-md-nowrap flex-wrap'>
                        <div className='icons'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.50032 0C2.01482 0 0 2.01478 0 4.50025C0 6.98571 2.01482 9.00049 4.50032 9.00049H9.00065V4.50025C9.00065 2.01478 6.98583 0 4.50032 0Z" fill="#AE3DBC"/><path d="M0 13.5002C0 15.9857 2.01482 18.0005 4.50032 18.0005C6.98583 18.0005 9.00065 15.9857 9.00065 13.5002V9H4.50032C2.01482 9 0 11.0148 0 13.5002Z" fill="#FB7E6A"/><path d="M18.0006 4.50025C18.0006 2.01478 15.9858 0 13.5003 0C11.0148 0 9 2.01478 9 4.50025V9.00049H13.5003C15.9858 9.00049 18.0006 6.98571 18.0006 4.50025Z" fill="#DB8AE8"/><path d="M13.2678 15.7523C14.7597 15.7523 15.9692 14.5429 15.9692 13.051C15.9692 11.559 14.7597 10.3496 13.2678 10.3496C11.7759 10.3496 10.5664 11.559 10.5664 13.051C10.5664 14.5429 11.7759 15.7523 13.2678 15.7523Z" fill="#AE3DBC"/></svg>
                        </div>
                        <div className='text'>
                            <h6>Squch Dine-In New Year Offers <span>New</span></h6>
                            <p>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing,</p>
                        </div>
                    </div>
                    <div className='delete-btn-date'>
                        <ul className='d-flex align-items-center gap-2 list-unstyled p-0 m-0'>
                            <li>08:24 am</li>
                            <li>
                                <Link href="" className='delete-btn'>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.4" y="0.4" width="31.2" height="31.2" rx="6" fill="#FFD0C9"/><rect x="0.4" y="0.4" width="31.2" height="31.2" rx="6" stroke="#FB7E6A" stroke-width="0.8"/><path d="M23.1969 11.1852C20.5329 10.9212 17.8529 10.7852 15.1809 10.7852C13.5969 10.7852 12.0129 10.8652 10.4289 11.0252L8.79688 11.1852" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.1992 10.376L13.3752 9.328C13.5032 8.568 13.5992 8 14.9512 8H17.0472C18.3992 8 18.5032 8.6 18.6232 9.336L18.7992 10.376" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21.4756 13.7129L20.9556 21.7689C20.8676 23.0249 20.7956 24.0009 18.5636 24.0009H13.4276C11.1956 24.0009 11.1236 23.0249 11.0356 21.7689L10.5156 13.7129" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.6602 19.5996H17.3242" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 16.4004H18" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='notification-card mb-3 d-flex align-items-center gap-2 justify-content-between flex-md-nowrap flex-wrap'>
                    <div className='card-icons-text d-flex align-items-center gap-2 flex-md-nowrap flex-wrap'>
                        <div className='icons'>
                            M
                        </div>
                        <div className='text'>
                            <h6>Squch Dine-In New Year Offers <span>New</span></h6>
                            <p>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing,</p>
                        </div>
                    </div>
                    <div className='delete-btn-date'>
                        <ul className='d-flex align-items-center gap-2 list-unstyled p-0 m-0'>
                            <li>08:24 am</li>
                            <li>
                                <Link href="" className='delete-btn'>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.4" y="0.4" width="31.2" height="31.2" rx="6" fill="#FFD0C9"/><rect x="0.4" y="0.4" width="31.2" height="31.2" rx="6" stroke="#FB7E6A" stroke-width="0.8"/><path d="M23.1969 11.1852C20.5329 10.9212 17.8529 10.7852 15.1809 10.7852C13.5969 10.7852 12.0129 10.8652 10.4289 11.0252L8.79688 11.1852" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.1992 10.376L13.3752 9.328C13.5032 8.568 13.5992 8 14.9512 8H17.0472C18.3992 8 18.5032 8.6 18.6232 9.336L18.7992 10.376" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21.4756 13.7129L20.9556 21.7689C20.8676 23.0249 20.7956 24.0009 18.5636 24.0009H13.4276C11.1956 24.0009 11.1236 23.0249 11.0356 21.7689L10.5156 13.7129" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.6602 19.5996H17.3242" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 16.4004H18" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='notification-card mb-3 d-flex align-items-center gap-2 justify-content-between flex-md-nowrap flex-wrap'>
                    <div className='card-icons-text d-flex align-items-center gap-2 flex-md-nowrap flex-wrap'>
                        <div className='icons'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.50032 0C2.01482 0 0 2.01478 0 4.50025C0 6.98571 2.01482 9.00049 4.50032 9.00049H9.00065V4.50025C9.00065 2.01478 6.98583 0 4.50032 0Z" fill="#AE3DBC"/><path d="M0 13.5002C0 15.9857 2.01482 18.0005 4.50032 18.0005C6.98583 18.0005 9.00065 15.9857 9.00065 13.5002V9H4.50032C2.01482 9 0 11.0148 0 13.5002Z" fill="#FB7E6A"/><path d="M18.0006 4.50025C18.0006 2.01478 15.9858 0 13.5003 0C11.0148 0 9 2.01478 9 4.50025V9.00049H13.5003C15.9858 9.00049 18.0006 6.98571 18.0006 4.50025Z" fill="#DB8AE8"/><path d="M13.2678 15.7523C14.7597 15.7523 15.9692 14.5429 15.9692 13.051C15.9692 11.559 14.7597 10.3496 13.2678 10.3496C11.7759 10.3496 10.5664 11.559 10.5664 13.051C10.5664 14.5429 11.7759 15.7523 13.2678 15.7523Z" fill="#AE3DBC"/></svg>
                        </div>
                        <div className='text'>
                            <h6>Squch Dine-In New Year Offers <span>New</span></h6>
                            <p>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing,</p>
                        </div>
                    </div>
                    <div className='delete-btn-date'>
                        <ul className='d-flex align-items-center gap-2 list-unstyled p-0 m-0'>
                            <li>08:24 am</li>
                            <li>
                                <Link href="" className='delete-btn'>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.4" y="0.4" width="31.2" height="31.2" rx="6" fill="#FFD0C9"/><rect x="0.4" y="0.4" width="31.2" height="31.2" rx="6" stroke="#FB7E6A" stroke-width="0.8"/><path d="M23.1969 11.1852C20.5329 10.9212 17.8529 10.7852 15.1809 10.7852C13.5969 10.7852 12.0129 10.8652 10.4289 11.0252L8.79688 11.1852" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.1992 10.376L13.3752 9.328C13.5032 8.568 13.5992 8 14.9512 8H17.0472C18.3992 8 18.5032 8.6 18.6232 9.336L18.7992 10.376" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21.4756 13.7129L20.9556 21.7689C20.8676 23.0249 20.7956 24.0009 18.5636 24.0009H13.4276C11.1956 24.0009 11.1236 23.0249 11.0356 21.7689L10.5156 13.7129" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.6602 19.5996H17.3242" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 16.4004H18" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='notification-card mb-3 d-flex align-items-center gap-2 justify-content-between flex-md-nowrap flex-wrap' onClick={handleShow}>
                    <div className='card-icons-text d-flex align-items-center gap-2 flex-md-nowrap flex-wrap'>
                        <div className='icons'>
                            M
                        </div>
                        <div className='text'>
                            <h6>Squch Dine-In New Year Offers <span>New</span></h6>
                            <p>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing,</p>
                        </div>
                    </div>
                    <div className='delete-btn-date'>
                        <ul className='d-flex align-items-center gap-2 list-unstyled p-0 m-0'>
                            <li>08:24 am</li>
                            <li>
                                <Link href="" className='delete-btn'>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.4" y="0.4" width="31.2" height="31.2" rx="6" fill="#FFD0C9"/><rect x="0.4" y="0.4" width="31.2" height="31.2" rx="6" stroke="#FB7E6A" stroke-width="0.8"/><path d="M23.1969 11.1852C20.5329 10.9212 17.8529 10.7852 15.1809 10.7852C13.5969 10.7852 12.0129 10.8652 10.4289 11.0252L8.79688 11.1852" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.1992 10.376L13.3752 9.328C13.5032 8.568 13.5992 8 14.9512 8H17.0472C18.3992 8 18.5032 8.6 18.6232 9.336L18.7992 10.376" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21.4756 13.7129L20.9556 21.7689C20.8676 23.0249 20.7956 24.0009 18.5636 24.0009H13.4276C11.1956 24.0009 11.1236 23.0249 11.0356 21.7689L10.5156 13.7129" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.6602 19.5996H17.3242" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 16.4004H18" stroke="#E03C22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <NotificationDetailsModal show={show} handleClose={handleClose}/>

    </div>
  )
}

export default Notification