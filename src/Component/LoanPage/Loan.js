import React from "react";
import get from "../LoanPage/get.jpg";
import down from "../LoanPage/down.png";
import How from "../LoanPage/How.jpg";
import dd from "../LoanPage/dd.png";
import "../LoanPage/Loan.css";
import compound from "../LoanPage/compound.gif";

class Loan extends React.Component {
    render() {
        return (
            <div>
                <div className="landing">
                    <div className="intro-text">
                        <h1>Personal Loan </h1>

                        <p className="para1">
                            Your dreams are right within reach, with the help of
                            a Bank Personal Loan
                        </p>
                        {/* <button type="button" onclick="alert('At Bank we strive to help you make smarter financial decisions. While we adhere to strict editorial integrity, this post may contain references to products from our partners. Here is an explanation for how we make money.')" style="border-radius: 2px ; background-color: #10cab7;" >About!</button>    */}
                    </div>
                </div>

                <div className="features">
                    <div className="container-feat">
                        <div className="feat">
                            <i
                                className="fas fa-coins"
                                style={{ fontSize: 48 }}></i>
                            <h3>Loan amounts that suit your income</h3>
                            <p>
                                {" "}
                                Receive a payroll personal loan starting from
                                EGP 5,000 up to EGP 2,000,000 depending on your
                                cash flow
                            </p>
                        </div>
                        <div className="feat">
                            <i
                                className="	fas fa-hand-holding-usd"
                                style={{ fontSize: 48 }}></i>
                            <h3>
                                Borrow against your income, profession or
                                balance
                            </h3>
                            <p>
                                Borrow up to 3 million in an unsecured loan to
                                pay your personal expenses, with a monthly
                                installment of up to 50% of your monthly salary
                            </p>
                        </div>
                        <div className="feat">
                            <i
                                className="fas fa-chart-line"
                                style={{ fontSize: 48 }}></i>
                            <h3>Competitive interest rates</h3>
                            <p>
                                Figure out the best loan for you using our loan
                                calculator. Enjoy our flexible interest rates,
                                to suit your needs
                            </p>
                        </div>
                    </div>
                </div>

                <div className="services" id="services">
                    <div className="container-serv">
                        <h2 className="Special-heading">Personal loan</h2>
                        <p>Don't Be Busy, Be Productive</p>
                        <div className="services-content">
                            <div className="col">
                                <div className="srv">
                                    <i
                                        className="	fas fa-balance-scale"
                                        style={{
                                            fontSize: 48,
                                            color: "brown",
                                        }}></i>
                                    <div className="text">
                                        <h3>Approval requirements</h3>
                                        <p>
                                            Every lender has its own threshold
                                            for approving potential borrowers,
                                            considering things like your income,
                                            credit score and debt-to-income
                                            ratio.I f you have below-average
                                            credit, look for lenders that
                                            utilize{" "}
                                        </p>
                                    </div>
                                </div>
                                <div className="srv">
                                    <i
                                        className="	fas fa-balance-scale-left"
                                        style={{
                                            fontSize: 48,
                                            color: "brown",
                                        }}></i>
                                    <div className="text">
                                        <h3>Interest rates</h3>
                                        <p>
                                            The lowest advertised rate is never
                                            guaranteed, so compare your actual
                                            quotes. When comparing interest
                                            rates, also make sure to incorporate
                                            any fees or penalties; origination
                                            fees or application fees can
                                            significantly add to the overall
                                            cost of your loan..
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="srv">
                                    <i
                                        className="fas fa-balance-scale-right"
                                        style={{
                                            fontSize: 48,
                                            color: "brown",
                                        }}></i>
                                    <div className="text">
                                        <h3>Loan amounts.</h3>
                                        <p>
                                            If you need a loan for something
                                            small, like a minor car repair,
                                            you'll look at different lenders
                                            than you would if you need to pay
                                            for tens of thousands of dollars in
                                            medical bills..
                                        </p>
                                    </div>
                                </div>
                                <div className="srv">
                                    <i
                                        className="fas fa-cash-register"
                                        style={{
                                            fontSize: 48,
                                            color: "brown",
                                        }}></i>
                                    <div className="text">
                                        <h3>Repayment options</h3>
                                        <p>
                                            A good personal loan lender usually
                                            offers multiple repayment terms so
                                            you can choose the one that makes
                                            the most sense for your situation.
                                            If you're borrowing a lot of money,
                                            you may want to look for a lender
                                            with long repayment terms to
                                            decrease your monthly payment. If
                                            you have a smaller loan, a shorter
                                            repayment term will cut back on the
                                            amount of interest you pay overall..
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="imge">
                                    <img src={get} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio" id="portfolio">
                    <div className="container-pro">
                        <h2 className="Special-heading">Loan Work</h2>
                        <p>If you do it right, It will last forever</p>
                        <div className="portfolio-content">
                            <div className="card">
                                <img src={down} />
                                <div className="info">
                                    <h3>How Do You Payments?</h3>
                                    <p>
                                        Lenders often offer lower interest rates
                                        for the first few years of an ARM,
                                        sometimes called a teaser rate, but
                                        rates can change after that– as often as
                                        once a year. The initial interest rate
                                        on an ARM tends to be significantly
                                        lower than that on a fixed-rate
                                        mortgage. For that reason, ARMs can be
                                        attractive if you are planning to stay
                                        in your home for only a few years.. ^_^
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <img src={How} />
                                <div className="info">
                                    <h3>How Does Loan Works?</h3>
                                    <p>
                                        A loan is a commitment that you (the
                                        borrower) will receive money from a
                                        lender, and you will pay back the total
                                        borrowed, with added interest, over a
                                        defined time period. The terms of each
                                        loan are defined in a contract provided
                                        by the lender. Secured loans are loans
                                        where borrowers can put up an asset
                                        (like a house) as collateral. This gives
                                        the lender more confidence in the loan.
                                        Unsecured loans are loans approved
                                        without collateral, so the lender takes
                                        on more risk.. ^_^
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <img src={compound} />
                                <div className="info">
                                    <h3>How Does Compound Interest Work?</h3>
                                    <p>
                                        To understand compound interest, start
                                        with the concept of simple interest: You
                                        deposit money, and the bank pays you
                                        interest on your deposit.1 For example,
                                        if you earn 5% annual interest, a
                                        deposit of $100 would gain you $5 after
                                        a year. What happens the following year?
                                        That’s where compounding comes in.
                                        You’ll earn interest on your initial
                                        deposit, and you’ll earn interest on the
                                        interest you just earned.. ^_^
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about" id="about">
                    <div className="container-about">
                        <h2 className="Special-heading">Calculate Payment</h2>
                        <p>Less is moro work</p>
                        <div className="about-content">
                            <div className="image">
                                <img src={dd} />
                            </div>
                            <div className="text">
                                <p>
                                    Before you get a loan, it’s important to
                                    know just how much debt you can afford. Our
                                    simplified loan payment calculator does all
                                    the heavy lifting to help you discover what
                                    your monthly payment could be. Just input
                                    the principal balance of your loan, the
                                    interest rate, and the number of years.
                                    Having an idea of your monthly payment can
                                    help when you’re putting together a budget.
                                    You might find that you have enough money
                                    left over to make extra payments. In the
                                    end, you might even be able to develop a
                                    plan to get ahead of your debt..
                                </p>
                                <hr />
                                <p>
                                    {" "}
                                    Having an idea of your monthly payment can
                                    help when you’re putting together a budget.
                                    You might find that you have enough money
                                    left over to make extra payments. In the
                                    end, you might even be able to develop a
                                    plan to get ahead of your debt..
                                </p>
                                <br /> <br />
                                {/* <a href="html.html" className="button">Calculate Loan</a> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-us" id="contact">
                    <div className="container-contact">
                        <h2 className="Special-heading">Contact</h2>
                        <p>
                            If you have any question, Please Contact Me, we are
                            born to create ^_^
                        </p>
                        <div className="info">
                            <p className="lapel">
                                Feel free to drop us a line at :{" "}
                            </p>
                            <a
                                href="https://www.linkedin.com/in/mustafa-mahmoud-9712821a0/"
                                className="link">
                                Bank
                            </a>
                            <div className="social-m">
                                You will find us here :
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-google-plus-g"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loan;
