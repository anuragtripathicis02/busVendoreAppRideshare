'use client';

import '../../../app/flags.css';
import React, { useRef, useState } from 'react';
import '../../../app/flags.css'
import { Form, Button } from 'react-bootstrap';
import DatePickers from '@/components/DatePickers';
import LanguageSwitcher from '../Login/LanguageSwitcher';
import { Checkbox } from 'rsuite';

interface Props {
  nextStep: () => void;
}

const TaxRegistrationForm: React.FC<Props> = ({ nextStep }) => {
  return (
    <div className='card-box'>
      <Form>
        <div className='row'>
          <div className='col-lg-4 col-md-6'>
            <div className="form-group mb-24 mb-md-0">
                <Form.Label>Contact person Name</Form.Label>
                <Form.Control type="text" placeholder='John Doe' />
              </div>
          </div>
          <div className='col-lg-4 col-md-6'>
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

          <div className='col-lg-4 col-md-6'>
            <div className="form-group mb-24 mb-md-0">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="text" placeholder='Squchapplication@gmail.com' />
              </div>
          </div>
          
          <div className='col-md-12'>
            <div className="form-group mb-24 text-checkbox-condition">
              <Form.Check
                type="checkbox"
                id="default-checkbox"
                label="Same as Vendor Info"
              />
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

export default TaxRegistrationForm;
