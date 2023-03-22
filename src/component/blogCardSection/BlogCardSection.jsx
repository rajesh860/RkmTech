import React from "react";
import BlogCard from "../card/blogSectionCard/BlogCard";
import "./styles.scss";
const BlogCardSection = () => {
  return (
    <div className="blog-card-container">
      {[1, 2, 3, 4, 5, 6].map((res) => {
        return <BlogCard />;
      })}
    </div>
  );
};

export default BlogCardSection;
