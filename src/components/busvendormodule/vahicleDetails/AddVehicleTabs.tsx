import { useState } from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
import VehicleInformation from './VehicleInformation';
import VehicleImages from './VehicleImages';
import VehicleDocuments from './VehicleDocuments';
import StaticDriverSelect from './StaticDriverSelect';
import SittingPlan from './SittingPlan';

// type TabKey = 'VehicleInformation' | 'VehicleImages' | 'VehicleDocuments' | 'SittingPlan' | 'AssignStaff';

const AddVehicleTabs =  () => {const [key, setKey] = useState('VehicleInformation');
  const [visitedTabs, setVisitedTabs] = useState(['VehicleInformation']);

  const tabOrder = ['VehicleInformation', 'VehicleImages', 'VehicleDocuments', 'SittingPlan', 'AssignStaff'];

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
      <span className={`tab-title d-flex align-items-center justify-content-center gap-lg-2 gap-1 flex-row-reverse ${isVisited ? 'selected' : ''}`}>{label} {isVisited && ( 
          <span className="check-icon d-block">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#20A66A" /><path d="M5.5 8L7.5 10L11 6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
        )}
      </span>
    );
  };

  return (
    <div className="create-booking-tabs-sec">
      <Tabs activeKey={key} onSelect={handleTabSelect} className="tabs-nav-box flex-nowrap overflow-auto d-flex gap-0">
        <Tab eventKey="VehicleInformation" title={renderTitle('VehicleInformation', 'Vehicle Information')}>
          <div className="card-box tabs-booking tabs-operator position-relative">
            <div className="inner-tabs-booking-box">
                <VehicleInformation />
            </div>
            <div className="footer-step-form d-flex justify-content-end">
              <Button className="btn-skip-btn btn btn-primary" onClick={handleNext}>Skip for now</Button>
              <Button className="btn btn-secondary" onClick={handleNext}>Save Details</Button>
            </div>
          </div>
        </Tab>

        <Tab eventKey="VehicleImages" title={renderTitle('VehicleImages', 'Vehicle Images')}>
          <div className="card-box tabs-booking tabs-operator position-relative">
            <div className="inner-tabs-booking-box">
                <VehicleImages />
            </div>
            <div className="footer-step-form d-flex justify-content-end">
              <Button className="btn-skip-btn btn btn-primary" onClick={handleNext}>Skip for now</Button>
              <Button className="btn btn-secondary" onClick={handleNext}>Save Details</Button>
            </div>
          </div>
        </Tab>

        <Tab eventKey="VehicleDocuments" title={renderTitle('VehicleDocuments', 'Vehicle Documents')}>
          <div className="card-box tabs-booking tabs-operator position-relative">
            <div className="inner-tabs-booking-box">
                <VehicleDocuments />
            </div>
            <div className="footer-step-form d-flex justify-content-end">
              <Button className="btn-skip-btn btn btn-primary" onClick={handleNext}>Skip for now</Button>
              <Button className="btn btn-secondary" onClick={handleNext}>Save Details</Button>
            </div>
          </div>
        </Tab>

        <Tab eventKey="SittingPlan" title={renderTitle('SittingPlan', 'Sitting Plan')}>
          <div className="card-box bg-transparent shadow-none tabs-booking tabs-operator position-relative">
            <div className="inner-tabs-booking-box">
                <SittingPlan />
            </div>
            <div className="footer-step-form d-flex justify-content-end">
              <Button className="btn-skip-btn btn btn-primary bg-white" onClick={handleNext}>Skip for now</Button>
              <Button className="btn btn-secondary" onClick={handleNext}>Save Details</Button>
            </div>
          </div>
        </Tab>

        <Tab eventKey="AssignStaff" title={renderTitle('AssignStaff', 'Assign Operator & Staff')}>
          <div className="card-box tabs-booking tabs-operator position-relative">
            <div className="inner-tabs-booking-box">
                <StaticDriverSelect />
            </div>
            <div className="footer-step-form d-flex justify-content-end">
              <Button className="btn-skip-btn btn btn-primary" onClick={handleNext}>Skip for now</Button>
              <Button className="btn btn-secondary">Save Details</Button>
            </div>
          </div>
        </Tab>

      </Tabs>
    </div>
  );
};

export default AddVehicleTabs;
