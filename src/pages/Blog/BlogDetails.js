import React from "react";
import { FaTags, FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";

const BlogDetails = ({ data }) => {
    return (
        <section className="Blog-details">
            <div className="container">
                <div className="content-row row">
                    <div className="col-sm-12 col-md-6">
                        <div className="image-line image-line">
                            <div className="image-line-extra">
                                <img src={process.env.PUBLIC_URL + data.image} className="img-fluid image-line-image"
                                     alt="Blog" />
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-sm-12 col-md-6 content-padd d-flex flex-wrap flex-column justify-content-between">
                        <div className="content-margin">
                            <div className="content-details">
                                <h3 className="content-title">
                                    <a href={process.env.PUBLIC_URL + "/#/blog-single"} title={data.title}>{data.title}</a>
                                </h3>
                                <div className="content-description">{data.date} / Posted {data.author}</div>
                                <p className="content-text">{data.text}</p>
                            </div>
                        </div>
                        <div className="Blog-details-footer">
                            <div className="Blog-details-category">
                                <div className="Blog-details-category-icon">
                                    <FaTags />
                                </div>
                                <div className="Blog-details-tag">
                                    {data.tags.map((item, index) => {
                                        return <a href={process.env.PUBLIC_URL + "/#/blog-single"} title={item} key={index}>{item}</a>
                                    })}
                                </div>
                            </div>
                            <div className="social social--blue">
                                <a href={process.env.PUBLIC_URL + "/#/blog-single"} title="Facebook" className="social-item">
                                    <FaFacebookF />
                                </a>
                                <a href={process.env.PUBLIC_URL + "/#/blog-single"} title="Twitter" className="social-item">
                                    <FaTwitter />
                                </a>
                                <a href={process.env.PUBLIC_URL + "/#/blog-single"} title="Pinterest" className="social-item">
                                    <FaPinterestP />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogDetails;