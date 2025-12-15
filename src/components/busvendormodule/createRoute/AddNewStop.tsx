import React from 'react'
import Image from "next/image";
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import DatePickers from '@/components/DatePickers';
import { DatePicker } from 'rsuite';
import Link from 'next/link';
import CloseModal from "../../../../public/images/close-modal.png";
import MapLocation from './MapLocation';
// import DateChange01 from '../../../../public/images/dateChange01.png'
// import DateChange02 from '../../../../public/images/DateChange02.png'

const AddNewStop = ({ show, handleClose }: any) => {
  return (

    <Modal show={show} onHide={handleClose} centered className="modal-filter common-modal-sec pt-4">
    <Modal.Header>
       <Button variant="close-btn" onClick={handleClose}>
           <Image src={CloseModal} alt="" />
       </Button>
   </Modal.Header>
   <Modal.Body className="common-modal-body">
       <div className='modal-box'>
           <div className='heading'>
               <h2>Add Bus Stop to Route</h2>
           </div>
           <Form className='position-relative'>    
                <div className='row'> 
                    <div className='col-md-12'>
                        <div className="form-group mb-24">
                            <Form.Label>Bus Stop Address</Form.Label>
                            <Form.Control type="text" placeholder="Johnsmith1001@gmail.com"  aria-label="Johnsmith1001@gmail.com" />
                        </div>
                    </div> 
                        <div className='col-md-4'>
                            <div className="form-group mb-24">
                                <Form.Label >City Name</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>-- Select Value --</option>
                                    <option value="1">City one</option>
                                    <option value="2">City two</option>
                                </Form.Select>
                            </div>
                        </div>    
                    <div className='col-md-4'>
                        <div className="form-group mb-1">
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control type="text" placeholder="Johnsmith1001@gmail.com"  aria-label="Johnsmith1001@gmail.com" />
                        </div>
                    </div>     
                    <div className='col-md-4'>
                        <div className="form-group mb-1">
                            <Form.Label>Waiting Time</Form.Label>
                            <Form.Control type="text" placeholder="15 Min"  aria-label="15 Min" />
                        </div>
                    </div>   
                    <div className='col-md-4'>
                        <div className="form-group mb-1">
                            <Form.Label>Estimate Travel time from last stop</Form.Label>
                            <Form.Control type="text" placeholder="1Hr 30Min"  aria-label="1Hr 30Min" />
                        </div>
                    </div>   
                    <div className='col-md-4'>
                        <div className="form-group mb-1">
                            <Form.Label>Estimate Distance from last stop</Form.Label>
                            <Form.Control type="text" placeholder="70 KM"  aria-label="70 KM" />
                        </div>
                    </div>
                    <div className='col-md-12 mt-4 '>
                        <div className='from-group'>
                            <p className='mb-1'>Set Location</p>
                            <MapLocation />
                        </div>
                    </div>
                </div>
           </Form>
       </div>
   </Modal.Body>
   <Modal.Footer className="footer-step-form modal-footer-box d-flex align-items-center gap-3 justify-content-end">
       <Link href="" className='btn btn-grey' onClick={handleClose}>Cancel</Link>
       <button className='btn btn-secondary '>Update Dates</button>
   </Modal.Footer>

</Modal>

  )
}

export default AddNewStop