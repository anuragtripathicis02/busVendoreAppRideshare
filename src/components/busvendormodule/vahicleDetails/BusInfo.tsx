'use client';

import React, { useRef, useState } from 'react';
import DatePickers from '@/components/DatePickers';
import '../../../app/flags.css';
import { Form } from 'react-bootstrap';
import Link from 'next/link';

const BusInfo = () => {
  const regRef = useRef<HTMLInputElement>(null);
  const insRef = useRef<HTMLInputElement>(null);
  const permitRef = useRef<HTMLInputElement>(null);

  const [regFiles, setRegFiles] = useState<File[]>([]);
  const [insFiles, setInsFiles] = useState<File[]>([]);
  const [permitFiles, setPermitFiles] = useState<File[]>([]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>, setFiles: React.Dispatch<React.SetStateAction<File[]>>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    setFiles(prev => [...prev, ...files]);
  };

  const handleDrop = (e: React.DragEvent, setFiles: React.Dispatch<React.SetStateAction<File[]>>) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(prev => [...prev, ...droppedFiles]);
  };

  return (
    <div className='card-box mb-4 operatorProfile-from'>
        <div className='table-top d-flex flex-md-nowrap flex-wrap align-items-center justify-content-between mt-0 pt-0 gap-3'>
            <div className='left-table position-relative'>
                <h2>Bus Documents</h2>
            </div>
            <div className='right-box'>
                <Link href="" className='btn btn-edit d-flex align-items-center gap-2'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.66699 17.2498H16.3337M3.19416 10.0879C2.80331 10.4796 2.58376 11.0104 2.58366 11.5637V14.4998H5.53808C6.09174 14.4998 6.62249 14.2798 7.01391 13.8875L15.7222 5.17457C16.113 4.78278 16.3324 4.25205 16.3324 3.69874C16.3324 3.14542 16.113 2.61469 15.7222 2.2229L14.8624 1.36124C14.6685 1.16723 14.4382 1.01334 14.1848 0.908374C13.9314 0.803409 13.6598 0.749427 13.3855 0.749512C13.1112 0.749597 12.8396 0.803748 12.5862 0.90887C12.3329 1.01399 12.1027 1.16802 11.9089 1.36215L3.19416 10.0879Z" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span>Edit Details</span>
                </Link>
            </div>
        </div>

      <Form>
        <div className='row'>
          {/* Text Fields */}
          <div className='col-md-4'>
            <div className='form-group mb-24'>
              <Form.Label>Vehicle Registration Number</Form.Label>
              <Form.Control type='text' placeholder='1234567890' />
            </div>
          </div>
          <div className='col-md-4'>
            <div className='form-group mb-24'>
              <Form.Label>Vehicle Insurance Number</Form.Label>
              <Form.Control type='text' placeholder='1234567890' />
            </div>
          </div>
          <div className='col-md-4'>
            <div className='form-group mb-24'>
              <Form.Label>Commercial Operating Permit Number</Form.Label>
              <Form.Control type='text' placeholder='1234567890' />
            </div>
          </div>

          {/* Date Pickers */}
          <div className='col-md-4 pb-1'>
            <div className='form-group'>
              <Form.Label>Vehicle Registration Date</Form.Label>
              <DatePickers />
            </div>
          </div>
          <div className='col-md-4'>
            <div className='form-group pb-1'>
              <Form.Label>Insurance Valid Through</Form.Label>
              <DatePickers />
            </div>
          </div>
          <div className='col-md-4'>
            <div className='form-group pb-1'>
              <Form.Label>Commercial Operating Permit Valid Through</Form.Label>
              <DatePickers />
            </div>
          </div>

          {/* Static Upload Box: Registration */}
          <div className='col-md-4'>
            <div className='form-group mb-24 h-100'>
              <Form.Label>Vehicle Registration Doc</Form.Label>
              <div
                className='border-upload text-center d-flex align-items-center justify-content-center'
                style={{ height: '250px', cursor: 'pointer', flexDirection: 'column' }}
                onClick={() => regRef.current?.click()}
                onDrop={(e) => handleDrop(e, setRegFiles)}
                onDragOver={(e) => e.preventDefault()}
              >
                <div className='text-muted small'>
                  <div className='fs-4 mb-2'>
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 15.9998C1.95 15.9998 1.47933 15.8042 1.088 15.4128C0.696666 15.0215 0.500667 14.5505 0.5 13.9998V11.9998C0.5 11.7165 0.596 11.4792 0.788 11.2878C0.98 11.0965 1.21733 11.0005 1.5 10.9998C1.78267 10.9992 2.02033 11.0952 2.213 11.2878C2.40567 11.4805 2.50133 11.7178 2.5 11.9998V13.9998H14.5V11.9998C14.5 11.7165 14.596 11.4792 14.788 11.2878C14.98 11.0965 15.2173 11.0005 15.5 10.9998C15.7827 10.9992 16.0203 11.0952 16.213 11.2878C16.4057 11.4805 16.5013 11.7178 16.5 11.9998V13.9998C16.5 14.5498 16.3043 15.0208 15.913 15.4128C15.5217 15.8048 15.0507 16.0005 14.5 15.9998H2.5ZM7.5 3.84982L5.625 5.72482C5.425 5.92482 5.18767 6.02082 4.913 6.01282C4.63833 6.00482 4.40067 5.90049 4.2 5.69982C4.01667 5.49982 3.92067 5.26649 3.912 4.99982C3.90333 4.73315 3.99933 4.49982 4.2 4.29982L7.8 0.69982C7.9 0.59982 8.00833 0.529153 8.125 0.48782C8.24167 0.446486 8.36667 0.425487 8.5 0.42482C8.63333 0.424153 8.75833 0.445153 8.875 0.48782C8.99167 0.530486 9.1 0.601153 9.2 0.69982L12.8 4.29982C13 4.49982 13.096 4.73315 13.088 4.99982C13.08 5.26649 12.984 5.49982 12.8 5.69982C12.6 5.89982 12.3627 6.00415 12.088 6.01282C11.8133 6.02149 11.5757 5.92549 11.375 5.72482L9.5 3.84982V10.9998C9.5 11.2832 9.404 11.5208 9.212 11.7128C9.02 11.9048 8.78267 12.0005 8.5 11.9998C8.21733 11.9992 7.98 11.9032 7.788 11.7118C7.596 11.5205 7.5 11.2832 7.5 10.9998V3.84982Z" fill="#838383"/></svg>
                  </div>
                  {regFiles.length > 0 ? regFiles.map((f, i) => <div key={i}>{f.name}</div>) : 'Click or drag to upload'}
                </div>
                <Form.Control
                  type='file'
                  multiple
                  onChange={(e) => handleUpload(e, setRegFiles)}
                  ref={regRef}
                  className='d-none'
                />
              </div>
            </div>
          </div>

          {/* Static Upload Box: Insurance */}
          <div className='col-md-4'>
            <div className='form-group mb-24 h-100'>
              <Form.Label>Vehicle Insurance</Form.Label>
              <div
                className='border-upload text-center d-flex align-items-center justify-content-center'
                style={{ height: '250px', cursor: 'pointer', flexDirection: 'column' }}
                onClick={() => insRef.current?.click()}
                onDrop={(e) => handleDrop(e, setInsFiles)}
                onDragOver={(e) => e.preventDefault()}
              >
                <div className='text-muted small'>
                  <div className='fs-4 mb-2'>
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 15.9998C1.95 15.9998 1.47933 15.8042 1.088 15.4128C0.696666 15.0215 0.500667 14.5505 0.5 13.9998V11.9998C0.5 11.7165 0.596 11.4792 0.788 11.2878C0.98 11.0965 1.21733 11.0005 1.5 10.9998C1.78267 10.9992 2.02033 11.0952 2.213 11.2878C2.40567 11.4805 2.50133 11.7178 2.5 11.9998V13.9998H14.5V11.9998C14.5 11.7165 14.596 11.4792 14.788 11.2878C14.98 11.0965 15.2173 11.0005 15.5 10.9998C15.7827 10.9992 16.0203 11.0952 16.213 11.2878C16.4057 11.4805 16.5013 11.7178 16.5 11.9998V13.9998C16.5 14.5498 16.3043 15.0208 15.913 15.4128C15.5217 15.8048 15.0507 16.0005 14.5 15.9998H2.5ZM7.5 3.84982L5.625 5.72482C5.425 5.92482 5.18767 6.02082 4.913 6.01282C4.63833 6.00482 4.40067 5.90049 4.2 5.69982C4.01667 5.49982 3.92067 5.26649 3.912 4.99982C3.90333 4.73315 3.99933 4.49982 4.2 4.29982L7.8 0.69982C7.9 0.59982 8.00833 0.529153 8.125 0.48782C8.24167 0.446486 8.36667 0.425487 8.5 0.42482C8.63333 0.424153 8.75833 0.445153 8.875 0.48782C8.99167 0.530486 9.1 0.601153 9.2 0.69982L12.8 4.29982C13 4.49982 13.096 4.73315 13.088 4.99982C13.08 5.26649 12.984 5.49982 12.8 5.69982C12.6 5.89982 12.3627 6.00415 12.088 6.01282C11.8133 6.02149 11.5757 5.92549 11.375 5.72482L9.5 3.84982V10.9998C9.5 11.2832 9.404 11.5208 9.212 11.7128C9.02 11.9048 8.78267 12.0005 8.5 11.9998C8.21733 11.9992 7.98 11.9032 7.788 11.7118C7.596 11.5205 7.5 11.2832 7.5 10.9998V3.84982Z" fill="#838383"/></svg>
                  </div>
                  {insFiles.length > 0 ? insFiles.map((f, i) => <div key={i}>{f.name}</div>) : 'Click or drag to upload'}
                </div>
                <Form.Control
                  type='file'
                  multiple
                  onChange={(e) => handleUpload(e, setInsFiles)}
                  ref={insRef}
                  className='d-none'
                />
              </div>
            </div>
          </div>

          {/* Static Upload Box: Permit */}
          <div className='col-md-4'>
            <div className='form-group mb-24 h-100'>
              <Form.Label>Commercial Operating Permit Doc</Form.Label>
              <div
                className='border-upload text-center d-flex align-items-center justify-content-center'
                style={{ height: '250px', cursor: 'pointer', flexDirection: 'column' }}
                onClick={() => permitRef.current?.click()}
                onDrop={(e) => handleDrop(e, setPermitFiles)}
                onDragOver={(e) => e.preventDefault()}
              >
                <div className='text-muted small'>
                  <div className='fs-4 mb-2'>
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 15.9998C1.95 15.9998 1.47933 15.8042 1.088 15.4128C0.696666 15.0215 0.500667 14.5505 0.5 13.9998V11.9998C0.5 11.7165 0.596 11.4792 0.788 11.2878C0.98 11.0965 1.21733 11.0005 1.5 10.9998C1.78267 10.9992 2.02033 11.0952 2.213 11.2878C2.40567 11.4805 2.50133 11.7178 2.5 11.9998V13.9998H14.5V11.9998C14.5 11.7165 14.596 11.4792 14.788 11.2878C14.98 11.0965 15.2173 11.0005 15.5 10.9998C15.7827 10.9992 16.0203 11.0952 16.213 11.2878C16.4057 11.4805 16.5013 11.7178 16.5 11.9998V13.9998C16.5 14.5498 16.3043 15.0208 15.913 15.4128C15.5217 15.8048 15.0507 16.0005 14.5 15.9998H2.5ZM7.5 3.84982L5.625 5.72482C5.425 5.92482 5.18767 6.02082 4.913 6.01282C4.63833 6.00482 4.40067 5.90049 4.2 5.69982C4.01667 5.49982 3.92067 5.26649 3.912 4.99982C3.90333 4.73315 3.99933 4.49982 4.2 4.29982L7.8 0.69982C7.9 0.59982 8.00833 0.529153 8.125 0.48782C8.24167 0.446486 8.36667 0.425487 8.5 0.42482C8.63333 0.424153 8.75833 0.445153 8.875 0.48782C8.99167 0.530486 9.1 0.601153 9.2 0.69982L12.8 4.29982C13 4.49982 13.096 4.73315 13.088 4.99982C13.08 5.26649 12.984 5.49982 12.8 5.69982C12.6 5.89982 12.3627 6.00415 12.088 6.01282C11.8133 6.02149 11.5757 5.92549 11.375 5.72482L9.5 3.84982V10.9998C9.5 11.2832 9.404 11.5208 9.212 11.7128C9.02 11.9048 8.78267 12.0005 8.5 11.9998C8.21733 11.9992 7.98 11.9032 7.788 11.7118C7.596 11.5205 7.5 11.2832 7.5 10.9998V3.84982Z" fill="#838383"/></svg>
                  </div>
                  {permitFiles.length > 0 ? permitFiles.map((f, i) => <div key={i}>{f.name}</div>) : 'Click or drag to upload'}
                </div>
                <Form.Control
                  type='file'
                  multiple
                  onChange={(e) => handleUpload(e, setPermitFiles)}
                  ref={permitRef}
                  className='d-none'
                />
              </div>
            </div>
          </div>

        </div>
      </Form>
    </div>
  )
}

export default BusInfo