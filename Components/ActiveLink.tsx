import { useRouter } from "next/router";

function ActiveLink({ children, href, setToggle }: any) {
  const router = useRouter();
  const style = {
    // marginRight: 0,
    textDecoration: "none",
    color: "white",

    borderBottom: router.asPath === href ? "2.32181px solid white" : "",
    // backgroundColor:
    //   router.asPath === href ? "rgba(255, 255, 255, 0.109)" : "transparent",
    // borderRadius: "50%",
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href);
  };
//   const handleClose = (e: any) => {
//     setToggle(false);
//   };
  return (
    <a href={href} onClick={(handleClick)} style={style}>
      {children}
    </a>
  );
}

export default ActiveLink;
