import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { navbar } from "../../data/data";
import Logo from "./Logo";

const Header = () => {
    const [expand, updateExpanded] = useState(false);
    const [mobDrop, setMobDrop] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }
    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColour ? "is-sticky" : ""}
        >
            <Container>
                <Logo logo={process.env.PUBLIC_URL + '/img/Logo.png'} />
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(!expand);
                    }}
                >
                    <div className="cd-nav-trigger burger-icon burger-icon--right">
                        <div className={`cd-nav__divider ${expand ? 'cd-nav__divider--top' : ''}`}> </div>
                        {expand ? '' : <div className="cd-nav__divider"> </div>}
                        <div className={`cd-nav__divider ${expand ? 'cd-nav__divider--bottom' : ''}`}> </div>
                    </div>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto menu" defaultActiveKey="#home">
                        {navbar.map((item, index) => {
                            return (
                                <Nav.Item className={`menu-item ${item.dropdown ? 'dropdown' : ''}`} key={index}>
                                    <Link
                                        to={item.link}
                                        className="menu-item-link p-3"
                                        onClick={() => {
                                            updateExpanded(false);
                                            setMobDrop(false)
                                        }}
                                    >
                                        {item.title}
                                        <span className="line-1"> </span>
                                        <span className="line-2"> </span>
                                        <span className="line-3"> </span>
                                        <span className="line-4"> </span>
                                    </Link>
                                    {item.dropdown ?
                                        <>
                                            {expand ? <span
                                                onClick={() => setMobDrop(!mobDrop)}
                                                className="dropdown-toggle"
                                                data-toggle="dropdown"
                                                role="button"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                                id="dropdownMenuButton">
                                            </span> : ''
                                            }
                                            <Nav className={`dropdown-menu${mobDrop ? ' show' : ''}`}>
                                                <Nav.Item className="dropdown-menu-item">
                                                    <Link
                                                        to={item.dropdown.link}
                                                        className="dropdown-menu-link"
                                                        onClick={() => updateExpanded(false)}
                                                    >
                                                        {item.dropdown.title}
                                                    </Link>
                                                </Nav.Item>
                                            </Nav>
                                        </> : ''
                                    }
                                </Nav.Item>
                            )
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;