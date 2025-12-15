'use client'
import React, { useState } from 'react'
import '../../../app/flags.css'
import { Form, Button, Dropdown } from 'react-bootstrap';
import LanguageSwitcher from '../Login/LanguageSwitcher';
import LanguageSwitcherCountryName from '@/app/LanguageSwitcherCountryName'
import ConfirmModal from './ConfirmModal';

interface Props {
  handleFinalSubmit: () => void;
}

const BankDetailsForm : React.FC<Props> = ({ handleFinalSubmit }) => {
  return (
    <div className='card-box'>
        <Form>
          <div className='row'>
            
            <div className='col-lg-4 col-md-6'>
              <div className="form-group mb-24">
                <Form.Label >Payout Type</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Bank Payout</option>
                    <option value="1">Bank Payout One</option>
                    <option value="2">Bank Payout Two</option>
                    <option value="3">Bank Payout Three</option>
                  </Form.Select>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className="form-group mb-24">
                  <Form.Label >Bank Name</Form.Label>
                  <Form.Control type="text" placeholder='Bank name here' />
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className="form-group mb-24">
                  <Form.Label >Branch Name</Form.Label>
                  <Form.Control type="text" placeholder='Branch name here' />
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className="form-group mb-24">
                  <Form.Label >Account Number</Form.Label>
                  <Form.Control type="text" placeholder='12345678901234' />
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className="form-group mb-24">
                  <Form.Label >IFSC Code</Form.Label>
                  <Form.Control type="text" placeholder='12345678901234' />
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className="form-group mb-24">
                  <Form.Label >SWIFT Code</Form.Label>
                  <Form.Control type="text" placeholder='12345678901234' />
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className="form-group mb-24">
                  <Form.Label >IBAN Code</Form.Label>
                  <Form.Control type="text" placeholder='12345678901234' />
              </div>
            </div>
            
          </div>
          <div className='footer-step-form d-flex justify-content-end'>
              <Button variant="primary" onClick={handleFinalSubmit} className="btn btn-next-box">
                Save & Next
              </Button>
          </div>
          <ConfirmModal />
        </Form>
      </div>
  );
};

export default BankDetailsForm;