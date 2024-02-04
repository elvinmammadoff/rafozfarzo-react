import React from "react";
import Navbar from "react-bootstrap/Navbar";

const Logo = ({ logo }) => {
    return (
        <Navbar.Brand href={process.env.PUBLIC_URL + "/"} className="d-flex">
            <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
    )
}

export default Logo;