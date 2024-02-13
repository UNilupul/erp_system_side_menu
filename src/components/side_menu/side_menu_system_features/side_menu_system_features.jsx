import React, { useState } from "react";

import "./side_menu_system_features.css";
import SideMenuSystemSubFeatures from "../side_menu_system_sub_features/side_menu_system_sub_features";

import { IoIosArrowUp } from "react-icons/io";

function SideMenuSystemFeatures({ features }) {
  const [expand, setExpand] = useState(false);

  return (
    <div className="side_menu_system_features">
      <li key={features._id}>
        <a href="#" onClick={() => setExpand(!expand)}>
          <div className="side_menu_system_features-details">
            <div className="side_menu_system_features-details-name">
              {features.name}
            </div>
            <div className="side_menu_system_features-details-arrow">
              {features.subFeatures && features.subFeatures.length > 0 ? (
                expand ? (<IoIosArrowUp />) : ( features.expandIcon )
              ) : undefined}
            </div>
          </div>
        </a>
        <ul
          className={`side_menu_system_features-sub_features ${
            expand ? "expand" : undefined
          }`}
        >
          {features.subFeatures &&
            features.subFeatures.map((subFeatures) => (
              <SideMenuSystemSubFeatures
                key={subFeatures._id}
                subFeatures={subFeatures}
              />
            ))}
        </ul>
      </li>
    </div>
  );
}

export default SideMenuSystemFeatures;
