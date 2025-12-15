'use client'
import React from 'react'
import bgImage from '../../../../public/images/bg-image.png'
import ImageBuilding from '../../../../public/images/city-building.png'
import logoFormWhite from '../../../../public/images/logo-white.png'
import logoForm from '../../../../public/images/logo-bus-vender.png'
import Image from "next/image";
import Link from 'next/link';

import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import '../../../app/flags.css'
import LanguageSwitcher from '../Login/LanguageSwitcher'



const Home = () => {

  return (
    <div className='d-flex flex-wrap auth-wrapper'>
      <div className='auth-info d-lg-block d-none' style={{ backgroundImage: "url('../../images/bg-image.png')" }}>
          <div className='auth-logo '>
            <Image src={logoFormWhite} alt='' />
          </div>
      </div>
      <div className='auth-form'>
        <div className='toggle-arrow'>
          <button className='btn btn-white'>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.7593 7.90723L4.66602 16.0006L12.7593 24.0939" stroke="#652669" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M27.3326 16H4.89258" stroke="#652669" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
        <div className='auth-banner-wrapper'>
          <div className='auth-banner'>
            <div className='auth-img d-lg-block d-none'>
              <Image src={ImageBuilding} alt='' />
            </div> 
          </div>
          <div className='card card-auth-form'>
            <div className='block-head text-center'>
            <div className='auth-logo d-lg-none d-block mb-4'>
              <Image src={logoForm} alt='' />
            </div>
              <h2 className='form-title'>Forget password</h2>
              <p>Locked out? Don’t stress — just drop your email or phone number here, and we’ll help you reset your password in no time.</p>
            </div>

            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Nav variant="pills" className="d-flex justify-content-between align-items-center auth-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Using Email</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Using Phone</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div className="form-group mb-32">
                    <Form.Label >Your Email or Phone</Form.Label>
                    <Form.Control type="text" placeholder='Johnsmith1001@gmail.com' />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div className="flag-box form-group mb-32">
                    <Form.Label className='fw-mediam'>Your Email or Phone</Form.Label>
                    <div className="d-flex border-outer">
                      <LanguageSwitcher />
                      <div className="flex-grow-1">
                        <Form.Control type="text" aria-describedby="" placeholder='12345 12345' />
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <button className="btn btn-secondary w-100">Continue</button>
              </Tab.Content>
            </Tab.Container>


          </div>
          <div className='copyright-text text-center'>© 2024, SQUCH - Control Panel. All rights reserved.</div>
        </div>
      </div>
    </div>
  )
}

export default Home
