'use client'
import React, { useState } from 'react'
import Image from "next/image";
import BusCur from '../../../../public/images/bus-sq.png'
import Link from 'next/link';
import { DatePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { Form } from 'react-bootstrap';

const VehicleDetails = () => {
  const [time1, setTime1] = useState(null);
  const [time2, setTime2] = useState(null);

  return (
    <div className='vahicle-com-sec confirm-booking-sec'>
      <div className='row'>
        <div className='col-xl-8'>
          <div className='bus-card-item mb-4'>
            <div className='top-img position-relative'>
              <Image src={BusCur} alt='Bus Image' />
              <div className='Verified d-flex align-items-center gap-1'>
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.30033 7.46668L4.36699 6.53335C4.23366 6.40002 4.0781 6.33335 3.90033 6.33335C3.72255 6.33335 3.56699 6.40002 3.43366 6.53335C3.30033 6.66668 3.23366 6.82513 3.23366 7.00868C3.23366 7.19224 3.30033 7.35046 3.43366 7.48335L4.83366 8.90002C4.96699 9.03335 5.12255 9.10002 5.30033 9.10002C5.4781 9.10002 5.63366 9.03335 5.76699 8.90002L8.60033 6.06668C8.73366 5.93335 8.80033 5.77513 8.80033 5.59202C8.80033 5.40891 8.73366 5.25046 8.60033 5.11668C8.46699 4.98291 8.30877 4.91624 8.12566 4.91668C7.94255 4.91713 7.7841 4.98379 7.65033 5.11668L5.30033 7.46668ZM6.00033 13.6C5.92255 13.6 5.85033 13.5945 5.78366 13.5834C5.71699 13.5722 5.65033 13.5556 5.58366 13.5333C4.08366 13.0333 2.88921 12.1085 2.00033 10.7587C1.11144 9.40891 0.666992 7.95602 0.666992 6.40002V3.25002C0.666992 2.97224 0.747659 2.72224 0.908992 2.50002C1.07033 2.27779 1.27855 2.11668 1.53366 2.01668L5.53366 0.516683C5.68921 0.461127 5.84477 0.43335 6.00033 0.43335C6.15588 0.43335 6.31144 0.461127 6.46699 0.516683L10.467 2.01668C10.7225 2.11668 10.931 2.27779 11.0923 2.50002C11.2537 2.72224 11.3341 2.97224 11.3337 3.25002V6.40002C11.3337 7.95557 10.8892 9.40846 10.0003 10.7587C9.11144 12.1089 7.91699 13.0338 6.41699 13.5333C6.35033 13.5556 6.28366 13.5722 6.21699 13.5834C6.15033 13.5945 6.0781 13.6 6.00033 13.6Z" fill="white"/></svg> Verified
              </div>
            </div>
          </div>

          <div className='operatorProfile-from mb-4'>
            <div className='card-box mb-4'>
              <div className='table-top d-flex flex-md-nowrap flex-wrap align-items-center justify-content-between gap-3'>
                <div className='left-table position-relative'>
                  <h2>Route Details</h2>
                </div>
                <div className='right-box'>
                  <Link href="" className='btn btn-edit d-flex align-items-center gap-2'>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.66699 17.2498H16.3337M3.19416 10.0879C2.80331 10.4796 2.58376 11.0104 2.58366 11.5637V14.4998H5.53808C6.09174 14.4998 6.62249 14.2798 7.01391 13.8875L15.7222 5.17457C16.113 4.78278 16.3324 4.25205 16.3324 3.69874C16.3324 3.14542 16.113 2.61469 15.7222 2.2229L14.8624 1.36124C14.6685 1.16723 14.4382 1.01334 14.1848 0.908374C13.9314 0.803409 13.6598 0.749427 13.3855 0.749512C13.1112 0.749597 12.8396 0.803748 12.5862 0.90887C12.3329 1.01399 12.1027 1.16802 11.9089 1.36215L3.19416 10.0879Z" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    <span>Edit Details</span>
                  </Link>
                </div>
              </div>
              
              <div className='card-bottom'>
                <h5>Select Route</h5>
                    <div className='route-box'>
                    <h6>Route#172</h6>
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

            
              <div className='time-box'>
                <div className='row'>
                    <div className='col-md-6 mb-md-0 mb-4'>
                        <div className='time-card'>
                            <Form.Label className='d-block'>Departure Time</Form.Label>
                            <DatePicker format="HH:mm" value={time1} onChange={setTime1} placeholder="Select time 1"  className='w-100'/>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='time-card'>
                            <Form.Label className='d-block' >Estimate Journey Time</Form.Label>
                            <DatePicker format="HH:mm" value={time2} onChange={setTime2} placeholder="Select time 2" className='w-100'/>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-4 '>
            <div className='card-box mb-4 operatorProfile-from '>
                
              <div className='table-top d-flex flex-md-nowrap flex-wrap align-items-center justify-content-between mt-0 pt-0 gap-3'>
                <div className='left-table position-relative'>
                  <h2>Bus Info</h2>
                </div>
                <div className='right-box'>
                  <Link href="" className='btn btn-edit d-flex align-items-center gap-2'>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.66699 17.2498H16.3337M3.19416 10.0879C2.80331 10.4796 2.58376 11.0104 2.58366 11.5637V14.4998H5.53808C6.09174 14.4998 6.62249 14.2798 7.01391 13.8875L15.7222 5.17457C16.113 4.78278 16.3324 4.25205 16.3324 3.69874C16.3324 3.14542 16.113 2.61469 15.7222 2.2229L14.8624 1.36124C14.6685 1.16723 14.4382 1.01334 14.1848 0.908374C13.9314 0.803409 13.6598 0.749427 13.3855 0.749512C13.1112 0.749597 12.8396 0.803748 12.5862 0.90887C12.3329 1.01399 12.1027 1.16802 11.9089 1.36215L3.19416 10.0879Z" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    <span>Edit Details</span>
                  </Link>
                </div>
              </div>

                <Form>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className="form-group mb-24">
                                <Form.Label >Vehicle Company</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Volvo</option>
                                    <option value="1">Volvo one </option>
                                    <option value="2">Volvo two</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className="form-group mb-24">
                                <Form.Label >Model Number</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>-- select model --</option>
                                    <option value="1">Model Number one </option>
                                    <option value="2">Model Number two</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className="form-group mb-24">
                                <Form.Label >Select Bus Type</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Seater</option>
                                    <option value="1">Seater one </option>
                                    <option value="2">Seater two</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className="form-group mb-24">
                                <Form.Label >Vehicle Colour</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>White</option>
                                    <option value="1">White one </option>
                                    <option value="2">White two</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className="form-group mb-24">
                                <Form.Label>Licence Plat Number</Form.Label>
                                <Form.Control type="text" placeholder='1234567890' />
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className="form-group mb-24">
                                <Form.Label>VIN Number</Form.Label>
                                <Form.Control type="text" placeholder='1234567890' />
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
