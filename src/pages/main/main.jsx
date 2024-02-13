import React, { useRef } from 'react';

import './main.css';

import SideMenu from '../../components/side_menu/side_menu';
import HRIS from '../../systems/hris/hris';
import PowerBI from '../../systems/power_BI/power_BI';
import CashFlowForecast from '../../systems/power_BI/cash_flow_forecast';
import AccountReceivableAgeing from '../../systems/power_BI/account_receivable_ageing';
import FinanceManagement from '../../systems/finance_management/finance_management';

function Main() {

  // const powerBIRef = useRef();
  // const cashFlowForecastRef = useRef();
  // const accountReceivableAgeingRef = useRef();
  // const financeManagementRef = useRef();


  // const sections = [
  //   {
  //     name: "power_bi",
  //     ref: powerBIRef,
  //     active: true,
  //   },
  //   {
  //     name: "cash_flow_forecast",
  //     ref: cashFlowForecastRef,
  //     active: false,
  //   },
  //   {
  //     name: "account_receivable_ageing",
  //     ref: accountReceivableAgeingRef,
  //     active: false,
  //   },
  //   {
  //     name: "finance_management",
  //     ref: financeManagementRef,
  //     active: false,
  //   },
  // ]

  // const handleSystemActive = (target) => {
  //   sections.map( (section) => {
  //     section.ref.current.classList.remove("active");
  //     if (section.ref.current.id === target) {
  //       section.ref.current.classList.add("active");
  //     }
  //     return section;
  //   })
  // }

  return (
    <main>
      <SideMenu /*systemActive={handleSystemActive} *//>
      <div className='main-display'>
        {/* <PowerBI reference={powerBIRef}/>
        <CashFlowForecast reference={cashFlowForecastRef}/>
        <AccountReceivableAgeing reference={accountReceivableAgeingRef}/>
        <FinanceManagement reference={financeManagementRef}/> */}
      </div>
    </main>
  )
}

export default Main;