import React from "react";

import "./side_menu.css";

import Logo from "../../assets/erp_log.png";
import ProfilePicture from "../../assets/profile_picture.png";

import { BsArrowLeftSquareFill } from "react-icons/bs";

function SideMenu() {
  return (
    <div className="side_menu">
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
        <div className="side_menu-user_details-arrow">
          <BsArrowLeftSquareFill />
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
