import React from 'react'
import Image from "next/image";
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import DatePickers from '@/components/DatePickers';
import { DatePicker } from 'rsuite';
import Link from 'next/link';
import CloseModal from "../../../../public/images/close-modal.png";
import DateChange01 from '../../../../public/images/dateChange01.png'
import DateChange02 from '../../../../public/images/DateChange02.png'


const DateChange = ({ show, handleClose }: any) => {
  return (
    <div className="common-modal-sec">
       <Modal show={show} onHide={handleClose} centered className="modal-filter common-modal-sec pt-4">
             <Modal.Header>
                <Button variant="close-btn" onClick={handleClose}>
                    <Image src={CloseModal} alt="" />
                </Button>
            </Modal.Header>
            <Modal.Body className="common-modal-body">
                <div className='modal-box'>
                    <div className='heading'>
                        <h2>Date Change</h2>
                    </div>
                    <Form className='position-relative'>     
                        <div className='col-md-12'>
                            <div className="form-group mb-1">
                                <Form.Label>Enter New Journey Date</Form.Label>
                                <DatePickers />
                            </div>
                        </div>
                    </Form>
                    <div className='modal-travel-sec'>
                        <p>You are changing the travel date for</p>
                        <div className='modal-img-text d-flex align-items-center gap-2'>
                            <div className='img-box'>
                                <Image src={DateChange01} alt=''></Image>
                            </div>
                            <div className='text-box'>
                                <h6>John Doe (You)</h6>
                                <span> Male, 30 Yrs</span>
                            </div>
                        </div>
                        <div className='modal-img-text d-flex align-items-center gap-2'>
                            <div className='img-box'>
                                <Image src={DateChange02} alt=''></Image>
                            </div>
                            <div className='text-box'>
                                <h6>Mufasa</h6>
                                <span> Male, 23 Yrs</span>
                            </div>
                        </div>
                        <div className='modal-travel-foot'>
                            <p>Note : Once you change the date for this ticket, you will note be able to cancel or change the date again.</p>
                        </div>
                    </div>
                    <div className='how-it-work-sec'>
                        <h5>How it Works?</h5>
                        <div className='work-list'>
                            <div className='work-item d-flex align-items-center gap-2'>
                                <div className='counter-no'>1</div>
                                <div className='work-details'>
                                    <h6>Select New Date</h6>
                                    <p>Don’t Forget to carry water bottle for your journey ahead.</p>
                                </div>
                            </div>
                            <div className='work-item d-flex align-items-center gap-2'>
                                <div className='counter-no'>2</div>
                                <div className='work-details'>
                                    <h6>Choose From Available busses</h6>
                                    <p>Don’t Forget to carry water bottle for your journey ahead.</p>
                                </div>
                            </div>
                            <div className='work-item d-flex align-items-center gap-2'>
                                <div className='counter-no'>3</div>
                                <div className='work-details'>
                                    <h6>Date Change fee will be applicable</h6>
                                    <p>Don’t Forget to carry water bottle for your journey ahead.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="modal-footer-box d-flex align-items-center gap-3 justify-content-end">
                <Link href="" className='btn btn-grey'>Cancel</Link>
                <button className='btn btn-secondary '>Update Dates</button>
            </Modal.Footer>

        </Modal>
    </div>
  )
}

export default DateChange