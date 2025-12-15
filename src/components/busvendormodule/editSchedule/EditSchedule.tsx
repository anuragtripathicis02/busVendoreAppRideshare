'use client';

import '../../../app/flags.css';
import React, { useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import DatePickers from '@/components/DatePickers';
import { DatePicker } from 'rsuite';
import Link from 'next/link';

const EditSchedule = () => {
      const [time1, setTime1] = useState(null);
      const [time2, setTime2] = useState(null);
      const [time3, setTime3] = useState(null);
    
  return (
    
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
                    <div className="form-group mb-1">
                        <Form.Label>Schedule Date</Form.Label>
                        <DatePickers />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group mb-24">
                        <Form.Label>Reporting time</Form.Label>
                        <DatePicker className="w-100" format="HH:mm:ss" value={time1} placeholder="-- : -- --" allowClear={false} showHour showMinute showSecond onChange={(value) => setTime1(value)} shouldDisableHour={(hour) => hour < 8 || hour > 18} shouldDisableMinute={(minute) => minute % 15 !== 0} shouldDisableSecond={(second) => second % 30 !== 0}/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group mb-24">
                        <Form.Label>Reporting time</Form.Label>
                        <DatePicker className="w-100" format="HH:mm:ss" value={time2} placeholder="-- : -- --" allowClear={false} showHour showMinute showSecond onChange={(value) => setTime2(value)} shouldDisableHour={(hour) => hour < 8 || hour > 18} shouldDisableMinute={(minute) => minute % 15 !== 0} shouldDisableSecond={(second) => second % 30 !== 0} />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group mb-24">
                        <Form.Label>Reporting time</Form.Label>
                        <DatePicker className="w-100" format="HH:mm:ss" value={time3} placeholder="-- : -- --" allowClear={false} showHour showMinute showSecond onChange={(value) => setTime3(value)} shouldDisableHour={(hour) => hour < 8 || hour > 18} shouldDisableMinute={(minute) => minute % 15 !== 0} shouldDisableSecond={(second) => second % 30 !== 0} />
                    </div>
                </div>
                <div className='col-md-12 hr-line-box'>
                    <hr />
                </div>
                <div className='col-md-4'>
                    <div className="form-group mb-24">
                        <Form.Label >Operator 1</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>-- Select Value --</option>
                            <option value="1">Select Value one</option>
                            <option value="2">Select Value two</option>
                        </Form.Select>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="form-group mb-24">
                        <Form.Label >Operator 2</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>-- Select Value --</option>
                            <option value="1">Select Value one</option>
                            <option value="2">Select Value two</option>
                        </Form.Select>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="form-group mb-24">
                        <Form.Label >Helping Staff</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>-- Select Value --</option>
                            <option value="1">Select Value one</option>
                            <option value="2">Select Value two</option>
                        </Form.Select>
                    </div>
                </div>
                <div className='col-md-12 hr-line-box'>
                    <hr />
                </div>
                <div className='col-md-12  d-flex justify-content-between flex-wrap gap-2 align-items-center'>
                    <div className='right-check'>
                        <Form.Group className="mb-0">
                            <Form.Check
                            required
                            label="Notify Guests about the Change"
                            feedback="Notify Guests about the Change"
                            feedbackType="invalid"
                            className='mb-0'
                            />
                        </Form.Group>
                    </div>
                    <Link href="" className="btn btn-secondary">Save Details</Link>
                </div>

            </div>
        </Form>
    </div>

  )
}

export default EditSchedule