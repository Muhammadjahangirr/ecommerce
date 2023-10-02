import React from "react";
import Appstore from "../../../assets/images/Appstore.png";
import playstore from "../../../assets/images/playstore.png";

import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Download Our App</h4>
        <p>Download app for Android and IOS mobile phone</p>
        <img src={playstore} alt="PlayStore" />
        <img src={Appstore} alt="AppStore" />
      </div>

      <div className="midFooter">
        <h1>Soft Wise Solutions</h1>
        <p>High Quanlity is our first priority</p>

        <p>CopyRight &copy; Muhammad Jahangir</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us:</h4>
        <a href="https://instagram.com">Instagram</a>
        <a href="https://facebook.com">Facebook</a>
        <a href="https://youtube .com">Youtube</a>
      </div>
    </footer>
  );
};

export default Footer;
