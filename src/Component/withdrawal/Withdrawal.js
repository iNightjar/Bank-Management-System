import React, { Component } from "react";
import logo from "../withdrawal/logo.png";
import "../withdrawal/Withdrawal.css";
class Withdrawal extends React.Component {
    render() {
        return (
            <div className="body-withdraw">
                <div className="all">
                    <div className="title">
                        <div className="title_name">
                            <p> Withdraw Form</p>
                        </div>
                        <div className="title_img">
                            <img src={logo} height="150px" width="200px" />
                        </div>
                    </div>

                    <div className="name">
                        <p> Account_Information</p>
                    </div>

                    <div className="contact">
                        <contact
                            name="register"
                            onsubmit="return test()"
                            action="withdraw.html"
                        />
                        <div className="row1">
                            <div className="fname">
                                <input
                                    type="text"
                                    name="first"
                                    placeholder="   first_name"
                                />
                            </div>
                            <div className="lname">
                                <input
                                    type="text"
                                    name="last"
                                    placeholder="   last_name"
                                />
                            </div>
                        </div>

                        <div className="row2">
                            <div className="Account_No">
                                <input
                                    type="text"
                                    name="acc"
                                    placeholder="  Account_No"
                                />
                            </div>
                            <div className="Pass">
                                <input
                                    type="password"
                                    name="pass"
                                    placeholder="  Enter password"
                                />
                            </div>
                        </div>

                        <div className="row3">
                            <div className="money">
                                <input
                                    list="money"
                                    placeholder="  chosse number of money"
                                />
                                <datalist id="money">
                                    <option>200 LE</option>
                                    <option>400 LE</option>
                                    <option>600 LE</option>
                                    <option>800 LE</option>
                                    <option>1000 LE</option>
                                </datalist>
                            </div>
                            <div className="money2">
                                <input
                                    type="number"
                                    name="num"
                                    placeholder="  Enter Number you need"
                                />
                            </div>
                        </div>

                        <div className="row4">
                            <center>
                                {" "}
                                <button> Submit</button>{" "}
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Withdrawal;
