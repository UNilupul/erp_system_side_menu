import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./side_menu_system_features.css";
import SideMenuSystemSubFeatures from "../side_menu_system_sub_features/side_menu_system_sub_features";

import { IoIosArrowUp } from "react-icons/io";

function SideMenuSystemFeatures({ features }) {
  const [expand, setExpand] = useState(false);

  return (
    <div className="side_menu_system_features">
      <li key={features._id}>
        <Link  to={features.url} onClick={() => setExpand(!expand)}>
          <div className={`side_menu_system_features-details`} >
            <div className="side_menu_system_features-details-name">
              {features.name}
            </div>
            <div className="side_menu_system_features-details-arrow">
              {features.subFeatures && features.subFeatures.length > 0 ? (
                expand ? (<IoIosArrowUp />) : ( features.expandIcon )
              ) : undefined}
            </div>
          </div>
        </Link >
        <ul
          className={`side_menu_system_features-sub_features ${
            expand ? "expand" : undefined
          }`}
        >
          <div className="side_menu_system_features-sub_features-feature">
            {features.subFeatures &&
             features.subFeatures.map((subFeatures) => (
                <SideMenuSystemSubFeatures
                  key={subFeatures._id}
                  subFeatures={subFeatures}
                  
                />
              ))}
          </div>
        </ul>
      </li>
    </div>
  );
}

export default SideMenuSystemFeatures;
