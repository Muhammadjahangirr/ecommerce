import React from "react";
import { ReactNavbar } from "overlay-navbar";
import {} from "react-icons";
import logo from "../../../assets/logo/logo.png";
import profileImg from "../../../assets/images/profileImg.png";

const Header = () => {
  const options = {
    burgerColor: "#eb4034",
    burgerColorHover: "#a62d24",
    logo,
    logoWidth: "20vmax",
    navColor1: "white",
    logoHoverSize: "10px",
    logoHoverColor: "#eb4034",
    link1Text: "Home",
    link2Text: "Product",
    link3Text: "Contact",
    link4Text: "About",
    link1Url: "/",
    link2Url: "/products",
    link3Url: "/contact",
    link4Url: "/about",
    link1Size: "1.3vmax",
    link1Color: "rgba(35,35,35,0.8)",
    link2Color: "rgba(35,35,35,0.8)",
    link3Color: "rgba(35,35,35,0.8)",
    link4Color: "rgba(35,35,35,0.8)",
    nav1JustifContent: "flex-end",
    nav2JustifContent: "flex-end",
    nav3JustifContent: "flex-Start",
    nav4JustifContent: "flex-Start",
    link1ColorHover: "#eb4034",
    link1Margin: "1vmax",
    link3Margin: "0",
    link4Margin: "1vmax",
    // searchIcon: true,
    // SearchIconElement: { profileImg },
    // searchIconMargin: "0",
    // searchIconUrl: "/Search",
    // searchIconSize: "2vmax",
    // searchIconColor: "white",
    // searchIconColorHover: "#eb4034",
    searchIconTransition: 0.5,
    searchIconAnimationTime: 2,
    profileIconColor: "#eb4034",
    profileIconColor: "rgba(35,35,35,0.8)",
    searchIconColor: "rgba(35,35,35,0.8)",
    cartIconColor: "rgba(35,35,35,0.8)",
    profileIconColorHover: "#eb4034",
    searchIconColorHover: "#eb4034",
    cartIconColorHover: "#eb4034",
  };

  return <ReactNavbar {...options} />;
};

export default Header;
