import React from 'react'
import '../../../app/flags.css';
import { Form } from 'react-bootstrap'
import LanguageSwitcherCountryName from '@/app/LanguageSwitcherCountryName';
import MapLocation from './MapLocation';

const StartingPoint = () => {
  return (
    <div>
        <Form>
            <div className='row'>
                <div className='col-md-12'>
                    <div className="form-group mb-24">
                        <Form.Label>Route Name</Form.Label>
                        <Form.Control type="text" placeholder='Kumasi to Tamele' />
                    </div>
                </div>
                <div className='col-md-12'>
                    <div className="form-group mb-24">
                        <Form.Label>Start Point</Form.Label>
                        <Form.Control type="text" placeholder='SQUCH Office Kumasi, Yaa Asantewa Rd, Kumasi, Ghana' />
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='position-relative location-lung-box'>
                        <div className="form-group mb-24">
                            <Form.Label >Country</Form.Label>
                            <LanguageSwitcherCountryName  paramKey="lang1"/>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="form-group mb-24">
                        <Form.Label >City</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Kumasi</option>
                            <option value="1">Kumasi one </option>
                            <option value="2">Kumasi two</option>
                        </Form.Select>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="form-group mb-24">
                        <Form.Label >Area</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Amakom traffic light</option>
                            <option value="1">traffic light one </option>
                            <option value="2">traffic light two</option>
                        </Form.Select>
                    </div>
                </div>
                <div className='col-md-12'>
                    <div className='from-group mb-24'>
                        <p>Starting Location</p>
                        <MapLocation />
                    </div>
                </div>

            </div>
        </Form>
    </div>
  )
}

export default StartingPoint