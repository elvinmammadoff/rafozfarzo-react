import React from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import BlogDetails from "./BlogDetails";
import Comment from "./Comment";
import { blogSingle } from "../../data/data";

const BlogSingle = () => {
    return (
        <>
            <Breadcrumbs title="Blog Single" />
            <BlogDetails data={blogSingle} />
            <Comment data={blogSingle} />
        </>
    )
}

export default BlogSingle;