import { FiUser, FiDollarSign, FiHome, FiClipboard, FiLink, FiFileText, FiCheckSquare, FiMapPin, FiChevronDown } from "react-icons/fi";

const sytemsList = [
    {
        _id: "1",
        name: "Power BI - Dashboards",
        // url: "/",
        icon: <FiUser />,
        expandIcon: <FiChevronDown />,
        // active: true,
        features: [
            {
                _id: "1.1",
                name: "Cash flow forecast",
                url: "/power_bi/cash_forecast",
                // active: true,
            },
            {
                _id: "1.2",
                name: "Account receivable ageing",
                url: "/power_bi/account_receivable_ageing",
                // active: false,
            },
            {
                _id: "1.3",
                name: "Ageing vs revenue analysis",
                url: "/power_bi/ageing_vs_revenue_analysis",
                // active: false,
            },
            {
                _id: "1.4",
                name: "Service ticket/token overview",
                url: "/power_bi/service_ticket",
                // active: false,
            },
            {
                _id: "1.5",
                name: "Purchase quotations",
                url: "/power_bi/purchase_quotations",
                // active: false,
            },
        ]
    },
    {
        _id: "2",
        name: "Finace Management",
        // url: "/finance-management",
        icon: <FiDollarSign />,
        expandIcon: <FiChevronDown />,
        // active: false,
        features: [
            {
                _id: "2.1",
                name: "General ledger integration",
                url: "/finance-management/general_ledger_integration",
                // active: false,
            },
            {
                _id: "2.2",
                name: "Cash flow management",
                url: "/finance-management/cash_flow_management",
                // active: false,
            },
            {
                _id: "2.3",
                name: "Profitability tracking",
                url: "/finance-management/profitability_tracking",
                // active: false,
            },
            {
                _id: "2.4",
                name: "Banking operations",
                url: "/finance-management/banking_operators",
                // active: false,
            },
            {
                _id: "2.5",
                name: "Payments and receivables",
                url: "",
                // active: false,
            },
            {
                _id: "2.6",
                name: "Bank reconciliation",
                url: "",
                // active: false,
            },
            {
                _id: "2.7",
                name: "Budgeting capabilities",
                url: "",
                // active: false,
            },
            {
                _id: "2.8",
                name: "Incentive Scheme/Method Calculation",
                url: "",
                // active: false,
            },
            {
                _id: "2.9",
                name: "Sales outlets and online sales management",
                url: "",
                // active: false,
            },
            {
                _id: "2.10",
                name: "User access and permissions",
                url: "",
                // active: false,
            },
            {
                _id: "2.11",
                name: "Asset Inventory",
                url: "",
                expandIcon: <FiChevronDown />,
                // active: false,
                subFeatures: [
                    {
                        _id: "2.11.1",
                        name: "Asset inventory management",
                        url: "/finance-management/asset_inventory_management/asset_inventory_management",
                        // active: false,
                    },
                    {
                        _id: "2.11.2",
                        name: "Maintenance and repairs",
                        url: "/finance-management/asset_inventory_management/maintenance_and_repair",
                        // active: false,
                    },
                    {
                        _id: "2.11.3",
                        name: "Depreciation and valuation",
                        url: "/finance-management/asset_inventory_management/depreciation_and_valuation",
                        // active: false,
                    },
                    {
                        _id: "2.11.4",
                        name: "Asset procurement and budgeting",
                        url: "",
                        // active: false,
                    },
                    {
                        _id: "2.11.5",
                        name: "Vendor and warranty management",
                        url: "",
                        // active: false,
                    },
                    {
                        _id: "2.11.6",
                        name: "Integration with other ERP modules",
                        url: "",
                        // active: false,
                    },
                    {
                        _id: "2.11.7",
                        name: "User access and security",
                        url: "",
                        // active: false,
                    },
                    {
                        _id: "2.11.8",
                        name: "Reporting and analytics",
                        url: "",
                        // active: false,
                    },
                ]
            },
        ]
    },
    {
        _id: "3",
        name: "HRIS",
        // url: "",
        icon: <FiUser />,
        expandIcon: <FiChevronDown />,
        // active: false,
        features: []
    },
    {
        _id: "4",
        name: "Inventory Management",
        // url: "",
        icon: <FiHome />,
        expandIcon: <FiChevronDown />,
        // active: false,
        features: []
    },
    {
        _id: "5",
        name: "Production Planning System",
        // url: "",
        icon: <FiClipboard />,
        expandIcon: <FiChevronDown />,
        // active: false,
        features: []
    },
    {
        _id: "6",
        name: "Sales & POS System",
        // url: "",
        icon: <FiFileText />,
        expandIcon: <FiChevronDown />,
        // active: false,
        features: []
    },
    {
        _id: "7",
        name: "Supply Chain Management",
        // url: "",
        icon: <FiLink />,
        expandIcon: <FiChevronDown />,
        // active: false,
        features: []
    },
    {
        _id: "8",
        name: "Quality Management",
        // url: "",
        icon: <FiCheckSquare />,
        expandIcon: <FiChevronDown />,
        // active: false,
        features: []
    },
    {
        _id: "9",
        name: "Online Vehicle Fleet Management",
        // url: "",
        icon: <FiMapPin />,
        expandIcon: <FiChevronDown />,
        // active: false,
        features: []
    },
    {
        _id: "10",
        name: "Administration",
        // url: "",
        icon: <FiUser />,
        expandIcon: <FiChevronDown />,
        // active: false,
        features: []
    },
]

export default sytemsList;