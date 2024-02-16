import React from "react";

import "./main.css";
import SideMenu from "../../side_menu/side_menu/side_menu";
import SystemRoutes from "../../routes/system_routes";

function Main() {
  return (
    <main>
      <SideMenu />
      <div className="main-display">
        <SystemRoutes />
      </div>
    </main>
  );
}

export default Main;
