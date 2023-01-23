"use client"

import { usePreview } from "../lib/sanity.preview";
import Works from "./Works";

type Props = {
    query: string;
};


export default function PreviewBlogList({query}: Props) {
    const projects = usePreview(null, query);
    return <Works projects={projects} />
}