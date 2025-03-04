import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Blog | Latest Property Trends & Tips",
  description: "Stay updated with the latest real estate trends, property investment tips, and home buying guides.",
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Blog"
        description="Explore expert insights, market trends, and property investment tips to make informed real estate decisions."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {blogData.map((blog, index) => (
              <div key={`${blog.id}-${index}`}>
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
