import React from "react";
import vd from "../Images/vd.jpg";
import withdrow from "../Images/withdrow.jpg";
class Home extends React.Component {
    render() {
        return (
            <div className="body">
                <div id="Home" className="Content">
                    <div className="first-page">
                        <div className="first-page-content">
                            <h2>TRUSTED ONLINE BANKING SYSTEM</h2>
                            <h2>TRANSFER MONEY ACCROSS</h2>
                            <h2>THE GLOBE IN NO TIME</h2>
                        </div>

                        <div className="top-cards">
                            <div
                                className=" container  my-1  py-1"
                                id="card-position">
                                <div className="row text-center   my-3 py-1  "></div>
                            </div>
                        </div>
                    </div>
                    {/* end of cards */}
                    <div className=" second-content">
                        <img
                            className="second-content-img"
                            src={withdrow}
                            alt="Error"
                        />
                        <div className="second-content-right">
                            <p className="second-content-para1">
                                Relabile Online Payment Platform
                            </p>
                            <p className="second-content-para2">
                                Transfer and Deposit Your Money
                            </p>
                            <p
                                className="second-content-para2"
                                style={{ lineHeight: 0.5 }}>
                                anytime, anywhere in the world
                            </p>
                            <p className="para-correct-icon">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Maiores voluptates
                                <br /> obcaecati neque voluptatibus eius in
                                voluptatem asperiores quasi?
                                <br /> Modi nihil eligendi distinctio neque
                                aliquid nostrum quidem soluta
                            </p>
                            <i
                                id="correct-icon"
                                className="fas fa-check-circle"></i>
                            <p className="icon-inline">
                                {" "}
                                Powerfull Online App For Bank
                            </p>
                            <p className="para-correct-icon">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Maiores voluptates
                                <br /> obcaecati neque voluptatibus eius in
                                voluptatem asperiores quasi?
                                <br /> Modi nihil eligendi distinctio neque
                                aliquid nostrum quidem soluta
                            </p>
                            <i
                                id="correct-icon"
                                className="fas fa-check-circle"></i>
                            <p className="icon-inline">
                                {" "}
                                Special For Multiple Use Capabilities
                            </p>
                            <p className="para-correct-icon">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Maiores voluptates
                                <br /> obcaecati neque voluptatibus eius in
                                voluptatem asperiores quasi?
                                <br /> Modi nihil eligendi distinctio neque
                                aliquid nostrum quidem soluta
                            </p>
                            <i
                                id="correct-icon"
                                className="fas fa-check-circle"></i>
                            <p className="icon-inline">
                                {" "}
                                Pring More Transparency
                            </p>
                            <p className="para-correct-icon">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Maiores voluptates
                                <br /> obcaecati neque voluptatibus eius in
                                voluptatem asperiores quasi?
                                <br /> Modi nihil eligendi distinctio neque
                                aliquid nostrum quidem soluta
                            </p>
                        </div>
                    </div>
                    {/*  */}
                    <h1 className="service-head ">Why Choose Us</h1>
                    <div className="line  animate__animated animate__flipInX animate__infinite animate__slow"></div>
                    <div className="OurServices">
                        <img
                            className="service-content-img"
                            src={vd}
                            alt="Error"
                        />
                        <div className="second-service-right">
                            <p className="second-content-para2">
                                Why choose Our World Fast Online
                            </p>
                            <p
                                className="second-content-para2"
                                style={{ lineHeight: 0.5 }}>
                                Payment Services.
                            </p>
                            <p className="para-correct-icon">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Maiores voluptates
                                <br /> obcaecati neque voluptatibus eius in
                                voluptatem asperiores quasi?
                                <br /> Modi nihil eligendi distinctio neque
                                aliquid nostrum quidem soluta
                            </p>
                            <i id="correct-icon" className="fas fa-anchor"></i>
                            <p className="icon-inline"> Low Costing</p>
                            <p className="para-correct-icon">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Maiores voluptates
                                <br /> obcaecati neque voluptatibus eius in
                                voluptatem asperiores quasi?
                                <br /> Modi nihil eligendi distinctio neque
                                aliquid nostrum quidem soluta
                            </p>
                            <i id="correct-icon" className="fas fa-anchor"></i>
                            <p className="icon-inline"> Save And Secure</p>
                            <p className="para-correct-icon">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Maiores voluptates
                                <br /> obcaecati neque voluptatibus eius in
                                voluptatem asperiores quasi?
                                <br /> Modi nihil eligendi distinctio neque
                                aliquid nostrum quidem soluta
                            </p>
                            <i id="correct-icon" className="fas fa-anchor"></i>
                            <p className="icon-inline"> Live Support</p>
                            <p className="para-correct-icon">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Maiores voluptates
                                <br /> obcaecati neque voluptatibus eius in
                                voluptatem asperiores quasi?
                                <br /> Modi nihil eligendi distinctio neque
                                aliquid nostrum quidem soluta
                            </p>
                        </div>
                    </div>
                    {/*  */}
                    <section id="Features" className="Features-section">
                        <div>
                            <h1 className="features-head">Exclusive Features</h1>
                        </div>
                        <div className="line  animate__animated animate__flipInX animate__infinite animate__slow"></div>

                        <div className="OurFeatures">
                            <div className="feature-cards">
                                <i
                                    id="features-icon"
                                    className="fas fa-cog  "></i>
                                <p className="features-card-head">
                                    Incredible Infrastructure
                                </p>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit
                                </p>
                            </div>
                            <div className="feature-cards">
                                <i
                                    id="features-icon"
                                    className="fas fa-envelope"></i>
                                <p className="features-card-head">
                                    Email Notifications
                                </p>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit
                                </p>
                            </div>
                            <div className="feature-cards">
                                <i
                                    id="features-icon"
                                    className="fas fa-arrows-alt"></i>
                                <p className="features-card-head">
                                    Simple Dashbord
                                </p>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit
                                </p>
                            </div>
                            <div className="feature-cards">
                                <i
                                    id="features-icon"
                                    className="fas fa-anchor"></i>
                                <p className="features-card-head">
                                    Information Retrieval
                                </p>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit
                                </p>
                            </div>
                            <div className="feature-cards">
                                <i
                                    id="features-icon"
                                    className="fas fa-arrows-alt-v"></i>
                                <p className="features-card-head">
                                    Drag and Drop Functionality
                                </p>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit
                                </p>
                            </div>
                            <div className="feature-cards">
                                <i
                                    id="features-icon"
                                    className="fas fa-bell"></i>
                                <p className="features-card-head">
                                    Deadline Reminders
                                </p>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}
export default Home;
