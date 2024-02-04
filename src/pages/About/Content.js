import React from "react";
import {Col} from "react-bootstrap";
import Progress from "./Progress";

const Content = ({ data }) => {
    return (
        <Col className="col-sm-12 col-md-6 content-padd">
            <div className="content-margin">
                <div className="content-details">
                    <h3 className="content-title">
                        <a href="#/blog-single" title={data.title}>{data.title}</a>
                    </h3>
                    <div className="content-description">{data.date} / Posted {data.author}</div>
                    <p className="content-text">{data.paragraph}</p>
                </div>
                <Progress />
            </div>
        </Col>
    )
}

export default Content;