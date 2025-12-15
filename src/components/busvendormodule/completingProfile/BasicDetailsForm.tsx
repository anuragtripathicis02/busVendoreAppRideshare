'use client'
import React, { useState } from 'react'
import '../../../app/flags.css'
import { Form, Button, Dropdown } from 'react-bootstrap';
import LanguageSwitcher from '../Login/LanguageSwitcher';
import LanguageSwitcherCountryName from '@/app/LanguageSwitcherCountryName'

interface Props {
    nextStep: () => void;
  }
  
  const BasicDetailsForm: React.FC<Props> = ({ nextStep }) => {
  return (
    <div className='card-box'>
      <Form>
        <div className='row'>
          <div className='col-md-12'>
            <div className="form-group mb-24">
                <Form.Label >Company Name</Form.Label>
                <Form.Control type="text" placeholder='Squch application pvt. ltd.' />
            </div>
          </div>
          <div className='col-md-6'>
            <div className="flag-box form-group mb-16">
              <Form.Label className='fw-mediam'>Contact Number</Form.Label>
              <div className="d-flex border-outer">
                <LanguageSwitcher />
                <div className="flex-grow-1">
                  <Form.Control type="text" aria-describedby="" placeholder='Johnsmith1001@gmail.com' />
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className="form-group mb-24">
                <Form.Label >Company Emial</Form.Label>
                <Form.Control type="text" placeholder='Squchapplication@gmail.com' />
            </div>
          </div>
          <div className='col-md-6 position-relative location-lung-box'>
            <div className="form-group mb-24">
                <Form.Label >Country</Form.Label>
                <LanguageSwitcherCountryName  paramKey="lang1"/>
            </div>
          </div>
          <div className='col-md-6'>
            <div className="form-group mb-24">
              <Form.Label >State</Form.Label>
              <Form.Select aria-label="Default select example">
                  <option>texas</option>
                  <option value="1">texas One</option>
                  <option value="2">texas Two</option>
                  <option value="3">texas Three</option>
                </Form.Select>
            </div>
          </div>
          <div className='col-md-6'>
            <div className="form-group mb-24">
              <Form.Label >City</Form.Label>
              <Form.Select aria-label="Default select example">
                  <option>Ostin</option>
                  <option value="1">Ostin new</option>
                  <option value="2">Ostin old</option>
                </Form.Select>
            </div>
          </div>
          <div className='col-md-6'>
            <div className="form-group mb-24">
                <Form.Label >ZIP Code</Form.Label>
                <Form.Control type="text" placeholder='123456' />
            </div>
          </div>
          <div className='col-md-6'>
            <div className="form-group mb-24">
              <Form.Label >Currency</Form.Label>
              <Form.Select aria-label="Default select example">
                  <option>Johnsmith1001@gmail.com</option>
                  <option value="1">Johnsmith1001@gmail.com1</option>
                  <option value="2">Johnsmith1001@gmail.com2</option>
                </Form.Select>
            </div>
          </div>
          <div className='col-md-6'>
            <div className="form-group mb-24">
              <Form.Label >Language</Form.Label>
              <Form.Select aria-label="Default select example">
                  <option>Squchapplication@gmail.com</option>
                  <option value="1">Squchapplication@gmail.com1</option>
                  <option value="2">Squchapplication@gmail.com2</option>
                </Form.Select>
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

export default BasicDetailsForm;