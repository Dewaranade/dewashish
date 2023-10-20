import React from "react";

const Coding = () => {
    return(
        <div className="skills__content">
            <h3 className="skills__title">Technology</h3>
            <div className="skills__line">
                <div className="skills__group">
                    <div className="skills__data">
                    <i class='bx bxl-react' ></i>
                        <div>
                            <h3 className="skills__name">React</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bxl-html5' ></i>
                        <div>
                            <h3 className="skills__name">HTML/CSS</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bxl-spring-boot' ></i>
                        <div>
                            <h3 className="skills__name">SpringBoot</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                    <i class='bx bxl-aws' ></i>
                        <div>
                            <h3 className="skills__name">AWS</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bxl-postgresql' ></i>
                        <div>
                            <h3 className="skills__name">SQL</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bxs-check-circle'></i>
                        <div>
                            <h3 className="skills__name">Postman</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coding;