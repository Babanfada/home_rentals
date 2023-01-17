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

export const location:location = {
  address: "1600 Amphitheatre Parkway, Mountain View, california.",
  lat: 37.44,
  lng: -122.08,
};
