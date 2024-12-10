import React from "react";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white px-4">
      {/* Main Container */}
      <div className="max-w-6xl w-full h-auto flex flex-col items-center gap-16 py-16">
        {/* Header Section */}
        <div className="w-full max-w-xl text-center flex flex-col gap-4">
          <h5 className="text-sm font-bold text-[#252B42]">Practice Advice</h5>
          <h2 className="text-3xl font-bold text-[#252B42]">Featured Posts</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
        </div>

        {/* Blog Cards Section */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Card 1 */}
          <div className="w-full flex flex-col gap-4">
            {/* Image */}
            <div className="relative w-full h-[200px]">
              <Image
                src="/1 (2).png" // Replace with your image path
                alt="Blog Post 1"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            {/* Content */}
            <h3 className="text-lg font-bold text-[#252B42]">
              Blog Post Title 1
            </h3>
            <p className="text-gray-600 text-sm">
              Short description or preview of the blog post content goes here.
            </p>
          </div>

          {/* Blog Card 2 */}
          <div className="w-full flex flex-col gap-4">
            {/* Image */}
            <div className="relative w-full h-[200px]">
              <Image
                src="/2 (2).png" // Replace with your image path
                alt="Blog Post 2"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            {/* Content */}
            <h3 className="text-lg font-bold text-[#252B42]">
              Blog Post Title 2
            </h3>
            <p className="text-gray-600 text-sm">
              Short description or preview of the blog post content goes here.
            </p>
          </div>

          {/* Blog Card 3 */}
          <div className="w-full flex flex-col gap-4">
            {/* Image */}
            <div className="relative w-full h-[200px]">
              <Image
                src="/3 (2).png" // Replace with your image path
                alt="Blog Post 3"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            {/* Content */}
            <h3 className="text-lg font-bold text-[#252B42]">
              Blog Post Title 3
            </h3>
            <p className="text-gray-600 text-sm">
              Short description or preview of the blog post content goes here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
