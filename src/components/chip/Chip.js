import React, { useState } from "react";
import "./Chip.css";

const Chip = ({ items, initialSelected = 0 }) => {
  const [selectedIndex, setSelectedIndex] = useState(initialSelected);

  const handleChipClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="chip-container">
      <div className="chip">
        {items.map((item, index) => (
          <button
            key={index}
            className={`chip-item ${selectedIndex === index ? "selected" : ""}`}
            onClick={() => handleChipClick(index)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Chip;
