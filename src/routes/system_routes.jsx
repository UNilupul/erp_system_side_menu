import React from "react";
import { Route, Routes } from "react-router-dom";

import CashFlowForecast from "../systems/power_BI/cash_flow_forecast";
import AccountReceivableAgeing from "../systems/power_BI/account_receivable_ageing";
import AgeingVsRevenueAnalysis from "../systems/power_BI/ageing_vs_revenue_analysis";
import ServiceTicket from "../systems/power_BI/service_ticket";
import PurchaseQuotations from "../systems/power_BI/purchase_quotations";

import GeneralLedgerIntegration from "../systems/finance_management/general_ledger_integration";
import CashFlowManagement from "../systems/finance_management/cash_flow_management";
import ProfitabilityTracking from "../systems/finance_management/profitability_tracking";
import BankingOperator from "../systems/finance_management/banking_operators";

import AssetInventoryManagement from "../systems/finance_management/asset_inventory_management/asset_inventory_management";
import MaintenanceAndRepairs from "../systems/finance_management/asset_inventory_management/maintenance_and_repair";
import DepreciationAndValuation from "../systems/finance_management/asset_inventory_management/depreciation_and_valuation";

function SystemRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CashFlowForecast />} />


      {/* Power BI  */}
      <Route path="/power_bi/cash_forecast" element={<CashFlowForecast />} />
      <Route path="/power_bi/account_receivable_ageing" element={<AccountReceivableAgeing />} />
      <Route path="/power_bi/ageing_vs_revenue_analysis" element={<AgeingVsRevenueAnalysis />} />
      <Route path="/power_bi/service_ticket" element={<ServiceTicket />} />
      <Route path="/power_bi/purchase_quotations" element={<PurchaseQuotations />} />



      {/* Finace Management */}
      <Route path="/finance-management/general_ledger_integration" element={<GeneralLedgerIntegration />} />
      <Route path="/finance-management/cash_flow_management" element={<CashFlowManagement />} />
      <Route path="/finance-management/profitability_tracking" element={<ProfitabilityTracking />} />
      <Route path="/finance-management/banking_operators" element={<BankingOperator />} />

      {/* Asset Inventory Management */}
      <Route path="/finance-management/asset_inventory_management/asset_inventory_management" element={<AssetInventoryManagement />} />
      <Route path="/finance-management/asset_inventory_management/maintenance_and_repair" element={<MaintenanceAndRepairs />} />
      <Route path="/finance-management/asset_inventory_management/depreciation_and_valuation" element={<DepreciationAndValuation />} />
      
    </Routes>
  );
}

export default SystemRoutes;
