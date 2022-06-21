import React, { Component } from "react";
import "../signUp/bg.jpg";
import "../signUp/signup.css";
class SignUp extends React.Component {
    render() {
        return (
            <div>
                <div className="contact-section">
                    <h1 style={{ marginTop: 40 }}></h1>
                    <div className="border"></div>
                    <form className="contact-form-signup" action="" method="">
                        <input
                            type="text"
                            id="contact-form-textt"
                            placeholder=" Your Name"
                        />
                        <input
                            type="email"
                            className="contact-form-text"
                            placeholder="National_ID"
                        />
                        <input
                            type="password"
                            className="contact-form-text"
                            placeholder="password"
                        />

                        <input
                            type="text"
                            id="contact-form-phone"
                            placeholder=" phone"
                        />
                        <textarea
                            className="contact-form-text"
                            placeholder="Your message"></textarea>
                        <input
                            className="contact-form-btn"
                            type="submit"
                            name=""
                            value="ADD"
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;
