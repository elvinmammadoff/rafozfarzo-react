import React from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import ContactDetails from "./ContactDetails";
import ContactMap from "./ContactMap";
import ContactForm from "./ContactForm";
import { contact } from "../../data/data";

const Contact = () => {
    return (
        <>
            <Breadcrumbs title="Contact" />
            <ContactDetails data={contact} />
            <div className="Contact-methods">
                <ContactMap />
                <ContactForm data={contact} />
            </div>
        </>
    )
}

export default Contact;