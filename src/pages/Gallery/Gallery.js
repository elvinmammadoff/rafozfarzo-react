import React from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import Filter from "./Filter";

const Gallery = () => {
    return (
        <>
            <Breadcrumbs title="Gallery" />
            <Filter />
        </>
    )
}

export default Gallery;