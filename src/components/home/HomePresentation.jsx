import { CitySVG } from "../CitySVG";

export const HomePresentation = () => {

    return (

        <div className="homePresentation">
            <div className="homePresentation__presentationContent">
                <section className="homePresentation__presentation">
                    <h2 className="homePresentation__heading">
                        <span className="homePresentation__heading--title" data-text="DESARROLLADOR MERN STACK"> DESARROLLADOR MERN STACK </span>
                    </h2>
                    <h3 className="homePresentation__subtitle"> Govanni Gonzalez Rivera </h3>
                </section>
            </div>
            <div className="homePresentation__presentationButtons">
                <a href="https://www.linkedin.com/in/govanni-rivera-desarrollador-web/" className="homePresentation__presentationBtn" target="_blank">
                    <img src="/assets/img/icons/network_icons/linkedin-logo.svg" alt="linkedin logo" className="homePresentation__icon" />
                </a>
                <a href="https://github.com/GoRiJ" className="homePresentation__presentationBtn" target="_blank">
                    <img src="/assets/img/icons/network_icons/github-logo.svg" alt="github logo" className="homePresentation__icon" />
                </a>
            </div>
            <div className="homePresentation__city">
                <CitySVG />
            </div>
        </div>

    );

};