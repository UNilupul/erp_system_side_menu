import React from "react";
import { Route, Routes } from "react-router-dom";

import PowerBI from "../systems/power_BI/power_BI";

import CashFlowForecast from "../systems/power_BI/cash_flow_forecast";
import AccountReceivableAgeing from "../systems/power_BI/account_receivable_ageing";
import AgeingVsRevenueAnalysis from "../systems/power_BI/ageing_vs_revenue_analysis";
import ServiceTicket from "../systems/power_BI/service_ticket";
import PurchaseQuotations from "../systems/power_BI/purchase_quotations";

import GeneralLedgerIntegration from "../systems/finance_management/general_ledger_integration";
import CashFlowManagement from "../systems/finance_management/cash_flow_management";
import ProfitabilityTracking from "../systems/finance_management/profitability_tracking";
import BankingOperator from "../systems/finance_management/banking_operators";
import PaymentAndReceivable from "../systems/finance_management/payment_and_receivables";
import BankReconciliation from "../systems/finance_management/bank_reconciliation";
import BudgetingCapabilities from "../systems/finance_management/budgeting_capabilities";
import IncentiveSchemeMethodCalculation from "../systems/finance_management/incentive_calculation";
import SalesOutletsAndOnlineSalesManagement from "../systems/finance_management/outlets_and_online_sales_management";
import UserAccessAndPermissions from "../systems/finance_management/user_access_and_permissions";
import AssetInventory from "../systems/finance_management/asset_inventory";

import AssetInventoryManagement from "../systems/finance_management/asset_inventory_management/asset_inventory_management";
import MaintenanceAndRepairs from "../systems/finance_management/asset_inventory_management/maintenance_and_repair";
import DepreciationAndValuation from "../systems/finance_management/asset_inventory_management/depreciation_and_valuation";
import FinanceManagement from "../systems/finance_management/finance_management";
import AssetProcurementAndBudgeting from "../systems/finance_management/asset_inventory_management/asset_procurement_and_budgeting";
import VendorAndWarrantyManagement from "../systems/finance_management/asset_inventory_management/vendor_and_warranty_management";
import IntegrationWithOtherErpModules from "../systems/finance_management/asset_inventory_management/other_erp_modules";
import UserAccessAndSecurity from "../systems/finance_management/asset_inventory_management/user_access_and_security";
import ReportingAndAnalytics from "../systems/finance_management/asset_inventory_management/reporting_and_analytics";

import HRIS from "../systems/hris/hris";

import InventoryManagement from "../systems/inventory_management/inventory_management";

import ProductionPlaningSystem from "../systems/production_planing_system/production_planing_system";

import SalesAndPosSystem from "../systems/sales_and_pos/sales_and_pos";

import SupplyChainManagement from "../systems/supply_chain_management/supply_chain_management";

import QualityManagement from "../systems/quality_management/quality_management";

import VehicleFleetManagement from "../systems/vehicle_fleet_management/vehicle_fleet_management";

import Administration from "../systems/administration/administration";

function SystemRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PowerBI />} />


      {/* Power BI  */}
      <Route path="/power_bi" element={<PowerBI />} />
      <Route path="/power_bi/cash_forecast" element={<CashFlowForecast />} />
      <Route path="/power_bi/account_receivable_ageing" element={<AccountReceivableAgeing />} />
      <Route path="/power_bi/ageing_vs_revenue_analysis" element={<AgeingVsRevenueAnalysis />} />
      <Route path="/power_bi/service_ticket" element={<ServiceTicket />} />
      <Route path="/power_bi/purchase_quotations" element={<PurchaseQuotations />} />



      {/* Finace Management */}
      <Route path="/finance_management" element={<FinanceManagement />} />
      <Route path="/finance_management/general_ledger_integration" element={<GeneralLedgerIntegration />} />
      <Route path="/finance_management/cash_flow_management" element={<CashFlowManagement />} />
      <Route path="/finance_management/profitability_tracking" element={<ProfitabilityTracking />} />
      <Route path="/finance_management/banking_operators" element={<BankingOperator />} />
      <Route path="/finance_management/payment_and_receivables" element={<PaymentAndReceivable />} />
      <Route path="/finance_management/bank_reconciliation" element={<BankReconciliation />} />
      <Route path="/finance_management/budgeting_capabilities" element={<BudgetingCapabilities />} />
      <Route path="/finance_management/incentive_calculation" element={<IncentiveSchemeMethodCalculation />} />
      <Route path="/finance_management/outlets_and_online_sales_management" element={<SalesOutletsAndOnlineSalesManagement />} />
      <Route path="/finance_management/user_access_and_permissions" element={<UserAccessAndPermissions />} />
      <Route path="/finance_management/asset_inventory" element={<AssetInventory />} />

      {/* Asset Inventory Management */}
      <Route path="/finance_management/asset_inventory_management/asset_inventory_management" element={<AssetInventoryManagement />} />
      <Route path="/finance_management/asset_inventory_management/maintenance_and_repair" element={<MaintenanceAndRepairs />} />
      <Route path="/finance_management/asset_inventory_management/depreciation_and_valuation" element={<DepreciationAndValuation />} />
      <Route path="/finance_management/asset_inventory_management/asset_procurement_and_budgeting" element={<AssetProcurementAndBudgeting />} />
      <Route path="/finance_management/asset_inventory_management/vendor_and_warranty_management" element={<VendorAndWarrantyManagement />} />
      <Route path="/finance_management/asset_inventory_management/other_erp_modules" element={<IntegrationWithOtherErpModules />} />
      <Route path="/finance_management/asset_inventory_management/user_access_and_security" element={<UserAccessAndSecurity />} />
      <Route path="/finance_management/asset_inventory_management/reporting_and_analytics" element={<ReportingAndAnalytics />} />
      


      {/* HRIS */}
      <Route path="/hris" element={<HRIS />} />



      {/* Inventory Management */}
      <Route path="/inventory_management" element={<InventoryManagement />} />



      {/* Production Planning System */}
      <Route path="/production_planing_system" element={<ProductionPlaningSystem />} />



      {/* Sales & POS System */}
      <Route path="/sales_and_pos" element={<SalesAndPosSystem />} />



      {/* Supply Chain Management */}
      <Route path="/supply_chain_management" element={<SupplyChainManagement />} />



      {/* Quality Management */}
      <Route path="/quality_management" element={<QualityManagement />} />



      {/* Online Vehicle Fleet Management */}
      <Route path="/vehical_fleet_management" element={<VehicleFleetManagement />} />



      {/* Administration */}
      <Route path="/administration" element={<Administration />} />

    </Routes>
  );
}

export default SystemRoutes;
