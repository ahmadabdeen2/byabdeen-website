import CustomButton from "../../../components/CustomButton";
import Link from "next/link";
import { Post } from "../../../typings";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import HeadText from "../../../components/HeadText";
import BlogComponent from "../../../components/BlogComponent";

const query = groq`
*[_type=='post']{
  ...,
  author->,
  categories[]->,
} | order(_createdAt desc)
`;

export const revalidate = 360;



const Blog = async () => {
  const posts: Post[] = await client.fetch(query);

  return (
    <div className="bg-background px-4 md:px-16 font-random w-full overflow-x-hidden">
      <div className="border-x-[1px] border-secondary px-5 xs:px-10 py-4">
        <div className="flex flex-col items-start justify-start mt-2 md:mt-10">
          <HeadText text="Blog." />

          <div className="grid grid-cols-1 xs:grid-cols-2 mt-10 gap-10">
            {posts.map((post, index) => (
              <BlogComponent
                post={post}
                index={posts.length - index}
                key={post._id}
              />
            ))}
          </div>
          <Link
            href="/"
            className="flex w-full items-center justify-end mt-32 relative before:block before:w-[90%] before:bg-secondary before:h-[1px] "
          >
            <CustomButton
              backgroundColor="bg-secondary"
              arrowColor="dark"
              size="w-[12vw] h-[12vw]"
              rotate="rotate-0"
              arrowSize="w-[5vw]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
