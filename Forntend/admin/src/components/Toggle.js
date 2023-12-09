import React, { useState } from 'react';

const Toggle = ({ onToggle }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggle = () => {
    setIsDarkMode(!isDarkMode);
    onToggle(!isDarkMode); // Notify parent components about the theme change
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '1000' }}>
      <label>
        Dark Mode
        <input type="checkbox" checked={isDarkMode} onChange={toggle} />
      </label>
    </div>
  );
};

export default Toggle;
