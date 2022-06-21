import React, { Component } from "react";
import about from "../../Images/about.jpg";
import vd from "../../Images/vd.jpg";
import "../../Component/homee.css";
class About extends React.Component {
    render() {
        return (
            <div>
                <section className="About-sec">
                    <div className=" second-content" id="About-sec">
                        <img
                            className="second-content-img"
                            src={about}
                            alt="Error"
                        />
                        <div className="second-content-right">
                            <p
                                className="second-content-para1"
                                className="p-color">
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
                            <p className="icon-inline" className="p-color">
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
                            <p className="icon-inline" className="p-color">
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
                            <p className="icon-inline" className="p-color">
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
                            {/* <p className="second-content-para1">Relabile Online Payment Platform</p> */}
                            <p
                                className="second-content-para2"
                                className="para2-about">
                                Why choose Our World Fast Online
                            </p>
                            <p
                                className="second-content-para2"
                                className="para2-about"
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
                            <p className="icon-inline" className="p-color">
                                {" "}
                                Low Costing
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
                            <p className="icon-inline" className="p-color">
                                {" "}
                                Save And Secure
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
                            <p className="icon-inline" className="p-color">
                                {" "}
                                Live Support
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
                </section>
            </div>
        );
    }
}

export default About;
