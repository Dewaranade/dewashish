import React from "react";

const Info = () => {
    return(
        <div className="about__info grid">
            <div className="about__box">
            
                <h3 className="about__title"> <i class='bx bxs-magic-wand about__icon' ></i>UX Wizardry</h3>
                <span className="about__subtitle">Dewashish crafts top-notch, user-friendly designs.</span>
            </div>
            
            <div className="about__box">
           
                <h3 className="about__title"> <i class='bx bx-code-alt about__icon' ></i>Engineering Prowess</h3>
                <span className="about__subtitle">He doesn’t just make things pretty, he codes too.</span>
            </div>
            
            <div className="about__box">
            
                <h3 className="about__title"><i class='bx bx-network-chart about__icon'></i>Masterful Orchestrator</h3>
                <span className="about__subtitle">He owns a product like a leader, not a boss.</span>
            </div>

            <div className="about__box">
            
                <h3 className="about__title"><i class='bx bx-crown about__icon'></i>Pune’s Finest</h3>
                <span className="about__subtitle">Turning the tech world upside down in Pune.</span>
            </div>
        </div>
    )
}

export default Info;