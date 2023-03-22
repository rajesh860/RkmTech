import React from "react";
import "./styles.scss";
const BlogBannerSection = ({ bannerImg }) => {
  return (
    <>
      <div
        className="blog-banner-container"
        style={{ backgroundImage: `url(${bannerImg})` }}
      ></div>
    </>
  );
};

export default BlogBannerSection;
