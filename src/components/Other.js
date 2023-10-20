import React from "react";

const Other = () => {
    return(
        <div className="skills__content">
            <h3 className="skills__title">Other</h3>
            <div className="skills__line">
                <div className="skills__group">
                    <div className="skills__data">
                    <i class='bx bxs-chat' ></i>
                        <div>
                            <h3 className="skills__name">Curiosity</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bxs-slideshow' ></i>
                        <div>
                            <h3 className="skills__name">Presentation</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bxs-check-circle'></i>
                        <div>
                            <h3 className="skills__name">Leadership</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                    <i class='bx bxs-objects-vertical-top' ></i>
                        <div>
                            <h3 className="skills__name">Jira</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bxs-notepad' ></i>
                        <div>
                            <h3 className="skills__name">Confluence</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bxl-microsoft-teams' ></i>
                        <div>
                            <h3 className="skills__name">Teams</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Other;