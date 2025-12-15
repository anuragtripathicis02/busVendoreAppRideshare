import { useState } from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
import UserDetails from './UserDetails';
import Documentation from './Documentation';
import Operator from './Operator';

const CreateOperator = () => {
  const [key, setKey] = useState('user');
  const [visitedTabs, setVisitedTabs] = useState([]);

  const tabOrder = ['user', 'documentation', 'operator'];

  const updateVisitedTabsOnNext = (selectedKey) => {
    if (!visitedTabs.includes(selectedKey)) {
      setVisitedTabs([...visitedTabs, selectedKey]);
    }
  };

  const updateVisitedTabsOnBack = (selectedKey) => {
    const currentIndex = tabOrder.indexOf(selectedKey);
    const updated = visitedTabs.filter((tab) => tabOrder.indexOf(tab) <= currentIndex);
    setVisitedTabs(updated);
  };

  const handleNext = () => {
    const currentIndex = tabOrder.indexOf(key);
    if (currentIndex < tabOrder.length - 1) {
      const nextKey = tabOrder[currentIndex + 1];
      setKey(nextKey);
      updateVisitedTabsOnNext(key); // mark current tab as visited
    }
  };


  const handleTabSelect = (selectedKey) => {
    const currentIndex = tabOrder.indexOf(key);
    const selectedIndex = tabOrder.indexOf(selectedKey);
  
    if (selectedIndex < currentIndex) {
      updateVisitedTabsOnBack(selectedKey); // going back
    } else {
      updateVisitedTabsOnNext(key); // going forward or same tab
    }
  
    setKey(selectedKey);
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
        <Tab eventKey="user" title={renderTitle('user', 'User Details')}>
          <div className="card-box tabs-booking tabs-operator">
            <div className="inner-tabs-booking-box">
              <UserDetails />
            </div>
            <div className="footer-step-form d-flex justify-content-end">
              <Button className="btn btn-secondary" onClick={handleNext}>
                Confirm & Create Booking
              </Button>
            </div>
          </div>
        </Tab>

        <Tab eventKey="documentation" title={renderTitle('documentation', 'Documentation')}>
          <div className="card-box tabs-booking tabs-operator">
            <div className="inner-tabs-booking-box">
              <Documentation />
            </div>
            <div className="footer-step-form d-flex justify-content-end">
              <Button className="btn btn-secondary" onClick={handleNext}>
                Confirm & Create Booking
              </Button>
            </div>
          </div>
        </Tab>

        <Tab eventKey="operator" title={renderTitle('operator', 'Operator Payout Details')}>
          <div className="card-box tabs-booking tabs-operator">
            <div className="inner-tabs-booking-box">
              <Operator />
            </div>
            <div className="footer-step-form d-flex justify-content-end">
              <Button className="btn btn-secondary">
                Confirm & Create Booking
              </Button>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default CreateOperator;
