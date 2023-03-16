import { Button, Dropdown } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo-light.png";
import "./styles.scss";
import {
  AppDeveloment,
  Arrow,
  DigitalMarketing,
  ECommerce,
  WebDeveloment,
} from "../../icons/Icons";
import { ContactUs_Screen } from "../../route/Routes";
const HeaderComponent = () => {
  const services = [
    "Web Develoment",
    "App Develoment",
    "Digital Marketing",
    "E-Commerce",
  ];
  const servicesIcon = [
    <WebDeveloment />,
    <AppDeveloment />,
    <DigitalMarketing />,
    <ECommerce />,
  ];
  const items = services.map((res, index) => {
    return {
      key: index + 1,

      label: <Link>{res}</Link>,
      icon: servicesIcon[index],
    };
  });

  return (
    <>
      <div className="header-container">
        <div className="logo-col">
          <img src={logo} alt="" />
        </div>
        <div className="menu-col">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottomRight"
              >
                <li
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  Services <Arrow />
                </li>
              </Dropdown>
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
