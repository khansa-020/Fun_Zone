import React from 'react';
import "./logo.css";

function Logo({ showStepCount, step }) {
  return (
    <div className="logo-container">
      <div className="logo-common">
        <h1>
          Fun<span style={{ color: "#F15946" }}>Zone</span>
        </h1>
      </div>
      {showStepCount && <span className="step-count">{`Step ${step} of 6`}</span>}
    </div>
  );
}

export default Logo;
