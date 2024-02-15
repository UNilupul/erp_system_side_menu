import React from "react";
import { Route, Routes } from "react-router-dom";
import PowerBI from "../../systems/power_BI/power_BI";
import CashFlowForecast from "../../systems/power_BI/cash_flow_forecast";
import FinanceManagement from "../../systems/finance_management/finance_management";
import AccountReceivableAgeing from "../../systems/power_BI/account_receivable_ageing";

function SystemRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PowerBI />} />
      <Route path="/power_bi/cash_forecast" element={<CashFlowForecast />} />
      <Route path="/finance-management" element={<FinanceManagement />} />
      <Route
        path="/power_bi/account-receivable-ageing"
        element={<AccountReceivableAgeing />}
      />
    </Routes>
  );
}

export default SystemRoutes;
