import React from "react";
import Ux from "./Ux";
import Coding from "./Coding";
import Other from "./Other";
import "../Styles/skills.css"
const Skills =() =>{
    return(
        <section className="skills section" id="skills">
            <h2 className="section__title" id="aboutme">Skills</h2>
            <span className="section__subtitle">{/*What Can I do?*/}</span>

            <div className="skills__container container grid">
                <Ux />
                <Coding />
                <Other />
            </div>
        </section>
    )
}

export default Skills;