import { RxPerson } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { MdAttachMoney } from "react-icons/md";

const sytemsList = [
    {
        _id: 1,
        name: "Power BI - Dashboards",
        icon: <RxPerson />,
        expandIcon: <IoIosArrowDown />,
        active: true,
        features: [
            {
                _id: 1.1,
                name: "Cash flow forecast",
                active: true,
            },
            {
                _id: 1.2,
                name: "Ageing vs revenue analysis",
                active: false,
            },
            {
                _id: 1.3,
                name: "Purchase quotations",
                expandIcon: <IoIosArrowDown />,
                active: false,
                subFeatures: [
                    {
                        _id: 1.3_1,
                        name: "Asset Inventory",
                        active: false,
                    },
                    {
                        _id: 1.3_2,
                        name: "Asset Inventory2",
                        active: false,
                    },
                ]
            },
        ]
    },
    {
        _id: 2,
        name: "Finace Management",
        icon: <MdAttachMoney />,
        expandIcon: <IoIosArrowDown />,
        active: false,
        features: [
            {
                _id: 2.1,
                name: "Cash flow forecast",
                active: true,
            },
            {
                _id: 2.2,
                name: "Ageing vs revenue analysis",
                active: false,
            },
            {
                _id: 2.3,
                name: "Purchase quotations",
                active: false,
            },
        ]
    },
    {
        _id: 3,
        name: "HRIS",
        icon: <RxPerson />,
        expandIcon: <IoIosArrowDown />,
        active: false,
    },
    {
        _id: 4,
        name: "Production Planning System",
        icon: <RxPerson />,
        expandIcon: <IoIosArrowDown />,
        active: false,
    }
]

export default sytemsList;