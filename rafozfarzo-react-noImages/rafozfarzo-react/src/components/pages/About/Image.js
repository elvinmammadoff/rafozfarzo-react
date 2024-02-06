import React from "react";
import {Col} from "react-bootstrap";

const Image = ({ data }) => {
    return (
        <Col className="col-sm-12 col-md-6">
            <div className="image-line image-line-vertical">
                <div className="image-line-extra">
                    <img src={process.env.PUBLIC_URL + data.img} className="img-fluid image-line-image" alt="About" />
                </div>
            </div>
        </Col>
    )
}

export default Image;