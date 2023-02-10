

import Hero from '../../components/Hero'
import About from '../../components/About'
import Works from '../../components/Works'
import Services from '../../components/Services'
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewBlogList from '../../components/PreviewBlogList';
import PreviewSuspense from '../../components/PreviewSuspense';
import {previewData} from 'next/headers'
// import { NextSeo } from 'next-seo';

const query = groq`
  *[_type=='project'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;



export const revalidate = 360

export default async function HomePage(){

  if(previewData()) {
    return (
      <PreviewSuspense fallback={(
        <div role="status">
          <p className="text-center text-xl animate-pulse text-[#F7AB0A]">
            Loading Preview...
          </p>
        </div>
      )}>
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    )
  }



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

