import React from "react";
class Deposit extends React.Component {
    render() {
        return (
            <div>
                <div className="deposit_body">
                    <h1 className="deposit_head">
                        The Best Investment and Deposit Certificates
                    </h1>
                    <div className="all_deposit">
                        <form>
                            <label for="money">Amount Of Money</label>
                            <input
                                type="text"
                                id="money"
                                name="AmountOfMoney"
                                placeholder="100.000 $"
                            />

                            <label for="currency">Currency</label>
                            <select id="currency" name="currency">
                                <option className="color" value="doller">
                                    Doller
                                </option>
                                <option className="color" value="Pound">
                                    LE
                                </option>
                                <option className="color" value="Lira">
                                    Lira
                                </option>
                            </select>

                            <label for="duration">Duration</label>
                            <select
                                id="duration"
                                name="Duration"
                                aria-placeholder="Choose Duration">
                                <option className="color" value="month">
                                    month
                                </option>
                                <option className="color" value="3month">
                                    3month
                                </option>
                                <option className="color" value="6month">
                                    6month
                                </option>
                                <option className="color" value="9month">
                                    9month
                                </option>
                                <option className="color" value="1year">
                                    1year
                                </option>
                                <option className="color" value="2year">
                                    2year
                                </option>
                                <option className="color" value="3year">
                                    3year
                                </option>
                                <option className="color" value="4year">
                                    4year
                                </option>
                                <option className="color" value="5year">
                                    5year
                                </option>
                                <option className="color" value="6year">
                                    6year
                                </option>
                                <option className="color" value="7year">
                                    7year
                                </option>
                                <option className="color" value="8year">
                                    8year
                                </option>
                                <option className="color" value="9year">
                                    9year
                                </option>
                                <option className="color" value="10year">
                                    10year
                                </option>
                            </select>

                            <label for="interest">Iterest Type</label>
                            <select
                                id="interest"
                                name="interest"
                                aria-placeholder="Choose the type of interest">
                                <option className="color" value="fixed">
                                    Fixed
                                </option>
                                <option className="color" value="variable">
                                    Variable
                                </option>
                            </select>

                            <label for="payment">
                                Periodicity Of Interest Payment
                            </label>
                            <select
                                id="payment"
                                name="payment"
                                aria-placeholder="Choose payment period">
                                <option className="color" value="quarterly">
                                    Quarterly
                                </option>
                                <option className="color" value="annual">
                                    annual
                                </option>
                                <option className="color" value="end period">
                                    at the end of the period
                                </option>
                                <option className="color" value="semi annual">
                                    Semi-annual
                                </option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Deposit;
