import React, { useState } from "react";

import "./side_menu_systems.css";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import SideMenuSystemFeatures from "../side_menu_system_features/side_menu_system_features";

function SideMenuSystems({ item, onClick, menuOnClick }) {
  const [expand, setExpand] = useState(false);

  return (
    <div className="side_menu_systems">
      <div className="side_menu_systems-system">
        <li onClick={onClick}>
          <a href="#" onClick={() => setExpand(!expand) /*&& menuOnClick(item._id, item.target) */} >
            <div className="side_menu_systems-system-details">
              <div className="side_menu_systems-system-details-nameIcon">
                <div className="side_menu_systems-system-details-nameIcon-icon">
                  {item.icon}
                </div>
                <div className="side_menu_systems-system-details-nameIcon-name">
                  {item.name}
                </div>
              </div>
              <div className="side_menu_systems-system-details-arrow">
                {expand ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
            </div>
          </a>

          <ul
            className={`side_menu_systems-system-features ${
              expand ? "expand" : undefined
            }`}
          >
            <div className="side_menu_systems-system-features-feature">
              {item.features &&
                item.features.map((features) => (
                  <SideMenuSystemFeatures
                    key={features._id}
                    features={features}
                  />
                ))}
            </div>
          </ul>
        </li>
      </div>
    </div>
  );
}

export default SideMenuSystems;
