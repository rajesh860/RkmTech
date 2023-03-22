import React from "react";
import "./styles.scss";
import { cyber } from "../../../utils/imports";
import ButtonComponent from "../../button/Button";
import { BsPlus } from "react-icons/bs";
const BlogCard = () => {
  return (
    <>
      <div className="blog-card">
        <div
          className="img-col-top"
          style={{ backgroundImage: `url(${cyber})` }}
        ></div>
        <div className="card-detail-bottom">
          <h3>Cyber Security</h3>
          <p>
            The survey reveals a massive shift toward remote and homebased work
            environments due to the COVID-19 pandemic. While a majority of 63%
            of organizations had up to a quarter of employees working in
            remote/at home environments before the crisis, a whopping three
            quarters of the same organizations repor...
          </p>
          <ButtonComponent btn="View All" icon={<BsPlus />} />
        </div>
      </div>
    </>
  );
};

export default BlogCard;
