import React from "react";
import { JsxChild, JsxElement } from "typescript";
import Navbar from "./Navbar";
export const dataContext = React.createContext<any>(null);
interface LayoutProps {}

const Layout: React.FC<any> = ({ children }) => {
  const [toggle, setToggle] = React.useState<boolean>(false);
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <dataContext.Provider value={{ toggle, setToggle, handleToggle }}>
      <div>
        {/* <Navbar /> */}
        <div>{children}</div>
      </div>
    </dataContext.Provider>
  );
};

export default Layout;
