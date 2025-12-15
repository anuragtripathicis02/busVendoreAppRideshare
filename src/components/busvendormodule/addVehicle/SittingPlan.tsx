import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import SettingSeats from './SettingSeats';
import SleeperSeats from './SleeperSeats';

const SittingPlan = () => {
  const [count1, setCount1] = useState(10);
  const [count2, setCount2] = useState(1);
  const [count3, setCount3] = useState(10);
  const [count4, setCount4] = useState(2);
  const [count5, setCount5] = useState(4);
  const [count6, setCount6] = useState(1);
  const [count7, setCount7] = useState(4);
  const [count8, setCount8] = useState(2);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  const renderCounter = (count: number, setCount: React.Dispatch<React.SetStateAction<number>>) => (
    <div className="form-control d-flex align-items-center justify-content-between">
      <Button onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))} className="btn-add-remove d-flex align-items-center justify-content-center">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.93294 18.3337C14.5163 18.3337 18.2663 14.5837 18.2663 10.0003C18.2663 5.41699 14.5163 1.66699 9.93294 1.66699C5.34961 1.66699 1.59961 5.41699 1.59961 10.0003C1.59961 14.5837 5.34961 18.3337 9.93294 18.3337Z" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.59961 10H13.2663" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </Button>
        <span className="text-input-box">{formatNumber(count)}</span>
      <Button onClick={() => setCount((prev) => prev + 1)} className="btn-add-remove d-flex align-items-center justify-content-center">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0003 18.3337C14.5837 18.3337 18.3337 14.5837 18.3337 10.0003C18.3337 5.41699 14.5837 1.66699 10.0003 1.66699C5.41699 1.66699 1.66699 5.41699 1.66699 10.0003C1.66699 14.5837 5.41699 18.3337 10.0003 18.3337Z" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.66699 10H13.3337" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 13.3337V6.66699" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </Button>
    </div>
  );

  return (
    <div className='sitting-plan-sec'>
        <div className='row align-items-center'>
            <div className='col-xl-6 col-md-12'>
                <div className='setting-form card-box '>
                    <Form>
                        <div className='row p-0'>
                            <div className='col-md-6'>
                                <div className="form-group mb-24">
                                    <Form.Label >Bus Type</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Double Story</option>
                                        <option value="1">Double Story </option>
                                        <option value="2">Single Story</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="form-group mb-24">
                                    <Form.Label >Number of Entrances</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Single Entrance</option>
                                        <option value="1">Single Entrance </option>
                                        <option value="2">Double Entrance</option>
                                    </Form.Select>
                                </div>
                            </div>
                        </div>
                        <h6 className='mb-0 pb-2'>Set Up 1st Story Layout</h6>
                        <div className='grey-bg'>
                            <div className='row'>
                                <div className='col-md-8'>
                                    <div className="form-group mb-24">
                                        <Form.Label >Seat Type</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Sitter</option>
                                            <option value="1">Sitter one </option>
                                            <option value="2">Sitter two</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="form-group mb-24">
                                    <Form.Label>Left Side Rows</Form.Label>
                                    {renderCounter(count1, setCount1)}
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="form-group mb-24">
                                    <Form.Label>Right side columns</Form.Label>
                                    {renderCounter(count2, setCount2)}
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="form-group mb-24">
                                    <Form.Label>Left Side Rows</Form.Label>
                                    {renderCounter(count3, setCount3)}
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="form-group mb-24">
                                    <Form.Label>Right side columns</Form.Label>
                                    {renderCounter(count4, setCount4)}
                                    </div>
                                </div>

                            </div>
                        </div>
                        <h6 className='mb-0 mt-4 pb-2'>Set Up 2nd Story Layout</h6>
                        <div className='grey-bg'>
                            <div className='row'>
                                <div className='col-md-8'>
                                    <div className="form-group mb-24">
                                        <Form.Label >Seat Type</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Sleeper</option>
                                            <option value="1">Sleeper one </option>
                                            <option value="2">Sleeper two</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="form-group mb-24">
                                    <Form.Label>Left Side Rows</Form.Label>
                                    {renderCounter(count5, setCount5)}
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="form-group mb-24">
                                    <Form.Label>Right side columns</Form.Label>
                                    {renderCounter(count6, setCount6)}
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="form-group mb-24">
                                    <Form.Label>Left Side Rows</Form.Label>
                                    {renderCounter(count7, setCount7)}
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="form-group mb-24">
                                    <Form.Label>Right side columns</Form.Label>
                                    {renderCounter(count8, setCount8)}
                                    </div>
                                </div>

                            </div>
                        </div>

                    </Form>
                </div>
            </div>
            <div className='col-xl-6 col-md-12 '>
                <div className='bust-seats-sec'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 mt-md-0 mt-4'>
                            <div className='setting-seats'>
                                <h3 className='text-center'>1st Story</h3>
                                <SettingSeats />
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 mt-md-0 mt-4'>
                            <div className='sleeper-seats'>
                            <h3 className='text-center'>2nd Story</h3>
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

export default SittingPlan