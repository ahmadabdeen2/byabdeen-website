"use client";
import { urlFor } from "../lib/urlFor";
import { Post } from "../typings";
import { motion } from "framer-motion";
import Image from "next/image";
import CustomButton from "./CustomButton";
import Link from "next/link";

type Props = {
  post: Post;
  index: number;
};

const BlogComponent = ({ post, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-start"
    >
      <Link href={`/tools/${post.slug.current}`}>
        <div className="flex justify-center items-center mt-4 w-full">
          {post.mainImage && (
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              width={1000}
              height={1000}
              className="hover:brightness-75 transition ease-out duration-300"
            />
          )}
        </div>
        <div className="flex justify-between w-full items-center mt-4">
          <div className="flex justify-center items-center ">
            <p className="text-secondary text-[3vw] xs:text-[2vw]  font-random font-semibold">
              {" "}
              {index > 10 ? "" : "0"}
              {index}.{" "}
            </p>
            <h3 className="text-secondary text-[3vw] xs:text-[2vw] font-random font-semibold ml-2">
              {" "}
              {post?.title}{" "}
            </h3>
          </div>
          <CustomButton
            backgroundColor="bg-secondary"
            arrowColor="dark"
            size="w-[4vw] h-[4vw] xs:w-[3vw] xs:h-[3vw] md:w-[2.5vw] md:h-[2.5vw]"
            rotate={`rotate-0`}
            arrowSize="w-[1.5vw] xs:w-[1vw] md:w-[0.8vw]"
            cursor="cursor-pointer"
          />
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogComponent;
