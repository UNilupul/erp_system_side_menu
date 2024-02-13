import React, { useState } from "react";

import "./side_menu.css";

import Logo from "../../assets/erp_log.png";
import ProfilePicture from "../../assets/user.jpg";

import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

import SideMenuSystems from "./side_menu_systems/side_menu_systems";
import SystemList from "../../data/side_menu_data";

function SideMenu() {
  const [collapse, setCollapse] = useState(false);
  const [sideMenuSystems, setSideMenuSystems] = useState(SystemList);

  return (
    <div className={`side_menu ${collapse ? "collapse" : undefined}`}>
      <div className="side_menu-system_logo">
        <img src={Logo} alt="System Logo" />
      </div>

      <div className="side_menu-user_details">
        <div className="side_menu-user_details-profile_picture">
          <img src={ProfilePicture} alt="Profile Picture" />
        </div>
        <div className="side_menu-user_details-details">
          <p className="side_menu-user_details-details-name">User Name</p>
          <p className="side_menu-user_details-details-designation">Admin</p>
        </div>
        <div
          className="side_menu-user_details-arrow"
          onClick={() => {
            setCollapse(!collapse);
          }}
        >
          {collapse ? <BsArrowRightSquareFill /> : <BsArrowLeftSquareFill />}
        </div>
      </div>

      <div className="side_menu-systems">
        <ul>
          {sideMenuSystems.map((item) => (
            <SideMenuSystems key={item._id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
