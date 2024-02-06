import React from "react";
import Social from "./Social";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p className="copyright copyright-white">© 2024 All rights reserved. Theme by Alissio</p>
                    <Social />
                </div>
            </div>
        </footer>
    )
}

export default Footer;