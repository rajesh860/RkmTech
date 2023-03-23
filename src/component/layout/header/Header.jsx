import { Button, Dropdown } from "antd";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  MdKeyboardArrowDown,
  MdOutlineSell,
  MdOutlineWebAsset,
} from "react-icons/md";
import { SiGooglemarketingplatform } from "react-icons/si";
import { GrAppleAppStore } from "react-icons/gr";
import { sitelogo } from "../../../utils/imports";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import "./styles.scss";

import {
  AboutUs_Screen,
  Blog_Screen,
  ContactUs_Screen,
  Home_Screen,
  Tech_Screen,
} from "../../../route/Routes";
import Sider from "../sider/Sider";

const HeaderComponent = () => {
  const services = [
    "Web Develoment",
    "App Develoment",
    "Digital Marketing",
    "E-Commerce",
  ];
  const servicesIcon = [
    <MdOutlineWebAsset />,
    <GrAppleAppStore />,
    <SiGooglemarketingplatform />,
    <MdOutlineSell />,
  ];

  const items = services.map((res, index) => {
    return {
      key: index + 1,

      label: <Link>{res}</Link>,
      icon: servicesIcon[index],
    };
  });
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen((o) => !o);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Sider open={open} onClose={onClose} />
      <div
        className="header-container"
        style={{ background: open ? "black" : "" }}
      >
        <div className="logo-col">
          <img src={sitelogo} alt="" />
        </div>
        <div className="hamburger">
          <Button type="ghost" onClick={showDrawer}>
            {open ? <RxCross2 /> : <RxHamburgerMenu />}
          </Button>
        </div>
        <div className="menu-col">
          <ul>
            <li>
              <NavLink to={Home_Screen}>Home</NavLink>
            </li>
            <li>
              <NavLink to={AboutUs_Screen}>About</NavLink>
            </li>
            <li>
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottom"
              >
                <li
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  Services
                  <MdKeyboardArrowDown />
                </li>
              </Dropdown>
            </li>
            <li>
              <NavLink to={Tech_Screen}>Tech Stack</NavLink>
            </li>
            <li>
              <NavLink to={Blog_Screen}>Blog</NavLink>
            </li>
            <Button>
              <Link to={ContactUs_Screen}>Contact Us</Link>
            </Button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
