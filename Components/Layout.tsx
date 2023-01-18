import React from "react";
import { JsxChild, JsxElement } from "typescript";
import Navbar from "./Navbar";
export const dataContext = React.createContext<any>(null);
interface LayoutProps {}

const Layout: React.FC<any> = ({ children }) => {
  const [toggle, setToggle] = React.useState<boolean>(false);
  const [background, setbackground] = React.useState<boolean>(false);
  const handleToggle = () => {
    setToggle((prev) => !prev);
    // console.log(toggle)
  };
  const changebackground = () => {
    window.scrollY >= 1 ? setbackground(true) : setbackground(false);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", changebackground);
  }, []);

  return (
    <dataContext.Provider
      value={{
        toggle,
        setToggle,
        handleToggle,
        background,
      }}
    >
      <div>
        {/* <Navbar /> */}
        <div>{children}</div>
      </div>
    </dataContext.Provider>
  );
};

export default Layout;
