'use client'
import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import BusCard1 from '../../../../public/images/vehicle-01.png'
import BusCard2 from '../../../../public/images/vehicle-02.png'
import BusCard3 from '../../../../public/images/vehicle-03.png'
import BusCard4 from '../../../../public/images/vehicle-04.png'

const RouteDetailsBottom = () => {
  return (
    <div className='operatorProfile-from  route-details-bottom-sec card-box'>
        <div className='row'>
            <div className='col-lg-12'>
                <div className='table-top d-flex flex-md-nowrap flex-wrap align-items-center justify-content-between gap-3'>
                    <div className='left-table  position-relative'>
                        <h2>Assigned Busses to the Route</h2>
                    </div>
                    <div className='right-box'>
                        <Link href="" className='btn btn-edit d-flex align-items-center gap-2'>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.66699 19.2501H18.3337M5.19416 12.0881C4.80331 12.4799 4.58376 13.0106 4.58366 13.564V16.5001H7.53808C8.09174 16.5001 8.62249 16.2801 9.01391 15.8877L17.7222 7.17481C18.113 6.78303 18.3324 6.25229 18.3324 5.69898C18.3324 5.14567 18.113 4.61493 17.7222 4.22315L16.8624 3.36148C16.6685 3.16747 16.4382 3.01358 16.1848 2.90862C15.9314 2.80365 15.6598 2.74967 15.3855 2.74976C15.1112 2.74984 14.8396 2.80399 14.5862 2.90911C14.3329 3.01424 14.1027 3.16827 13.9089 3.3624L5.19416 12.0881Z" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            <span>Edit Details</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-xxl-3 col-xl-4 col-md-6 mb-4'>
                <div className='bus-details-box'>
                    <div className='bus-card-img'>
                        <Image src={BusCard1} alt=''></Image>
                    </div>
                    <div className='but-card-text'>
                        <h6>CR 1234-10 </h6>
                        <p>(2x1 AC Multi-excel Sleeper)</p>
                        <ul className="d-flex align-items-center gap-2 m-0">
                            <li>50 Seats</li>
                            <li><svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2C4 2.39556 3.8827 2.78224 3.66294 3.11114C3.44318 3.44004 3.13082 3.69638 2.76537 3.84776C2.39991 3.99913 1.99778 4.03874 1.60982 3.96157C1.22186 3.8844 0.865492 3.69392 0.585787 3.41421C0.306083 3.13451 0.115601 2.77814 0.0384303 2.39018C-0.0387401 2.00222 0.000866566 1.60009 0.152242 1.23463C0.303617 0.869181 0.559962 0.556823 0.88886 0.337061C1.21776 0.117298 1.60444 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2Z" fill="#838383"></path></svg></li>
                            <li>3 Staff</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-xxl-3 col-xl-4 col-md-6 mb-4'>
                <div className='bus-details-box'>
                    <div className='bus-card-img'>
                        <Image src={BusCard2} alt=''></Image>
                    </div>
                    <div className='but-card-text'>
                        <h6>CR 1234-10 </h6>
                        <p>(2x1 AC Multi-excel Sleeper)</p>
                        <ul className="d-flex align-items-center gap-2 m-0">
                            <li>50 Seats</li>
                            <li><svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2C4 2.39556 3.8827 2.78224 3.66294 3.11114C3.44318 3.44004 3.13082 3.69638 2.76537 3.84776C2.39991 3.99913 1.99778 4.03874 1.60982 3.96157C1.22186 3.8844 0.865492 3.69392 0.585787 3.41421C0.306083 3.13451 0.115601 2.77814 0.0384303 2.39018C-0.0387401 2.00222 0.000866566 1.60009 0.152242 1.23463C0.303617 0.869181 0.559962 0.556823 0.88886 0.337061C1.21776 0.117298 1.60444 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2Z" fill="#838383"></path></svg></li>
                            <li>3 Staff</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-xxl-3 col-xl-4 col-md-6 mb-4'>
                <div className='bus-details-box'>
                    <div className='bus-card-img'>
                        <Image src={BusCard3} alt=''></Image>
                    </div>
                    <div className='but-card-text'>
                        <h6>CR 1234-10 </h6>
                        <p>(2x1 AC Multi-excel Sleeper)</p>
                        <ul className="d-flex align-items-center gap-2 m-0">
                            <li>50 Seats</li>
                            <li><svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2C4 2.39556 3.8827 2.78224 3.66294 3.11114C3.44318 3.44004 3.13082 3.69638 2.76537 3.84776C2.39991 3.99913 1.99778 4.03874 1.60982 3.96157C1.22186 3.8844 0.865492 3.69392 0.585787 3.41421C0.306083 3.13451 0.115601 2.77814 0.0384303 2.39018C-0.0387401 2.00222 0.000866566 1.60009 0.152242 1.23463C0.303617 0.869181 0.559962 0.556823 0.88886 0.337061C1.21776 0.117298 1.60444 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2Z" fill="#838383"></path></svg></li>
                            <li>3 Staff</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-xxl-3 col-xl-4 col-md-6 mb-4'>
                <div className='bus-details-box'>
                    <div className='bus-card-img'>
                        <Image src={BusCard4} alt=''></Image>
                    </div>
                    <div className='but-card-text'>
                        <h6>CR 1234-10 </h6>
                        <p>(2x1 AC Multi-excel Sleeper)</p>
                        <ul className="d-flex align-items-center gap-2 m-0">
                            <li>50 Seats</li>
                            <li><svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2C4 2.39556 3.8827 2.78224 3.66294 3.11114C3.44318 3.44004 3.13082 3.69638 2.76537 3.84776C2.39991 3.99913 1.99778 4.03874 1.60982 3.96157C1.22186 3.8844 0.865492 3.69392 0.585787 3.41421C0.306083 3.13451 0.115601 2.77814 0.0384303 2.39018C-0.0387401 2.00222 0.000866566 1.60009 0.152242 1.23463C0.303617 0.869181 0.559962 0.556823 0.88886 0.337061C1.21776 0.117298 1.60444 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2Z" fill="#838383"></path></svg></li>
                            <li>3 Staff</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-xxl-3 col-xl-4 col-md-6 mb-4'>
                <div className='bus-details-box'>
                    <div className='bus-card-img'>
                        <Image src={BusCard1} alt=''></Image>
                    </div>
                    <div className='but-card-text'>
                        <h6>CR 1234-10 </h6>
                        <p>(2x1 AC Multi-excel Sleeper)</p>
                        <ul className="d-flex align-items-center gap-2 m-0">
                            <li>50 Seats</li>
                            <li><svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2C4 2.39556 3.8827 2.78224 3.66294 3.11114C3.44318 3.44004 3.13082 3.69638 2.76537 3.84776C2.39991 3.99913 1.99778 4.03874 1.60982 3.96157C1.22186 3.8844 0.865492 3.69392 0.585787 3.41421C0.306083 3.13451 0.115601 2.77814 0.0384303 2.39018C-0.0387401 2.00222 0.000866566 1.60009 0.152242 1.23463C0.303617 0.869181 0.559962 0.556823 0.88886 0.337061C1.21776 0.117298 1.60444 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2Z" fill="#838383"></path></svg></li>
                            <li>3 Staff</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-xxl-3 col-xl-4 col-md-6 mb-4'>
                <div className='bus-details-box'>
                    <div className='bus-card-img'>
                        <Image src={BusCard2} alt=''></Image>
                    </div>
                    <div className='but-card-text'>
                        <h6>CR 1234-10 </h6>
                        <p>(2x1 AC Multi-excel Sleeper)</p>
                        <ul className="d-flex align-items-center gap-2 m-0">
                            <li>50 Seats</li>
                            <li><svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2C4 2.39556 3.8827 2.78224 3.66294 3.11114C3.44318 3.44004 3.13082 3.69638 2.76537 3.84776C2.39991 3.99913 1.99778 4.03874 1.60982 3.96157C1.22186 3.8844 0.865492 3.69392 0.585787 3.41421C0.306083 3.13451 0.115601 2.77814 0.0384303 2.39018C-0.0387401 2.00222 0.000866566 1.60009 0.152242 1.23463C0.303617 0.869181 0.559962 0.556823 0.88886 0.337061C1.21776 0.117298 1.60444 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2Z" fill="#838383"></path></svg></li>
                            <li>3 Staff</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-xxl-3 col-xl-4 col-md-6 mb-4'>
                <div className='bus-details-box'>
                    <div className='bus-card-img'>
                        <Image src={BusCard3} alt=''></Image>
                    </div>
                    <div className='but-card-text'>
                        <h6>CR 1234-10 </h6>
                        <p>(2x1 AC Multi-excel Sleeper)</p>
                        <ul className="d-flex align-items-center gap-2 m-0">
                            <li>50 Seats</li>
                            <li><svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2C4 2.39556 3.8827 2.78224 3.66294 3.11114C3.44318 3.44004 3.13082 3.69638 2.76537 3.84776C2.39991 3.99913 1.99778 4.03874 1.60982 3.96157C1.22186 3.8844 0.865492 3.69392 0.585787 3.41421C0.306083 3.13451 0.115601 2.77814 0.0384303 2.39018C-0.0387401 2.00222 0.000866566 1.60009 0.152242 1.23463C0.303617 0.869181 0.559962 0.556823 0.88886 0.337061C1.21776 0.117298 1.60444 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2Z" fill="#838383"></path></svg></li>
                            <li>3 Staff</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-xxl-3 col-xl-4 col-md-6 mb-4'>
                <div className='bus-details-box'>
                    <div className='bus-card-img'>
                        <Image src={BusCard4} alt=''></Image>
                    </div>
                    <div className='but-card-text'>
                        <h6>CR 1234-10 </h6>
                        <p>(2x1 AC Multi-excel Sleeper)</p>
                        <ul className="d-flex align-items-center gap-2 m-0">
                            <li>50 Seats</li>
                            <li><svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2C4 2.39556 3.8827 2.78224 3.66294 3.11114C3.44318 3.44004 3.13082 3.69638 2.76537 3.84776C2.39991 3.99913 1.99778 4.03874 1.60982 3.96157C1.22186 3.8844 0.865492 3.69392 0.585787 3.41421C0.306083 3.13451 0.115601 2.77814 0.0384303 2.39018C-0.0387401 2.00222 0.000866566 1.60009 0.152242 1.23463C0.303617 0.869181 0.559962 0.556823 0.88886 0.337061C1.21776 0.117298 1.60444 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2Z" fill="#838383"></path></svg></li>
                            <li>3 Staff</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RouteDetailsBottom