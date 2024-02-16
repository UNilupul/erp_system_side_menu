import React from "react";

import "./main.css";
import SideMenu from "../../components/side_menu/side_menu";
import SystemRoutes from "../../components/routes/system_routes";

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
