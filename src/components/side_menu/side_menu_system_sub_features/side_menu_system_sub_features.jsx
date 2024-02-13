import React from "react";

import './side_menu_system_sub_features.css';

function SideMenuSystemSubFeatures({subFeatures}) {
  return (
    <div className="side_menu_system_sub_features">
      <li>
        <a href="#">
          <div className="side_menu_system_sub_features-details">
            {subFeatures.name}
          </div>
        </a>
      </li>
    </div>
  );
}

export default SideMenuSystemSubFeatures;
