import React from "react";
import {
    FaMobileAlt,
    FaRegEnvelope,
    FaRegMap
} from "react-icons/fa";

const ContactDetails = ({ data }) => {
    return (
        <div className="Contact-info">
            <div className="container">
                <div className="Contact-info-wrap row">
                    <div className="col-sm-12 col-md-4">
                        <div className="Contact-info-item">
                                <span className="Contact-info-icon rounded-circle">
                                    <FaMobileAlt />
                                </span>
                            <span className="Contact-info-text">{data.phone}</span>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="Contact-info-item">
                            <a href={process.env.PUBLIC_URL + "/#/contact"} title={data.email}
                               className="Contact-info-icon rounded-circle">
                                <FaRegEnvelope />
                            </a>
                            <a href={process.env.PUBLIC_URL + "/#/contact"} title={data.email}
                               className="Contact-info-text">{data.email}</a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="Contact-info-item">
                            <a href={process.env.PUBLIC_URL + "/#/contact"} title={data.address}
                               className="Contact-info-icon Contact-info-map rounded-circle">
                                <FaRegMap />
                            </a>
                            <span className="Contact-info-text">{data.address}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails;