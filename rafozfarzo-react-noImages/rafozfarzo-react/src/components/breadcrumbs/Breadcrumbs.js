import React from "react";
import {Container} from "react-bootstrap";

const Breadcrumbs = ({ title }) => {
    return (
        <section
            className="Cover d-flex align-items-center"
            style={{backgroundImage: `url(${process.env.PUBLIC_URL + 'https://placehold.co/1350x250'})`}}
        >
            <Container>
                <div className="Cover-content">
                    <h2 className="Cover-title">{title}</h2>
                </div>
            </Container>
        </section>
    )
}

export default Breadcrumbs;