import React from 'react'
import { Pagination } from 'react-bootstrap'

const BookingCard = () => {
  return (
    <div className='booking-card-main'>
        <div className='row'>
            <div className='col-xxl-4 col-md-6 mb-4'>
                <div className='card-box'>
                    <div className='top-booking d-flex align-items-center gap-2 justify-content-between'>
                      <div className='left-top-booking text-start'>
                          <h2>John Doe</h2>
                          <h3> #1234567890</h3>
                      </div>
                      <div className='right-top-booking text-end'>
                          <div className='seats d-flex align-items-center gap-1 justify-content-end'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_10494_10481)"><path d="M4.36346 12.3641V7.63681C4.36346 7.34748 4.24852 7.07 4.04394 6.86542C3.83935 6.66083 3.56188 6.5459 3.27255 6.5459C2.98322 6.5459 2.70575 6.66083 2.50116 6.86542C2.29658 7.07 2.18164 7.34748 2.18164 7.63681V10.9095C2.18164 11.2953 2.33489 11.6653 2.60767 11.9381C2.88045 12.2108 3.25042 12.3641 3.63619 12.3641H4.36346ZM4.36346 12.3641V9.45499H11.6362V12.3641M4.36346 12.3641H11.6362M11.6362 12.3641V7.63681C11.6362 7.34748 11.7511 7.07 11.9557 6.86542C12.1603 6.66083 12.4378 6.5459 12.7271 6.5459C13.0164 6.5459 13.2939 6.66083 13.4985 6.86542C13.7031 7.07 13.818 7.34748 13.818 7.63681V10.9095C13.818 11.2953 13.6648 11.6653 13.392 11.9381C13.1192 12.2108 12.7492 12.3641 12.3635 12.3641H11.6362ZM4.36346 15.2732H11.6362M9.818 15.2732H6.18164V12.3641H9.818V15.2732Z" stroke="#652669" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.728 6.54572V5.09118C12.728 3.03445 12.728 2.00536 12.0887 1.36681C11.4502 0.727539 10.4211 0.727539 8.36435 0.727539H7.63707C5.58035 0.727539 4.55126 0.727539 3.91271 1.36681C3.27344 2.00536 3.27344 3.03445 3.27344 5.09118V6.54572" stroke="#652669" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_10494_10481"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
                            <span> 5 Seats</span>
                          </div>
                          <p>24-04-2025 at 02:30PM</p>
                      </div>
                    </div>
                    <div className='bottom-booking'>
                        <div className='booking-details mb-3 d-flex align-items-center gap-2 justify-content-between'>
                            <div className='left-bootom-booking text-start'>
                                <h4>Kumasi</h4>
                                <span className='small-text-box'>16:00</span>
                            </div>
                            <div className='mid-bottom-booking text-center'>
                              <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.5254 4.94141L27.5837 9.99974L22.5254 15.0581" stroke="#652669" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.5 10L27.5 10" stroke="#652669" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                              <span className='small-text-box'>Route #134</span>
                            </div>
                            <div className='right-bottom-booking text-end'>
                                <h4>Tamale</h4>
                                <span className='small-text-box'>19:31</span>
                            </div>
                        </div>
                        <div className='booking-details d-flex align-items-center gap-2 justify-content-between'>
                            <div className='left-bootom-booking text-start'>
                                <span className='small-text-box'>Driver Name</span>
                                <p>Mike Williams</p>
                            </div>
                            <div className='mid-bottom-booking text-center'>
                                <span className='small-text-box'>Status</span>
                                <h5 className='yellow-text'>Ongoing Trip</h5>
                            </div>
                            <div className='right-bottom-booking text-end'>
                                <span className='small-text-box'>Bus Number</span>
                                <p>RJ14BT1234</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xxl-4 col-md-6 mb-4'>
                <div className='card-box'>
                    <div className='top-booking d-flex align-items-center gap-2 justify-content-between'>
                      <div className='left-top-booking text-start'>
                          <h2>John Doe</h2>
                          <h3> #1234567890</h3>
                      </div>
                      <div className='right-top-booking text-end'>
                          <div className='seats d-flex align-items-center gap-1 justify-content-end'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_10494_10481)"><path d="M4.36346 12.3641V7.63681C4.36346 7.34748 4.24852 7.07 4.04394 6.86542C3.83935 6.66083 3.56188 6.5459 3.27255 6.5459C2.98322 6.5459 2.70575 6.66083 2.50116 6.86542C2.29658 7.07 2.18164 7.34748 2.18164 7.63681V10.9095C2.18164 11.2953 2.33489 11.6653 2.60767 11.9381C2.88045 12.2108 3.25042 12.3641 3.63619 12.3641H4.36346ZM4.36346 12.3641V9.45499H11.6362V12.3641M4.36346 12.3641H11.6362M11.6362 12.3641V7.63681C11.6362 7.34748 11.7511 7.07 11.9557 6.86542C12.1603 6.66083 12.4378 6.5459 12.7271 6.5459C13.0164 6.5459 13.2939 6.66083 13.4985 6.86542C13.7031 7.07 13.818 7.34748 13.818 7.63681V10.9095C13.818 11.2953 13.6648 11.6653 13.392 11.9381C13.1192 12.2108 12.7492 12.3641 12.3635 12.3641H11.6362ZM4.36346 15.2732H11.6362M9.818 15.2732H6.18164V12.3641H9.818V15.2732Z" stroke="#652669" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.728 6.54572V5.09118C12.728 3.03445 12.728 2.00536 12.0887 1.36681C11.4502 0.727539 10.4211 0.727539 8.36435 0.727539H7.63707C5.58035 0.727539 4.55126 0.727539 3.91271 1.36681C3.27344 2.00536 3.27344 3.03445 3.27344 5.09118V6.54572" stroke="#652669" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_10494_10481"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
                            <span> 5 Seats</span>
                          </div>
                          <p>24-04-2025 at 02:30PM</p>
                      </div>
                    </div>
                    <div className='bottom-booking'>
                        <div className='booking-details mb-3 d-flex align-items-center gap-2 justify-content-between'>
                            <div className='left-bootom-booking text-start'>
                                <h4>Kumasi</h4>
                                <span className='small-text-box'>16:00</span>
                            </div>
                            <div className='mid-bottom-booking text-center'>
                              <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.5254 4.94141L27.5837 9.99974L22.5254 15.0581" stroke="#652669" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.5 10L27.5 10" stroke="#652669" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                              <span className='small-text-box'>Route #134</span>
                            </div>
                            <div className='right-bottom-booking text-end'>
                                <h4>Tamale</h4>
                                <span className='small-text-box'>19:31</span>
                            </div>
                        </div>
                        <div className='booking-details d-flex align-items-center gap-2 justify-content-between'>
                            <div className='left-bootom-booking text-start'>
                                <span className='small-text-box'>Driver Name</span>
                                <p>Mike Williams</p>
                            </div>
                            <div className='mid-bottom-booking text-center'>
                                <span className='small-text-box'>Status</span>
                                <h5>Completed</h5>
                            </div>
                            <div className='right-bottom-booking text-end'>
                                <span className='small-text-box'>Bus Number</span>
                                <p>RJ14BT1234</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xxl-4 col-md-6 mb-4'>
                <div className='card-box'>
                    <div className='top-booking d-flex align-items-center gap-2 justify-content-between'>
                      <div className='left-top-booking text-start'>
                          <h2>John Doe</h2>
                          <h3> #1234567890</h3>
                      </div>
                      <div className='right-top-booking text-end'>
                          <div className='seats d-flex align-items-center gap-1 justify-content-end'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_10494_10481)"><path d="M4.36346 12.3641V7.63681C4.36346 7.34748 4.24852 7.07 4.04394 6.86542C3.83935 6.66083 3.56188 6.5459 3.27255 6.5459C2.98322 6.5459 2.70575 6.66083 2.50116 6.86542C2.29658 7.07 2.18164 7.34748 2.18164 7.63681V10.9095C2.18164 11.2953 2.33489 11.6653 2.60767 11.9381C2.88045 12.2108 3.25042 12.3641 3.63619 12.3641H4.36346ZM4.36346 12.3641V9.45499H11.6362V12.3641M4.36346 12.3641H11.6362M11.6362 12.3641V7.63681C11.6362 7.34748 11.7511 7.07 11.9557 6.86542C12.1603 6.66083 12.4378 6.5459 12.7271 6.5459C13.0164 6.5459 13.2939 6.66083 13.4985 6.86542C13.7031 7.07 13.818 7.34748 13.818 7.63681V10.9095C13.818 11.2953 13.6648 11.6653 13.392 11.9381C13.1192 12.2108 12.7492 12.3641 12.3635 12.3641H11.6362ZM4.36346 15.2732H11.6362M9.818 15.2732H6.18164V12.3641H9.818V15.2732Z" stroke="#652669" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.728 6.54572V5.09118C12.728 3.03445 12.728 2.00536 12.0887 1.36681C11.4502 0.727539 10.4211 0.727539 8.36435 0.727539H7.63707C5.58035 0.727539 4.55126 0.727539 3.91271 1.36681C3.27344 2.00536 3.27344 3.03445 3.27344 5.09118V6.54572" stroke="#652669" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_10494_10481"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
                            <span> 5 Seats</span>
                          </div>
                          <p>24-04-2025 at 02:30PM</p>
                      </div>
                    </div>
                    <div className='bottom-booking'>
                        <div className='booking-details mb-3 d-flex align-items-center gap-2 justify-content-between'>
                            <div className='left-bootom-booking text-start'>
                                <h4>Kumasi</h4>
                                <span className='small-text-box'>16:00</span>
                            </div>
                            <div className='mid-bottom-booking text-center'>
                              <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.5254 4.94141L27.5837 9.99974L22.5254 15.0581" stroke="#652669" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.5 10L27.5 10" stroke="#652669" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                              <span className='small-text-box'>Route #134</span>
                            </div>
                            <div className='right-bottom-booking text-end'>
                                <h4>Tamale</h4>
                                <span className='small-text-box'>19:31</span>
                            </div>
                        </div>
                        <div className='booking-details d-flex align-items-center gap-2 justify-content-between'>
                            <div className='left-bootom-booking text-start'>
                                <span className='small-text-box'>Driver Name</span>
                                <p>Mike Williams</p>
                            </div>
                            <div className='mid-bottom-booking text-center'>
                                <span className='small-text-box'>Status</span>
                                <h5 className='red-text'>Cancelled</h5>
                            </div>
                            <div className='right-bottom-booking text-end'>
                                <span className='small-text-box'>Bus Number</span>
                                <p>RJ14BT1234</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xxl-4 col-md-6 mb-4'>
                <div className='card-box'>
                    <div className='top-booking d-flex align-items-center gap-2 justify-content-between'>
                      <div className='left-top-booking text-start'>
                          <h2>John Doe</h2>
                          <h3> #1234567890</h3>
                      </div>
                      <div className='right-top-booking text-end'>
                          <div className='seats d-flex align-items-center gap-1 justify-content-end'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_10494_10481)"><path d="M4.36346 12.3641V7.63681C4.36346 7.34748 4.24852 7.07 4.04394 6.86542C3.83935 6.66083 3.56188 6.5459 3.27255 6.5459C2.98322 6.5459 2.70575 6.66083 2.50116 6.86542C2.29658 7.07 2.18164 7.34748 2.18164 7.63681V10.9095C2.18164 11.2953 2.33489 11.6653 2.60767 11.9381C2.88045 12.2108 3.25042 12.3641 3.63619 12.3641H4.36346ZM4.36346 12.3641V9.45499H11.6362V12.3641M4.36346 12.3641H11.6362M11.6362 12.3641V7.63681C11.6362 7.34748 11.7511 7.07 11.9557 6.86542C12.1603 6.66083 12.4378 6.5459 12.7271 6.5459C13.0164 6.5459 13.2939 6.66083 13.4985 6.86542C13.7031 7.07 13.818 7.34748 13.818 7.63681V10.9095C13.818 11.2953 13.6648 11.6653 13.392 11.9381C13.1192 12.2108 12.7492 12.3641 12.3635 12.3641H11.6362ZM4.36346 15.2732H11.6362M9.818 15.2732H6.18164V12.3641H9.818V15.2732Z" stroke="#652669" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.728 6.54572V5.09118C12.728 3.03445 12.728 2.00536 12.0887 1.36681C11.4502 0.727539 10.4211 0.727539 8.36435 0.727539H7.63707C5.58035 0.727539 4.55126 0.727539 3.91271 1.36681C3.27344 2.00536 3.27344 3.03445 3.27344 5.09118V6.54572" stroke="#652669" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_10494_10481"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
                            <span> 5 Seats</span>
                          </div>
                          <p>24-04-2025 at 02:30PM</p>
                      </div>
                    </div>
                    <div className='bottom-booking'>
                        <div className='booking-details mb-3 d-flex align-items-center gap-2 justify-content-between'>
                            <div className='left-bootom-booking text-start'>
                                <h4>Kumasi</h4>
                                <span className='small-text-box'>16:00</span>
                            </div>
                            <div className='mid-bottom-booking text-center'>
                              <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.5254 4.94141L27.5837 9.99974L22.5254 15.0581" stroke="#652669" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.5 10L27.5 10" stroke="#652669" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                              <span className='small-text-box'>Route #134</span>
                            </div>
                            <div className='right-bottom-booking text-end'>
                                <h4>Tamale</h4>
                                <span className='small-text-box'>19:31</span>
                            </div>
                        </div>
                        <div className='booking-details d-flex align-items-center gap-2 justify-content-between'>
                            <div className='left-bootom-booking text-start'>
                                <span className='small-text-box'>Driver Name</span>
                                <p>Mike Williams</p>
                            </div>
                            <div className='mid-bottom-booking text-center'>
                                <span className='small-text-box'>Status</span>
                                <h5 className='green-text'>Upcoming</h5>
                            </div>
                            <div className='right-bottom-booking text-end'>
                                <span className='small-text-box'>Bus Number</span>
                                <p>RJ14BT1234</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xxl-4 col-md-6 mb-4'>
                <div className='card-box position-relative'>
                    <div className='top-booking d-flex align-items-center gap-2 justify-content-between'>
                      <div className='booking-sos d-flex justify-content-center align-items-center gap-1'>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_10494_11112)"><path d="M7.5 1.5V1C7.5 0.867392 7.55268 0.740215 7.64645 0.646447C7.74021 0.552678 7.86739 0.5 8 0.5C8.13261 0.5 8.25979 0.552678 8.35355 0.646447C8.44732 0.740215 8.5 0.867392 8.5 1V1.5C8.5 1.63261 8.44732 1.75979 8.35355 1.85355C8.25979 1.94732 8.13261 2 8 2C7.86739 2 7.74021 1.94732 7.64645 1.85355C7.55268 1.75979 7.5 1.63261 7.5 1.5ZM12.5 3.5C12.5657 3.50005 12.6307 3.48716 12.6914 3.46207C12.7521 3.43697 12.8073 3.40017 12.8538 3.35375L13.3538 2.85375C13.4476 2.75993 13.5003 2.63268 13.5003 2.5C13.5003 2.36732 13.4476 2.24007 13.3538 2.14625C13.2599 2.05243 13.1327 1.99972 13 1.99972C12.8673 1.99972 12.7401 2.05243 12.6462 2.14625L12.1462 2.64625C12.0762 2.71618 12.0286 2.8053 12.0092 2.90235C11.9899 2.99939 11.9998 3.09998 12.0377 3.1914C12.0756 3.28281 12.1397 3.36092 12.222 3.41586C12.3043 3.4708 12.4011 3.50008 12.5 3.5ZM3.14625 3.35375C3.19271 3.40021 3.24786 3.43706 3.30855 3.4622C3.36925 3.48734 3.4343 3.50028 3.5 3.50028C3.5657 3.50028 3.63075 3.48734 3.69145 3.4622C3.75214 3.43706 3.80729 3.40021 3.85375 3.35375C3.90021 3.30729 3.93706 3.25214 3.9622 3.19145C3.98734 3.13075 4.00028 3.0657 4.00028 3C4.00028 2.9343 3.98734 2.86925 3.9622 2.80855C3.93706 2.74786 3.90021 2.69271 3.85375 2.64625L3.35375 2.14625C3.25993 2.05243 3.13268 1.99972 3 1.99972C2.86732 1.99972 2.74007 2.05243 2.64625 2.14625C2.55243 2.24007 2.49972 2.36732 2.49972 2.5C2.49972 2.63268 2.55243 2.75993 2.64625 2.85375L3.14625 3.35375ZM8.58375 5.00688C8.51871 4.99537 8.45203 4.99687 8.38757 5.01128C8.32311 5.0257 8.26215 5.05274 8.2082 5.09085C8.15425 5.12896 8.10839 5.17738 8.07326 5.23331C8.03813 5.28925 8.01443 5.35159 8.00353 5.41673C7.99263 5.48188 7.99475 5.54854 8.00976 5.61286C8.02477 5.67718 8.05238 5.73789 8.09098 5.79149C8.12959 5.84508 8.17843 5.89049 8.23469 5.9251C8.29095 5.95971 8.35351 5.98283 8.41875 5.99312C9.60437 6.1925 10.5 7.27 10.5 8.5C10.5 8.63261 10.5527 8.75979 10.6464 8.85355C10.7402 8.94732 10.8674 9 11 9C11.1326 9 11.2598 8.94732 11.3536 8.85355C11.4473 8.75979 11.5 8.63261 11.5 8.5C11.5 6.7875 10.2456 5.28562 8.5825 5.00688H8.58375ZM14.5 11.5V13C14.5 13.2652 14.3946 13.5196 14.2071 13.7071C14.0196 13.8946 13.7652 14 13.5 14H2.5C2.23478 14 1.98043 13.8946 1.79289 13.7071C1.60536 13.5196 1.5 13.2652 1.5 13V11.5C1.5 11.2348 1.60536 10.9804 1.79289 10.7929C1.98043 10.6054 2.23478 10.5 2.5 10.5V8.5C2.49998 7.77419 2.64362 7.05556 2.92263 6.38552C3.20165 5.71549 3.61052 5.10731 4.12569 4.59603C4.64086 4.08476 5.25212 3.68051 5.92425 3.40658C6.59639 3.13266 7.31609 2.99447 8.04187 3C11.0513 3.0225 13.5 5.51813 13.5 8.5625V10.5C13.7652 10.5 14.0196 10.6054 14.2071 10.7929C14.3946 10.9804 14.5 11.2348 14.5 11.5ZM3.5 10.5H12.5V8.5625C12.5 6.0625 10.4969 4.01813 8.03438 4H8C6.80653 4 5.66193 4.47411 4.81802 5.31802C3.97411 6.16193 3.5 7.30653 3.5 8.5V10.5ZM13.5 13V11.5H2.5V13H13.5Z" fill="white"/></g><defs><clipPath id="clip0_10494_11112"><rect width="16" height="16" fill="white" transform="translate(0 0.5)"/></clipPath></defs></svg>
                        <span>SOS!</span>
                      </div>
                      <div className='left-top-booking text-start'>
                          <h2>John Doe</h2>
                          <h3> #1234567890</h3>
                      </div>
                      <div className='right-top-booking text-end'>
                          <div className='seats d-flex align-items-center gap-1 justify-content-end'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_10494_10481)"><path d="M4.36346 12.3641V7.63681C4.36346 7.34748 4.24852 7.07 4.04394 6.86542C3.83935 6.66083 3.56188 6.5459 3.27255 6.5459C2.98322 6.5459 2.70575 6.66083 2.50116 6.86542C2.29658 7.07 2.18164 7.34748 2.18164 7.63681V10.9095C2.18164 11.2953 2.33489 11.6653 2.60767 11.9381C2.88045 12.2108 3.25042 12.3641 3.63619 12.3641H4.36346ZM4.36346 12.3641V9.45499H11.6362V12.3641M4.36346 12.3641H11.6362M11.6362 12.3641V7.63681C11.6362 7.34748 11.7511 7.07 11.9557 6.86542C12.1603 6.66083 12.4378 6.5459 12.7271 6.5459C13.0164 6.5459 13.2939 6.66083 13.4985 6.86542C13.7031 7.07 13.818 7.34748 13.818 7.63681V10.9095C13.818 11.2953 13.6648 11.6653 13.392 11.9381C13.1192 12.2108 12.7492 12.3641 12.3635 12.3641H11.6362ZM4.36346 15.2732H11.6362M9.818 15.2732H6.18164V12.3641H9.818V15.2732Z" stroke="#652669" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.728 6.54572V5.09118C12.728 3.03445 12.728 2.00536 12.0887 1.36681C11.4502 0.727539 10.4211 0.727539 8.36435 0.727539H7.63707C5.58035 0.727539 4.55126 0.727539 3.91271 1.36681C3.27344 2.00536 3.27344 3.03445 3.27344 5.09118V6.54572" stroke="#652669" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_10494_10481"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
                            <span> 5 Seats</span>
                          </div>
                          <p>24-04-2025 at 02:30PM</p>
                      </div>
                    </div>
                    <div className='bottom-booking'>
                        <div className='booking-details mb-3 d-flex align-items-center gap-2 justify-content-between'>
                            <div className='left-bootom-booking text-start'>
                                <h4>Kumasi</h4>
                                <span className='small-text-box'>16:00</span>
                            </div>
                            <div className='mid-bottom-booking text-center'>
                              <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.5254 4.94141L27.5837 9.99974L22.5254 15.0581" stroke="#652669" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.5 10L27.5 10" stroke="#652669" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                              <span className='small-text-box'>Route #134</span>
                            </div>
                            <div className='right-bottom-booking text-end'>
                                <h4>Tamale</h4>
                                <span className='small-text-box'>19:31</span>
                            </div>
                        </div>
                        <div className='booking-details d-flex align-items-center gap-2 justify-content-between'>
                            <div className='left-bootom-booking text-start'>
                                <span className='small-text-box'>Driver Name</span>
                                <p>Mike Williams</p>
                            </div>
                            <div className='mid-bottom-booking text-center'>
                                <span className='small-text-box'>Status</span>
                                <h5 className='yellow-text'>Ongoing Trip</h5>
                            </div>
                            <div className='right-bottom-booking text-end'>
                                <span className='small-text-box'>Bus Number</span>
                                <p>RJ14BT1234</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xxl-4 col-md-6 mb-4'>
                <div className='card-box'>
                    <div className='top-booking d-flex align-items-center gap-2 justify-content-between'>
                      <div className='left-top-booking text-start'>
                          <h2>John Doe</h2>
                          <h3> #1234567890</h3>
                      </div>
                      <div className='right-top-booking text-end'>
                          <div className='seats d-flex align-items-center gap-1 justify-content-end'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_10494_10481)"><path d="M4.36346 12.3641V7.63681C4.36346 7.34748 4.24852 7.07 4.04394 6.86542C3.83935 6.66083 3.56188 6.5459 3.27255 6.5459C2.98322 6.5459 2.70575 6.66083 2.50116 6.86542C2.29658 7.07 2.18164 7.34748 2.18164 7.63681V10.9095C2.18164 11.2953 2.33489 11.6653 2.60767 11.9381C2.88045 12.2108 3.25042 12.3641 3.63619 12.3641H4.36346ZM4.36346 12.3641V9.45499H11.6362V12.3641M4.36346 12.3641H11.6362M11.6362 12.3641V7.63681C11.6362 7.34748 11.7511 7.07 11.9557 6.86542C12.1603 6.66083 12.4378 6.5459 12.7271 6.5459C13.0164 6.5459 13.2939 6.66083 13.4985 6.86542C13.7031 7.07 13.818 7.34748 13.818 7.63681V10.9095C13.818 11.2953 13.6648 11.6653 13.392 11.9381C13.1192 12.2108 12.7492 12.3641 12.3635 12.3641H11.6362ZM4.36346 15.2732H11.6362M9.818 15.2732H6.18164V12.3641H9.818V15.2732Z" stroke="#652669" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.728 6.54572V5.09118C12.728 3.03445 12.728 2.00536 12.0887 1.36681C11.4502 0.727539 10.4211 0.727539 8.36435 0.727539H7.63707C5.58035 0.727539 4.55126 0.727539 3.91271 1.36681C3.27344 2.00536 3.27344 3.03445 3.27344 5.09118V6.54572" stroke="#652669" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_10494_10481"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
                            <span> 5 Seats</span>
                          </div>
                          <p>24-04-2025 at 02:30PM</p>
                      </div>
                    </div>
                    <div className='bottom-booking'>
                        <div className='booking-details mb-3 d-flex align-items-center gap-2 justify-content-between'>
                            <div className='left-bootom-booking text-start'>
                                <h4>Kumasi</h4>
                                <span className='small-text-box'>16:00</span>
                            </div>
                            <div className='mid-bottom-booking text-center'>
                              <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.5254 4.94141L27.5837 9.99974L22.5254 15.0581" stroke="#652669" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.5 10L27.5 10" stroke="#652669" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                              <span className='small-text-box'>Route #134</span>
                            </div>
                            <div className='right-bottom-booking text-end'>
                                <h4>Tamale</h4>
                                <span className='small-text-box'>19:31</span>
                            </div>
                        </div>
                        <div className='booking-details d-flex align-items-center gap-2 justify-content-between'>
                            <div className='left-bootom-booking text-start'>
                                <span className='small-text-box'>Driver Name</span>
                                <p>Mike Williams</p>
                            </div>
                            <div className='mid-bottom-booking text-center'>
                                <span className='small-text-box'>Status</span>
                                <h5>Completed</h5>
                            </div>
                            <div className='right-bottom-booking text-end'>
                                <span className='small-text-box'>Bus Number</span>
                                <p>RJ14BT1234</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xxl-4 col-md-6 mb-4'>
                <div className='card-box'>
                    <div className='top-booking d-flex align-items-center gap-2 justify-content-between'>
                      <div className='left-top-booking text-start'>
                          <h2>John Doe</h2>
                          <h3> #1234567890</h3>
                      </div>
                      <div className='right-top-booking text-end'>
                          <div className='seats d-flex align-items-center gap-1 justify-content-end'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_10494_10481)"><path d="M4.36346 12.3641V7.63681C4.36346 7.34748 4.24852 7.07 4.04394 6.86542C3.83935 6.66083 3.56188 6.5459 3.27255 6.5459C2.98322 6.5459 2.70575 6.66083 2.50116 6.86542C2.29658 7.07 2.18164 7.34748 2.18164 7.63681V10.9095C2.18164 11.2953 2.33489 11.6653 2.60767 11.9381C2.88045 12.2108 3.25042 12.3641 3.63619 12.3641H4.36346ZM4.36346 12.3641V9.45499H11.6362V12.3641M4.36346 12.3641H11.6362M11.6362 12.3641V7.63681C11.6362 7.34748 11.7511 7.07 11.9557 6.86542C12.1603 6.66083 12.4378 6.5459 12.7271 6.5459C13.0164 6.5459 13.2939 6.66083 13.4985 6.86542C13.7031 7.07 13.818 7.34748 13.818 7.63681V10.9095C13.818 11.2953 13.6648 11.6653 13.392 11.9381C13.1192 12.2108 12.7492 12.3641 12.3635 12.3641H11.6362ZM4.36346 15.2732H11.6362M9.818 15.2732H6.18164V12.3641H9.818V15.2732Z" stroke="#652669" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.728 6.54572V5.09118C12.728 3.03445 12.728 2.00536 12.0887 1.36681C11.4502 0.727539 10.4211 0.727539 8.36435 0.727539H7.63707C5.58035 0.727539 4.55126 0.727539 3.91271 1.36681C3.27344 2.00536 3.27344 3.03445 3.27344 5.09118V6.54572" stroke="#652669" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_10494_10481"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
                            <span> 5 Seats</span>
                          </div>
                          <p>24-04-2025 at 02:30PM</p>
                      </div>
                    </div>
                    <div className='bottom-booking'>
                        <div className='booking-details mb-3 d-flex align-items-center gap-2 justify-content-between'>
                            <div className='left-bootom-booking text-start'>
                                <h4>Kumasi</h4>
                                <span className='small-text-box'>16:00</span>
                            </div>
                            <div className='mid-bottom-booking text-center'>
                              <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.5254 4.94141L27.5837 9.99974L22.5254 15.0581" stroke="#652669" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.5 10L27.5 10" stroke="#652669" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                              <span className='small-text-box'>Route #134</span>
                            </div>
                            <div className='right-bottom-booking text-end'>
                                <h4>Tamale</h4>
                                <span className='small-text-box'>19:31</span>
                            </div>
                        </div>
                        <div className='booking-details d-flex align-items-center gap-2 justify-content-between'>
                            <div className='left-bootom-booking text-start'>
                                <span className='small-text-box'>Driver Name</span>
                                <p>Mike Williams</p>
                            </div>
                            <div className='mid-bottom-booking text-center'>
                                <span className='small-text-box'>Status</span>
                                <h5 className='red-text'>Cancelled</h5>
                            </div>
                            <div className='right-bottom-booking text-end'>
                                <span className='small-text-box'>Bus Number</span>
                                <p>RJ14BT1234</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xxl-4 col-md-6 mb-4'>
                <div className='card-box'>
                    <div className='top-booking d-flex align-items-center gap-2 justify-content-between'>
                      <div className='left-top-booking text-start'>
                          <h2>John Doe</h2>
                          <h3> #1234567890</h3>
                      </div>
                      <div className='right-top-booking text-end'>
                          <div className='seats d-flex align-items-center gap-1 justify-content-end'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_10494_10481)"><path d="M4.36346 12.3641V7.63681C4.36346 7.34748 4.24852 7.07 4.04394 6.86542C3.83935 6.66083 3.56188 6.5459 3.27255 6.5459C2.98322 6.5459 2.70575 6.66083 2.50116 6.86542C2.29658 7.07 2.18164 7.34748 2.18164 7.63681V10.9095C2.18164 11.2953 2.33489 11.6653 2.60767 11.9381C2.88045 12.2108 3.25042 12.3641 3.63619 12.3641H4.36346ZM4.36346 12.3641V9.45499H11.6362V12.3641M4.36346 12.3641H11.6362M11.6362 12.3641V7.63681C11.6362 7.34748 11.7511 7.07 11.9557 6.86542C12.1603 6.66083 12.4378 6.5459 12.7271 6.5459C13.0164 6.5459 13.2939 6.66083 13.4985 6.86542C13.7031 7.07 13.818 7.34748 13.818 7.63681V10.9095C13.818 11.2953 13.6648 11.6653 13.392 11.9381C13.1192 12.2108 12.7492 12.3641 12.3635 12.3641H11.6362ZM4.36346 15.2732H11.6362M9.818 15.2732H6.18164V12.3641H9.818V15.2732Z" stroke="#652669" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.728 6.54572V5.09118C12.728 3.03445 12.728 2.00536 12.0887 1.36681C11.4502 0.727539 10.4211 0.727539 8.36435 0.727539H7.63707C5.58035 0.727539 4.55126 0.727539 3.91271 1.36681C3.27344 2.00536 3.27344 3.03445 3.27344 5.09118V6.54572" stroke="#652669" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_10494_10481"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
                            <span> 5 Seats</span>
                          </div>
                          <p>24-04-2025 at 02:30PM</p>
                      </div>
                    </div>
                    <div className='bottom-booking'>
                        <div className='booking-details mb-3 d-flex align-items-center gap-2 justify-content-between'>
                            <div className='left-bootom-booking text-start'>
                                <h4>Kumasi</h4>
                                <span className='small-text-box'>16:00</span>
                            </div>
                            <div className='mid-bottom-booking text-center'>
                              <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.5254 4.94141L27.5837 9.99974L22.5254 15.0581" stroke="#652669" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.5 10L27.5 10" stroke="#652669" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                              <span className='small-text-box'>Route #134</span>
                            </div>
                            <div className='right-bottom-booking text-end'>
                                <h4>Tamale</h4>
                                <span className='small-text-box'>19:31</span>
                            </div>
                        </div>
                        <div className='booking-details d-flex align-items-center gap-2 justify-content-between'>
                            <div className='left-bootom-booking text-start'>
                                <span className='small-text-box'>Driver Name</span>
                                <p>Mike Williams</p>
                            </div>
                            <div className='mid-bottom-booking text-center'>
                                <span className='small-text-box'>Status</span>
                                <h5 className='green-text'>Upcoming</h5>
                            </div>
                            <div className='right-bottom-booking text-end'>
                                <span className='small-text-box'>Bus Number</span>
                                <p>RJ14BT1234</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='pagination-sec justify-content-center w-100 d-flex mt-4 mb-4'>
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>
              {/* <Pagination.Ellipsis /> */}

              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>

              {/* <Pagination.Ellipsis /> */}
              {/* <Pagination.Item>{20}</Pagination.Item> */}
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
        </div>
    </div>
  )
}

export default BookingCard