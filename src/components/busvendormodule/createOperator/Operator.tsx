'use client';

import '../../../app/flags.css';
import React, { useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Operator = () => {
  return (
     <div className=''>
            <Form>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className="form-group mb-24">
                            <Form.Label>Payout Type</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Bank Payout</option>
                                <option value="1">Bank Payout One</option>
                                <option value="2">Bank Payout Two</option>
                                <option value="3">Bank Payout Three</option>
                            </Form.Select>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="form-group mb-24">
                            <Form.Label>Bank Name</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Bank name here</option>
                                <option value="1">Bank name here One</option>
                                <option value="2">Bank name here Two</option>
                                <option value="3">Bank name here Three</option>
                            </Form.Select>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="form-group mb-24">
                            <Form.Label>Branch Name</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Branch name here</option>
                                <option value="1">Branch name here</option>
                                <option value="2">Branch name here</option>
                                <option value="3">Branch name here</option>
                            </Form.Select>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="form-group mb-24">
                            <Form.Label>Account Number</Form.Label>
                            <Form.Control type="text" placeholder='12345678901234' />
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="form-group mb-24">
                            <Form.Label>IFSC Code</Form.Label>
                            <Form.Control type="text" placeholder='12345678901234' />
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="form-group mb-24">
                            <Form.Label>SWIFT Code</Form.Label>
                            <Form.Control type="text" placeholder='12345678901234' />
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="form-group mb-24">
                            <Form.Label>IBAN Code</Form.Label>
                            <Form.Control type="text" placeholder='12345678901234' />
                        </div>
                    </div>
                </div>
            </Form>
        </div>
  )
}

export default Operator