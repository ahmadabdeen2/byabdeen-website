
import CustomButton from "../../../components/CustomButton";
import Link from "next/link";
import { Post } from "../../../typings";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import HeadText from "../../../components/HeadText";
import BlogComponent from "../../../components/BlogComponent";
import Posts from "../../../components/Posts";


export const metadata = {
  title: 'AI Tools',
  description: "A collection of AI tools that I've found useful.",
}

const query = groq`
*[_type=='tool']{
  ...,
  author->,
  categories[]->,
} | order(_createdAt desc)
`;

const categoriesQuery = groq`
*[_type=='toolCategory']
`;



export const revalidate = 360;



const Tools = async () => {
  const posts: Post[] = await client.fetch(query);
  const categories = await client.fetch(categoriesQuery);

  return (
    <div className="bg-background px-4 md:px-16 font-random w-full overflow-x-hidden">
      <div className="border-x-[1px] border-secondary px-5 xs:px-10 py-4">
        <div className="flex flex-col items-start justify-start mt-2 md:mt-10">
          <HeadText text="AI Tools." />
          <Posts categories={categories}/>
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

export default Tools;
