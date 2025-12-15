import React from 'react'
import Image from "next/image";
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';
import CloseModal from "../../../../public/images/close-modal.png";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Bus1 from '../../../../public/images/bus-road.png'



const AddBusses = ({ show, handleClose }: any) => {
  return (
    
    <Modal show={show} onHide={handleClose} centered className="modal-filter common-modal-sec pt-4">
    <Modal.Header>
       <Button variant="close-btn" onClick={handleClose}>
           <Image src={CloseModal} alt="" />
       </Button>
   </Modal.Header>
   <Modal.Body className="common-modal-body add-bus-modal">
       <div className='modal-box'>
       <Tabs defaultActiveKey="Assigned" id="uncontrolled-tab-example" className="" >
            <Tab eventKey="Assigned" title="Un Assigned Busses">
                <div className='assign-tabs-content d-flex align-items-center gap-2 mb-2 flex-wrap'>
                    <div className='img-box'>
                        <Image src={Bus1} alt=''></Image>
                    </div>
                    <div className='text-box'>
                        <h3>CR 1234-10</h3>
                        <p>(2x1) Multi-excel AC Sleeper</p>
                    </div>
                    <div className='right-txet-box ms-auto d-flex align-items-center gap-3 text-end'>
                        <ul className="d-flex align-items-center gap-2 m-0">
                            <li>50 Seats</li>
                            <li><svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2C4 2.39556 3.8827 2.78224 3.66294 3.11114C3.44318 3.44004 3.13082 3.69638 2.76537 3.84776C2.39991 3.99913 1.99778 4.03874 1.60982 3.96157C1.22186 3.8844 0.865492 3.69392 0.585787 3.41421C0.306083 3.13451 0.115601 2.77814 0.0384303 2.39018C-0.0387401 2.00222 0.000866566 1.60009 0.152242 1.23463C0.303617 0.869181 0.559962 0.556823 0.88886 0.337061C1.21776 0.117298 1.60444 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2Z" fill="#838383"></path></svg></li>
                            <li>2 Drivers</li>
                            <li><svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2C4 2.39556 3.8827 2.78224 3.66294 3.11114C3.44318 3.44004 3.13082 3.69638 2.76537 3.84776C2.39991 3.99913 1.99778 4.03874 1.60982 3.96157C1.22186 3.8844 0.865492 3.69392 0.585787 3.41421C0.306083 3.13451 0.115601 2.77814 0.0384303 2.39018C-0.0387401 2.00222 0.000866566 1.60009 0.152242 1.23463C0.303617 0.869181 0.559962 0.556823 0.88886 0.337061C1.21776 0.117298 1.60444 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2Z" fill="#838383"></path></svg></li>
                            <li>1 Helper</li>
                        </ul>
                        <div className='checkbox-sec'>
                            <Form.Group>
                                <Form.Check label="" feedback="" feedbackType="invalid" />
                            </Form.Group>
                        </div>
                    </div>
                </div>
                <div className='assign-tabs-content d-flex align-items-center gap-2 mb-2 flex-wrap'>
                    <div className='img-box'>
                        <Image src={Bus1} alt=''></Image>
                    </div>
                    <div className='text-box'>
                        <h3>CR 1234-10</h3>
                        <p>(2x1) Multi-excel AC Sleeper</p>
                    </div>
                    <div className='right-txet-box ms-auto d-flex align-items-center gap-3 text-end'>
                        <ul className="d-flex align-items-center gap-2 m-0">
                            <li>50 Seats</li>
                            <li><svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2C4 2.39556 3.8827 2.78224 3.66294 3.11114C3.44318 3.44004 3.13082 3.69638 2.76537 3.84776C2.39991 3.99913 1.99778 4.03874 1.60982 3.96157C1.22186 3.8844 0.865492 3.69392 0.585787 3.41421C0.306083 3.13451 0.115601 2.77814 0.0384303 2.39018C-0.0387401 2.00222 0.000866566 1.60009 0.152242 1.23463C0.303617 0.869181 0.559962 0.556823 0.88886 0.337061C1.21776 0.117298 1.60444 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2Z" fill="#838383"></path></svg></li>
                            <li>2 Drivers</li>
                            <li><svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2C4 2.39556 3.8827 2.78224 3.66294 3.11114C3.44318 3.44004 3.13082 3.69638 2.76537 3.84776C2.39991 3.99913 1.99778 4.03874 1.60982 3.96157C1.22186 3.8844 0.865492 3.69392 0.585787 3.41421C0.306083 3.13451 0.115601 2.77814 0.0384303 2.39018C-0.0387401 2.00222 0.000866566 1.60009 0.152242 1.23463C0.303617 0.869181 0.559962 0.556823 0.88886 0.337061C1.21776 0.117298 1.60444 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2Z" fill="#838383"></path></svg></li>
                            <li>1 Helper</li>
                        </ul>
                        <div className='checkbox-sec'>
                            <Form.Group>
                                <Form.Check label="" feedback="" feedbackType="invalid" checked/>
                            </Form.Group>
                        </div>
                    </div>
                </div>
                <div className='assign-tabs-content d-flex align-items-center gap-2 mb-2 flex-wrap'>
                    <div className='img-box'>
                        <Image src={Bus1} alt=''></Image>
                    </div>
                    <div className='text-box'>
                        <h3>CR 1234-10</h3>
                        <p>(2x1) Multi-excel AC Sleeper</p>
                    </div>
                    <div className='right-txet-box ms-auto d-flex align-items-center gap-3 text-end'>
                        <ul className="d-flex align-items-center gap-2 m-0">
                            <li>50 Seats</li>
                            <li><svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2C4 2.39556 3.8827 2.78224 3.66294 3.11114C3.44318 3.44004 3.13082 3.69638 2.76537 3.84776C2.39991 3.99913 1.99778 4.03874 1.60982 3.96157C1.22186 3.8844 0.865492 3.69392 0.585787 3.41421C0.306083 3.13451 0.115601 2.77814 0.0384303 2.39018C-0.0387401 2.00222 0.000866566 1.60009 0.152242 1.23463C0.303617 0.869181 0.559962 0.556823 0.88886 0.337061C1.21776 0.117298 1.60444 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2Z" fill="#838383"></path></svg></li>
                            <li>2 Drivers</li>
                            <li><svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2C4 2.39556 3.8827 2.78224 3.66294 3.11114C3.44318 3.44004 3.13082 3.69638 2.76537 3.84776C2.39991 3.99913 1.99778 4.03874 1.60982 3.96157C1.22186 3.8844 0.865492 3.69392 0.585787 3.41421C0.306083 3.13451 0.115601 2.77814 0.0384303 2.39018C-0.0387401 2.00222 0.000866566 1.60009 0.152242 1.23463C0.303617 0.869181 0.559962 0.556823 0.88886 0.337061C1.21776 0.117298 1.60444 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2Z" fill="#838383"></path></svg></li>
                            <li>1 Helper</li>
                        </ul>
                        <div className='checkbox-sec'>
                            <Form.Group>
                                <Form.Check label="" feedback="" feedbackType="invalid" />
                            </Form.Group>
                        </div>
                    </div>
                </div>
                <div className='assign-tabs-content d-flex align-items-center gap-2 mb-2 flex-wrap'>
                    <div className='img-box'>
                        <Image src={Bus1} alt=''></Image>
                    </div>
                    <div className='text-box'>
                        <h3>CR 1234-10</h3>
                        <p>(2x1) Multi-excel AC Sleeper</p>
                    </div>
                    <div className='right-txet-box ms-auto d-flex align-items-center gap-3 text-end'>
                        <ul className="d-flex align-items-center gap-2 m-0">
                            <li>50 Seats</li>
                            <li><svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2C4 2.39556 3.8827 2.78224 3.66294 3.11114C3.44318 3.44004 3.13082 3.69638 2.76537 3.84776C2.39991 3.99913 1.99778 4.03874 1.60982 3.96157C1.22186 3.8844 0.865492 3.69392 0.585787 3.41421C0.306083 3.13451 0.115601 2.77814 0.0384303 2.39018C-0.0387401 2.00222 0.000866566 1.60009 0.152242 1.23463C0.303617 0.869181 0.559962 0.556823 0.88886 0.337061C1.21776 0.117298 1.60444 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2Z" fill="#838383"></path></svg></li>
                            <li>2 Drivers</li>
                            <li><svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2C4 2.39556 3.8827 2.78224 3.66294 3.11114C3.44318 3.44004 3.13082 3.69638 2.76537 3.84776C2.39991 3.99913 1.99778 4.03874 1.60982 3.96157C1.22186 3.8844 0.865492 3.69392 0.585787 3.41421C0.306083 3.13451 0.115601 2.77814 0.0384303 2.39018C-0.0387401 2.00222 0.000866566 1.60009 0.152242 1.23463C0.303617 0.869181 0.559962 0.556823 0.88886 0.337061C1.21776 0.117298 1.60444 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2Z" fill="#838383"></path></svg></li>
                            <li>1 Helper</li>
                        </ul>
                        <div className='checkbox-sec'>
                            <Form.Group>
                                <Form.Check label="" feedback="" feedbackType="invalid" />
                            </Form.Group>
                        </div>
                    </div>
                </div>

            </Tab>
            <Tab eventKey="Busses" title="Assigned Busses">
            Assigned Busses
            </Tab>
        </Tabs>
       </div>
   </Modal.Body>
   <Modal.Footer className="footer-step-form modal-footer-box d-flex align-items-center gap-3 justify-content-end">
       <Link href="" className='btn btn-grey' onClick={handleClose}>Cancel</Link>
       <button className='btn btn-secondary '>Save location</button>
   </Modal.Footer>

</Modal>
  )
}

export default AddBusses