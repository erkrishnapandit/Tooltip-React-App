import React from 'react';
import './App.css'; // importing css styling file.

const App = () => {
  // Creating a tooltip array to show tooltip in all four possible direction.
  const tooltips = [
    { text: 'Left', direction: 'left' },
    { text: 'Top', direction: 'top' },
    { text: 'Bottom', direction: 'bottom' },
    { text: 'Right', direction: 'right' },
  ];

  return (
    <div className="App">
      <div className="button-container">
        {tooltips.map((tooltip) => (
          <TooltipButton key={tooltip.direction} tooltip={tooltip} />
        ))}
      </div>
    </div>
  );
};


const TooltipButton = ({ tooltip }) => {
  // Handleing Mouse Enter Event.
  const handleMouseEnter = () => {
    document.getElementById(tooltip.direction).classList.add('active');
  };

  // Handleing Mouse Leave Event.
  const handleMouseLeave = () => {
    document.getElementById(tooltip.direction).classList.remove('active');
  };

  return (
    <div className="tooltip-container">
      {/* Creating Button With Mouse Enter And Leave Event */}
      <button
        className="tooltip-button"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Display Button Name Or Content */}
        {tooltip.text}
      </button>
      <div
        id={tooltip.direction}
        className={`tooltip tooltip-${tooltip.direction}`}
      >
        <div className="tooltip-content">
          {/* Display Message or Tool-tip*/}
          {tooltip.text}
           {/*Tooltip Arrow Position  */}
          <div className={`tooltip-arrow tooltip-arrow-${tooltip.direction}`} />
        </div>
      </div>
    </div>
  );
};

// Exporting App Component.
export default App;
