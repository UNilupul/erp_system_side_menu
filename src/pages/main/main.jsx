import React from "react";
import {  Routes, Route } from 'react-router-dom';

import "./main.css";

import SideMenu from "../../components/side_menu/side_menu";
import PowerBI from "../../systems/power_BI/power_BI";
import FinanceManagement from "../../systems/finance_management/finance_management";
import AccountReceivableAgeing from "../../systems/power_BI/account_receivable_ageing";
import CashFlowForecast from "../../systems/power_BI/cash_flow_forecast";

function Main() {
  return (
    <main>
      <SideMenu />
      <div className="main-display">
          <Routes>
            <Route path="/power_bi" element={<PowerBI />} />
            <Route path="/power_bi/cash_forecast" element={<CashFlowForecast />} />
            <Route path="/finance-management" element={<FinanceManagement />} />
            <Route path="/account-receivable-ageing" element={<AccountReceivableAgeing />} />
          </Routes>
      </div>
    </main>
  );
}

export default Main;
