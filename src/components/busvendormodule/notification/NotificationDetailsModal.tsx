'use client'
import Link from 'next/link';
import Image from "next/image";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AuthorImg from '../../../../public/images/table-img.png'
import CarImg from '../../.././../public/images/car.png'

const NotificationDetailsModal = ({ show, handleClose }: { show: boolean; handleClose: () => void }) => {
  return (
    
    <Modal show={show} onHide={handleClose} centered className='booking-modal modal-common-sec modal-width-fixed'>
        <Modal.Header closeButton className="p-0 m-0 border-0">
            {/* <div className='modal-head d-flex flex-md-nowrap flex-wrap align-items-center justify-content-between gap-2 w-100'>
                <div className='left-heading'>
                    <h2>Booking Summery</h2>
                </div>
                <div className='right-details'>
                    <div className='copy-details d-flex gap-2 align-items-center'>#SB3456789008 </div>
                </div>
            </div> */}
        </Modal.Header>
        <Modal.Body>
            <div className='modal-body-inner'>
                <div className='top-noti d-flex align-items-end gap-2 justify-content-between mb-3'>
                    <div className='left-top-noti d-flex align-items-center gap-2'>
                        <div className='img-box'>
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.45301 0C2.88904 0 0 2.88904 0 6.45301C0 10.017 2.88904 12.906 6.45301 12.906H12.906V6.45301C12.906 2.88904 10.017 0 6.45301 0Z" fill="#6200DD"/><path d="M0 19.3573C0 22.9213 2.88904 25.8103 6.45301 25.8103C10.017 25.8103 12.906 22.9213 12.906 19.3573V12.9043H6.45301C2.88904 12.9043 0 15.7933 0 19.3573Z" fill="#FF8211"/><path d="M25.8084 6.45301C25.8084 2.88904 22.9193 0 19.3554 0C15.7914 0 12.9023 2.88904 12.9023 6.45301V12.906H19.3554C22.9193 12.906 25.8084 10.017 25.8084 6.45301Z" fill="#02CAB5"/><path d="M19.022 22.5869C21.1613 22.5869 22.8955 20.8527 22.8955 18.7134C22.8955 16.5741 21.1613 14.8398 19.022 14.8398C16.8827 14.8398 15.1484 16.5741 15.1484 18.7134C15.1484 20.8527 16.8827 22.5869 19.022 22.5869Z" fill="#CD99FE"/></svg>
                        </div>
                        <div className='text-box'>
                            <h6 className='mb-1 p-0'>Squch Mart New Year Offers</h6>
                            <p className='m-0 p-0'>Yesterday, Feb 2025</p>
                        </div>
                    </div>
                    <div className='right-top-noti'>
                        <span className='time-noti'>08:24 am</span>
                    </div>
                </div>
                <div className='body-noti'>
                    <p className='p-0 m-0'>Lorem ipsum is a dummy or placeholder text used in graphic design, publishing. Lorem ipsum is a dummy or placeholder text used in graphic design, publishing. Lorem ipsum is a dummy or placeholder text used in graphic design, publishing.</p>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <div className='modal-foot w-100 d-flex align-items-center flex-md-nowrap flex-wrap justify-content-md-end gap-2'>
                <div className='right-foot flex-md-nowrap flex-wrap d-flex align-items-center gap-2'>
                    <Link href="" className='btn btn-grey p-3 py-3' onClick={handleClose}>Cancel</Link>
                    <Button variant="secondary p-3 py-3" > Apply Now </Button>
                </div>
            </div>
        </Modal.Footer>
      </Modal>
  )
}

export default NotificationDetailsModal