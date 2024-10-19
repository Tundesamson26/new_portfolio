import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { CiRead } from "react-icons/ci";

const blogs = [
  {
    name: "How to build a PDF invoice generator in minutes",
    description:
      "This tutorial showcase the Appwrite Generate PDF Function template, show you how to set it up, and guide you through the swift and straightforward process of building a PDF invoice generator in just a few minutes.",
    image: "/pdf.png",
    github: "https://dev.to/bigsam28",
    link: "https://dev.to/hackmamba/how-to-build-a-pdf-invoice-generator-in-minutes-49fh",
  },
  {
    name: "Create Your Own DAO With Thirdweb",
    description:
      "The article give better understanding on what DAO is, why you should create a DAO, and how you can create a DAO with Thirdweb..",
    image: "/dao.png",
    github: "https://hashnode.com/@Tundesamson29",
    link: "https://hashnode.com/post/cl88u0zcl02cbv6nvhkqc1iq9",
  },
  {
    name: "How to build your own LinkedIn Profile Scraper",
    description:
      "This article will show you how you can harness the power of web scraping to pull data from LinkedIn job listings.",
    image: "/linkedin.jpeg",
    github: "https://hashnode.com/@Tundesamson29",
    link: "https://hashnode.com/post/clctr4vqi000108js8btp7ndq",
  },
];

const BlogSection = () => {
  return (
    <section id="blogs" className="py-8 md:py-20">
      <h1 className="my-10 text-center font-bold text-4xl">
        Blogs
        <hr className="w-6 h-1 mx-auto my-4 bg-purple-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {blogs.map((blog, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{blog.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {blog.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={blog.github} target="_blank">
                        <CiRead
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={blog.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>

                  <div className=" md:w-1/2">
                    <Link href={blog.link}>
                      <Image
                        src={blog.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center mt-8">
        <Link
          href="https://linktr.ee/bigsam_dev"
          target="_blank"
          className="border-2 py-2 px-4 rounded-full"
        >
          See more
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;
