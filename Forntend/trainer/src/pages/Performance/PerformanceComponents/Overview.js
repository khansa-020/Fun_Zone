import React, { useState, useEffect } from 'react';
import Heading from '../../../Constants/Heading/heading';
import './Overview.css';

const Counter = ({ title, total, thisMonth, onClick }) => {
  return (
    <div className="counter" onClick={onClick}>
      <h3>{title}</h3>
      <div className="counter-container">
        <div className="counter-item">
          <h1>{total}</h1>
        </div>
        <div className="counter-item">
          <p>{thisMonth} this Month</p>
        </div>
      </div>
    </div>
  );
};

function Overview() {
  const [selectedCounter, setSelectedCounter] = useState(null);
  const [selectedDateRange, setSelectedDateRange] = useState('last30Days'); 


  const handleCounterClick = (title) => {
    setSelectedCounter(title);
  };


  useEffect(() => {
    // Filter data based on selected date range
    const filterDataByDateRange = (range) => {
      switch (range) {
        case 'last12Months':
          // Filter data for the last 12 months
          break;
        case 'last30Days':
          // Filter data for the last 30 days
          break;
        case 'lastWeek':
          // Filter data for the last one week
          break;
        default:
          // No filter applied
          break;}
         };
    filterDataByDateRange(selectedDateRange);
  }, [selectedDateRange]);



  const renderDataTable = () => {
    if (selectedCounter === 'Total Revenue') {
      return (
        <div className='data-tables'>
            <h1>revenue</h1>
          {/* Render data table related to Total Revenue */}
        </div>
      );
    } else if (selectedCounter === 'Total Enrollments') {
      return (
        <div className='data-tables'>
          <h1>enroll</h1>
          {/* Render data table related to Total Enrollments */}
        </div>
      );
    } else if (selectedCounter === 'Total Rating') {
      return (
        <div className='data-tables'>
                    <h1>Rating</h1>
          {/* Render data table related to Total Rating */}
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <Heading text="Overview" />
      <h2 className='Overview-p'>Get top insights about your performance</h2>
      <div className='total'>
        <div className='total-box'>
          <Counter
            title="Total Revenue"
            total="$24"
            thisMonth="$0"
            onClick={() => handleCounterClick('Total Revenue')}
          />
          <Counter
            title="Total Enrollments"
            total="10"
            thisMonth="2"
            onClick={() => handleCounterClick('Total Enrollments')}
          />
          <Counter
            title="Total Rating"
            total="20"
            thisMonth="5"
            onClick={() => handleCounterClick('Total Rating')}
          />
        </div>

  <div className="date-range-selector">
  <select value={selectedDateRange} onChange={(e) => setSelectedDateRange(e.target.value)}>
    <option value="last12Months">Last 12 Months</option>
    <option value="last30Days">Last 30 Days</option>
    <option value="lastWeek">Last Week</option>
  </select>
</div>

        {renderDataTable()}
      </div>
    </div>
  );
}

export default Overview;

