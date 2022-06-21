import React from "react";
import Home from "./Component/Home";
import Deposit from "./Component/deposit/Deposit";
import "./Component/homee.css";
import Navv from "./Component/Navv";
import "../src/Component/deposit/deposit.css";
import Contact from "./Component/ContactPage/Contact";
import Loan from "./Component/LoanPage/Loan";
import Footer from "./Component/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Withdrawal from "./Component/withdrawal/Withdrawal";
import About from "./Component/About/About";
import SignUp from "./Component/signUp/signUp";
import Login from "./Component/Login/Login";

function App() {
    return (
        <div className="App">
            <Router>
                <Navv />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="Loan" element={<Loan />} />
                    <Route path="Contact" element={<Contact />} />
                    <Route path="Deposit" element={<Deposit />} />
                    <Route path="Withdrawal" element={<Withdrawal />} />
                    <Route path="About" element={<About />} />
                    <Route path="SignUp" element={<SignUp />} />
                    <Route path="Login" element={<Login />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
