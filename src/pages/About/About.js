import React from "react";
import {Container, Row} from "react-bootstrap";
import Content from "./Content";
import Image from "./Image";
import { aboutDetails } from "../../data/data";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

const About = () => {
    return (
        <>
            <Breadcrumbs title="About" />
            <div className="About">
                <Container>
                    <div className="About-details">
                        <Row className="content-row">
                            <Image data={aboutDetails} />
                            <Content data={aboutDetails} />
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default About;