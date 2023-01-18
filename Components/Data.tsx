import icon1 from "../public/images/icon1.png";
import icon2 from "../public/images/icon2.png";
import icon3 from "../public/images/icon3.png";
import icon4 from "../public/images/icon4.png";
import icon5 from "../public/images/icon5.png";
import icon6 from "../public/images/icon6.png";

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
