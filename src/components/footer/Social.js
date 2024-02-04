import React from "react";
import {FaFacebookSquare, FaFlickr, FaGooglePlusG, FaInstagram, FaPinterestP} from "react-icons/fa";

const Social = () => {
    return (
        <div className="social social--white">
            <a
                href="https://facebook.com/"
                title="Facebook"
                className="social-item"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaFacebookSquare />
            </a>
            <a
                href="https://googleplus.com/"
                title="Google-plus"
                className="social-item"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaGooglePlusG />
            </a>
            <a
                href="https://flickr.com/"
                title="Flickr"
                className="social-item"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaFlickr />
            </a>
            <a
                href="https://instagram.com/"
                title="Instagram"
                className="social-item"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaInstagram />
            </a>
            <a
                href="https://pinterest.com/"
                title="Pinterest"
                className="social-item"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaPinterestP />
            </a>
        </div>
    )
}

export default Social;