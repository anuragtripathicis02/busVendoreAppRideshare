'use client'
import React from 'react';
import Image from "next/image";
import Vehicle1 from '../../../../public/images/vehicle-01.png'
import Vehicle2 from '../../../../public/images/vehicle-02.png'
import Vehicle3 from '../../../../public/images/vehicle-03.png'
import Vehicle4 from '../../../../public/images/vehicle-04.png'
import Vehicle5 from '../../../../public/images/vehicle-05.png'
import Vehicle6 from '../../../../public/images/vehicle-06.png'
import Vehicle7 from '../../../../public/images/vehicle-07.png'
import Vehicle8 from '../../../../public/images/vehicle-08.png'
import Link from 'next/link';
import { Dropdown } from 'react-bootstrap';

const VehiclesCard = () => {
  return (
    <div className='vehiclescard-sec'>
        <div className='row'>
            <div className='col-xl-4 col-md-6 mb-4'>
                <div className='card-box'>
                    <div className='card-img position-relative'>
                        <span className='img'>
                            <Image src={Vehicle1} alt='' />
                        </span>
                        <div className='dropdown-box'>
                            <div className='com-dropdown dropdown'>
                                <Dropdown data-bs-theme="light" align={'end' }>
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="primary" >
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" fill="black" fill-opacity="0.2"/><path d="M22.625 20C22.625 20.5192 22.471 21.0267 22.1826 21.4584C21.8942 21.8901 21.4842 22.2265 21.0045 22.4252C20.5249 22.6239 19.9971 22.6758 19.4879 22.5746C18.9787 22.4733 18.511 22.2233 18.1438 21.8562C17.7767 21.489 17.5267 21.0213 17.4254 20.5121C17.3242 20.0029 17.3761 19.4751 17.5748 18.9955C17.7735 18.5158 18.11 18.1058 18.5416 17.8174C18.9733 17.529 19.4808 17.375 20 17.375C20.6962 17.375 21.3639 17.6516 21.8562 18.1438C22.3484 18.6361 22.625 19.3038 22.625 20ZM20 15.125C20.5192 15.125 21.0267 14.971 21.4584 14.6826C21.8901 14.3942 22.2265 13.9842 22.4252 13.5045C22.6239 13.0249 22.6758 12.4971 22.5746 11.9879C22.4733 11.4787 22.2233 11.011 21.8562 10.6438C21.489 10.2767 21.0213 10.0267 20.5121 9.92544C20.0029 9.82415 19.4751 9.87614 18.9955 10.0748C18.5158 10.2735 18.1058 10.61 17.8174 11.0416C17.529 11.4733 17.375 11.9808 17.375 12.5C17.375 13.1962 17.6516 13.8639 18.1438 14.3562C18.6361 14.8484 19.3038 15.125 20 15.125ZM20 24.875C19.4808 24.875 18.9733 25.029 18.5416 25.3174C18.11 25.6058 17.7735 26.0158 17.5748 26.4955C17.3761 26.9751 17.3242 27.5029 17.4254 28.0121C17.5267 28.5213 17.7767 28.989 18.1438 29.3562C18.511 29.7233 18.9787 29.9733 19.4879 30.0746C19.9971 30.1758 20.5249 30.1239 21.0045 29.9252C21.4842 29.7265 21.8942 29.3901 22.1826 28.9584C22.471 28.5267 22.625 28.0192 22.625 27.5C22.625 26.8038 22.3484 26.1361 21.8562 25.6438C21.3639 25.1516 20.6962 24.875 20 24.875Z" fill="white"/></svg>
                                    </Dropdown.Toggle>

                                        <Dropdown.Menu className='dropdown-menu-end fixed-space' >
                                            <Dropdown.Item href="#">Mark Inactive</Dropdown.Item>
                                            <Dropdown.Item href="#">Mark active</Dropdown.Item>
                                            <Dropdown.Item href="#">View Profile</Dropdown.Item>
                                            <Dropdown.Item href="#" className='red-text'>Delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <div className='card-text'>
                        <h2>CR 1234-10 </h2>
                        <p>(2x1 AC Multi-excel Sleeper)</p>
                        <div className='btn-box d-flex align-items-center gap-2 justify-content-between'>
                            <div className='btn-left'>
                                <Link href="" className='Active btn-small'>Active</Link>
                            </div>
                            <ul className='d-flex align-items-center gap-2'>
                                <li>50 Seats</li>
                                <li><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3C5.75 3.51918 5.59605 4.02669 5.30761 4.45837C5.01917 4.89005 4.6092 5.2265 4.12955 5.42518C3.64989 5.62386 3.12209 5.67585 2.61289 5.57456C2.10369 5.47328 1.63596 5.22327 1.26885 4.85616C0.901733 4.48904 0.651726 4.02131 0.55044 3.51211C0.449154 3.00291 0.501137 2.47511 0.699817 1.99546C0.898497 1.5158 1.23495 1.10583 1.66663 0.817392C2.09831 0.528953 2.60583 0.375 3.125 0.375C3.82119 0.375 4.48887 0.651562 4.98116 1.14384C5.47344 1.63613 5.75 2.30381 5.75 3Z" fill="#4F4F4F"/></svg></li>
                                <li>2 Drivers</li>
                                <li><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3C5.75 3.51918 5.59605 4.02669 5.30761 4.45837C5.01917 4.89005 4.6092 5.2265 4.12955 5.42518C3.64989 5.62386 3.12209 5.67585 2.61289 5.57456C2.10369 5.47328 1.63596 5.22327 1.26885 4.85616C0.901733 4.48904 0.651726 4.02131 0.55044 3.51211C0.449154 3.00291 0.501137 2.47511 0.699817 1.99546C0.898497 1.5158 1.23495 1.10583 1.66663 0.817392C2.09831 0.528953 2.60583 0.375 3.125 0.375C3.82119 0.375 4.48887 0.651562 4.98116 1.14384C5.47344 1.63613 5.75 2.30381 5.75 3Z" fill="#4F4F4F"/></svg></li>
                                <li>1 Helper</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xl-4 col-md-6 mb-4'>
                <div className='card-box'>
                    <div className='card-img position-relative'>
                        <span className='img'>
                            <Image src={Vehicle2} alt='' />
                        </span>
                        <div className='dropdown-box'>
                            <div className='com-dropdown dropdown'>
                                <Dropdown data-bs-theme="light" align={'end' }>
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="primary" >
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" fill="black" fill-opacity="0.2"/><path d="M22.625 20C22.625 20.5192 22.471 21.0267 22.1826 21.4584C21.8942 21.8901 21.4842 22.2265 21.0045 22.4252C20.5249 22.6239 19.9971 22.6758 19.4879 22.5746C18.9787 22.4733 18.511 22.2233 18.1438 21.8562C17.7767 21.489 17.5267 21.0213 17.4254 20.5121C17.3242 20.0029 17.3761 19.4751 17.5748 18.9955C17.7735 18.5158 18.11 18.1058 18.5416 17.8174C18.9733 17.529 19.4808 17.375 20 17.375C20.6962 17.375 21.3639 17.6516 21.8562 18.1438C22.3484 18.6361 22.625 19.3038 22.625 20ZM20 15.125C20.5192 15.125 21.0267 14.971 21.4584 14.6826C21.8901 14.3942 22.2265 13.9842 22.4252 13.5045C22.6239 13.0249 22.6758 12.4971 22.5746 11.9879C22.4733 11.4787 22.2233 11.011 21.8562 10.6438C21.489 10.2767 21.0213 10.0267 20.5121 9.92544C20.0029 9.82415 19.4751 9.87614 18.9955 10.0748C18.5158 10.2735 18.1058 10.61 17.8174 11.0416C17.529 11.4733 17.375 11.9808 17.375 12.5C17.375 13.1962 17.6516 13.8639 18.1438 14.3562C18.6361 14.8484 19.3038 15.125 20 15.125ZM20 24.875C19.4808 24.875 18.9733 25.029 18.5416 25.3174C18.11 25.6058 17.7735 26.0158 17.5748 26.4955C17.3761 26.9751 17.3242 27.5029 17.4254 28.0121C17.5267 28.5213 17.7767 28.989 18.1438 29.3562C18.511 29.7233 18.9787 29.9733 19.4879 30.0746C19.9971 30.1758 20.5249 30.1239 21.0045 29.9252C21.4842 29.7265 21.8942 29.3901 22.1826 28.9584C22.471 28.5267 22.625 28.0192 22.625 27.5C22.625 26.8038 22.3484 26.1361 21.8562 25.6438C21.3639 25.1516 20.6962 24.875 20 24.875Z" fill="white"/></svg>
                                    </Dropdown.Toggle>


                                    <Dropdown.Menu className='dropdown-menu-end fixed-space' >
                                        <Dropdown.Item href="#">Mark Inactive</Dropdown.Item>
                                        <Dropdown.Item href="#">Mark active</Dropdown.Item>
                                        <Dropdown.Item href="#">View Profile</Dropdown.Item>
                                        <Dropdown.Item href="#" className='red-text'>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <div className='card-text'>
                        <h2>CR 1234-10 </h2>
                        <p>(2x1 AC Multi-excel Sleeper)</p>
                        <div className='btn-box d-flex align-items-center gap-2 justify-content-between'>
                            <div className='btn-left'>
                                <Link href="" className='In-active btn-small'>In-active</Link>
                            </div>
                            <ul className='d-flex align-items-center gap-2'>
                                <li>50 Seats</li>
                                <li><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3C5.75 3.51918 5.59605 4.02669 5.30761 4.45837C5.01917 4.89005 4.6092 5.2265 4.12955 5.42518C3.64989 5.62386 3.12209 5.67585 2.61289 5.57456C2.10369 5.47328 1.63596 5.22327 1.26885 4.85616C0.901733 4.48904 0.651726 4.02131 0.55044 3.51211C0.449154 3.00291 0.501137 2.47511 0.699817 1.99546C0.898497 1.5158 1.23495 1.10583 1.66663 0.817392C2.09831 0.528953 2.60583 0.375 3.125 0.375C3.82119 0.375 4.48887 0.651562 4.98116 1.14384C5.47344 1.63613 5.75 2.30381 5.75 3Z" fill="#4F4F4F"/></svg></li>
                                <li>2 Drivers</li>
                                <li><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3C5.75 3.51918 5.59605 4.02669 5.30761 4.45837C5.01917 4.89005 4.6092 5.2265 4.12955 5.42518C3.64989 5.62386 3.12209 5.67585 2.61289 5.57456C2.10369 5.47328 1.63596 5.22327 1.26885 4.85616C0.901733 4.48904 0.651726 4.02131 0.55044 3.51211C0.449154 3.00291 0.501137 2.47511 0.699817 1.99546C0.898497 1.5158 1.23495 1.10583 1.66663 0.817392C2.09831 0.528953 2.60583 0.375 3.125 0.375C3.82119 0.375 4.48887 0.651562 4.98116 1.14384C5.47344 1.63613 5.75 2.30381 5.75 3Z" fill="#4F4F4F"/></svg></li>
                                <li>1 Helper</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xl-4 col-md-6 mb-4'>
                <div className='card-box'>
                    <div className='card-img position-relative'>
                        <span className='img'>
                            <Image src={Vehicle3} alt='' />
                        </span>
                        <div className='dropdown-box'>
                            <div className='com-dropdown dropdown'>
                                <Dropdown data-bs-theme="light" align={'end' }>
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="primary" >
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" fill="black" fill-opacity="0.2"/><path d="M22.625 20C22.625 20.5192 22.471 21.0267 22.1826 21.4584C21.8942 21.8901 21.4842 22.2265 21.0045 22.4252C20.5249 22.6239 19.9971 22.6758 19.4879 22.5746C18.9787 22.4733 18.511 22.2233 18.1438 21.8562C17.7767 21.489 17.5267 21.0213 17.4254 20.5121C17.3242 20.0029 17.3761 19.4751 17.5748 18.9955C17.7735 18.5158 18.11 18.1058 18.5416 17.8174C18.9733 17.529 19.4808 17.375 20 17.375C20.6962 17.375 21.3639 17.6516 21.8562 18.1438C22.3484 18.6361 22.625 19.3038 22.625 20ZM20 15.125C20.5192 15.125 21.0267 14.971 21.4584 14.6826C21.8901 14.3942 22.2265 13.9842 22.4252 13.5045C22.6239 13.0249 22.6758 12.4971 22.5746 11.9879C22.4733 11.4787 22.2233 11.011 21.8562 10.6438C21.489 10.2767 21.0213 10.0267 20.5121 9.92544C20.0029 9.82415 19.4751 9.87614 18.9955 10.0748C18.5158 10.2735 18.1058 10.61 17.8174 11.0416C17.529 11.4733 17.375 11.9808 17.375 12.5C17.375 13.1962 17.6516 13.8639 18.1438 14.3562C18.6361 14.8484 19.3038 15.125 20 15.125ZM20 24.875C19.4808 24.875 18.9733 25.029 18.5416 25.3174C18.11 25.6058 17.7735 26.0158 17.5748 26.4955C17.3761 26.9751 17.3242 27.5029 17.4254 28.0121C17.5267 28.5213 17.7767 28.989 18.1438 29.3562C18.511 29.7233 18.9787 29.9733 19.4879 30.0746C19.9971 30.1758 20.5249 30.1239 21.0045 29.9252C21.4842 29.7265 21.8942 29.3901 22.1826 28.9584C22.471 28.5267 22.625 28.0192 22.625 27.5C22.625 26.8038 22.3484 26.1361 21.8562 25.6438C21.3639 25.1516 20.6962 24.875 20 24.875Z" fill="white"/></svg>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className='dropdown-menu-end fixed-space' >
                                        <Dropdown.Item href="#">Mark Inactive</Dropdown.Item>
                                        <Dropdown.Item href="#">Mark active</Dropdown.Item>
                                        <Dropdown.Item href="#">View Profile</Dropdown.Item>
                                        <Dropdown.Item href="#" className='red-text'>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <div className='card-text'>
                        <h2>CR 1234-10 </h2>
                        <p>(2x1 AC Multi-excel Sleeper)</p>
                        <div className='btn-box d-flex align-items-center gap-2 justify-content-between'>
                            <div className='btn-left'>
                                <Link href="" className='In-complete btn-small'>Incomplete</Link>
                            </div>
                            <ul className='d-flex align-items-center gap-2'>
                                <li>50 Seats</li>
                                <li><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3C5.75 3.51918 5.59605 4.02669 5.30761 4.45837C5.01917 4.89005 4.6092 5.2265 4.12955 5.42518C3.64989 5.62386 3.12209 5.67585 2.61289 5.57456C2.10369 5.47328 1.63596 5.22327 1.26885 4.85616C0.901733 4.48904 0.651726 4.02131 0.55044 3.51211C0.449154 3.00291 0.501137 2.47511 0.699817 1.99546C0.898497 1.5158 1.23495 1.10583 1.66663 0.817392C2.09831 0.528953 2.60583 0.375 3.125 0.375C3.82119 0.375 4.48887 0.651562 4.98116 1.14384C5.47344 1.63613 5.75 2.30381 5.75 3Z" fill="#4F4F4F"/></svg></li>
                                <li>2 Drivers</li>
                                <li><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3C5.75 3.51918 5.59605 4.02669 5.30761 4.45837C5.01917 4.89005 4.6092 5.2265 4.12955 5.42518C3.64989 5.62386 3.12209 5.67585 2.61289 5.57456C2.10369 5.47328 1.63596 5.22327 1.26885 4.85616C0.901733 4.48904 0.651726 4.02131 0.55044 3.51211C0.449154 3.00291 0.501137 2.47511 0.699817 1.99546C0.898497 1.5158 1.23495 1.10583 1.66663 0.817392C2.09831 0.528953 2.60583 0.375 3.125 0.375C3.82119 0.375 4.48887 0.651562 4.98116 1.14384C5.47344 1.63613 5.75 2.30381 5.75 3Z" fill="#4F4F4F"/></svg></li>
                                <li>1 Helper</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xl-4 col-md-6 mb-4'>
                <div className='card-box'>
                    <div className='card-img position-relative'>
                        <span className='img'>
                            <Image src={Vehicle4} alt='' />
                        </span>
                        <div className='dropdown-box'>
                            <div className='com-dropdown dropdown'>
                                <Dropdown data-bs-theme="light" align={'end' }>
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="primary" >
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" fill="black" fill-opacity="0.2"/><path d="M22.625 20C22.625 20.5192 22.471 21.0267 22.1826 21.4584C21.8942 21.8901 21.4842 22.2265 21.0045 22.4252C20.5249 22.6239 19.9971 22.6758 19.4879 22.5746C18.9787 22.4733 18.511 22.2233 18.1438 21.8562C17.7767 21.489 17.5267 21.0213 17.4254 20.5121C17.3242 20.0029 17.3761 19.4751 17.5748 18.9955C17.7735 18.5158 18.11 18.1058 18.5416 17.8174C18.9733 17.529 19.4808 17.375 20 17.375C20.6962 17.375 21.3639 17.6516 21.8562 18.1438C22.3484 18.6361 22.625 19.3038 22.625 20ZM20 15.125C20.5192 15.125 21.0267 14.971 21.4584 14.6826C21.8901 14.3942 22.2265 13.9842 22.4252 13.5045C22.6239 13.0249 22.6758 12.4971 22.5746 11.9879C22.4733 11.4787 22.2233 11.011 21.8562 10.6438C21.489 10.2767 21.0213 10.0267 20.5121 9.92544C20.0029 9.82415 19.4751 9.87614 18.9955 10.0748C18.5158 10.2735 18.1058 10.61 17.8174 11.0416C17.529 11.4733 17.375 11.9808 17.375 12.5C17.375 13.1962 17.6516 13.8639 18.1438 14.3562C18.6361 14.8484 19.3038 15.125 20 15.125ZM20 24.875C19.4808 24.875 18.9733 25.029 18.5416 25.3174C18.11 25.6058 17.7735 26.0158 17.5748 26.4955C17.3761 26.9751 17.3242 27.5029 17.4254 28.0121C17.5267 28.5213 17.7767 28.989 18.1438 29.3562C18.511 29.7233 18.9787 29.9733 19.4879 30.0746C19.9971 30.1758 20.5249 30.1239 21.0045 29.9252C21.4842 29.7265 21.8942 29.3901 22.1826 28.9584C22.471 28.5267 22.625 28.0192 22.625 27.5C22.625 26.8038 22.3484 26.1361 21.8562 25.6438C21.3639 25.1516 20.6962 24.875 20 24.875Z" fill="white"/></svg>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className='dropdown-menu-end fixed-space' >
                                        <Dropdown.Item href="#">Mark Inactive</Dropdown.Item>
                                        <Dropdown.Item href="#">Mark active</Dropdown.Item>
                                        <Dropdown.Item href="#">View Profile</Dropdown.Item>
                                        <Dropdown.Item href="#" className='red-text'>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <div className='card-text'>
                        <h2>CR 1234-10 </h2>
                        <p>(2x1 AC Multi-excel Sleeper)</p>
                        <div className='btn-box d-flex align-items-center gap-2 justify-content-between'>
                            <div className='btn-left'>
                                <Link href="" className='Unassigned btn-small'>Unassigned</Link>
                            </div>
                            <ul className='d-flex align-items-center gap-2'>
                                <li>50 Seats</li>
                                <li><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3C5.75 3.51918 5.59605 4.02669 5.30761 4.45837C5.01917 4.89005 4.6092 5.2265 4.12955 5.42518C3.64989 5.62386 3.12209 5.67585 2.61289 5.57456C2.10369 5.47328 1.63596 5.22327 1.26885 4.85616C0.901733 4.48904 0.651726 4.02131 0.55044 3.51211C0.449154 3.00291 0.501137 2.47511 0.699817 1.99546C0.898497 1.5158 1.23495 1.10583 1.66663 0.817392C2.09831 0.528953 2.60583 0.375 3.125 0.375C3.82119 0.375 4.48887 0.651562 4.98116 1.14384C5.47344 1.63613 5.75 2.30381 5.75 3Z" fill="#4F4F4F"/></svg></li>
                                <li>2 Drivers</li>
                                <li><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3C5.75 3.51918 5.59605 4.02669 5.30761 4.45837C5.01917 4.89005 4.6092 5.2265 4.12955 5.42518C3.64989 5.62386 3.12209 5.67585 2.61289 5.57456C2.10369 5.47328 1.63596 5.22327 1.26885 4.85616C0.901733 4.48904 0.651726 4.02131 0.55044 3.51211C0.449154 3.00291 0.501137 2.47511 0.699817 1.99546C0.898497 1.5158 1.23495 1.10583 1.66663 0.817392C2.09831 0.528953 2.60583 0.375 3.125 0.375C3.82119 0.375 4.48887 0.651562 4.98116 1.14384C5.47344 1.63613 5.75 2.30381 5.75 3Z" fill="#4F4F4F"/></svg></li>
                                <li>1 Helper</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xl-4 col-md-6 mb-4'>
                <div className='card-box'>
                    <div className='card-img position-relative'>
                        <span className='img'>
                            <Image src={Vehicle5} alt='' />
                        </span>
                        <div className='dropdown-box'>
                            <div className='com-dropdown dropdown'>
                                <Dropdown data-bs-theme="light" align={'end' }>
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="primary" >
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" fill="black" fill-opacity="0.2"/><path d="M22.625 20C22.625 20.5192 22.471 21.0267 22.1826 21.4584C21.8942 21.8901 21.4842 22.2265 21.0045 22.4252C20.5249 22.6239 19.9971 22.6758 19.4879 22.5746C18.9787 22.4733 18.511 22.2233 18.1438 21.8562C17.7767 21.489 17.5267 21.0213 17.4254 20.5121C17.3242 20.0029 17.3761 19.4751 17.5748 18.9955C17.7735 18.5158 18.11 18.1058 18.5416 17.8174C18.9733 17.529 19.4808 17.375 20 17.375C20.6962 17.375 21.3639 17.6516 21.8562 18.1438C22.3484 18.6361 22.625 19.3038 22.625 20ZM20 15.125C20.5192 15.125 21.0267 14.971 21.4584 14.6826C21.8901 14.3942 22.2265 13.9842 22.4252 13.5045C22.6239 13.0249 22.6758 12.4971 22.5746 11.9879C22.4733 11.4787 22.2233 11.011 21.8562 10.6438C21.489 10.2767 21.0213 10.0267 20.5121 9.92544C20.0029 9.82415 19.4751 9.87614 18.9955 10.0748C18.5158 10.2735 18.1058 10.61 17.8174 11.0416C17.529 11.4733 17.375 11.9808 17.375 12.5C17.375 13.1962 17.6516 13.8639 18.1438 14.3562C18.6361 14.8484 19.3038 15.125 20 15.125ZM20 24.875C19.4808 24.875 18.9733 25.029 18.5416 25.3174C18.11 25.6058 17.7735 26.0158 17.5748 26.4955C17.3761 26.9751 17.3242 27.5029 17.4254 28.0121C17.5267 28.5213 17.7767 28.989 18.1438 29.3562C18.511 29.7233 18.9787 29.9733 19.4879 30.0746C19.9971 30.1758 20.5249 30.1239 21.0045 29.9252C21.4842 29.7265 21.8942 29.3901 22.1826 28.9584C22.471 28.5267 22.625 28.0192 22.625 27.5C22.625 26.8038 22.3484 26.1361 21.8562 25.6438C21.3639 25.1516 20.6962 24.875 20 24.875Z" fill="white"/></svg>
                                    </Dropdown.Toggle>

                                    

                                    <Dropdown.Menu className='dropdown-menu-end fixed-space' >
                                        <Dropdown.Item href="#">Mark Inactive</Dropdown.Item>
                                        <Dropdown.Item href="#">Mark active</Dropdown.Item>
                                        <Dropdown.Item href="#">View Profile</Dropdown.Item>
                                        <Dropdown.Item href="#" className='red-text'>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <div className='card-text'>
                        <h2>CR 1234-10 </h2>
                        <p>(2x1 AC Multi-excel Sleeper)</p>
                        <div className='btn-box d-flex align-items-center gap-2 justify-content-between'>
                            <div className='btn-left'>
                                <Link href="" className='Active btn-small'>Active</Link>
                            </div>
                            <ul className='d-flex align-items-center gap-2'>
                                <li>50 Seats</li>
                                <li><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3C5.75 3.51918 5.59605 4.02669 5.30761 4.45837C5.01917 4.89005 4.6092 5.2265 4.12955 5.42518C3.64989 5.62386 3.12209 5.67585 2.61289 5.57456C2.10369 5.47328 1.63596 5.22327 1.26885 4.85616C0.901733 4.48904 0.651726 4.02131 0.55044 3.51211C0.449154 3.00291 0.501137 2.47511 0.699817 1.99546C0.898497 1.5158 1.23495 1.10583 1.66663 0.817392C2.09831 0.528953 2.60583 0.375 3.125 0.375C3.82119 0.375 4.48887 0.651562 4.98116 1.14384C5.47344 1.63613 5.75 2.30381 5.75 3Z" fill="#4F4F4F"/></svg></li>
                                <li>2 Drivers</li>
                                <li><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3C5.75 3.51918 5.59605 4.02669 5.30761 4.45837C5.01917 4.89005 4.6092 5.2265 4.12955 5.42518C3.64989 5.62386 3.12209 5.67585 2.61289 5.57456C2.10369 5.47328 1.63596 5.22327 1.26885 4.85616C0.901733 4.48904 0.651726 4.02131 0.55044 3.51211C0.449154 3.00291 0.501137 2.47511 0.699817 1.99546C0.898497 1.5158 1.23495 1.10583 1.66663 0.817392C2.09831 0.528953 2.60583 0.375 3.125 0.375C3.82119 0.375 4.48887 0.651562 4.98116 1.14384C5.47344 1.63613 5.75 2.30381 5.75 3Z" fill="#4F4F4F"/></svg></li>
                                <li>1 Helper</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xl-4 col-md-6 mb-4'>
                <div className='card-box'>
                    <div className='card-img position-relative'>
                        <span className='img'>
                            <Image src={Vehicle6} alt='' />
                        </span>
                        <div className='dropdown-box'>
                            <div className='com-dropdown dropdown'>
                                <Dropdown data-bs-theme="light" align={'end' }>
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="primary" >
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" fill="black" fill-opacity="0.2"/><path d="M22.625 20C22.625 20.5192 22.471 21.0267 22.1826 21.4584C21.8942 21.8901 21.4842 22.2265 21.0045 22.4252C20.5249 22.6239 19.9971 22.6758 19.4879 22.5746C18.9787 22.4733 18.511 22.2233 18.1438 21.8562C17.7767 21.489 17.5267 21.0213 17.4254 20.5121C17.3242 20.0029 17.3761 19.4751 17.5748 18.9955C17.7735 18.5158 18.11 18.1058 18.5416 17.8174C18.9733 17.529 19.4808 17.375 20 17.375C20.6962 17.375 21.3639 17.6516 21.8562 18.1438C22.3484 18.6361 22.625 19.3038 22.625 20ZM20 15.125C20.5192 15.125 21.0267 14.971 21.4584 14.6826C21.8901 14.3942 22.2265 13.9842 22.4252 13.5045C22.6239 13.0249 22.6758 12.4971 22.5746 11.9879C22.4733 11.4787 22.2233 11.011 21.8562 10.6438C21.489 10.2767 21.0213 10.0267 20.5121 9.92544C20.0029 9.82415 19.4751 9.87614 18.9955 10.0748C18.5158 10.2735 18.1058 10.61 17.8174 11.0416C17.529 11.4733 17.375 11.9808 17.375 12.5C17.375 13.1962 17.6516 13.8639 18.1438 14.3562C18.6361 14.8484 19.3038 15.125 20 15.125ZM20 24.875C19.4808 24.875 18.9733 25.029 18.5416 25.3174C18.11 25.6058 17.7735 26.0158 17.5748 26.4955C17.3761 26.9751 17.3242 27.5029 17.4254 28.0121C17.5267 28.5213 17.7767 28.989 18.1438 29.3562C18.511 29.7233 18.9787 29.9733 19.4879 30.0746C19.9971 30.1758 20.5249 30.1239 21.0045 29.9252C21.4842 29.7265 21.8942 29.3901 22.1826 28.9584C22.471 28.5267 22.625 28.0192 22.625 27.5C22.625 26.8038 22.3484 26.1361 21.8562 25.6438C21.3639 25.1516 20.6962 24.875 20 24.875Z" fill="white"/></svg>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className='dropdown-menu-end fixed-space' >
                                        <Dropdown.Item href="#">Mark Inactive</Dropdown.Item>
                                        <Dropdown.Item href="#">Mark active</Dropdown.Item>
                                        <Dropdown.Item href="#">View Profile</Dropdown.Item>
                                        <Dropdown.Item href="#" className='red-text'>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <div className='card-text'>
                        <h2>CR 1234-10 </h2>
                        <p>(2x1 AC Multi-excel Sleeper)</p>
                        <div className='btn-box d-flex align-items-center gap-2 justify-content-between'>
                            <div className='btn-left'>
                                <Link href="" className='Active btn-small'>Active</Link>
                            </div>
                            <ul className='d-flex align-items-center gap-2'>
                                <li>50 Seats</li>
                                <li><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3C5.75 3.51918 5.59605 4.02669 5.30761 4.45837C5.01917 4.89005 4.6092 5.2265 4.12955 5.42518C3.64989 5.62386 3.12209 5.67585 2.61289 5.57456C2.10369 5.47328 1.63596 5.22327 1.26885 4.85616C0.901733 4.48904 0.651726 4.02131 0.55044 3.51211C0.449154 3.00291 0.501137 2.47511 0.699817 1.99546C0.898497 1.5158 1.23495 1.10583 1.66663 0.817392C2.09831 0.528953 2.60583 0.375 3.125 0.375C3.82119 0.375 4.48887 0.651562 4.98116 1.14384C5.47344 1.63613 5.75 2.30381 5.75 3Z" fill="#4F4F4F"/></svg></li>
                                <li>2 Drivers</li>
                                <li><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3C5.75 3.51918 5.59605 4.02669 5.30761 4.45837C5.01917 4.89005 4.6092 5.2265 4.12955 5.42518C3.64989 5.62386 3.12209 5.67585 2.61289 5.57456C2.10369 5.47328 1.63596 5.22327 1.26885 4.85616C0.901733 4.48904 0.651726 4.02131 0.55044 3.51211C0.449154 3.00291 0.501137 2.47511 0.699817 1.99546C0.898497 1.5158 1.23495 1.10583 1.66663 0.817392C2.09831 0.528953 2.60583 0.375 3.125 0.375C3.82119 0.375 4.48887 0.651562 4.98116 1.14384C5.47344 1.63613 5.75 2.30381 5.75 3Z" fill="#4F4F4F"/></svg></li>
                                <li>1 Helper</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xl-4 col-md-6 mb-4'>
                <div className='card-box'>
                    <div className='card-img position-relative'>
                        <span className='img'>
                            <Image src={Vehicle7} alt='' />
                        </span>
                        <div className='dropdown-box'>
                            <div className='com-dropdown dropdown'>
                                <Dropdown data-bs-theme="light" align={'end' }>
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="primary" >
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" fill="black" fill-opacity="0.2"/><path d="M22.625 20C22.625 20.5192 22.471 21.0267 22.1826 21.4584C21.8942 21.8901 21.4842 22.2265 21.0045 22.4252C20.5249 22.6239 19.9971 22.6758 19.4879 22.5746C18.9787 22.4733 18.511 22.2233 18.1438 21.8562C17.7767 21.489 17.5267 21.0213 17.4254 20.5121C17.3242 20.0029 17.3761 19.4751 17.5748 18.9955C17.7735 18.5158 18.11 18.1058 18.5416 17.8174C18.9733 17.529 19.4808 17.375 20 17.375C20.6962 17.375 21.3639 17.6516 21.8562 18.1438C22.3484 18.6361 22.625 19.3038 22.625 20ZM20 15.125C20.5192 15.125 21.0267 14.971 21.4584 14.6826C21.8901 14.3942 22.2265 13.9842 22.4252 13.5045C22.6239 13.0249 22.6758 12.4971 22.5746 11.9879C22.4733 11.4787 22.2233 11.011 21.8562 10.6438C21.489 10.2767 21.0213 10.0267 20.5121 9.92544C20.0029 9.82415 19.4751 9.87614 18.9955 10.0748C18.5158 10.2735 18.1058 10.61 17.8174 11.0416C17.529 11.4733 17.375 11.9808 17.375 12.5C17.375 13.1962 17.6516 13.8639 18.1438 14.3562C18.6361 14.8484 19.3038 15.125 20 15.125ZM20 24.875C19.4808 24.875 18.9733 25.029 18.5416 25.3174C18.11 25.6058 17.7735 26.0158 17.5748 26.4955C17.3761 26.9751 17.3242 27.5029 17.4254 28.0121C17.5267 28.5213 17.7767 28.989 18.1438 29.3562C18.511 29.7233 18.9787 29.9733 19.4879 30.0746C19.9971 30.1758 20.5249 30.1239 21.0045 29.9252C21.4842 29.7265 21.8942 29.3901 22.1826 28.9584C22.471 28.5267 22.625 28.0192 22.625 27.5C22.625 26.8038 22.3484 26.1361 21.8562 25.6438C21.3639 25.1516 20.6962 24.875 20 24.875Z" fill="white"/></svg>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className='dropdown-menu-end fixed-space' >
                                        <Dropdown.Item href="#">Mark Inactive</Dropdown.Item>
                                        <Dropdown.Item href="#">Mark active</Dropdown.Item>
                                        <Dropdown.Item href="#">View Profile</Dropdown.Item>
                                        <Dropdown.Item href="#" className='red-text'>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <div className='card-text'>
                        <h2>CR 1234-10 </h2>
                        <p>(2x1 AC Multi-excel Sleeper)</p>
                        <div className='btn-box d-flex align-items-center gap-2 justify-content-between'>
                            <div className='btn-left'>
                                <Link href="" className='Active btn-small'>Active</Link>
                            </div>
                            <ul className='d-flex align-items-center gap-2'>
                                <li>50 Seats</li>
                                <li><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3C5.75 3.51918 5.59605 4.02669 5.30761 4.45837C5.01917 4.89005 4.6092 5.2265 4.12955 5.42518C3.64989 5.62386 3.12209 5.67585 2.61289 5.57456C2.10369 5.47328 1.63596 5.22327 1.26885 4.85616C0.901733 4.48904 0.651726 4.02131 0.55044 3.51211C0.449154 3.00291 0.501137 2.47511 0.699817 1.99546C0.898497 1.5158 1.23495 1.10583 1.66663 0.817392C2.09831 0.528953 2.60583 0.375 3.125 0.375C3.82119 0.375 4.48887 0.651562 4.98116 1.14384C5.47344 1.63613 5.75 2.30381 5.75 3Z" fill="#4F4F4F"/></svg></li>
                                <li>2 Drivers</li>
                                <li><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3C5.75 3.51918 5.59605 4.02669 5.30761 4.45837C5.01917 4.89005 4.6092 5.2265 4.12955 5.42518C3.64989 5.62386 3.12209 5.67585 2.61289 5.57456C2.10369 5.47328 1.63596 5.22327 1.26885 4.85616C0.901733 4.48904 0.651726 4.02131 0.55044 3.51211C0.449154 3.00291 0.501137 2.47511 0.699817 1.99546C0.898497 1.5158 1.23495 1.10583 1.66663 0.817392C2.09831 0.528953 2.60583 0.375 3.125 0.375C3.82119 0.375 4.48887 0.651562 4.98116 1.14384C5.47344 1.63613 5.75 2.30381 5.75 3Z" fill="#4F4F4F"/></svg></li>
                                <li>1 Helper</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xl-4 col-md-6 mb-4'>
                <div className='card-box'>
                    <div className='card-img position-relative'>
                        <span className='img'>
                            <Image src={Vehicle7} alt='' />
                        </span>
                        <div className='dropdown-box'>
                            <div className='com-dropdown dropdown'>
                                <Dropdown data-bs-theme="light" align={'end' }>
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="primary" >
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" fill="black" fill-opacity="0.2"/><path d="M22.625 20C22.625 20.5192 22.471 21.0267 22.1826 21.4584C21.8942 21.8901 21.4842 22.2265 21.0045 22.4252C20.5249 22.6239 19.9971 22.6758 19.4879 22.5746C18.9787 22.4733 18.511 22.2233 18.1438 21.8562C17.7767 21.489 17.5267 21.0213 17.4254 20.5121C17.3242 20.0029 17.3761 19.4751 17.5748 18.9955C17.7735 18.5158 18.11 18.1058 18.5416 17.8174C18.9733 17.529 19.4808 17.375 20 17.375C20.6962 17.375 21.3639 17.6516 21.8562 18.1438C22.3484 18.6361 22.625 19.3038 22.625 20ZM20 15.125C20.5192 15.125 21.0267 14.971 21.4584 14.6826C21.8901 14.3942 22.2265 13.9842 22.4252 13.5045C22.6239 13.0249 22.6758 12.4971 22.5746 11.9879C22.4733 11.4787 22.2233 11.011 21.8562 10.6438C21.489 10.2767 21.0213 10.0267 20.5121 9.92544C20.0029 9.82415 19.4751 9.87614 18.9955 10.0748C18.5158 10.2735 18.1058 10.61 17.8174 11.0416C17.529 11.4733 17.375 11.9808 17.375 12.5C17.375 13.1962 17.6516 13.8639 18.1438 14.3562C18.6361 14.8484 19.3038 15.125 20 15.125ZM20 24.875C19.4808 24.875 18.9733 25.029 18.5416 25.3174C18.11 25.6058 17.7735 26.0158 17.5748 26.4955C17.3761 26.9751 17.3242 27.5029 17.4254 28.0121C17.5267 28.5213 17.7767 28.989 18.1438 29.3562C18.511 29.7233 18.9787 29.9733 19.4879 30.0746C19.9971 30.1758 20.5249 30.1239 21.0045 29.9252C21.4842 29.7265 21.8942 29.3901 22.1826 28.9584C22.471 28.5267 22.625 28.0192 22.625 27.5C22.625 26.8038 22.3484 26.1361 21.8562 25.6438C21.3639 25.1516 20.6962 24.875 20 24.875Z" fill="white"/></svg>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className='dropdown-menu-end fixed-space' >
                                        <Dropdown.Item href="#">Mark Inactive</Dropdown.Item>
                                        <Dropdown.Item href="#">Mark active</Dropdown.Item>
                                        <Dropdown.Item href="#">View Profile</Dropdown.Item>
                                        <Dropdown.Item href="#" className='red-text'>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <div className='card-text'>
                        <h2>CR 1234-10 </h2>
                        <p>(2x1 AC Multi-excel Sleeper)</p>
                        <div className='btn-box d-flex align-items-center gap-2 justify-content-between'>
                            <div className='btn-left'>
                                <Link href="" className='Active btn-small'>Active</Link>
                            </div>
                            <ul className='d-flex align-items-center gap-2'>
                                <li>50 Seats</li>
                                <li><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3C5.75 3.51918 5.59605 4.02669 5.30761 4.45837C5.01917 4.89005 4.6092 5.2265 4.12955 5.42518C3.64989 5.62386 3.12209 5.67585 2.61289 5.57456C2.10369 5.47328 1.63596 5.22327 1.26885 4.85616C0.901733 4.48904 0.651726 4.02131 0.55044 3.51211C0.449154 3.00291 0.501137 2.47511 0.699817 1.99546C0.898497 1.5158 1.23495 1.10583 1.66663 0.817392C2.09831 0.528953 2.60583 0.375 3.125 0.375C3.82119 0.375 4.48887 0.651562 4.98116 1.14384C5.47344 1.63613 5.75 2.30381 5.75 3Z" fill="#4F4F4F"/></svg></li>
                                <li>2 Drivers</li>
                                <li><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3C5.75 3.51918 5.59605 4.02669 5.30761 4.45837C5.01917 4.89005 4.6092 5.2265 4.12955 5.42518C3.64989 5.62386 3.12209 5.67585 2.61289 5.57456C2.10369 5.47328 1.63596 5.22327 1.26885 4.85616C0.901733 4.48904 0.651726 4.02131 0.55044 3.51211C0.449154 3.00291 0.501137 2.47511 0.699817 1.99546C0.898497 1.5158 1.23495 1.10583 1.66663 0.817392C2.09831 0.528953 2.60583 0.375 3.125 0.375C3.82119 0.375 4.48887 0.651562 4.98116 1.14384C5.47344 1.63613 5.75 2.30381 5.75 3Z" fill="#4F4F4F"/></svg></li>
                                <li>1 Helper</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xl-4 col-md-6 mb-4'>
                <div className='card-box'>
                    <div className='card-img position-relative'>
                        <span className='img'>
                            <Image src={Vehicle8} alt='' />
                        </span>
                        <div className='dropdown-box'>
                            <div className='com-dropdown dropdown'>
                                <Dropdown data-bs-theme="light" align={'end' }>
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="primary" >
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" fill="black" fill-opacity="0.2"/><path d="M22.625 20C22.625 20.5192 22.471 21.0267 22.1826 21.4584C21.8942 21.8901 21.4842 22.2265 21.0045 22.4252C20.5249 22.6239 19.9971 22.6758 19.4879 22.5746C18.9787 22.4733 18.511 22.2233 18.1438 21.8562C17.7767 21.489 17.5267 21.0213 17.4254 20.5121C17.3242 20.0029 17.3761 19.4751 17.5748 18.9955C17.7735 18.5158 18.11 18.1058 18.5416 17.8174C18.9733 17.529 19.4808 17.375 20 17.375C20.6962 17.375 21.3639 17.6516 21.8562 18.1438C22.3484 18.6361 22.625 19.3038 22.625 20ZM20 15.125C20.5192 15.125 21.0267 14.971 21.4584 14.6826C21.8901 14.3942 22.2265 13.9842 22.4252 13.5045C22.6239 13.0249 22.6758 12.4971 22.5746 11.9879C22.4733 11.4787 22.2233 11.011 21.8562 10.6438C21.489 10.2767 21.0213 10.0267 20.5121 9.92544C20.0029 9.82415 19.4751 9.87614 18.9955 10.0748C18.5158 10.2735 18.1058 10.61 17.8174 11.0416C17.529 11.4733 17.375 11.9808 17.375 12.5C17.375 13.1962 17.6516 13.8639 18.1438 14.3562C18.6361 14.8484 19.3038 15.125 20 15.125ZM20 24.875C19.4808 24.875 18.9733 25.029 18.5416 25.3174C18.11 25.6058 17.7735 26.0158 17.5748 26.4955C17.3761 26.9751 17.3242 27.5029 17.4254 28.0121C17.5267 28.5213 17.7767 28.989 18.1438 29.3562C18.511 29.7233 18.9787 29.9733 19.4879 30.0746C19.9971 30.1758 20.5249 30.1239 21.0045 29.9252C21.4842 29.7265 21.8942 29.3901 22.1826 28.9584C22.471 28.5267 22.625 28.0192 22.625 27.5C22.625 26.8038 22.3484 26.1361 21.8562 25.6438C21.3639 25.1516 20.6962 24.875 20 24.875Z" fill="white"/></svg>
                                    </Dropdown.Toggle>


                                    <Dropdown.Menu className='dropdown-menu-end fixed-space' >
                                        <Dropdown.Item href="#">Mark Inactive</Dropdown.Item>
                                        <Dropdown.Item href="#">Mark active</Dropdown.Item>
                                        <Dropdown.Item href="#">View Profile</Dropdown.Item>
                                        <Dropdown.Item href="#" className='red-text'>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <div className='card-text'>
                        <h2>CR 1234-10 </h2>
                        <p>(2x1 AC Multi-excel Sleeper)</p>
                        <div className='btn-box d-flex align-items-center gap-2 justify-content-between'>
                            <div className='btn-left'>
                                <Link href="" className='Active btn-small'>Active</Link>
                            </div>
                            <ul className='d-flex align-items-center gap-2'>
                                <li>50 Seats</li>
                                <li><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3C5.75 3.51918 5.59605 4.02669 5.30761 4.45837C5.01917 4.89005 4.6092 5.2265 4.12955 5.42518C3.64989 5.62386 3.12209 5.67585 2.61289 5.57456C2.10369 5.47328 1.63596 5.22327 1.26885 4.85616C0.901733 4.48904 0.651726 4.02131 0.55044 3.51211C0.449154 3.00291 0.501137 2.47511 0.699817 1.99546C0.898497 1.5158 1.23495 1.10583 1.66663 0.817392C2.09831 0.528953 2.60583 0.375 3.125 0.375C3.82119 0.375 4.48887 0.651562 4.98116 1.14384C5.47344 1.63613 5.75 2.30381 5.75 3Z" fill="#4F4F4F"/></svg></li>
                                <li>2 Drivers</li>
                                <li><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3C5.75 3.51918 5.59605 4.02669 5.30761 4.45837C5.01917 4.89005 4.6092 5.2265 4.12955 5.42518C3.64989 5.62386 3.12209 5.67585 2.61289 5.57456C2.10369 5.47328 1.63596 5.22327 1.26885 4.85616C0.901733 4.48904 0.651726 4.02131 0.55044 3.51211C0.449154 3.00291 0.501137 2.47511 0.699817 1.99546C0.898497 1.5158 1.23495 1.10583 1.66663 0.817392C2.09831 0.528953 2.60583 0.375 3.125 0.375C3.82119 0.375 4.48887 0.651562 4.98116 1.14384C5.47344 1.63613 5.75 2.30381 5.75 3Z" fill="#4F4F4F"/></svg></li>
                                <li>1 Helper</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-12 mt-4 mb-4'>
                <Link href="" className='btn-load-more d-flex align-items-center gap-2 justify-content-center'>
                    <span>Load More</span>
                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="16" transform="matrix(0 -1 -1 0 32.5 32)" fill="#F6F6F6"/><path d="M11.8535 11.1463C11.807 11.0999 11.7519 11.063 11.6912 11.0379C11.6305 11.0128 11.5654 10.9998 11.4997 10.9998C11.434 10.9998 11.369 11.0128 11.3083 11.0379C11.2476 11.063 11.1924 11.0999 11.146 11.1463C11.0995 11.1928 11.0627 11.248 11.0375 11.3086C11.0124 11.3693 10.9994 11.4344 10.9994 11.5001C10.9994 11.5658 11.0124 11.6308 11.0375 11.6915C11.0627 11.7522 11.0995 11.8074 11.146 11.8538L16.146 16.8538C16.1924 16.9003 16.2476 16.9372 16.3083 16.9624C16.369 16.9875 16.434 17.0005 16.4997 17.0005C16.5654 17.0005 16.6305 16.9875 16.6912 16.9624C16.7519 16.9372 16.807 16.9003 16.8535 16.8538L21.8535 11.8538C21.9473 11.76 22 11.6328 22 11.5001C22 11.3674 21.9473 11.2402 21.8535 11.1463C21.7597 11.0525 21.6324 10.9998 21.4997 10.9998C21.367 10.9998 21.2398 11.0525 21.146 11.1463L16.4997 15.7932L11.8535 11.1463ZM16.4997 20.7932L21.146 16.1463C21.2398 16.0525 21.367 15.9998 21.4997 15.9998C21.6324 15.9998 21.7597 16.0525 21.8535 16.1463C21.9473 16.2402 22 16.3674 22 16.5001C22 16.6328 21.9473 16.76 21.8535 16.8538L16.8535 21.8538C16.807 21.9003 16.7519 21.9372 16.6912 21.9624C16.6305 21.9875 16.5654 22.0005 16.4997 22.0005C16.434 22.0005 16.369 21.9875 16.3083 21.9624C16.2476 21.9372 16.1924 21.9003 16.146 21.8538L11.146 16.8538C11.0995 16.8074 11.0627 16.7522 11.0375 16.6915C11.0124 16.6308 10.9994 16.5658 10.9994 16.5001C10.9994 16.4344 11.0124 16.3693 11.0375 16.3086C11.0627 16.248 11.0995 16.1928 11.146 16.1463C11.1924 16.0999 11.2476 16.063 11.3083 16.0379C11.369 16.0128 11.434 15.9998 11.4997 15.9998C11.5654 15.9998 11.6305 16.0128 11.6912 16.0379C11.7519 16.063 11.807 16.0999 11.8535 16.1463L16.4997 20.7932Z" fill="#652669"/></svg>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default VehiclesCard