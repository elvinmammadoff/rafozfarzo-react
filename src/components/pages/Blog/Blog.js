import React from "react";
import Breadcrumbs from "../../breadcrumbs/Breadcrumbs";
import BlogCard from "./BlogCard";
import PaginationComp from "./PaginationComp";

const Blog = () => {
    return (
        <>
            <Breadcrumbs title="Blog" />
            <BlogCard />
            <PaginationComp />
        </>
    )
}

export default Blog;