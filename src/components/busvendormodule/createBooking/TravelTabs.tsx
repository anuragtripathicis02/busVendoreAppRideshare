import { useState } from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
import JourneyDetails from './JourneyDetails';
import SelectBusSeats from './SelectBusSeats';
import BusSeats from './BusSeats';
import GuestDetails from './GuestDetails';
import ConfirmTabs from './ConfirmTabs';

const TravelTabs = () => {
  const [key, setKey] = useState('journey');
  const [visitedTabs, setVisitedTabs] = useState(['journey']);

  const tabOrder = ['journey', 'seats', 'guests', 'confirm'];

  const updateVisitedTabs = (selectedKey) => {
    const selectedIndex = tabOrder.indexOf(selectedKey);
    const newVisited = tabOrder.slice(0, selectedIndex + 1);
    setVisitedTabs(newVisited);
  };

  const handleNext = () => {
    const currentIndex = tabOrder.indexOf(key);
    if (currentIndex < tabOrder.length - 1) {
      const nextKey = tabOrder[currentIndex + 1];
      setKey(nextKey);
      updateVisitedTabs(nextKey);
    }
  };

  const handleTabSelect = (selectedKey) => {
    setKey(selectedKey);
    updateVisitedTabs(selectedKey);
  };

  const renderTitle = (eventKey, label) => {
    const isVisited = visitedTabs.includes(eventKey);
    return (
      <span className={`tab-title d-flex align-items-center justify-content-center gap-lg-2 gap-1 flex-row-reverse ${isVisited ? 'selected' : ''}`}>
        {label}
        {isVisited && (
          <span className="check-icon d-block">
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="8" fill="#20A66A" />
              <path
                d="M5.5 8L7.5 10L11 6.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        )}
      </span>
    );
  };

  return (
    <div className="create-booking-tabs-sec">
      <Tabs
        activeKey={key}
        onSelect={handleTabSelect}
        className="tabs-nav-box flex-nowrap overflow-auto d-flex gap-0"
      >
        <Tab eventKey="journey" title={renderTitle('journey', 'Journey Details')}>
          <div className="card-box tabs-booking">
            <div className="inner-tabs-booking-box">
              <JourneyDetails />
            </div>
            <div className="footer-step-form d-flex justify-content-end">
              <Button className="btn btn-secondary" onClick={handleNext}>
                Confirm & Create Booking
              </Button>
            </div>
          </div>
        </Tab>

        <Tab eventKey="seats" title={renderTitle('seats', 'Select a Bus & Seats')}>
          <div className=" tabs-booking">
            <div className="inner-tabs-booking-box">
                <div className='row'>
                    <div className='col-xl-6 mb-4'>
                        <SelectBusSeats />
                    </div>
                    <div className='col-xl-6 mb-4'>
                        <BusSeats />
                    </div>
                </div>
            </div>
            <div className="footer-step-form d-flex justify-content-end">
              <Button className="btn btn-secondary" onClick={handleNext}>
                Confirm & Create Booking
              </Button>
            </div>
          </div>
        </Tab>

        <Tab eventKey="guests" title={renderTitle('guests', 'Guest Details')}>
          <div className="card-box tabs-booking">
            <div className="inner-tabs-booking-box">
                <GuestDetails />
            </div>
            <div className="footer-step-form d-flex justify-content-end">
              <Button className="btn btn-secondary" onClick={handleNext}>
                Confirm & Create Booking
              </Button>
            </div>
          </div>
        </Tab>

        <Tab eventKey="confirm" title={renderTitle('confirm', 'Confirm')}>
            <div className=" tabs-booking">
                <div className="inner-tabs-booking-box">
                    <ConfirmTabs />
                </div>
                <div className="footer-step-form d-flex justify-content-end">
                    <Button className="btn btn-secondary" onClick={handleNext}>
                        Confirm & Create Booking
                    </Button>
                </div>
            </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default TravelTabs;
