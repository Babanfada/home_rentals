import icon1 from "../public/images/icon1.png";
import icon2 from "../public/images/icon2.png";
import icon3 from "../public/images/icon3.png";
import icon4 from "../public/images/icon4.png";
import icon5 from "../public/images/icon5.png";
import icon6 from "../public/images/icon6.png";

import home3 from "../public/images/home3.jpg";
import home4 from "../public/images/home4.jpg";
import home5 from "../public/images/home5.jpg";
import home6 from "../public/images/home6.jpg";
import { MdOutlineKingBed, MdOutlineWindow } from "react-icons/md";
import { FaShower } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import { JsxElement } from "typescript";
import Button, { ButtonProps } from "@mui/material/Button";
import { TextField } from "@mui/material";
import {
  SelectTextFields1,
  SelectTextFields2,
  SelectTextFields3,
} from "./TextField";

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

export const homes = [
  {
    img: home3,
    display: "",
    lable: "flexible leases",
    // width: "18.3vw",
    // height: "",
    width: 250,
    height: 334,
  },
  {
    img: home4,
    display: "",
    lable: "7-days happiness guaranteed",
    // width: "19.7vw",
    // height: "",
    width: 270,
    height: 270,
  },
  {
    img: home5,
    display: "",
    lable: "monthly house cleaning",
    // width: "15.5vw",
    // height: "",
    width: 212,
    height: 285,
  },
  {
    img: home6,
    display: "none",
    lable: "choose your own room mate",
    // width: "24.5vw",
    // height: "",
    width: 338,
    height: 356,
  },
];

export const landlordData = [
  {
    id: 1,
    grid: "",
    label: "Name",
    textField: (
      <TextField
        id={"outlined-select-currency"}
        placeholder="Enter Name"
        variant="outlined"
        required
        style={{
          width: 318,
          height: 56,
          background: "#F9F9F9",
        }}
      />
    ),
  },
  {
    id: 2,
    grid: "",
    label: "Address",
    textField: (
      <TextField
        id={"outlined-select-currency"}
        placeholder="Enter Address"
        variant="outlined"
        required
        style={{
          width: 318,
          height: 56,
          background: "#F9F9F9",
        }}
      />
    ),
  },
  {
    id: 3,
    grid: "",
    label: "Unit Number",
    textField: (
      <TextField
        type={"number"}
        id={"outlined-select-currency"}
        placeholder="Enter Unit"
        variant="outlined"
        required
        style={{
          width: 318,
          height: 56,
          background: "#F9F9F9",
        }}
      />
    ),
  },
  {
    id: 4,
    grid: "",
    label: "City",
    textField: <SelectTextFields1 />,
  },
  {
    id: 5,
    grid: "",
    label: "State",
    textField: <SelectTextFields2 />,
  },
  {
    id: 6,
    grid: "",
    label: "Room Type",
    textField: <SelectTextFields3 />,
  },
  {
    id: 7,
    grid: "",
    label: "Price",
    textField: (
      <TextField
        id={"outlined-select-currency"}
        placeholder="Enter Price"
        variant="outlined"
        required
        style={{
          width: 318,
          height: 56,
          background: "#F9F9F9",
        }}
      />
    ),
  },
  {
    id: 8,
    grid: `span 3`,
    label: "Description",
    textField: (
      <TextField
        id={"outlined-multiline-flexible"}
        placeholder="Enter Description"
        variant="outlined"
        required
        multiline
        minRows={5}
        style={{
          width: "73.49vw",
          minHeight: 147,
          background: "#F9F9F9",
          // border: "1px solid red",
        }}
      />
    ),
  },
  {
    id: 8,
    grid: `span 3`,
    label: "Upload Photos",
    // textField: <input type={"file"}  hidden/>
    textField: (
      <TextField
        type={"file"}
        id={"outlined-multiline-flexible"}
        placeholder="Enter Description"
        variant="filled"
        required
        minRows={5}
        InputProps={{
          disableUnderline: true,
          style: { background: "rgba(244, 81, 30, 0.01)" },
        }}
        style={{
          width: "73.49vw",
          minHeight: "102px",
          background: "rgba(244, 81, 30, 0.01)",
          border: "1px dashed #F4511E",
          borderRadius: "10px",
          // visibility: "hidden",
        }}
      />
    ),
  },
];

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
  borderRadius: "5px",
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
export const BootstrapButton2 = styled(Button)({
  width: "200px",
  height: "65px",
  color: "white",
  boxShadow: "none",
  textTransform: "none",
  fontSize: 17,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#F4511E",
  borderColor: "#F4511E",
  borderRadius: "13px",
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

export const BootstrapButton3 = styled(Button)({
  width: "37.5vw",
  height: "69px",
  color: "white",
  boxShadow: "none",
  textTransform: "none",
  fontSize: 17,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#F4511E",
  borderColor: "#F4511E",
  borderRadius: "9px",
  fontWeight: 500,
  marginBottom: 73.7,
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
