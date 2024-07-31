import React from "react";

const TabHeader = ({ index, title, isActive, setSelectedTab }) => (
  <li
    className={`tab-header ${isActive ? "active" : ""}`}
    onClick={() => setSelectedTab(index)}
  >
    {title}
  </li>
);

export default TabHeader;
