import React from "react";

const Ux = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">UI/UX</h3>
            <div className="skills__line">
                <div className="skills__group">
                    <div className="skills__data">
                    <i class='bx bx-search-alt-2 skills__icon' ></i>
                        <div>
                            <h3 className="skills__name">Research</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bx-outline skills__icon'></i>
                        <div>
                            <h3 className="skills__name">Wireframing</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bxs-network-chart skills__icon'></i>
                        <div>
                            <h3 className="skills__name">Prototyping</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                    <i class='bx bxs-note skills__icon'></i>
                        <div>
                            <h3 className="skills__name">Miro</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bxl-adobe skills__icon' ></i>
                        <div>
                            <h3 className="skills__name">XD</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bxl-figma skills__icon' ></i>
                        <div>
                            <h3 className="skills__name">Figma</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ux;