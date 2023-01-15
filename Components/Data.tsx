export interface headProp {
  name: string;
  content: string;
}

export interface navlist {
  [index: number]: string;
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
