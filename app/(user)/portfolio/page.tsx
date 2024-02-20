
import ProjectComponent from '../../../components/ProjectComponent';
import CustomButton from '../../../components/CustomButton';
import Link from 'next/link'
import { Project, Slug } from '../../../typings';
import { groq } from 'next-sanity'
import { client } from '../../../lib/sanity.client'
import HeadText from '../../../components/HeadText';

const query = groq`
*[_type=='project']{
  ...,
  author->,
  categories[]->,
} | order(_createdAt desc)



`

export const metadata = {
  title: 'Portfolio',
  description: "A collection of projects that I've worked on.",
}


const Portfolio = async () => {
  const projects: Project[] = await client.fetch(query)
  
  return (
    <div className="bg-background px-4 md:px-16 font-random w-full overflow-x-hidden">
    <div className="border-x-[1px] border-secondary px-5 xs:px-10 py-4">
      <div className='flex flex-col items-start justify-start mt-2 md:mt-10'>
    <HeadText text="Portfolio." />
      {projects?.map((project, index) => (
        <ProjectComponent project={project} flipped = {`${index % 2 !== 0 ? 'true': 'false'}`} index={index} key={project._id} />
      ))}
       <Link href='/' className="flex w-full items-center justify-end mt-32 relative before:block before:w-[90%] before:bg-secondary before:h-[1px] ">
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



export default Portfolio;
