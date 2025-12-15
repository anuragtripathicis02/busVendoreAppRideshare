'use client';

import '../../../app/flags.css';
import React, { useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import DatePickers from '@/components/DatePickers';
import { DatePicker } from 'rsuite';
import Link from 'next/link';
import SettingSeats from './SettingSeats';
import SleeperSeats from './SleeperSeats';

const CreateSchedule = () => {  
  const [time1, setTime1] = useState(null);
  const [time2, setTime2] = useState(null);
  const [time3, setTime3] = useState(null);

  return (
    <div className='schedule-box-com mt-4'>

        <div className='schedule-box-main mb-4'>
            <div className='schedule-head'>
                <h3>Select Route & Bus</h3>
            </div>
            <div className='color-hr-change hr-line-box mt-2 mb-24'>
                <hr />
            </div>
            <div className='card-box'>
                <Form>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className="form-group mb-24">
                                <Form.Label >Select Route</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>-- Select Value --</option>
                                    <option value="1">Select Value one</option>
                                    <option value="2">Select Value two</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="form-group mb-24">
                                <Form.Label >Select Bus</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>-- Select Value --</option>
                                    <option value="1">Select Value one</option>
                                    <option value="2">Select Value two</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="form-group mb-24 active-field-box">
                                <Form.Label >Bus type</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Double Story</option>
                                    <option value="1">Double Story</option>
                                    <option value="2">Single Story</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className="form-group mb-24 active-field-box">
                                <Form.Label>Total Capacity</Form.Label>
                                <Form.Control type="text" placeholder='60' />
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className="form-group mb-24 active-field-box">
                                <Form.Label >Operator 1</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>-- Select Value --</option>
                                    <option value="1">Value One</option>
                                    <option value="2">Value Two</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className="form-group mb-24 active-field-box">
                                <Form.Label >Operator 2</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>-- Select Value --</option>
                                    <option value="1">Value One</option>
                                    <option value="2">Value Two</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className="form-group mb-24 active-field-box">
                                <Form.Label >Helping Staff</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>-- Select Value --</option>
                                    <option value="1">Value One</option>
                                    <option value="2">Value Two</option>
                                </Form.Select>
                            </div>
                        </div>

                    </div>
                </Form>
            </div>
        </div>

        <div className='schedule-box-main mb-4'>
            <div className='schedule-head'>
                <h3>Setting Up Schedule</h3>
            </div>
            <div className='color-hr-change hr-line-box mt-2 mb-24'>
                <hr />
            </div>
            <div className='card-box mb-4'>
                <Form>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className="form-group mb-24">
                                <Form.Label >Scheduling for</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Custom Date</option>
                                    <option value="1">Custom Date</option>
                                    <option value="2">Custom Date</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className='col-md-8'>
                            <div className="form-group mb-1">
                                <Form.Label>Select Week Days</Form.Label>
                                <ul className='week-select-box d-flex align-items-center justify-content-between gap-1 flex-md-nowrap flex-wrap'>
                                    <li>
                                        <Link href="" className='week'>Sun</Link>
                                    </li>
                                    <li>
                                        <Link href="" className='week weekActive'>Mon</Link>
                                    </li>
                                    <li>
                                        <Link href="" className='week'>Tue</Link>
                                    </li>
                                    <li>
                                        <Link href="" className='week weekActive'>Wed</Link>
                                    </li>
                                    <li>
                                        <Link href="" className='week'>Thu</Link>
                                    </li>
                                    <li>
                                        <Link href="" className='week weekActive'>Fri</Link>
                                    </li>
                                    <li>
                                        <Link href="" className='week'>Sat</Link>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                        <div className="col-md-4">
                            <div className="form-group mb-24">
                                <Form.Label>Operator Reporting Time</Form.Label>
                                <DatePicker className="w-100" format="HH:mm:ss" value={time1} placeholder="-- : -- --" allowClear={false} showHour showMinute showSecond onChange={(value) => setTime1(value)} shouldDisableHour={(hour) => hour < 8 || hour > 18} shouldDisableMinute={(minute) => minute % 15 !== 0} shouldDisableSecond={(second) => second % 30 !== 0}/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group mb-24">
                                <Form.Label>Bus Departure Time</Form.Label>
                                <DatePicker className="w-100" format="HH:mm:ss" value={time2} placeholder="-- : -- --" allowClear={false} showHour showMinute showSecond onChange={(value) => setTime2(value)} shouldDisableHour={(hour) => hour < 8 || hour > 18} shouldDisableMinute={(minute) => minute % 15 !== 0} shouldDisableSecond={(second) => second % 30 !== 0} />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group mb-24 active-field-box">
                                <Form.Label>Expected Journey Time</Form.Label>
                                <DatePicker className="w-100" format="HH:mm:ss" value={time3} placeholder="-- : -- --" allowClear={false} showHour showMinute showSecond onChange={(value) => setTime3(value)} shouldDisableHour={(hour) => hour < 8 || hour > 18} shouldDisableMinute={(minute) => minute % 15 !== 0} shouldDisableSecond={(second) => second % 30 !== 0} />
                            </div>
                        </div>

                    </div>
                </Form>
            </div>
            
            <div className='card-box mb-4'>
                <Form>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className="form-group mb-24">
                                <Form.Label >Repeat Schedule</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Yes</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="form-group mb-24">
                                <Form.Label >Repeat Frequency</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Every week</option>
                                    <option value="1">Every week</option>
                                    <option value="2">First week</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="form-group mb-24">
                                <Form.Label >Has a Date Range </Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Yes</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="form-group mb-1">
                                <Form.Label>Schedule Starting From</Form.Label>
                                <DatePickers />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="form-group mb-1">
                                <Form.Label>Schedule  till date</Form.Label>
                                <DatePickers />
                            </div>
                        </div>
                    </div>
                </Form>
            </div>


        </div>

        <div className='schedule-box-main mb-0'>
            <div className='schedule-head'>
                <h3>Set Pricing For 1nd Story</h3>
            </div>
            <div className='color-hr-change hr-line-box mt-2 mb-24'>
                <hr />
            </div>
            <div className='row'>
                <div className='col-xl-9 col-lg-8 col-md-8'>
                    <div className='card-box mb-4'>
                        <Form>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className="form-group mb-24">
                                        <Form.Label >Set Pricing</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Custom for each row</option>
                                            <option value="1">Custom for each row</option>
                                            <option value="2">Custom for each row</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className="form-group placeholder-dark mb-24">
                                        <Form.Label>Row 1 Price</Form.Label>
                                        <Form.Control type="text" placeholder='$172' />
                                    </div>
                                </div> 
                                <div className='col-md-3'>
                                    <div className="form-group placeholder-dark mb-24">
                                        <Form.Label>Row 2 Price</Form.Label>
                                        <Form.Control type="text" placeholder='$172' />
                                    </div>
                                </div> 
                                <div className='col-md-3'>
                                    <div className="form-group placeholder-dark mb-24">
                                        <Form.Label>Row 3 Price</Form.Label>
                                        <Form.Control type="text" placeholder='$172' />
                                    </div>
                                </div> 
                                <div className='col-md-3'>
                                    <div className="form-group placeholder-dark mb-24">
                                        <Form.Label>Row 4 Price</Form.Label>
                                        <Form.Control type="text" placeholder='$172' />
                                    </div>
                                </div> 
                                <div className='col-md-3'>
                                    <div className="form-group placeholder-dark mb-24">
                                        <Form.Label>Row 5 Price</Form.Label>
                                        <Form.Control type="text" placeholder='$172' />
                                    </div>
                                </div> 
                                <div className='col-md-3'>
                                    <div className="form-group placeholder-dark mb-24">
                                        <Form.Label>Row 6 Price</Form.Label>
                                        <Form.Control type="text" placeholder='$172' />
                                    </div>
                                </div> 
                                <div className='col-md-3'>
                                    <div className="form-group placeholder-dark mb-24">
                                        <Form.Label>Row 7 Price</Form.Label>
                                        <Form.Control type="text" placeholder='$172' />
                                    </div>
                                </div> 
                                <div className='col-md-3'>
                                    <div className="form-group placeholder-dark mb-24">
                                        <Form.Label>Row 8 Price</Form.Label>
                                        <Form.Control type="text" placeholder='$172' />
                                    </div>
                                </div> 
                                <div className='col-md-3'>
                                    <div className="form-group placeholder-dark mb-24">
                                        <Form.Label>Row 9 Price</Form.Label>
                                        <Form.Control type="text" placeholder='$172' />
                                    </div>
                                </div> 
                                <div className='col-md-3'>
                                    <div className="form-group placeholder-dark mb-24">
                                        <Form.Label>Row 10 Price</Form.Label>
                                        <Form.Control type="text" placeholder='$172' />
                                    </div>
                                </div> 
                                <div className='col-md-3'>
                                    <div className="form-group placeholder-dark mb-24">
                                        <Form.Label>Row 10 Price</Form.Label>
                                        <Form.Control type="text" placeholder='$172' />
                                    </div>
                                </div> 
                                <div className='col-md-3'>
                                    <div className="form-group placeholder-dark mb-24">
                                        <Form.Label>Row 11 Price</Form.Label>
                                        <Form.Control type="text" placeholder='$172' />
                                    </div>
                                </div> 

                            </div>
                        </Form>
                    </div>
                </div>
                <div className='col-xl-3 col-lg-4 col-md-4'>
                    <div className='row'>
                        <div className='col-md-12 mt-md-0 mb-md-0  mb-3'>
                            <div className='setting-seats '>
                                <SettingSeats />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='schedule-box-main mb-4'>
            <div className='schedule-head'>
                <h3>Set Pricing For 2nd Story</h3>
            </div>
            <div className='color-hr-change hr-line-box mt-2 mb-24'>
                <hr />
            </div>
            <div className='row'>
                <div className='col-xl-9 col-lg-8 col-md-8'>
                    <div className='card-box mb-4'>
                        <Form>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className="form-group mb-24">
                                        <Form.Label >Set Pricing</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Custom for each row</option>
                                            <option value="1">Custom for each row</option>
                                            <option value="2">Custom for each row</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className="form-group placeholder-dark mb-24">
                                        <Form.Label>Row 1 Price</Form.Label>
                                        <Form.Control type="text" placeholder='$172' />
                                    </div>
                                </div> 
                                <div className='col-md-3'>
                                    <div className="form-group placeholder-dark mb-24">
                                        <Form.Label>Row 2 Price</Form.Label>
                                        <Form.Control type="text" placeholder='$172' />
                                    </div>
                                </div> 
                                <div className='col-md-3'>
                                    <div className="form-group placeholder-dark mb-24">
                                        <Form.Label>Row 3 Price</Form.Label>
                                        <Form.Control type="text" placeholder='$172' />
                                    </div>
                                </div> 
                                <div className='col-md-3'>
                                    <div className="form-group placeholder-dark mb-24">
                                        <Form.Label>Row 4 Price</Form.Label>
                                        <Form.Control type="text" placeholder='$172' />
                                    </div>
                                </div> 
                            </div>
                        </Form>
                    </div>
                </div>
                <div className='col-xl-3 col-lg-4 col-md-4'>
                    <div className='row'>
                        <div className='col-md-12 mt-md-0 mb-md-0  mb-3'>
                            <div className='setting-seats '>
                                <SleeperSeats />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CreateSchedule