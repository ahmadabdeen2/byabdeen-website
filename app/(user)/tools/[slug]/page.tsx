import { groq } from "next-sanity";
import Image from "next/image";
import { client } from "../../../../lib/sanity.client";
import { urlFor } from "../../../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichText } from "../../../../components/RichText";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 30;

export async function generateStaticParams() {
  const query = groq`*[_type=='tool']
    {
        slug
    }`;

  const slugs = await client.fetch(query);
  const slugRoutes = slugs.map(
    (slug: { slug: { current: any } }) => slug.slug.current
  );

  return slugRoutes.map((slug: any) => ({
    slug,
  }));
}

async function Post({ params: { slug } }: Props) {
  const query = groq`
    *[_type=='tool' && slug.current == $slug][0]
    {
        ...,
        author->,
        toolCategories[]->
    }
    `;

  const post = await client.fetch(query, { slug });

  return (
    <article className="bg-background px-4 md:px-16 font-random w-full">
      <div className="flex flex-col items-center justify-between border-x-[1px] border-secondary px-5 xs:px-10 py-4">
        <div className="flex flex-col  w-full  my-10">
          <div className="relative w-full ">
            {post?.mainImage && (
              <Image
                src={urlFor(post?.mainImage).url()}
                alt={post.author.name}
                width={1000}
                height={1000}
              />
            )}
          </div>
          <div className="flex flex-col items-start justify-between mt-5 min-h-[40%]">
            <h1 className="text-[4vw] text-secondary font-bold">
              {post?.title}
            </h1>
            <div className="flex items-center justify-between w-full">
              <p className="text-[3vw] xs:text-[1.6vw] md:text-[1.2vw] text-secondary font-semibold ">
                {post?.author?.name}
              </p>
              <p className="text-[3vw] xs:text-[1.6vw] md:text-[1.2vw] text-secondary font-semibold">
                {new Date(post?._createdAt).toLocaleDateString("en", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
            <div
              className="flex items-center justify-end mt-5
                    space-x-2"
            >
              {post?.toolCategories.map((category: any) => (
                <p
                  key={category?._id}
                  className="bg-secondary text-primary px-3
                             rounded-full text-[3vw] leading-[3vw] xs:text-[1.6vw] md:text-[1.2vw]  font-semibold mt-4
                            "
                >
                  {category?.title}
                </p>
              ))}
            </div>
          </div>
        </div>
        <PortableText value={post?.body} components={RichText} />
      </div>
    </article>
  );
}

export default Post;
