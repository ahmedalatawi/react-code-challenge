import React, { useState } from "react";
import TabHeader from "./TabHeader";

const Tabs = ({ children }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <>
      <ul className="tabs">
        {children.map((tab, index) => {
          const { title } = tab.props;

          return (
            <TabHeader
              key={index}
              title={title}
              index={index}
              isActive={index === selectedTabIndex}
              setSelectedTab={setSelectedTabIndex}
            />
          );
        })}
      </ul>
      {children[selectedTabIndex]}
    </>
  );
};

export default Tabs;
