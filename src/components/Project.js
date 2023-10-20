import React from "react";
import img1 from "../../src/assets/profile.jpg";
import duolingoimg from "../../src/assets/duolingoimg.jpg";
import DCB from "../../src/assets/DCB.jpg";
import MZ from "../../src/assets/MZ.jpg";
import cam from "../../src/assets/cam.jpg";


import "../Styles/project.css"
import duopdf from "../assets/Duolingo.pdf"
const Project = () => {
    return (
        <div>
            <section className="project section" id="projects">
                <h2 className="section__title" id="projectsec">Projects</h2>
                <span className="section__subtitle">{/*What Can I do?*/}</span>
                <div className="project__container container grid">
                <div className="pgrid-wrapper">
                    <div id="pcard-area">
                        <div class="pwrapper">
                            <div class="pbox-area">

                                <div class="pbox">
                                    <a href={duopdf} target="_blank">
                                    <img alt="" src={duolingoimg} />
                                    <div class="poverlay2">
                                        <h3>Duolingo Product Breakdown</h3>
                                    </div>
                                    </a>
                                </div>

                                <div class="pbox">
                                    <a href={duopdf} target="_blank">
                                    <img alt="" src={MZ} />
                                    <div class="poverlay2">
                                        <h3>Short Films</h3>
                                    </div>
                                    </a>
                                </div>

                                <div class="pbox">
                                    <a href={duopdf} target="_blank">
                                    <img alt="" src={DCB} />
                                    <div class="poverlay2">
                                        <h3>Set Designing</h3>
                                    </div>
                                    </a>
                                </div>

                                <div class="pbox">
                                    <a href={duopdf} target="_blank">
                                    <img alt="" src={cam} />
                                    <div class="poverlay2">
                                        <h3>Hobbies</h3>
                                    </div>
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Project;