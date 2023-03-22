import React from "react";
import BlogBannerSection from "../../component/blogBanner/BlogBannerSection";
import BlogDetailComponent from "../../component/blogDetailSection/BlogDetailComponent";
import GetInTouch from "../../component/getInTouchForm/GetInTouch";
// import BlogDetailBanner from "../../component/blogDetailBannerSection/BlogDetailBanner";
import { blogBanner } from "../../utils/imports";

const BlogDetail = () => {
  return (
    <div>
      <BlogBannerSection bannerImg={blogBanner} />
      <BlogDetailComponent />
      <GetInTouch />
    </div>
  );
};

export default BlogDetail;
