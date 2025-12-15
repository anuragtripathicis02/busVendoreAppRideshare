'use client'
import React, { useState } from 'react'
import '../../../app/flags.css'
import { Form, Button, Dropdown } from 'react-bootstrap';
import LanguageSwitcher from '../Login/LanguageSwitcher';
import LanguageSwitcherCountryName from '@/app/LanguageSwitcherCountryName'


const GuestDetails = () => {
  return (
    <div className='guest-details-form-sec'>
        <Form>
            <div className='grey-bg mb-3'>
                <div className='row'>
                    <div className='col-xl-5 col-lg-4'>
                        <div className="form-group mb-4">
                            <Form.Label >Passenger 1 Name</Form.Label>
                            <Form.Control type="text" placeholder='John Doe' />
                        </div>
                    </div>
                    <div className='col-xl-7 col-lg-8 '>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className="form-group mb-4 position-relative">
                                    <Form.Label >Passenger Age</Form.Label>
                                    <Form.Control type="text" placeholder='75' />
                                    <span className='adult'>Adult</span>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className="form-group mb-4">
                                    <Form.Label >Passenger Gender</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Male</option>
                                        <option value="2">FeMale</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className="form-group mb-4">
                                    <Form.Label >Needs Special Care</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Yes</option>
                                        <option value="1">No</option>
                                    </Form.Select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className="form-group mb-0">
                        <Form.Label >Select Which Applies</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>People With Wheelchair</option>
                            <option value="1">People With Wheelchair One</option>
                            <option value="2">People With Wheelchair Two</option>
                            <option value="3">People With Wheelchair Three</option>
                            </Form.Select>
                        </div>
                    </div>

                </div>
            </div>

            <div className='grey-bg mb-3'>
                <div className='row'>
                    <div className='col-xl-5 col-lg-4'>
                        <div className="form-group mb-lg-0 mb-4">
                            <Form.Label >Passenger 2 Name</Form.Label>
                            <Form.Control type="text" placeholder='John Doe' />
                        </div>
                    </div>
                    <div className='col-xl-7 col-lg-8'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className="form-group mb-md-0 mb-4 position-relative">
                                    <Form.Label >Passenger Age</Form.Label>
                                    <Form.Control type="text" placeholder='8' />
                                    <span className='adult'>Child</span>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className="form-group mb-md-0 mb-4">
                                    <Form.Label >Passenger Gender</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Male</option>
                                        <option value="2">FeMale</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className="form-group mb-md-0 mb-4">
                                    <Form.Label >Needs Special Care</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Yes</option>
                                        <option value="1">No</option>
                                    </Form.Select>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='grey-bg mb-3'>
                <div className='row'>
                    <div className='col-xl-5 col-lg-4'>
                        <div className="form-group mb-lg-0 mb-4">
                            <Form.Label >Passenger 3 Name</Form.Label>
                            <Form.Control type="text" placeholder='John Doe' />
                        </div>
                    </div>
                    <div className='col-xl-7 col-lg-8'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className="form-group mb-md-0 mb-4 position-relative">
                                    <Form.Label >Passenger Age</Form.Label>
                                    <Form.Control type="text" placeholder='25' />
                                    <span className='adult'>Adult</span>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className="form-group mb-md-0 mb-4">
                                    <Form.Label >Passenger Gender</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Male</option>
                                        <option value="2">FeMale</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className="form-group mb-md-0 mb-4">
                                    <Form.Label >Needs Special Care</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Yes</option>
                                        <option value="1">No</option>
                                    </Form.Select>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='grey-bg mb-3'>
                <div className='row'>
                    <div className='col-xl-5 col-lg-4'>
                        <div className="form-group mb-lg-0 mb-4">
                            <Form.Label >Passenger 4 Name</Form.Label>
                            <Form.Control type="text" placeholder='John Doe' />
                        </div>
                    </div>
                    <div className='col-xl-7 col-lg-8'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className="form-group mb-md-0 mb-4 position-relative">
                                    <Form.Label >Passenger Age</Form.Label>
                                    <Form.Control type="text" placeholder='25' />
                                    <span className='adult'>Adult</span>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className="form-group mb-md-0 mb-4">
                                    <Form.Label >Passenger Gender</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Male</option>
                                        <option value="2">FeMale</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className="form-group mb-md-0 mb-4">
                                    <Form.Label >Needs Special Care</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Yes</option>
                                        <option value="1">No</option>
                                    </Form.Select>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

      </Form>
    </div>
  )
}

export default GuestDetails