import React from "react";

const Comment = ({ data }) => {
    return (
        <div className="Blog-comment">
            <div className="container">
                <h3 className="title--mini">Leave a Comment</h3>
                <form className="Form" autoComplete="off">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="Form-group">
                                <label htmlFor="name" className="Form-label">{data.input1}</label>
                                <input type="text" className="Form-input" id="name" spellCheck="false"
                                       autoCapitalize="off"
                                       required />
                            </div>
                            <div className="Form-group">
                                <label htmlFor="email" className="Form-label">{data.input2}</label>
                                <input type="email" className="Form-input" id="email" spellCheck="false"
                                       autoCapitalize="off" required />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="Form-group">
                                <label htmlFor="message" className="Form-label">{data.input3}</label>
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
                            <div className="d-flex justify-content-end">
                                <button type="submit" className="btn btn-primary button button--orange">
                                    {data.submit}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Comment;