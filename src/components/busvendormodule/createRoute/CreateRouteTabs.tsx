import { useState } from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
import StartingPoint from './StartingPoint';
import EndPoint from './EndPoint';
import CreateRoute from './CreateRoute';
import AssignBuses from './AssignBuses';
import AddBusses from './AddBusses';

type TabKey = 'VehicleInformation' | 'VehicleImages' | 'VehicleDocuments' | 'AssignStaff';

const CreateRouteTabs = () => {
  const [key, setKey] = useState<TabKey>('VehicleInformation');
  const [visitedTabs, setVisitedTabs] = useState<TabKey[]>(['VehicleInformation']); // first tab visited
  const [showDateChange, setShowDateChange] = useState(false); // modal state

  const tabOrder: TabKey[] = ['VehicleInformation', 'VehicleImages', 'VehicleDocuments', 'AssignStaff'];

  const updateVisitedTabsOnNext = (selectedKey: TabKey) => {
    if (!visitedTabs.includes(selectedKey)) {
      setVisitedTabs([...visitedTabs, selectedKey]);
    }
  };

  const updateVisitedTabsOnBack = (selectedKey: TabKey) => {
    const currentIndex = tabOrder.indexOf(selectedKey);
    const updated = visitedTabs.filter((tab) => tabOrder.indexOf(tab) <= currentIndex);
    setVisitedTabs(updated);
  };

  const handleNext = () => {
    const currentIndex = tabOrder.indexOf(key);
    if (currentIndex < tabOrder.length - 1) {
      const nextKey = tabOrder[currentIndex + 1];
      updateVisitedTabsOnNext(key);
      setKey(nextKey);
    }
  };

  const handleTabSelect = (selectedKey: string | null) => {
    if (!selectedKey) return;

    const castedKey = selectedKey as TabKey;
    const currentIndex = tabOrder.indexOf(key);
    const selectedIndex = tabOrder.indexOf(castedKey);

    updateVisitedTabsOnNext(key);

    if (selectedIndex < currentIndex) {
      updateVisitedTabsOnBack(castedKey);
    }

    // Prevent skipping ahead
    if (visitedTabs.includes(castedKey) || selectedIndex <= currentIndex + 1) {
      setKey(castedKey);
    }
  };

  const renderTitle = (eventKey: TabKey, label: string) => {
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
        <Tab eventKey="VehicleInformation" title={renderTitle('VehicleInformation', 'Starting Point')}>
          <div className="card-box tabs-booking tabs-operator position-relative">
            <div className="inner-tabs-booking-box">
              <StartingPoint />
            </div>
            <div className="footer-step-form d-flex justify-content-end">
              <Button className="btn btn-secondary" onClick={handleNext}>Save & Next</Button>
            </div>
          </div>
        </Tab>

        <Tab eventKey="VehicleImages" title={renderTitle('VehicleImages', 'End Point')}>
          <div className="card-box tabs-booking tabs-operator position-relative">
            <div className="inner-tabs-booking-box">
              <EndPoint />
            </div>
            <div className="footer-step-form d-flex justify-content-end">
              <Button className="btn btn-secondary" onClick={handleNext}>Save & Next</Button>
            </div>
          </div>
        </Tab>

        <Tab eventKey="VehicleDocuments" title={renderTitle('VehicleDocuments', 'Route Via')}>
          <div className="card-box tabs-booking tabs-operator position-relative">
            <div className="inner-tabs-booking-box">
              <CreateRoute />
            </div>
            <div className="footer-step-form d-flex justify-content-end">
              <Button className="btn btn-secondary" onClick={handleNext}>Save & Next</Button>
            </div>
          </div>
        </Tab>

        <Tab eventKey="AssignStaff" title={renderTitle('AssignStaff', 'Assign Bus')}>
          <div className="card-box tabs-booking tabs-operator position-relative">
            <div className="inner-tabs-booking-box">
              <AssignBuses />
            </div>
            <div className="footer-step-form d-flex justify-content-between gap-2">
              <Button
                className="btn-light-pink btn btn-primary position-static"
                onClick={() => setShowDateChange(true)}
              >
                Add Busses
              </Button>
              <Button className="btn btn-secondary">Save & Next</Button>
            </div>
          </div>
        </Tab>
      </Tabs>
      <AddBusses show={showDateChange} handleClose={() => setShowDateChange(false)} />
    </div>
  );
};

export default CreateRouteTabs;
