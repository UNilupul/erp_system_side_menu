import { RxPerson } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { MdAttachMoney } from "react-icons/md";

const sytemsList = [
    {
        _id: 1,
        name: "Power BI - Dashboards",
        url: "/power_bi",
        icon: <RxPerson />,
        expandIcon: <IoIosArrowDown />,
        active: true,
        features: [
            {
                _id: 1.1,
                name: "Cash flow forecast",
                url: "/power_bi/cash_forecast",
                active: false,
            },
            {
                _id: 1.2,
                name: "Account receivable ageing",
                url: "",
                active: true,
            },
            {
                _id: 1.3,
                name: "Service ticket/token overview",
                url: "",
                active: false,
            },
            {
                _id: 1.4,
                name: "Purchase quotations",
                url: "",
                active: false,
            },
        ]
    },
    {
        _id: 2,
        name: "Finace Management",
        url: "/finance-management",
        icon: <MdAttachMoney />,
        expandIcon: <IoIosArrowDown />,
        active: false,
        features: [
            {
                _id: 2.1,
                name: "General ledger integration",
                url: "",
                active: true,
            },
            {
                _id: 2.2,
                name: "Cash flow management",
                url: "",
                active: false,
            },
            {
                _id: 2.3,
                name: "Profitability tracking",
                url: "",
                active: false,
            },
            {
                _id: 2.4,
                name: "Asset Inventory",
                url: "",
                expandIcon: <IoIosArrowDown />,
                active: false,
                subFeatures: [
                    {
                        _id: 2.4_1,
                        name: "Asset inventory management",
                        url: "",
                        active: false,
                    },
                    {
                        _id: 2.4_2,
                        name: "Maintenance and repairs",
                        url: "",
                        active: false,
                    },
                ]
            },
        ]
    },
    {
        _id: 3,
        name: "HRIS",
        url: "",
        icon: <RxPerson />,
        expandIcon: <IoIosArrowDown />,
        active: false,
    },
    {
        _id: 4,
        name: "Production Planning System",
        url: "",
        icon: <RxPerson />,
        expandIcon: <IoIosArrowDown />,
        active: false,
    }
]

export default sytemsList;