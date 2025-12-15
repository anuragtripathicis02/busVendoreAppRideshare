'use client'
import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import '../../../app/flags.css';
import { Form } from 'react-bootstrap'
import LanguageSwitcher from '../Login/LanguageSwitcher'
import LanguageSwitcherCountryName from '@/app/LanguageSwitcherCountryName';
import DatePickers from '@/components/DatePickers';
import BusCur from '../../../../public/images/bus-sq.png'

const OperatorProfileForm = () => {
  return (
    <div className='operatorProfile-from mb-4'>
         <div className='card-box mb-4'>
            <div className='table-top d-flex flex-md-nowrap flex-wrap align-items-center justify-content-between gap-3'>
                <div className='left-table  position-relative'>
                    <h2>Basic Details</h2>
                </div>
                <div className='right-box'>
                    <Link href="" className='btn btn-edit d-flex align-items-center gap-2'>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.66699 19.2501H18.3337M5.19416 12.0881C4.80331 12.4799 4.58376 13.0106 4.58366 13.564V16.5001H7.53808C8.09174 16.5001 8.62249 16.2801 9.01391 15.8877L17.7222 7.17481C18.113 6.78303 18.3324 6.25229 18.3324 5.69898C18.3324 5.14567 18.113 4.61493 17.7222 4.22315L16.8624 3.36148C16.6685 3.16747 16.4382 3.01358 16.1848 2.90862C15.9314 2.80365 15.6598 2.74967 15.3855 2.74976C15.1112 2.74984 14.8396 2.80399 14.5862 2.90911C14.3329 3.01424 14.1027 3.16827 13.9089 3.3624L5.19416 12.0881Z" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        <span>Edit Details</span>
                    </Link>
                </div>
            </div>
           <div className='from-bottom-box'>
                <Form>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <div className="form-group mb-24">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="text" placeholder='Bank name here' />
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="flag-box form-group mb-24">
                                        <Form.Label className='fw-mediam'>Contact Number</Form.Label>
                                        <div className="d-flex border-outer">
                                            <LanguageSwitcher />
                                            <div className="flex-grow-1">
                                                <Form.Control type="text" aria-describedby="" placeholder='1234567890' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="form-group mb-24">
                                        <Form.Label>Email Account</Form.Label>
                                        <Form.Control type="email" placeholder='operatorname@gmail.com' />
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="form-group mb-1">
                                        <Form.Label>Date of Birth</Form.Label>
                                        <DatePickers />
                                    </div>
                                </div> 
                                <div className='col-md-4'>
                                    <div className='position-relative location-lung-box'>
                                        <div className="form-group mb-24">
                                            <Form.Label >Country</Form.Label>
                                            <LanguageSwitcherCountryName  paramKey="lang1"/>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="form-group mb-24">
                                        <Form.Label >City</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>-- Select a City --</option>
                                            <option value="1">Ostin </option>
                                            <option value="2">Ostin old</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="form-group mb-24 mb-md-0">
                                        <Form.Label >Zip Code</Form.Label>
                                        <Form.Control type="text" placeholder='123456' />
                                    </div>
                                </div>
                                <div className='col-md-8'>
                                    <div className="form-group mb-0">
                                        <Form.Label >Address</Form.Label>
                                        <Form.Control type="text" placeholder='Enter full Address' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
           </div>
        </div>
        
        <div className='row'>
            <div className='col-lg-8 col-md-12 mb-lg-0 mb-4'>
                <div className='card-box'>
                    <div className='table-top d-flex flex-md-nowrap flex-wrap align-items-center justify-content-between gap-3'>
                        <div className='left-table  position-relative'>
                            <h2>Operator Payout Details</h2>
                        </div>
                        <div className='right-box'>
                            <Link href="" className='btn btn-edit d-flex align-items-center gap-2'>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.66699 19.2501H18.3337M5.19416 12.0881C4.80331 12.4799 4.58376 13.0106 4.58366 13.564V16.5001H7.53808C8.09174 16.5001 8.62249 16.2801 9.01391 15.8877L17.7222 7.17481C18.113 6.78303 18.3324 6.25229 18.3324 5.69898C18.3324 5.14567 18.113 4.61493 17.7222 4.22315L16.8624 3.36148C16.6685 3.16747 16.4382 3.01358 16.1848 2.90862C15.9314 2.80365 15.6598 2.74967 15.3855 2.74976C15.1112 2.74984 14.8396 2.80399 14.5862 2.90911C14.3329 3.01424 14.1027 3.16827 13.9089 3.3624L5.19416 12.0881Z" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <span>Edit Details</span>
                            </Link>
                        </div>
                    </div>
                    <div className='from-bottom-box'>
                            <Form>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className="form-group mb-24">
                                                    <Form.Label >Payout Type</Form.Label>
                                                    <Form.Select aria-label="Default select example">
                                                        <option>Bank Payout</option>
                                                        <option value="1">Bank Payout 1 </option>
                                                        <option value="2">Bank Payout 2</option>
                                                    </Form.Select>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="form-group mb-24">
                                                    <Form.Label >Payout Frequency</Form.Label>
                                                    <Form.Select aria-label="Default select example">
                                                        <option>Weekly</option>
                                                        <option value="1">Weekly 1 </option>
                                                        <option value="2">Weekly 2</option>
                                                    </Form.Select>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="form-group mb-24">
                                                    <Form.Label >Bank Name</Form.Label>
                                                    <Form.Select aria-label="Default select example">
                                                        <option>Bank name here</option>
                                                        <option value="1">Bank name here 1 </option>
                                                        <option value="2">Bank name here 2</option>
                                                    </Form.Select>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="form-group mb-24">
                                                    <Form.Label >Branch Name</Form.Label>
                                                    <Form.Select aria-label="Default select example">
                                                        <option>Branch name here</option>
                                                        <option value="1">Branch name here 1 </option>
                                                        <option value="2">Branch name here 2</option>
                                                    </Form.Select>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="form-group mb-24">
                                                    <Form.Label>Account Number</Form.Label>
                                                    <Form.Control type="text" placeholder='12345678901234' />
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="form-group mb-24">
                                                    <Form.Label >IFSC Code</Form.Label>
                                                    <Form.Control type="text" placeholder='12345678901234' />
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="form-group mb-24 mb-md-0">
                                                    <Form.Label>SWIFT Code</Form.Label>
                                                    <Form.Control type="email" placeholder='12345678901234' />
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="form-group ">
                                                    <Form.Label>IBAN Code</Form.Label>
                                                    <Form.Control type="email" placeholder='12345678901234' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 col-md-12 mb-lg-0 mb-4'>
                <div className='sec-bus-card-list sec-gap confirm-booking-sec'>
                    <div className='card bus-card-item mb-4'>
                        <div className='table-top profile-height d-flex align-items-center justify-content-between gap-3'>
                            <div className='left-table  position-relative'>
                                <h2>Vehicle Details</h2>
                            </div>
                        </div>
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
                        <div className='left-adminImg text-center mt-2'> 
                            <div className='admin-text-list-bottom'>
                                <div className='admin-text'>
                                    <ul className='d-flex align-items-center justify-content-between gap-2 m-0'>
                                        <li>50 Seats</li>
                                        <li>
                                            <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2C4 2.39556 3.8827 2.78224 3.66294 3.11114C3.44318 3.44004 3.13082 3.69638 2.76537 3.84776C2.39991 3.99913 1.99778 4.03874 1.60982 3.96157C1.22186 3.8844 0.865492 3.69392 0.585787 3.41421C0.306083 3.13451 0.115601 2.77814 0.0384303 2.39018C-0.0387401 2.00222 0.000866566 1.60009 0.152242 1.23463C0.303617 0.869181 0.559962 0.556823 0.88886 0.337061C1.21776 0.117298 1.60444 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2Z" fill="#838383"/></svg>
                                        </li>
                                        <li>2 Drivers</li>
                                        <li>
                                            <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2C4 2.39556 3.8827 2.78224 3.66294 3.11114C3.44318 3.44004 3.13082 3.69638 2.76537 3.84776C2.39991 3.99913 1.99778 4.03874 1.60982 3.96157C1.22186 3.8844 0.865492 3.69392 0.585787 3.41421C0.306083 3.13451 0.115601 2.77814 0.0384303 2.39018C-0.0387401 2.00222 0.000866566 1.60009 0.152242 1.23463C0.303617 0.869181 0.559962 0.556823 0.88886 0.337061C1.21776 0.117298 1.60444 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2Z" fill="#838383"/></svg>
                                        </li>
                                        <li>1 Helping staff</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OperatorProfileForm