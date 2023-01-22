import Hero from '../../components/Hero'
import About from '../../components/About'
import Works from '../../components/Works'
import Services from '../../components/Services'
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";


const query = groq`
  *[_type=='project'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;




export default async function HomePage(){
  const projects = await client.fetch(query)

  
  return (
    <div className='overflow-x-hidden'>
    <Hero/>
    <About/>
    <Works projects={projects.slice(0,3)}/>
    <Services/>
    </div>
  )
}

