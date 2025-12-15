'use client'
import React, { useState } from 'react';
import Image from "next/image";
import { Container} from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Link from 'next/link';
import Footer from '@/components/Footer';
import VahicleDetails from './VahicleDetails';
import VahicleGallery from './VahicleGallery';
import BusInfo from './BusInfo';
import SettingSeats from './SettingSeats';
import SleeperSeats from './SleeperSeats';

const Home = () => {
  return (
    <div className='vehicle-page'>
      <div className='booking-sec height-fixed-main d-flex flex-column'>
          <div className='dashboard-pages-heading Breadcrumb-sec'>
            <div className='page-details d-flex align-items-center gap-2'>
                <Link href="" className="btn-back">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.56951 5.92969L3.49951 11.9997L9.56951 18.0697" stroke="#652669" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.5004 12H3.67041" stroke="#652669" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </Link>
                <div className='left-details-heading'>
                    <h2>Vehicle Details</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">
                            Vehicle
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Vehicle Information</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
          </div>
          <div className='vehicle-sec mt-4'>
              <div className='vehicle-details-sec'>
                <VahicleDetails />
              </div>
              <div className='information-bus'>
                <BusInfo />
              </div>
              <div className='row'>
                <div className='col-xl-7 col-md-12'>
                  <div className='vehicle-gallery'>
                    <VahicleGallery />
                  </div>
                </div>
                <div className='col-xl-5 col-md-12 mt-xl-0 mt-4'>
                  <div className='bust-seats-sec bus-info-booking'>
                      <div className='table-top d-flex flex-md-nowrap flex-wrap align-items-center justify-content-between mt-0 pt-0 gap-3'>
                          <div className='left-table position-relative'>
                              <h4>2x1, 2 Story <br />(Sleeper & Sitter)</h4>
                          </div>
                          <div className='right-box'>
                              <Link href="" className='btn btn-edit d-flex align-items-center bg-white border-grey gap-2'>
                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.66699 17.2498H16.3337M3.19416 10.0879C2.80331 10.4796 2.58376 11.0104 2.58366 11.5637V14.4998H5.53808C6.09174 14.4998 6.62249 14.2798 7.01391 13.8875L15.7222 5.17457C16.113 4.78278 16.3324 4.25205 16.3324 3.69874C16.3324 3.14542 16.113 2.61469 15.7222 2.2229L14.8624 1.36124C14.6685 1.16723 14.4382 1.01334 14.1848 0.908374C13.9314 0.803409 13.6598 0.749427 13.3855 0.749512C13.1112 0.749597 12.8396 0.803748 12.5862 0.90887C12.3329 1.01399 12.1027 1.16802 11.9089 1.36215L3.19416 10.0879Z" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                              <span>Edit Details</span>
                              </Link>
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col-md-6 mt-md-0 mb-md-0  mb-3'>
                              <div className='setting-seats '>
                                  <SettingSeats />
                                  <h3 className='text-center'>1st Story</h3>
                              </div>
                          </div>
                          <div className='col-md-6  mt-md-0 mb-md-0 mb-3'>
                              <div className='sleeper-seats'>
                                  <SleeperSeats />
                                  <h3 className='text-center'>2nd Story</h3>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>  
            </div>
        </div>
      </div>
      <div className='footer-vendor text-center pt-4 pb-4'>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
