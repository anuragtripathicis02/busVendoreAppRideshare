import React from 'react'
import Image from "next/image";
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';
import CloseModal from "../../../../public/images/close-modal.png";

const CancelBooking =  ({ show, handleClose }: any) => {
  return (
    <div className="common-modal-sec">
       <Modal show={show} onHide={handleClose} centered className="common-modal-sec pt-4  cancel-modal-booking">
            <Modal.Header>
                <Button variant="close-btn" onClick={handleClose}>
                    <Image src={CloseModal} alt="" />
                </Button>
            </Modal.Header>
            <Modal.Body className="common-modal-body">
                <div className='modal-box'>
                    <div className='heading'>
                        <h2>Cancel Booking</h2>
                    </div>
                    <div className='cancle-box'>
                        <p>Are you sure you want to cancel this booking? Please tell us why you're cancelling—it helps us improve the experience for everyone.</p>
                        
                        <Form>
                            <Form.Group className="mb-2" controlId="">
                                <Form.Check type="checkbox" label="third radio" name="Guest find a better price" id="formHorizontalRadios3" />
                            </Form.Group>   
                            <Form.Group className="mb-2" controlId="">
                                <Form.Check type="checkbox" label="third radio" name="Incorrect Booking" id="formHorizontalRadios4"/>
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="">
                                <Form.Check type="checkbox" label="third radio" name="Change of Plans" id="formHorizontalRadios5"/>
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="">
                                <Form.Check type="checkbox" label="third radio" name="Had a different issue" id="formHorizontalRadios6" checked/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className='d-none'>Please Describe your issue</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder='Please Describe your issue'/>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="modal-footer-box d-flex align-items-center gap-3 justify-content-end">
                <Link href="" className='btn btn-grey'>Close</Link>
                <button className='btn btn-secondary btn-orange'>Cancel Booking</button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default CancelBooking