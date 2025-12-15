import React from 'react';
import { Dropdown } from 'react-bootstrap';

const StaticDriverSelect = () => {
  return (
    <div className="assign-staff-sec">
      <div className='row'>
        <div className='col-lg-4 col-md-6 mb-4'>
            <div className='assign-box'>
              <label className="form-label fw-semibold">Assign Primary Driver</label>
              <Dropdown>
                <Dropdown.Toggle variant="light" className="d-flex align-items-center gap-2 border rounded px-3 py-2 w-100">
                  <img
                    src="https://randomuser.me/api/portraits/men/75.jpg"
                    alt="Mike Shrue"
                    width="32"
                    height="32"
                    className="rounded-circle"
                  />
                  <span>Mike Shrue</span>
                </Dropdown.Toggle>
                
                <Dropdown.Menu>
                    <Dropdown.Item href="#/mike" className="d-flex align-items-center gap-2">
                      <img
                        src="https://randomuser.me/api/portraits/men/75.jpg"
                        alt="Mike Shrue"
                        width="28"
                        height="28"
                        className="rounded-circle"
                      />
                      <span>Mike Shrue</span>
                    </Dropdown.Item>

                    <Dropdown.Item href="#/john" className="d-flex align-items-center gap-2">
                      <img
                        src="https://randomuser.me/api/portraits/men/76.jpg"
                        alt="John Smith"
                        width="28"
                        height="28"
                        className="rounded-circle"
                      />
                      <span>John Smith</span>
                    </Dropdown.Item>

                    <Dropdown.Item href="#/alex" className="d-flex align-items-center gap-2">
                      <img
                        src="https://randomuser.me/api/portraits/men/77.jpg"
                        alt="Alex Green"
                        width="28"
                        height="28"
                        className="rounded-circle"
                      />
                      <span>Alex Green</span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
        <div className='col-lg-4 col-md-6 mb-4'>
            <div className='assign-box'>
              <label className="form-label fw-semibold">Assign Secondary Diver</label>
              <Dropdown>
                <Dropdown.Toggle variant="light" className="d-flex align-items-center gap-2 border rounded px-3 py-2 w-100">
                  <img
                    src="https://randomuser.me/api/portraits/men/75.jpg"
                    alt="Mike Shrue"
                    width="32"
                    height="32"
                    className="rounded-circle"
                  />
                  <span>Mike Shrue</span>
                </Dropdown.Toggle>
                
                <Dropdown.Menu>
                    <Dropdown.Item href="#/mike" className="d-flex align-items-center gap-2">
                      <img
                        src="https://randomuser.me/api/portraits/men/75.jpg"
                        alt="Mike Shrue"
                        width="28"
                        height="28"
                        className="rounded-circle"
                      />
                      <span>Mike Shrue</span>
                    </Dropdown.Item>

                    <Dropdown.Item href="#/john" className="d-flex align-items-center gap-2">
                      <img
                        src="https://randomuser.me/api/portraits/men/76.jpg"
                        alt="John Smith"
                        width="28"
                        height="28"
                        className="rounded-circle"
                      />
                      <span>John Smith</span>
                    </Dropdown.Item>

                    <Dropdown.Item href="#/alex" className="d-flex align-items-center gap-2">
                      <img
                        src="https://randomuser.me/api/portraits/men/77.jpg"
                        alt="Alex Green"
                        width="28"
                        height="28"
                        className="rounded-circle"
                      />
                      <span>Alex Green</span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
        <div className='col-lg-4 col-md-6 mb-4'>
            <div className='assign-box'>
              <label className="form-label fw-semibold">Assign Helping Staff</label>
              <Dropdown>
                <Dropdown.Toggle variant="light" className="d-flex align-items-center gap-2 border rounded px-3 py-2 w-100">
                  <img
                    src="https://randomuser.me/api/portraits/men/75.jpg"
                    alt="Mike Shrue"
                    width="32"
                    height="32"
                    className="rounded-circle"
                  />
                  <span>Mike Shrue</span>
                </Dropdown.Toggle>
                
                <Dropdown.Menu>
                    <Dropdown.Item href="#/mike" className="d-flex align-items-center gap-2">
                      <img
                        src="https://randomuser.me/api/portraits/men/75.jpg"
                        alt="Mike Shrue"
                        width="28"
                        height="28"
                        className="rounded-circle"
                      />
                      <span>Mike Shrue</span>
                    </Dropdown.Item>

                    <Dropdown.Item href="#/john" className="d-flex align-items-center gap-2">
                      <img
                        src="https://randomuser.me/api/portraits/men/76.jpg"
                        alt="John Smith"
                        width="28"
                        height="28"
                        className="rounded-circle"
                      />
                      <span>John Smith</span>
                    </Dropdown.Item>

                    <Dropdown.Item href="#/alex" className="d-flex align-items-center gap-2">
                      <img
                        src="https://randomuser.me/api/portraits/men/77.jpg"
                        alt="Alex Green"
                        width="28"
                        height="28"
                        className="rounded-circle"
                      />
                      <span>Alex Green</span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
      </div>
    </div>
  );
};

export default StaticDriverSelect;
