import React from "react";
import BlogBannerSection from "../../component/blogBanner/BlogBannerSection";
import BlogCardSection from "../../component/blogCardSection/BlogCardSection";
import { blogBanner } from "../../utils/imports";

const Blog = () => {
  return (
    <>
      <BlogBannerSection bannerImg={blogBanner} />
      <BlogCardSection />
    </>
  );
};

export default Blog;
