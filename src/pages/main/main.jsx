import React from "react";

import "./main.css";
import SideMenu from "../../side_menu/side_menu/side_menu";
import SystemRoutes from "../../routes/system_routes";

function Main() {
  return (
    <main>
      <div className="main-side_menu">
        <SideMenu />
      </div>
      {/* <div className="main-display">
        <SystemRoutes />
      </div> */}
      <SystemRoutes />
    </main>
  );
}

export default Main;
