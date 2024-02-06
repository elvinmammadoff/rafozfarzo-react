import React from "react";

const ContactForm = ({ data }) => {
    return (
        <div className="container">
            <div className="Contact-form">
                <form className="Form d-flex justify-content-between flex-wrap" autoComplete="off">
                    <div className="Form-group">
                        <label htmlFor="name" className="Form-label">{data.input1}</label>
                        <input type="text" className="Form-input" id="name" spellCheck="false" autoCapitalize="off"
                               required />
                    </div>
                    <div className="Form-group">
                        <label htmlFor="email" className="Form-label">{data.input2}</label>
                        <input type="email" className="Form-input" id="email" spellCheck="false"
                               autoCapitalize="off"
                               required />
                    </div>
                    <div className="Form-group">
                        <label htmlFor="subject" className="Form-label">{data.input3}</label>
                        <input type="text" className="Form-input" id="subject" spellCheck="false"
                               autoCapitalize="off"
                               required />
                    </div>
                    <div className="Form-group">
                        <label htmlFor="message" className="Form-label">{data.input4}</label>
                        <textarea
                            rows="5"
                            id="message"
                            className="Form-input Form-input--textarea"
                            spellCheck="false"
                            autoCapitalize="off"
                            defaultValue="Type your message here"
                            readOnly={false}
                            required
                        />
                    </div>
                    <button className="btn btn-primary btn-block button button--orange">{data.submit}</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;