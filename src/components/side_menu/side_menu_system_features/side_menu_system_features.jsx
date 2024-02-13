import React from "react";

import "./side_menu_system_features.css";

function SideMenuSystemFeatures({ features }) {
  return (
    <div className="side_menu_system_features">
      <li key={features._id}>
        <a href="#">
          <div className="side_menu_system_features-details">
            <div className="side_menu_system_features-details-name">
                {features.name}
            </div>
            <div className="side_menu_system_features-details-arrow">
              {features.expandIcon}
            </div>
          </div>
        </a>
      </li>
    </div>
  );
}

export default SideMenuSystemFeatures;
