import React, { Component } from 'react';

class Calculate extends React.Component {
    render() { 
        return( <div>


<div className="container1">
            <div className="calculator hidden">
                <h2>Loan Calculator</h2>
                <div className="small">
                    Calculate monthly payments, total cost due, and cost of loan.
                </div>
                <div>
                    <input type="number" id="principal" placeholder="loan"></input>
                    <input type="number" id="interest" placeholder="rate"></input>
                    <input type="number" id="time" placeholder="months"></input>
                    <button type="button" id="button">Calculate</button>
                </div>
            </div>
        </div>
        <div className="wrapper">
            <div className="results">
                <h2>Results</h2>
                <table id="resultsTable" cellspacing="0">
                  <thead>
                    <tr className="header">
                        <th>Loan Details</th>
                        <th>Payments</th>
                        <th>Total Due</th>
                        <th>Cost of Loan</th>
                    </tr>
                  </thead>
                  <tbody>

                  </tbody>
                </table>
            </div>
        </div>

        </div>);
    }
}
 
export default Calculate;