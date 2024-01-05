import React from "react";
import * as AiIcons from "react-icons/ai";

import * as RiIcons from "react-icons/ri";
import {
  FaListAlt,
  FaFileUpload,
  FaLuggageCart,
  FaShoppingBag,
  FaShippingFast,
  FaUserCircle,
  FaMoneyCheckAlt,
  FaHouseDamage,
  FaHandPaper,
  FaHourglassEnd,
  FaFileInvoice,
  FaBoxTissue,
  FaBabyCarriage,
  FaCalendarCheck,
  FaRegCalendarTimes,
  FaRegCalendarCheck,
  FaRoute,
  FaFileInvoiceDollar,
  FaBusinessTime,
  FaTruckMoving,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { BiLocationPlus, BiSupport } from "react-icons/bi";

import { RiFolderReceivedFill } from "react-icons/ri";
import { VscServerProcess } from "react-icons/vsc";
import {
  BsTruck,
  BsFillBagPlusFill,
  BsFillCalendarXFill,
  BsFillCalendarRangeFill,
  BsArrowReturnLeft,
  BsBagCheckFill,
  BsArrowRepeat,
  BsFillFileEarmarkArrowDownFill,
  BsSpeedometer,
  BsFileEarmarkArrowDownFill,
  BsCardChecklist,
} from "react-icons/bs";
import {
  GiCardExchange,
  GiCardPickup,
  GiConfirmed,
  GiAmbulance,
  GiMagnifyingGlass,
  GiArchiveRegister,
  GiReceiveMoney,
  GiSpeedometer,
  GiMoneyStack,
  GiPayMoney,
  GiHumanTarget,
  GiTruck,
} from "react-icons/gi";
import {
  MdArtTrack,
  MdAssignmentReturn,
  MdPassword,
  MdDashboard,
  MdOutlineShoppingCart,
  MdPendingActions,
  MdOutlinePayments,
  MdWrongLocation,
  MdDesignServices,
  MdOutlineAltRoute,
  MdDeliveryDining,
  MdAccountBalance,
  MdPublishedWithChanges,
  MdOutlineRunningWithErrors,
} from "react-icons/md";
import { ImProfile, ImExit } from "react-icons/im";
import { SiBookmeter, SiStatuspage, SiDcentertainment } from "react-icons/si";

import { FiUserPlus, FiMonitor } from "react-icons/fi";
import {
  AiOutlineFileSearch,
  AiOutlineMonitor,
  AiFillLock,
  AiOutlineIssuesClose,
  AiOutlineCodeSandbox,
  AiOutlineFieldTime,
} from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";

export const Linksidebar = [
  {
    title: "Home",
    icon: <AiIcons.AiFillHome />,
    path: "/Homeopstable",
    cName: "nav-text",
  },
  // {
  //   title: "Multiple order id",
  //   icon: <BsCardChecklist />,
  //   path: "/multipleWaybillOps",
  //   cName: "nav-text",
  // },
  {
    title: "Parcel List",
    icon: <FaListAlt />,

    path: "/HomePC",
    cName: "nav-text",
  },

  // {
  //   title: "3 PL Parcel List",
  //   icon: <GiTruck />,
  //   path: "/ThreePLParcelList",
  //   cName: "nav-text",
  // },

  {
    title: "3 PL Parcel List",
    icon: <GiCardPickup />,
    // path: '/vehiclecreate',
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "3pl List",
        icon: <GiTruck />,
        path: "/ThreePLParcelListpartnerchange",
        cName: "nav-text",
      },

      {
        title: "Partner Change",
        icon: <GiTruck />,
        path: "/Newpartnerchange",
        cName: "nav-text",
      },

      {
        title: "Shipment Forword",
        icon: <GiTruck />,
        path: "/ThreePLParcelListworword",
        cName: "nav-text",
      },
    ],
  },

  {
    title: "Product Edit",
    icon: <GiCardExchange />,
    path: "/centerchangepc",
    cName: "nav-text",
  },

  {
    title: "3PL Wrong Menifestation",
    icon: <GiCardExchange />,
    path: "/Partnerwrongmenifestation",
    cName: "nav-text",
  },
  {
    title: "Parcel Tracking",
    icon: <MdArtTrack />,
    path: "/Parceltrackingpc",
    cName: "nav-text",
  },

  {
    title: "Upload CSV",
    icon: <FaFileUpload />,
    path: "/manifest",
    cName: "nav-text",
  },
  {
    title: "Pickup",
    icon: <GiCardPickup />,
    // path: '/vehiclecreate',
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Confirm Single Product",
        icon: <GiConfirmed />,
        path: "/Confirmsingleproduct",
        cName: "nav-text",
      },

      {
        title: "Confirm Pickup",
        icon: <GiConfirmed />,
        path: "/Confirmpickup",
        cName: "nav-text",
      },
      {
        title: "Pickup Request",
        icon: <FaLuggageCart />,
        path: "/Pickup",
        cName: "nav-text",
      },
    ],
  },
  {
    title: "Bag Creation",
    icon: <FaShoppingBag />,
    // path: '/bagcreation',
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Bag Creation",
        path: "/bagcreation",
        icon: <BsFillBagPlusFill />,
      },
      {
        title: "Re-Route Bag Creation",
        icon: <BsFillCalendarRangeFill />,
        path: "/reroutebagcreation",
        cName: "nav-text",
      },
      {
        title: "Return Bag Creation",
        icon: <BsFillCalendarXFill />,
        path: "/Returnbagcreation",
        cName: "nav-text",
      },
    ],
  },

  {
    title: "Vehicle",
    icon: <FaShippingFast />,
    // path: '/vehiclecreate',
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Vehicle Creation",
        path: "/vehiclecreate",
        icon: <BsTruck />,
      },
      // {
      //   title: "Return Vehicle Creation",
      //   icon: <GiReturnArrow />,
      //   path: "/vehiclecreate",
      //   cName: "nav-text",
      // },
    ],
  },
  {
    title: "Return/Reroute",
    icon: <BsArrowReturnLeft />,
    // path: '/vehiclecreate',
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Return/Reroute Bag Receive",
        icon: <BsBagCheckFill />,
        path: "/ReturnPcBag",
        cName: "nav-text",
      },
      {
        title: "Partner Return Parcel Receive",
        icon: <BsBagCheckFill />,
        path: "/Partnerreturn",
        cName: "nav-text",
      },
      {
        title: "Return/Reroute Shipment Receive",
        icon: <BsBagCheckFill />,
        path: "/Returnedpcreceivedbag",
        cName: "nav-text",
      },
      {
        title: "Returned Product",
        icon: <MdAssignmentReturn />,
        path: "/ReturnedProduct",
        cName: "nav-text",
      },
      {
        title: "Return Bag Creation",
        icon: <BsFillBagPlusFill />,
        path: "/Returnbagcreation",
        cName: "nav-text",
      },
      {
        title: "Return Vehicle Creation",
        icon: <GiAmbulance />,
        path: "/vehiclecreate",
        cName: "nav-text",
      },
    ],
  },

  // {
  //   title: 'Return PC Received Bag ',
  //   icon:"./icon/pc/Layer -4.svg",
  //   path: '/Returnedpcreceivedbag',
  //   cName: 'nav-text'
  // },

  {
    title: "RTO",
    icon: <BsArrowRepeat />,
    path: "/Directrto",
    cName: "nav-text",
  },
];

export const CustomerCareLinksidebar = [
  {
    title: "Dashboard",
    icon: <AiIcons.AiFillHome />,
    // icon: "./icon/pc/icons8-home.svg",
    path: "/Dashboard",
    cName: "nav-text",
  },
  // {
  //   title: "Home",
  //   icon: <AiIcons.AiFillHome />,
  //   // icon: "./icon/pc/icons8-home.svg",
  //   path: "/HomeC",
  //   cName: "nav-text",
  // },

  {
    title: "Track Parcel",
    icon: <MdArtTrack />,
    // icon: "./icon/pc/icons8-tracking-100.png",
    path: "/Waybilltrackingsales",
    cName: "nav-text",
  },
  {
    title: "PickUp Store",
    icon: <MdArtTrack />,
    // icon: "./icon/pc/icons8-tracking-100.png",
    path: "/createPickUpStore",
    cName: "nav-text",
  },
  {
    title: "Product Entry",
    icon: <GiCardPickup />,
    // path: '/vehiclecreate',
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      // {
      //   title: "Request Pickup",
      //   icon: <FaLuggageCart />,
      //   // icon: "./icon/pc/icons8-pickup-truck-64.png",
      //   path: "/PickuprequestC",
      //   cName: "nav-text",
      // },
      {
        title: "Single Product Entry",
        icon: <AiOutlineCodeSandbox />,
        // icon: "./icon/pc/icons8-pickup-truck-64 (1).png",
        path: "/SingleProduct",
        cName: "nav-text",
      },
      {
        title: "Pending Product Entry",
        icon: <FaHourglassEnd />,
        // icon: "./icon/pc/icons8-product-50.png",
        path: "/Unconfirmlist",
        cName: "nav-text",
      },
    ],
  },

  // {
  //   title: "Track My Parcels",
  //   icon: <MdArtTrack />,
  //   // icon: "./icon/pc/icons8-tracking-100.png",
  //   path: "/Parceltracking",
  //   cName: "nav-text",
  // },

  {
    title: "Download My Reports",
    icon: <BsFileEarmarkArrowDownFill />,
    // icon: "./icon/pc/icons8-graph-report-script-100.png",
    path: "/Report",
    cName: "nav-text",
  },
  {
    title: "My Payment Updates",
    icon: <MdOutlinePayments />,
    // icon: "./icon/pc/icons8-payment-64.png",
    path: "/payment",
    cName: "nav-text",
  },
  // {
  //   title: "My Confirmed Payments",
  //   icon: "./icon/pc/icons8-online-payment-50.png",
  //   path: "/Paymentconfirm",
  //   cName: "nav-text",
  // },
  {
    title: "My Invoice Summaries",
    icon: <FaFileInvoice />,
    // icon: "./icon/pc/icons8-invoice-64.png",
    path: "/Invoicesummaryc",
    cName: "nav-text",
  },

  {
    title: "Manage PickupStore",
    icon: <FaFileInvoice />,
    // icon: "./icon/pc/icons8-invoice-64.png",
    path: "/Managepickupstorec",
    cName: "nav-text",
  },
  // {
  //   title: "Pending Return Requests",
  //   icon: <BsArrowReturnLeft />,
  //   // icon: "./icon/pc/icons8-data-pending-50.png",
  //   path: "/Confirmreturn",
  //   cName: "nav-text",
  // },
  {
    title: "Support",
    icon: <BiSupport />,
    // icon: "./icon/pc/icons8-support-60.png",
    path: "/SupportC",
    cName: "nav-text",
  },
  // Invoice summary
];

//
// export const CustomerCareLinksidebar = [
//   {
//     title: 'Home',
//     path: '/HomeC',
//     cName: 'nav-text'
//
//   },
//   {
//     title: 'Single Product Pending List',
//     path: '/Unconfirmlist',
//     cName: 'nav-text'
//
//   },
//   {
//     title: 'Request Pickup',
//     path: '/PickuprequestC',
//     cName: 'nav-text'
//   },
//   {
//     title: 'Single Product Pickup Request',
//     path: '/SingleProduct',
//     cName: 'nav-text'
//   },
//   {
//     title: 'Track My Parcels',
//     path: '/Parceltracking',
//     cName: 'nav-text'
//   },
//   {
//     title: 'Download My Reports',
//     path: '/Report',
//     cName: 'nav-text'
//   },
//   {
//     title: 'My Payment Updates',
//     path: '/payment',
//     cName: 'nav-text'
//   },
//   {
//     title: 'My Confirmed Payments',
//     path: '/Paymentconfirm',
//     cName: 'nav-text'
//   },
//   {
//     title: 'My Invoice Summaries',
//     path: '/Invoicesummaryc',
//     cName: 'nav-text'
//   },
//   {
//     title: 'Pending Return Requests',
//     path: '/Confirmreturn',
//     cName: 'nav-text'
//   },
//   {
//     title: 'Support',
//     path: '/SupportC',
//     cName: 'nav-text'
//   },
//   // Invoice summary
//
//
//
//
//
// ];

export const Operationsidebar = [
  {
    title: "Home",
    icon: <AiIcons.AiFillHome />,
    path: "/HomeOperation",
    cName: "nav-text",
  },

  {
    title: "Bag Search",
    icon: <AiIcons.AiFillHome />,
    path: "/Bagserch",
    cName: "nav-text",
  },
  // {
  //   title: "Dashboard",
  //   icon: <MdDashboard />,
  //   path: "/Dashboard",
  //   cName: "nav-text",
  // },

  {
    title: "3PL Parcel List",
    icon: <GiCardPickup />,
    // path: '/vehiclecreate',
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "3PL list",
        icon: <GiTruck />,
        path: "/ThreePLParcelListpartnerchangeops",
        cName: "nav-text",
      },

      {
        title: "Partner Change",
        icon: <GiTruck />,
        path: "/Newpartnerchangeops",
        cName: "nav-text",
      },

      {
        title: "Shipment Forword",
        icon: <GiTruck />,
        path: "/ThreePLParcelListworwordops",
        cName: "nav-text",
      },

      {
        title: "3PL Status Change",
        icon: <MdDashboard />,
        path: "/3plstatuschange",
        cName: "nav-text",
      },

      {
        title: "3PL coveragearea",
        icon: <MdDashboard />,
        path: "/Threepl",
        cName: "nav-text",
      },
    ],
  },
  {
    title: "Multiple orderid",
    icon: <BsCardChecklist />,
    path: "/multipleWaybillOps",
    cName: "nav-text",
  },
  {
    title: "Employee Registration",
    icon: <GiArchiveRegister />,
    path: "/Employeeregops",
    cName: "nav-text",
  },
  {
    title: "Monitoring",
    icon: <FiMonitor />,
    // path: '/vehiclecreate',
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Monitor Bag",
        icon: <MdOutlineShoppingCart />,
        path: "/Monitorbag",
        cName: "nav-text",
      },
      {
        title: "Monitor Product",
        icon: <AiOutlineMonitor />,
        path: "/Monitorproduct",
        cName: "nav-text",
      },
    ],
  },
  {
    title: "Payment",
    icon: <FaMoneyCheckAlt />,
    // path: '/vehiclecreate',
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Pending COD",
        icon: <MdPendingActions />,
        path: "/Pcod",
        cName: "nav-text",
      },
      {
        title: "Unconfirm Payment",
        icon: <GiReceiveMoney />,
        path: "/Unconfirmpayment",
        cName: "nav-text",
      },
      {
        title: "View DC Payment",
        icon: <MdOutlinePayments />,
        path: "/viewinvoice",
        cName: "nav-text",
      },
    ],
  },
  {
    title: "Performance",
    icon: <GiSpeedometer />,
    // path: '/vehiclecreate',
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "DC Overall Performance ",
        icon: <SiBookmeter />,
        path: "/overallperformance",
        cName: "nav-text",
      },

      {
        title: "FE/DC Performance",
        icon: <BsSpeedometer />,
        path: "/fedcreport",
        cName: "nav-text",
      },
      // {
      //   title: "FE/DC Volume",
      //   icon: <SiStatuspage />,
      //   path: "/Fdperformance",
      //   cName: "nav-text",
      // },
    ],
  },
  // {
  //   title: "Summary",
  //   icon: <FaMoneyCheck />,
  //   // path: '/vehiclecreate',
  //   cName: "nav-text",
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,
  //   subNav: [
  //     {
  //       title: "Total Volume",
  //       icon: <GiMoneyStack />,
  //       path: "/volume",
  //       cName: "nav-text",
  //     },
  //     {
  //       title: "Total Return",
  //       icon: <MdAssignmentReturn />,
  //       path: "/Treturn",
  //       cName: "nav-text",
  //     },
  //     {
  //       title: "Total Lost or Damage",
  //       icon: <FaHouseDamage />,
  //       path: "/Tlost",
  //       cName: "nav-text",
  //     },
  //     {
  //       title: "Total Hold",
  //       icon: <FaHandPaper />,
  //       path: "/Thold",
  //       cName: "nav-text",
  //     },
  //   ],
  // },

  {
    title: "Report Download",
    icon: <BsFileEarmarkArrowDownFill />,
    // path: "/Reportdownloadops",
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Report Download",
        icon: <BsFileEarmarkArrowDownFill />,
        path: "/Reportdownloadops",
        cName: "nav-text",
      },
      {
        title: "new Report Download",
        icon: <BsFileEarmarkArrowDownFill />,
        path: "/operationNewReport",
        cName: "nav-text",
      },
    ],
  },
  // {
  //   title: "Product Lock",
  //   icon: <AiFillLock />,
  //   path: "/lock",
  //   cName: "nav-text",
  // },
  {
    title: "Lost Mark",
    icon: <AiOutlineIssuesClose />,
    path: "/Lostmarkops",
    cName: "nav-text",
  },
  {
    title: "Not Picked",
    icon: <MdOutlineRunningWithErrors />,
    path: "/notPicked",
    cName: "nav-text",
  },

  {
    title: "Wrong Menifest Correction",
    icon: <MdWrongLocation />,
    path: "/Wrongcorrection",
    cName: "nav-text",
  },

  // {
  //   title: "SLA",
  //   icon: <MdDesignServices />,
  //   path: "/sla",
  //   cName: "nav-text",
  // },
  {
    title: "OTP",
    icon: <MdPassword />,
    path: "/otp",
    cName: "nav-text",
  },
  // {
  //   title: 'FDA',
  //   icon:"./icon/ops/Group 407.svg",
  //   path: '/Fda',
  //   cName: 'nav-text'
  // },

  // {
  //   title: 'Date Filtering',
  //   path: '/datefiltering',
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Total Ageing Report',
  //   path: '/Oreportdownload',
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'DC/PC Control Panel',
  //   path: '/Dpcontrol',
  //   cName: 'nav-text'
  // },

  {
    title: "Support",
    icon: <BiSupport />,
    path: "/OperationSupport",
    cName: "nav-text",
  },
];

export const Salessidebar = [
  {
    title: "Home",
    icon: <AiIcons.AiFillHome />,
    path: "/salesHome",
    cName: "nav-text",
  },
  {
    title: "Client",
    icon: <FaUserCircle />,
    // path: '/vehiclecreate',
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        icon: <ImProfile />,
        title: "Client Profile",
        // icon:"./icon/sales/bxs-dashboardsales.svg",
        path: "/ClientP",
        cName: "nav-text",
      },
      {
        icon: <FiUserPlus />,
        title: "Client Registration",
        // icon:"./icon/sales/Layer -1sales.svg",
        path: "/ClientR",
        cName: "nav-text",
      },
      {
        title: "Client Parcel Overview",
        icon: <GiMagnifyingGlass />,
        // icon:"./icon/sales/Layer -4.svg",
        path: "/Salesreportdownload",
        cName: "nav-text",
      },
      {
        title: "Manage Client OTP",
        icon: <MdPassword />,
        // icon:"./icon/sales/Layer 2sales.svg",
        path: "/manageclientotp",
        cName: "nav-text",
      },
    ],
  },

  {
    title: "PickUp Request",
    icon: <FaLuggageCart />,
    // icon:"./icon/sales/Layer -2sales.svg",
    path: "/pickupSales",
    cName: "nav-text",
  },
  {
    title: "Report Download",
    icon: <BsFillFileEarmarkArrowDownFill />,
    // icon:"./icon/sales/Layer -3sales.svg",
    path: "/productSales",
    cName: "nav-text",
  },

  // {
  //   title: 'Parcel Tracking',
  //   path: '/Parceltrackings',
  //   cName: 'nav-text'
  // },
  {
    title: "Parcel Tracking",
    icon: <MdArtTrack />,
    // icon:"./icon/sales/Layer 2sales.svg",
    path: "/Parceltrackingwaybill",
    cName: "nav-text",
  },
  {
    title: "Multiple Waybill Search",
    icon: <AiOutlineFileSearch />,
    // icon:"./icon/sales/Layer 2sales.svg",
    path: "/multiwaybill",
    cName: "nav-text",
  },

  {
    icon: <BiSupport />,
    title: "Support",
    // icon:"./icon/sales/bxs-dashboardsales.svg",
    path: "/SalesSupport",
    cName: "nav-text",
  },
];

export const Hrsidebar = [
  {
    title: "Employee Registration",
    icon: <FiUserPlus />,
    path: "/employeereg",
    cName: "nav-text",
  },
  {
    title: "Employee List",
    icon: <FaListAlt />,
    path: "/employeelist",
    cName: "nav-text",
  },
  {
    title: "Leave Approval",
    icon: <ImExit />,
    path: "/leave",
    cName: "nav-text",
  },
  {
    title: "KPI",
    icon: <BsSpeedometer />,
    path: "/kpi",
    cName: "nav-text",
  },
];
export const acsidebar = [
  {
    title: "Home",
    icon: <AiIcons.AiFillHome />,
    path: "/shipmentd",
    cName: "nav-text",
  },

  {
    title: "Invoice",
    icon: <FaFileInvoiceDollar />,
    // path: '/vehiclecreate',
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Invoice Summary",
        icon: <FaFileInvoice />,
        path: "/InvoiceSummary",
        // icon: <AiIcons.AiFillHome />,
        cName: "nav-text",
      },
      {
        title: "Invoice Summary Paid",
        icon: <FaFileInvoiceDollar />,
        path: "/InvoiceSummarypaid",
        // icon: <AiIcons.AiFillHome />,
        cName: "nav-text",
      },
    ],
  },
  {
    title: "Monitor",
    icon: <FiMonitor />,
    // path: '/vehiclecreate',
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Monitor Product",
        icon: <AiOutlineMonitor />,
        path: "/Monitorproductacc",
        cName: "nav-text",
      },
      {
        title: "Report Download",
        icon: <BsFillFileEarmarkArrowDownFill />,
        // icon:"./icon/ops/Group 407.svg",
        path: "/Reportdownloadacc",
        cName: "nav-text",
      },
      {
        title: "POD Productlist",
        icon: <BsCardChecklist />,
        path: "/Confirmpaymentdcacc",
        cName: "nav-text",
      },
    ],
  },

  // {
  //   title: 'Customer Details',
  //   path: '/customerd',
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Bill Details',
  //   path: '/billd',
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Bill Generate',
  //   path: '/billg',
  //   cName: 'nav-text'
  // },

  {
    title: "DC Payment Confirm",
    icon: <GiConfirmed />,
    path: "/Confirmpayment",
    cName: "nav-text",
  },

  {
    title: "Confirm Payment",
    icon: <GiReceiveMoney />,
    path: "/Viewinvoiceacc",
    cName: "nav-text",
  },

  {
    title: "Client Payment",
    icon: <GiPayMoney />,
    path: "/FinancialHome",
    cName: "nav-text",
  },
  {
    title: "Pending Amount DC",
    icon: <FaHourglassEnd />,
    path: "/PendingAmountHome",
    cName: "nav-text",
  },

  // invoice summary

  // {
  //   title: 'Invoice Summary',
  //   path: '/InvoiceSummary',
  //   cName: 'nav-text'
  // },

  // invoice paid

  // Due payment

  {
    title: "Due Payment",
    icon: <GiPayMoney />,
    path: "/Duepayment",
    cName: "nav-text",
  },
];

export const superadminsidebar = [
  {
    title: "Change Status",
    icon: <MdPublishedWithChanges />,
    path: "/superhome",
    cName: "nav-text",
  },
  {
    title: "Status Grup",
    icon: <HiUserGroup className="text-white" />,
    path: "/statusGrup",
    cName: "nav-text",
  },

  {
    title: "Employee list",
    icon: <BsCardChecklist />,
    path: "/Employeeactive",
    cName: "nav-text",
  },
  {
    title: "3PL Area Map",
    icon: <FaMapMarkedAlt />,
    path: "/threePLAreaMap",
    cName: "nav-text",
  },
  {
    title: "Courier",
    icon: <FaTruckMoving />,
    path: "/courier",
    cName: "nav-text",
  },

  {
    title: "Location",
    icon: <MdAccountBalance />,
    // path: '/vehiclecreate',
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Location List",
        icon: <BiLocationPlus />,
        path: "/locationlist",
        cName: "nav-text",
      },

      {
        title: "Location Add",
        icon: <BiLocationPlus />,
        path: "/locationadd",
        cName: "nav-text",
      },
    ],
  },

  {
    title: "Hub",
    icon: <MdAccountBalance />,
    // path: '/vehiclecreate',
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Hub Add",
        icon: <BiLocationPlus />,
        path: "/hubdd",
        cName: "nav-text",
      },
      {
        title: "Hubb List",
        icon: <BiLocationPlus />,
        path: "/hublist",
        cName: "nav-text",
      },
      {
        title: "Hubb Mapping",
        icon: <BiLocationPlus />,
        path: "/hubmaping",
        cName: "nav-text",
      },
    ],
  },
  {
    title: "Courier Area",
    icon: <MdAccountBalance />,
    // path: '/vehiclecreate',
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "area Add",
        icon: <BiLocationPlus />,
        path: "/courierareaadd",
        cName: "nav-text",
      },
      {
        title: "area List",
        icon: <BiLocationPlus />,
        path: "/courierarealist",
        cName: "nav-text",
      },
    ],
  },
  {
    title: "Post Code Coverage Area",
    icon: <MdAccountBalance />,
    // path: '/vehiclecreate',
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Add Coverage Area",
        icon: <BiLocationPlus />,
        // icon: "./icon/pc/icons8-home.svg",
        path: "/addpostcodecoveragearea",
        cName: "nav-text",
      },

      {
        title: "Update Coverage Area",
        icon: <BiLocationPlus />,
        // icon: "./icon/pc/icons8-home.svg",
        path: "/updatepostcodecoveragearea",
        cName: "nav-text",
      },
    ],
  },
  {
    title: "Merchant Area",
    icon: <MdAccountBalance />,
    // path: '/vehiclecreate',
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Add Merchant Area",
        icon: <AiIcons.AiFillHome />,
        path: "/addmerchantarea",
        cName: "nav-text",
      },
    ],
  },
  {
    title: "Accounts Panel",
    icon: <MdAccountBalance />,
    // path: '/vehiclecreate',
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Home",
        icon: <AiIcons.AiFillHome />,
        path: "/shipmentd",
        cName: "nav-text",
      },
      {
        title: "Monitor Prroduct",
        icon: <AiOutlineMonitor />,
        path: "/Monitorproductacc",
        cName: "nav-text",
      },
      // {
      //   title: 'Customer Details',
      //   path: '/customerd',
      //   cName: 'nav-text'
      // },
      // {
      //   title: 'Bill Details',
      //   path: '/billd',
      //   cName: 'nav-text'
      // },
      // {
      //   title: 'Bill Generate',
      //   path: '/billg',
      //   cName: 'nav-text'
      // },
      {
        title: "Report Download",
        icon: <BsFillFileEarmarkArrowDownFill />,
        // icon:"./icon/ops/Group 407.svg",
        path: "/Reportdownloadacc",
        cName: "nav-text",
      },

      {
        title: "DC Payment Confirm",
        icon: <GiConfirmed />,
        path: "/Confirmpayment",
        cName: "nav-text",
      },
      {
        title: "POD Productlist",
        icon: <BsCardChecklist />,
        path: "/Confirmpaymentdcacc",
        cName: "nav-text",
      },

      {
        title: "Confirm Payment",
        icon: <GiReceiveMoney />,
        path: "/Viewinvoiceacc",
        cName: "nav-text",
      },

      {
        title: "Client Payment",
        icon: <GiPayMoney />,
        path: "/FinancialHome",
        cName: "nav-text",
      },
      {
        title: "Pending Amount DC",
        icon: <FaHourglassEnd />,
        path: "/PendingAmountHome",
        cName: "nav-text",
      },

      // invoice summary

      {
        title: "Invoice Summary",
        icon: <FaFileInvoice />,
        path: "/InvoiceSummary",
        cName: "nav-text",
      },

      // invoice paid

      {
        title: "Invoice Summary Paid",
        icon: <FaFileInvoiceDollar />,
        path: "/InvoiceSummarypaid",
        cName: "nav-text",
      },
      // Due payment

      {
        title: "Due Payment",
        icon: <GiPayMoney />,
        path: "/Duepayment",
        cName: "nav-text",
      },
    ],
  },
  {
    title: "HR Panel",
    icon: <GiHumanTarget />,
    // path: '/vehiclecreate',
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Employee Registration",
        icon: <FiUserPlus />,
        path: "/employeereg",
        cName: "nav-text",
      },
      {
        title: "Employee List",
        icon: <FaListAlt />,
        path: "/employeelist",
        cName: "nav-text",
      },
      {
        title: "Leave Approval",
        icon: <ImExit />,
        path: "/leave",
        cName: "nav-text",
      },
      {
        title: "KPI",
        icon: <BsSpeedometer />,
        path: "/kpi",
        cName: "nav-text",
      },
    ],
  },
  {
    title: "DC Panel",
    icon: <SiDcentertainment />,
    // path: '/vehiclecreate',
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Home",
        icon: <AiIcons.AiFillHome />,
        // icon: "./icon/pc/icons8-home.svg",
        path: "/Homeopsdc",
        cName: "nav-text",
      },

      {
        title: "Bag In Dc",
        icon: <MdOutlineShoppingCart />,
        // icon: "./icon/pc/icons8-bag-64.png",
        path: "/Homedc",
        cName: "nav-text",
      },
      {
        title: "Received Shipment",
        icon: <FaBoxTissue />,
        // icon: "./icon/pc/icons8-shipped-60.png",
        path: "/receivebagdc",
        cName: "nav-text",
      },

      {
        title: "Dispatch",
        icon: <FaBabyCarriage />,
        // icon: "./icon/pc/icons8-shipping-container-50.png",
        path: "/Assigntofe",
        cName: "nav-text",
      },

      {
        title: "RTO Dispatch",
        icon: <BsArrowRepeat />,
        // icon: "./icon/pc/icons8-day-view-50.png",
        path: "/Assigntoferto",
        cName: "nav-text",
      },
      {
        title: "EOD",
        icon: <FaCalendarCheck />,
        // icon: "./icon/pc/icons8-data-pending-50.png",
        path: "/Eodstatus",
        cName: "nav-text",
      },

      {
        title: "Pending EOD",
        icon: <FaRegCalendarTimes />,
        // icon: "./icon/pc/icons8-sand-timer-50.png",
        path: "/Pendingeodstatus",
        cName: "nav-text",
      },
      {
        title: "Final EOD",
        icon: <FaRegCalendarCheck />,
        // icon: "./icon/pc/icons8-date-span-50.png",
        path: "/finalEod",
        cName: "nav-text",
      },

      {
        title: "Lost",
        icon: <AiOutlineIssuesClose />,
        // icon: "./icon/pc/icons8-quest-50.png",
        path: "/Lostmark",
        cName: "nav-text",
      },

      {
        title: "Payment",
        icon: <FaMoneyCheckAlt />,
        // icon: "./icon/pc/icons8-online-payment-50.png",
        path: "/Confirmpaymentdc",
        cName: "nav-text",
      },

      {
        title: "View Payment",
        icon: <FaFileInvoice />,
        // icon: "./icon/pc/icons8-invoice-64.png",
        path: "/viewpayment",
        cName: "nav-text",
      },
      {
        title: "Reroute",
        icon: <MdOutlineAltRoute />,
        // icon: "./icon/pc/icons8-train-track-50.png",
        path: "/changeaddress",
        cName: "nav-text",
      },

      {
        title: "Rerouted Shipment",
        icon: <FaRoute />,
        // icon: "./icon/pc/icons8-shipped-60.png",
        path: "/reroutedproduct",
        cName: "nav-text",
      },

      {
        title: "Return Shipment",
        icon: <MdAssignmentReturn />,
        // icon: "./icon/pc/icons8-return-purchase-100.png",
        path: "/Returndc",
        cName: "nav-text",
      },
      {
        title: "Bag Creation",
        icon: <FaShoppingBag />,
        // icon: "./icon/pc/icons8-doctors-bag-100.png",
        path: "/Returnbag",
        cName: "nav-text",
      },

      {
        title: "Vehicle",
        icon: <FaShippingFast />,
        // icon: "./icon/pc/icons8-truck-weight-max-loading-100.png",
        path: "/Returnvehicledc",
        cName: "nav-text",
      },
      {
        title: "Dc Performance",
        icon: <BsSpeedometer />,
        // icon: "./icon/pc/icons8-performance-64.png",
        path: "/dcperformance",
        cName: "nav-text",
      },
    ],
  },

  // {
  //   title: 'Sales Panel',
  //   path: '/sales',
  //   cName: 'nav-text'
  // },
  {
    title: "Operation Panel",
    icon: <FaBusinessTime />,
    // path: '/vehiclecreate',
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Home",
        icon: <AiIcons.AiFillHome />,
        path: "/HomeOperation",
        cName: "nav-text",
      },
      {
        title: "Change Status",
        icon: <MdPublishedWithChanges />,
        path: "/superhome",
        cName: "nav-text",
      },
      {
        title: "Dashboard",
        icon: <MdDashboard />,
        path: "/Dashboard",
        cName: "nav-text",
      },
      {
        title: "Employee Registration",
        icon: <GiArchiveRegister />,
        path: "/Employeeregops",
        cName: "nav-text",
      },
      {
        title: "Monitor Bag",
        icon: <MdOutlineShoppingCart />,
        path: "/Monitorbag",
        cName: "nav-text",
      },

      {
        title: "Monitor Product",
        icon: <AiOutlineMonitor />,
        path: "/Monitorproduct",
        cName: "nav-text",
      },
      {
        title: "3PL list",
        icon: <GiTruck />,
        path: "/ThreePLParcelListpartnerchangeops",
        cName: "nav-text",
      },

      {
        title: "Partner Change",
        icon: <GiTruck />,
        path: "/Newpartnerchangeops",
        cName: "nav-text",
      },

      {
        title: "Shipment Forword",
        icon: <GiTruck />,
        path: "/ThreePLParcelListworwordops",
        cName: "nav-text",
      },

      {
        title: "3PL Status Change",
        icon: <MdDashboard />,
        path: "/3plstatuschange",
        cName: "nav-text",
      },

      {
        title: "3PL coveragearea",
        icon: <MdDashboard />,
        path: "/Threepl",
        cName: "nav-text",
      },

      {
        title: "Report Download",
        icon: <BsFileEarmarkArrowDownFill />,
        path: "/Reportdownloadops",
        cName: "nav-text",
      },
      {
        title: "Product Lock",
        icon: <AiFillLock />,
        path: "/lock",
        cName: "nav-text",
      },
      {
        title: "Lost Mark",
        icon: <AiOutlineIssuesClose />,
        path: "/Lostmarkops",
        cName: "nav-text",
      },

      {
        title: "Wrong Menifest Correction",
        icon: <MdWrongLocation />,
        path: "/Wrongcorrection",
        cName: "nav-text",
      },

      {
        title: "SLA",
        icon: <MdDesignServices />,
        path: "/sla",
        cName: "nav-text",
      },
      {
        title: "OTP",
        icon: <MdPassword />,
        path: "/otp",
        cName: "nav-text",
      },
      // {
      //   title: 'FDA',
      //   icon:"./icon/ops/Group 407.svg",
      //   path: '/Fda',
      //   cName: 'nav-text'
      // },
      {
        title: "Pending COD",
        icon: <MdPendingActions />,
        path: "/Pcod",
        cName: "nav-text",
      },
      {
        title: "Total Volume",
        icon: <GiMoneyStack />,
        path: "/volume",
        cName: "nav-text",
      },
      {
        title: "Total Return",
        icon: <MdAssignmentReturn />,
        path: "/Treturn",
        cName: "nav-text",
      },
      {
        title: "Total Lost or Damage",
        icon: <FaHouseDamage />,
        path: "/Tlost",
        cName: "nav-text",
      },
      {
        title: "Total Hold",
        icon: <FaHandPaper />,
        path: "/Thold",
        cName: "nav-text",
      },
      {
        title: "FE/DC Volume",
        icon: <SiStatuspage />,
        path: "/Fdperformance",
        cName: "nav-text",
      },

      {
        title: "DC Overall Performance ",
        icon: <SiBookmeter />,
        path: "/overallperformance",
        cName: "nav-text",
      },

      {
        title: "FE/DC Performance",
        icon: <BsSpeedometer />,
        path: "/fedcreport",
        cName: "nav-text",
      },
      // {
      //   title: 'Date Filtering',
      //   path: '/datefiltering',
      //   cName: 'nav-text'
      // },
      // {
      //   title: 'Total Ageing Report',
      //   path: '/Oreportdownload',
      //   cName: 'nav-text'
      // },
      // {
      //   title: 'DC/PC Control Panel',
      //   path: '/Dpcontrol',
      //   cName: 'nav-text'
      // },
      {
        title: "Unconfirm Payment",
        icon: <GiReceiveMoney />,
        path: "/Unconfirmpayment",
        cName: "nav-text",
      },
      {
        title: "View DC Payment",
        icon: <MdOutlinePayments />,
        path: "/viewinvoice",
        cName: "nav-text",
      },
      {
        title: "Support",
        icon: <BiSupport />,
        path: "/OperationSupport",
        cName: "nav-text",
      },
    ],
  },

  {
    title: "Processing Panel",
    icon: <VscServerProcess />,
    // path: '/vehiclecreate',
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Home",
        icon: <AiIcons.AiFillHome />,
        path: "/Homeopstable",
        cName: "nav-text",
      },
      {
        title: "Parcel List",
        icon: <FaListAlt />,
        path: "/HomePC",
        cName: "nav-text",
      },
      {
        title: "3pl Parcel List",
        icon: <GiTruck />,
        path: "/ThreePLParcelListpartnerchange",
        cName: "nav-text",
      },

      {
        title: "Shipment Forword",
        icon: <GiTruck />,
        path: "/ThreePLParcelListworword",
        cName: "nav-text",
      },

      // {
      //   title: "3 PL Parcel List",
      //   icon: <GiTruck />,
      //   path: "/ThreePLParcelList",
      //   cName: "nav-text",
      // },
      {
        title: "Center Change",
        icon: <GiCardExchange />,
        path: "/centerchangepc",
        cName: "nav-text",
      },

      {
        title: "3PL Wrong Menifestation",
        icon: <GiCardExchange />,
        path: "/Partnerwrongmenifestation",
        cName: "nav-text",
      },
      {
        title: "Parcel Tracking",
        icon: <MdArtTrack />,
        path: "/Parceltrackingpc",
        cName: "nav-text",
      },

      {
        title: "Upload CSV",
        icon: <FaFileUpload />,
        path: "/manifest",
        cName: "nav-text",
      },
      {
        title: "Confirm Single Product",
        icon: <GiConfirmed />,
        path: "/Confirmsingleproduct",
        cName: "nav-text",
      },

      {
        title: "Confirm Pickup",
        icon: <GiConfirmed />,
        path: "/Confirmpickup",
        cName: "nav-text",
      },
      {
        title: "Pickup Request",
        icon: <FaLuggageCart />,
        path: "/Pickup",
        cName: "nav-text",
      },
      {
        title: "Bag Creation",
        path: "/bagcreation",
        icon: <BsFillBagPlusFill />,
      },
      {
        title: "Re-Route Bag Creation",
        icon: <BsFillCalendarRangeFill />,
        path: "/reroutebagcreation",
        cName: "nav-text",
      },
      {
        title: "Return Bag Creation",
        icon: <BsFillCalendarXFill />,
        path: "/Returnbagcreation",
        cName: "nav-text",
      },
      {
        title: "Vehicle Creation",
        path: "/vehiclecreate",
        icon: <BsTruck />,
      },
      {
        title: "Return/Reroute Bag Receive",
        icon: <BsBagCheckFill />,
        path: "/ReturnPcBag",
        cName: "nav-text",
      },
      {
        title: "Partner Return Parcel Receive",
        icon: <BsBagCheckFill />,
        path: "/Partnerreturn",
        cName: "nav-text",
      },
      {
        title: "Return/Reroute Shipment Receive",
        icon: <BsBagCheckFill />,
        path: "/Returnedpcreceivedbag",
        cName: "nav-text",
      },
      {
        title: "Returned Product",
        icon: <MdAssignmentReturn />,
        path: "/ReturnedProduct",
        cName: "nav-text",
      },
      {
        title: "Return Bag Creation",
        icon: <BsFillBagPlusFill />,
        path: "/Returnbagcreation",
        cName: "nav-text",
      },
      {
        title: "Return Vehicle Creation",
        icon: <GiAmbulance />,
        path: "/vehiclecreate",
        cName: "nav-text",
      },
      {
        title: "RTO",
        icon: <BsArrowRepeat />,
        path: "/Directrto",
        cName: "nav-text",
      },
      // {
      //   title: 'Return PC Received Bag ',
      //   icon:"./icon/pc/Layer -4.svg",
      //   path: '/Returnedpcreceivedbag',
      //   cName: 'nav-text'
      // },
    ],
  },
  // {
  //   title: "Sales Panel",
  //   icon: <FaRegChartBar />,
  //   // path: '/vehiclecreate',
  //   cName: "nav-text",
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,
  //   subNav: [
  //     {
  //       title: "Client Profile",
  //       icon: <FaUserCircle />,
  //       // icon:"./icon/sales/bxs-dashboardsales.svg",
  //       path: "/ClientP",
  //       cName: "nav-text",
  //     },
  //     {
  //       title: "Client Registration",
  //       icon: <FiUserPlus />,
  //       // icon:"./icon/sales/Layer -1sales.svg",
  //       path: "/ClientR",
  //       cName: "nav-text",
  //     },
  //     {
  //       title: "PickUp Request",
  //       icon: <FaLuggageCart />,
  //       // icon:"./icon/sales/Layer -2sales.svg",
  //       path: "/pickupSales",
  //       cName: "nav-text",
  //     },
  //     {
  //       title: "Report Download",
  //       icon: <BsFillFileEarmarkArrowDownFill />,
  //       // icon:"./icon/sales/Layer -3sales.svg",
  //       path: "/productSales",
  //       cName: "nav-text",
  //     },
  //     {
  //       title: "Client Parcel Overview",
  //       icon: <GiMagnifyingGlass />,
  //       // icon:"./icon/sales/Layer -4.svg",
  //       path: "/Salesreportdownload",
  //       cName: "nav-text",
  //     },
  //     // {
  //     //   title: 'Parcel Tracking',
  //     //   path: '/Parceltrackings',
  //     //   cName: 'nav-text'
  //     // },
  //     {
  //       title: "Parcel Tracking",
  //       icon: <MdArtTrack />,
  //       // icon:"./icon/sales/Layer 2sales.svg",
  //       path: "/Parceltrackingwaybill",
  //       cName: "nav-text",
  //     },
  //     {
  //       title: "Multiple Waybill Search",
  //       icon: <AiOutlineFileSearch />,
  //       // icon:"./icon/sales/Layer 2sales.svg",
  //       path: "/multiwaybill",
  //       cName: "nav-text",
  //     },
  //     {
  //       title: "Manage Client OTP",
  //       icon: <MdPassword />,
  //       // icon:"./icon/sales/Layer 2sales.svg",
  //       path: "/manageclientotp",
  //       cName: "nav-text",
  //     },
  //
  //     {
  //       title: "Support",
  //       icon: <BiSupport />,
  //       // icon:"./icon/sales/bxs-dashboardsales.svg",
  //       path: "/SalesSupport",
  //       cName: "nav-text",
  //     },
  //   ],
  // },
  {
    title: "FE Panel",
    icon: <AiOutlineFieldTime />,
    // path: '/vehiclecreate',
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Parcel Receive",
        icon: <RiFolderReceivedFill />,
        // icon: "./icon/pc/icons8-home.svg",
        path: "/Receiveparcelfe",
        cName: "nav-text",
      },

      {
        title: "Parcel Delivery",
        icon: <MdDeliveryDining />,
        // icon: "./icon/pc/icons8-home.svg",
        path: "/Parceldelivery",
        cName: "nav-text",
      },
    ],
  },
];
// export const dcpanel = [
//
//   {
//     title: 'Home',
//     path: '/Homeopsdc',
//     cName: 'nav-text'
//   },
//
//
//
//   {
//     title: 'Bag In Dc',
//     path: '/Homedc',
//     cName: 'nav-text'
//   },
//   {
//     title: 'Received Shipment',
//     path: '/receivebagdc',
//     cName: 'nav-text'
//   },
//
//   {
//     title: 'Dispatch',
//     path: '/Assigntofe',
//     cName: 'nav-text'
//   },
//
//   {
//     title: 'RTO Dispatch',
//     path: '/Assigntoferto',
//     cName: 'nav-text'
//   },
//   {
//     title: 'EOD',
//     path: '/Eodstatus',
//     cName: 'nav-text'
//   },
//
//   {
//     title: 'Pending EOD',
//     path: '/Pendingeodstatus',
//     cName: 'nav-text'
//   },
//   {
//     title: 'Final EOD',
//     path: '/finalEod',
//     cName: 'nav-text'
//   },
//
//   {
//     title: 'Lost',
//     path: '/Lostmark',
//     cName: 'nav-text'
//   },
//
//   {
//     title: 'Payment',
//     path: '/Confirmpaymentdc',
//     cName: 'nav-text'
//   },
//
//   {
//     title: 'View Payment',
//     path: '/viewpayment',
//     cName: 'nav-text'
//   },
//   {
//     title: 'Reroute',
//     path: '/changeaddress',
//     cName: 'nav-text'
//   },
//
//   {
//     title: 'Rerouted Shipment',
//     path: '/reroutedproduct',
//     cName: 'nav-text'
//   },
//
//   {
//     title: 'Return Shipment',
//     path: '/Returndc',
//     cName: 'nav-text'
//   },
//   {
//     title: 'Bag Creation',
//     path: '/Returnbag',
//     cName: 'nav-text'
//   },
//
//   {
//     title: 'Vehicle',
//     path: '/Returnvehicledc',
//     cName: 'nav-text'
//   },
//   {
//     title: 'Dc Performance',
//     path: '/dcperformance',
//     cName: 'nav-text'
//   },
// ];

export const dcpanel = [
  // {
  //   title: "PC",
  //   icon: <AiOutlineFieldTime />,
  //   // path: '/vehiclecreate',
  //   cName: "nav-text",
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,
  //   subNav: [
  //     {
  //       title: "Parcel List",
  //       icon: <RiFolderReceivedFill />,
  //       // icon: "./icon/pc/icons8-home.svg",
  //       path: "/Parcellistdc",
  //       cName: "nav-text",
  //     },
  //     {
  //       title: "Confirm Single Product",
  //       icon: <GiConfirmed />,
  //       path: "/Confirmsingleproduct",
  //       cName: "nav-text",
  //     },
  //
  //     {
  //       title: "Confirm Pickup",
  //       icon: <GiConfirmed />,
  //       path: "/Confirmpickup",
  //       cName: "nav-text",
  //     },
  //     {
  //       title: "Pickup Request",
  //       icon: <FaLuggageCart />,
  //       path: "/Pickup",
  //       cName: "nav-text",
  //     },
  //
  //     // {
  //     //   title: "Bag Creation",
  //     //   icon: <MdDeliveryDining />,
  //     //   // icon: "./icon/pc/icons8-home.svg",
  //     //   path: "/Bagcreationdc",
  //     //   cName: "nav-text",
  //     // },
  //
  //     // {
  //     //   title: "Vehicle Creation",
  //     //   icon: <MdDeliveryDining />,
  //     //   // icon: "./icon/pc/icons8-home.svg",
  //     //   path: "/Vehiclecreatedc",
  //     //   cName: "nav-text",
  //     // },
  //   ],
  // },

  //DC Panel

  {
    title: "Home",
    icon: <AiIcons.AiFillHome />,
    // icon: "./icon/pc/icons8-home.svg",
    path: "/Homeopsdc",
    cName: "nav-text",
  },
  {
    title: "Parcel list",
    icon: <FaListAlt />,

    path: "/HomeDCP",
    cName: "nav-text",
  },

  {
    title: "Nextday Parcel Receive",
    icon: <MdOutlineShoppingCart />,
    // icon: "./icon/pc/icons8-bag-64.png",
    path: "/Nextdayreceive",
    cName: "nav-text",
  },

  {
    title: "Bag In Dc",
    icon: <MdOutlineShoppingCart />,
    // icon: "./icon/pc/icons8-bag-64.png",
    path: "/Homedc",
    cName: "nav-text",
  },

  {
    title: "Received Shipment multiple",
    icon: <FaBoxTissue />,
    // icon: "./icon/pc/icons8-shipped-60.png",
    path: "/receivebagdc",
    cName: "nav-text",
  },

  {
    title: "Received Shipment single",
    icon: <FaBoxTissue />,
    // icon: "./icon/pc/icons8-shipped-60.png",
    path: "/receivebagdcsingle",
    cName: "nav-text",
  },
  {
    title: "Pickup",
    icon: <GiCardPickup />,
    // path: '/vehiclecreate',
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      // {
      //   title: "Confirm Product",
      //   icon: <GiConfirmed />,
      //   path: "/Confirmsingleproduct",
      //   cName: "nav-text",
      // },

      {
        title: "Confirm Pickup",
        icon: <GiConfirmed />,
        path: "/Confirmpickupdc",
        cName: "nav-text",
      },
      // {
      //   title: "Pickup Request",
      //   icon: <FaLuggageCart />,
      //   path: "/Pickup",
      //   cName: "nav-text",
      // },
    ],
  },

  // {
  //   title: "Dispatch",
  //   icon: <FaBabyCarriage />,
  //   // icon: "./icon/pc/icons8-shipping-container-50.png",
  //   path: "/Assigntofe",
  //   cName: "nav-text",
  // },

  {
    title: "Dispatch",
    icon: <AiOutlineFieldTime />,
    // path: '/vehiclecreate',
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      // {
      //   title: "Dispatch",
      //   icon: <RiFolderReceivedFill />,
      //   // icon: "./icon/pc/icons8-home.svg",
      //   path: "/Assigntofe",
      //   cName: "nav-text",
      // },

      {
        title: "Dispatch new",
        icon: <RiFolderReceivedFill />,
        // icon: "./icon/pc/icons8-home.svg",
        path: "/Assigntofenewdispatch",
        cName: "nav-text",
      },
      {
        title: "Dispatch Multiple",
        icon: <RiFolderReceivedFill />,
        // icon: "./icon/pc/icons8-home.svg",
        path: "/AssigntofenewMultipledispatch",
        cName: "nav-text",
      },

      {
        title: "Dispatch List",
        icon: <MdDeliveryDining />,
        // icon: "./icon/pc/icons8-home.svg",
        path: "/Assigntofenew",
        cName: "nav-text",
      },
    ],
  },

  {
    title: "RTO Dispatch",
    icon: <BsArrowRepeat />,
    // icon: "./icon/pc/icons8-day-view-50.png",
    path: "/Assigntoferto",
    cName: "nav-text",
  },
  {
    title: "EOD",
    icon: <FaCalendarCheck />,
    // icon: "./icon/pc/icons8-data-pending-50.png",
    path: "/Eodstatus",
    cName: "nav-text",
  },

  {
    title: "Pending EOD",
    icon: <FaRegCalendarTimes />,
    // icon: "./icon/pc/icons8-sand-timer-50.png",
    path: "/Pendingeodstatus",
    cName: "nav-text",
  },
  // {
  //   title: "Final EOD",
  //   icon: <FaRegCalendarCheck />,
  //   // icon: "./icon/pc/icons8-date-span-50.png",
  //   path: "/finalEod",
  //   cName: "nav-text",
  // },

  {
    title: "Lost",
    icon: <AiOutlineIssuesClose />,
    // icon: "./icon/pc/icons8-quest-50.png",
    path: "/Lostmark",
    cName: "nav-text",
  },

  {
    title: "Payment",
    icon: <FaMoneyCheckAlt />,
    // icon: "./icon/pc/icons8-online-payment-50.png",
    path: "/Confirmpaymentdc",
    cName: "nav-text",
  },

  {
    title: "View Payment",
    icon: <FaFileInvoice />,
    // icon: "./icon/pc/icons8-invoice-64.png",
    path: "/viewpayment",
    cName: "nav-text",
  },

  {
    title: "Report Download",
    icon: <FaFileInvoice />,
    // icon: "./icon/pc/icons8-invoice-64.png",
    path: "/Reportdownloaddc",
    cName: "nav-text",
  },

  {
    title: "Reroute",
    icon: <MdOutlineAltRoute />,
    // icon: "./icon/pc/icons8-train-track-50.png",
    path: "/changeaddress",
    cName: "nav-text",
  },

  {
    title: "Rerouted Shipment",
    icon: <FaRoute />,
    // icon: "./icon/pc/icons8-shipped-60.png",
    path: "/reroutedproduct",
    cName: "nav-text",
  },

  {
    title: "Return Shipment",
    icon: <MdAssignmentReturn />,
    //icon: "./icon/pc/icons8-return-purchase-100.png",
    path: "/Returndc",
    cName: "nav-text",
  },
  {
    title: "Bag Creation",
    icon: <FaShoppingBag />,
    // icon: "./icon/pc/icons8-doctors-bag-100.png",
    path: "/Returnbag",
    cName: "nav-text",
  },

  {
    title: "Vehicle",
    icon: <FaShippingFast />,
    // icon: "./icon/pc/icons8-truck-weight-max-loading-100.png",
    path: "/Returnvehicledc",
    cName: "nav-text",
  },

  {
    title: "Dc Performance",
    icon: <BsSpeedometer />,
    // icon: "./icon/pc/icons8-performance-64.png",
    path: "/dcperformance",
    cName: "nav-text",
  },
];
//fe panel side bar

export const fepanel = [
  {
    title: "Parcel Receive",
    icon: <RiFolderReceivedFill />,
    // icon: "./icon/pc/icons8-home.svg",
    path: "/Receiveparcelfe",
    cName: "nav-text",
  },

  {
    title: "Parcel Delivery",
    icon: <MdDeliveryDining />,
    // icon: "./icon/pc/icons8-home.svg",
    path: "/Parceldelivery",
    cName: "nav-text",
  },
];

//--openssl-legacy-provider
export const Degital_Ocean_flag = true;
export const company_name = "EDESH";
