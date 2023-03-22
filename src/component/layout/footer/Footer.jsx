import React from "react";
import { sitelogo } from "../../../utils/imports";
import "./styles.scss";
const FooterComponent = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-col">
          <div className="footer-left-col">
            <img src={sitelogo} alt="" className="footer-logo" />
          </div>
          <div className="footer-right-col">
            <ul>
              <li>Clients</li>
              <li>Tech Stack</li>
              <li>Our Team</li>
              <li>Contact Us</li>
              <li>Grid Design</li>
            </ul>
            <ul>
              <li>Open Source</li>
              <li>Blog</li>
              <li>Carreers</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
            <ul>
              <li className="follow-us">Follow Us</li>
              <li>Youtube</li>
              <li>Linkedin</li>
              <li>Facebbok</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
            <ul>
              <li className="contact-us">Contact Us</li>
              <li>Call (+91)786543897543 </li>
              <li>rr45678.gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterComponent;
