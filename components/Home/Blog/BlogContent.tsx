import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import BlogCard from "./BlogCard";
import { blogs } from "@/data/data";

const BlogContent = () => {
  return <div className="pt-6 pb-6 mb-6">
     <div className="w-[80%] mx-auto ">
        <SectionHeading heading="Blog" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-16 gap-6 items-center">
          {blogs.map((blog, i) => {
            return (
              <div
                key={blog.id}
                data-aos="zoom-out"
                data-aos-delay={`$${i * 150}`}
                data-aos-anchor-placement="top-center"
              >
                <BlogCard blog={blog} />
              </div>
            );
          })}
        </div>
     </div>
  </div>;
};

export default BlogContent;
