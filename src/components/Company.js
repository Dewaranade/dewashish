import React from "react";
import USTImage from "../../src/assets/UST.png";
import TheatronImage from "../../src/assets/Theatron.png"
import AajkalImage from "../../src/assets/Aajkal.png"
import TedxImage from "../../src/assets/Tedx.jpg";
import KalaImage from "../../src/assets/Kala.jpg";
import "../Styles/company.css"

const Company = () =>{
    return(
        <section className="company section" id="company">
            <h2 className="company__title" id="companytitle">Trusted By Top Organizations</h2>
            <span className="section__subtitle">{/*Who Am I?*/}</span>
            <div className="company__container container grid">
                <img src={USTImage} alt=" " className="company__image1" />
                <img src={KalaImage} alt=" " className="company__image5" />
                <img src={TheatronImage} alt=" " className="company__image2" />
                <img src={AajkalImage} alt=" " className="company__image34" />
                <img src={TedxImage} alt=" " className="company__image34" />
                
            </div>
        </section>
    )
}

export default Company;