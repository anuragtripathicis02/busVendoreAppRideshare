'use client'
import React, { useState } from 'react'
import '../../../app/flags.css'
import { Form, Button, Dropdown } from 'react-bootstrap';
import LanguageSwitcher from '../Login/LanguageSwitcher';
import LanguageSwitcherCountryName from '@/app/LanguageSwitcherCountryName'

interface Props {
    nextStep: () => void;
}

const ContactPersonDetails  : React.FC<Props> = ({ nextStep }) => {
    return (
      <div className='card-box'>
          <Form>
            <div className='row'>
              <div className='col-md-6'>
                <div className="form-group mb-24">
                    <Form.Label >Contact person Name</Form.Label>
                    <Form.Control type="text" placeholder='John Doe' />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="form-group mb-24">
                    <Form.Label >Designation</Form.Label>
                    <Form.Control type="text" placeholder='Founder' />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="flag-box form-group mb-16">
                  <Form.Label className='fw-mediam'>Contact Number</Form.Label>
                  <div className="d-flex border-outer">
                    <LanguageSwitcher />
                    <div className="flex-grow-1">
                      <Form.Control type="text" aria-describedby="" placeholder='1234567890' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className="form-group mb-24">
                    <Form.Label >Email Address</Form.Label>
                    <Form.Control type="text" placeholder='Squchapplication@gmail.com' />
                </div>
              </div>
              
            </div>
            <div className='footer-step-form d-flex justify-content-end'>
                <Button variant="primary" onClick={nextStep} className="btn btn-next-box">
                Save & Next
                </Button>
            </div>
    
          </Form>
        </div>
    );
  };

export default ContactPersonDetails