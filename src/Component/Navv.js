import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BankLogo from "../Images/BankLogo.png";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
class Navv extends React.Component {
    render() {
        return (
            <div>
                <Navbar
                    bg="dark"
                    variant="dark"
                    fixed="top"
                    expand="lg"
                    collapseOnSelect>
                    <Navbar.Brand>
                        <img
                            src={BankLogo}
                            style={{ marginRight: 15, marginLeft: 10 }}
                            width="30px"
                            height="30px"
                            alt="bank logo"
                        />
                        {"  "}
                        <span
                            style={{
                                color: "#0877d8",
                                fontSize: 20,
                                fontWeight: "bold",
                            }}>
                            INIGHTJAR BANKING SYSTEM
                        </span>
                    </Navbar.Brand>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="aligned" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/About">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle active"
                                    to="/Pages"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Pages
                                </Link>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="/Deposit">
                                            Deposit
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="/Loan">
                                            Loan
                                        </Link>
                                    </li>

                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="/Withdrawal">
                                            Withdrawal
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/Contact">
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/Login">
                                    Sign In
                                </Link>
                            </li>
                        </ul>

                        <a className="btn-link">
                            {" "}
                            <button className="custom-btn btn-1">
                                {" "}
                                <a className="icon">
                                    <i className="fas fa-user-circle"></i>
                                </a>
                                <Link id="btn-a" target="_self" to="/SignUp">
                                    New Account
                                </Link>
                            </button>
                        </a>
                    </div>
                </Navbar>
            </div>
        );
    }
}
export default Navv;
