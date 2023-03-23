import { Button, Drawer } from "antd";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ContactUs_Screen } from "../../../route/Routes";
import { link } from "./SiderData";
import "./styles.scss";

const Sider = ({ open, onClose }) => {
  return (
    <Drawer
      title=" "
      placement="left"
      closable={false}
      onClose={onClose}
      open={open}
      className="drawer"
      width={250}
      key={"placement"}
    >
      <div className="sider-menu-col">
        <ul>
          {link?.map((linkRes, index) => {
            if (index === 4) {
              return (
                <>
                  <hr />
                  <li className="services" key={linkRes.name + index}>
                    <NavLink>{linkRes.name}</NavLink>
                  </li>
                  <hr />
                </>
              );
            } else
              return (
                <NavLink
                  to={linkRes.link}
                  key={index + linkRes.name + linkRes.link}
                  onClick={onClose}
                >
                  <li>{linkRes.name}</li>
                </NavLink>
              );
          })}
        </ul>

        <Button>
          <Link to={ContactUs_Screen} onClick={onClose}>
            Contact Us
          </Link>
        </Button>
      </div>
    </Drawer>
  );
};

export default Sider;
