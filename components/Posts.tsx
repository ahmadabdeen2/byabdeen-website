"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/assets/logo.svg";

import { useEffect, useState, useRef, useCallback } from "react";
import BlogComponent from "./BlogComponent";
import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";
import { Post } from "../typings";

interface PostsProps {
  categories: any;
}

const Posts: React.FC<PostsProps> = ({ categories }) => {
  const query = groq`
    *[_type=='tool']{
      ...,
      author->,
      toolCategories[]->,
    } | order(_createdAt desc)[$offset...$limit]
    `;

  const queryPostsWithSelectedCategories = groq`
    *[_type=='tool' && references($selectedCategories)]{
      ...,
      author->,
      toolCategories[]->,
    } | order(_createdAt desc)[$offset...$limit]
    `;
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<any>([]);
  const [page, setPage] = useState<any>(0);
  const observer = useRef<IntersectionObserver>();

  const lastPostElementRef = useCallback((node: any) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage: any) => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  const limit = 10; // Number of posts per page

  useEffect(() => {
    console.log("called")
    const fetchPosts = async () => {
      const offset = page * limit;
      const queryToUse =
        selectedCategories.length > 0
          ? queryPostsWithSelectedCategories
          : query;
      const newPosts = await client.fetch(queryToUse, {
        selectedCategories,
        offset,
        limit,
      });
      if (page === 0) {
        setPosts(newPosts);
      } else {
        setPosts((prevPosts: any) =>
          Array.from(new Set([...prevPosts, ...newPosts]))
        );
      }
    };
    fetchPosts();
  }, [selectedCategories, page]);

  return (
    <>
      <div className="flex flex-row gap-8 flex-wrap items-start justify-start mt-2 md:mt-10">
        {categories?.map((category: any) => (
          <div className="flex flex-row items-center justify-center">
            <input
              onChange={(e) => {
                if (
                  e.target.checked &&
                  !selectedCategories.includes(category._id)
                ) {
                  setSelectedCategories([...selectedCategories, category._id]);
                  console.log(selectedCategories);
                } else {
                  setSelectedCategories(
                    selectedCategories.filter(
                      (item: any) => item !== category._id
                    )
                  );
                }
                setPage(0); // Reset page to 0 whenever categories change
                setPosts([]); // Clear existing posts
              }}
              type="checkbox"
              className="mr-2 h-4 w-4 bg-none relative appearance-none border-[0.5px] border-gray-400 outline-none cursor-pointer transition-all hover:border-gray-100 checked:bg-primary checked:border-primary checked:rounded-lg "
            />
            <Link
              href="/"
              key={category._id}
              className="text-secondary font-random font-medium text-md md:text-xl"
            >
              {category.title}
            </Link>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 mt-10 gap-10">
        {posts.map((post: any, index: any) => (
          <div ref={posts.length === index + 1 ? lastPostElementRef : null}>
            <BlogComponent
              post={post}
              index={index + 1}
              key={post._id}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
