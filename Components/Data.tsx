import icon1 from "../public/images/icon1.png";
import icon2 from "../public/images/icon2.png";
import icon3 from "../public/images/icon3.png";
import icon4 from "../public/images/icon4.png";
import icon5 from "../public/images/icon5.png";
import icon6 from "../public/images/icon6.png";
import { MdOutlineKingBed, MdOutlineWindow } from "react-icons/md";
import { FaShower } from "react-icons/fa";

export interface headProp {
  name: string;
  content: string;
}

export interface location {
  address: string;
  lat: number;
  lng: number;
}
export const headDetails: headProp[] = [
  {
    name: "Home page",
    content: "This is the Home page",
  },
  {
    name: "Landlord page",
    content: "This is the Landlord",
  },
  {
    name: "Tenants page",
    content: "This is the Tenants page",
  },
  {
    name: "Contact page",
    content: "This is the Contact page",
  },
];

export const navList = [
  {
    list: "Home",
    link: "/",
  },
  {
    list: "Landlord",
    link: "/landlords",
  },
  {
    list: "Tenants",
    link: "/tenants",
  },
  {
    list: "Contact US",
    link: "/contacts",
  },
];

export const location: location = {
  address: "1600 Amphitheatre Parkway, Mountain View, california.",
  lat: 37.44,
  lng: -122.08,
};

export const perks = [
  {
    icon: icon1,
    label: "pay as little as possible!",
  },
  {
    icon: icon2,
    label: "enjoy wisdom of community!",
  },
  {
    icon: icon3,
    label: "let somebody else take care of landlord!",
  },
  {
    icon: icon4,
    label: "enjoy peaceful environment!",
  },
  {
    icon: icon5,
    label: "stay safe save money!",
  },
  {
    icon: icon6,
    label: "pay for what you use!",
  },
];

export const cardIconData = [
  {
    icon: <MdOutlineKingBed />,
    number: 4,
  },
  {
    icon: <FaShower />,
    number: 2,
  },
  {
    icon: <MdOutlineWindow />,
    number: 2,
  },
];

import { styled } from "@mui/material/styles";
import { JsxElement } from "typescript";
import Button, { ButtonProps } from "@mui/material/Button";

export const BootstrapButton = styled(Button)({
  width: "200px",
  height: "65px",
  boxShadow: "none",
  textTransform: "none",
  fontSize: 17,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#F4511E",
  borderColor: "#F4511E",
  borderradius: "5px",
  fontWeight: 500,
  // fontFamily: "'Manrope', sans-serif",
  // boxShadow: "0px 20px 13px rgba(248, 90, 71, 0.035)",
  fontFamily: [
    "'Manrope', sans-serif",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#F4511E",
    borderColor: "#F4511E",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "F4511E",
    borderColor: "F4511E",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});
