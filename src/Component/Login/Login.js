import React, { Component } from "react";
import "../Login/Login.css";
class Login extends React.Component {
    render() {
        return (
            <div>
                <div className="login-body">
                    <form class="boxx">
                        <h1>ACCOUNT LOGIN</h1>
                        <input
                            type="text"
                            name=""
                            placeholder="Type Your Username"
                        />
                        <input
                            type="password"
                            name=""
                            placeholder="Type Your Password"
                        />
                        <input type="submit" name="" value="LOG IN" />
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
