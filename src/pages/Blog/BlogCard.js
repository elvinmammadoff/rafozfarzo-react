import React from "react";
import { blogCard } from "../../data/data";

const BlogCard = () => {
    return (
        <section className="Blog">
            <div className="container">
                <div className="Blog-wrap">
                    {blogCard.map((item, index) =>
                        <div className="Blog-item" key={index}>
                            <div className="Blog-header">
                                <a href={process.env.PUBLIC_URL + "/#/blog-single"} title={item.title} className="link-out"> </a>
                                <img src={process.env.PUBLIC_URL + item.image} alt={item.title}
                                     className="Blog-img img-fluid img100" />
                            </div>
                            <div className="Blog-body">
                                <div className="content-details">
                                    <h3 className="content-title">
                                        <a href={process.env.PUBLIC_URL + "/#/blog-single"} title={item.title}>{item.title}</a>
                                    </h3>
                                    <div className="content-description">{item.date} / Posted {item.author}</div>
                                    <p className="content-text">{item.text}</p>
                                </div>
                                <div className="Blog-footer d-flex justify-content-end">
                                    <a href={process.env.PUBLIC_URL + "/#/blog-single"} title="Read More" className="Blog-more">Read More</a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default BlogCard;