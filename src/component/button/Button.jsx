import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Blog_Detail_Screen } from "../../route/Routes";
import "./style.scss";
const ButtonComponent = ({ btn, icon }) => {
  return (
    <Link to={Blog_Detail_Screen}>
      <Button className="btn-ele">
        {btn}
        {icon}
      </Button>
    </Link>
  );
};

export default ButtonComponent;
