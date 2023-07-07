import { CitySVG } from "../CitySVG";

const { matches } = matchMedia("(max-width: 768px)");

export const HomePresentation = () => {

    return (

        <div id="home" className={`section homePresentation ${
            !matches && "homePresentation--bg" || ""
        }`}>
            <div className="homePresentation__presentationContent">
                <section className="homePresentation__presentation">
                    <h2 className="homePresentation__heading">
                        <span className="homePresentation__heading--title" data-text="DESARROLLADOR MERN STACK"> DESARROLLADOR MERN STACK </span>
                    </h2>
                    <h3 className="homePresentation__subtitle"> Govanni González Rivera </h3>
                </section>
            </div>
            <div className="homePresentation__presentationButtons">
                <a href="https://www.linkedin.com/in/govanni-rivera-desarrollador-web/" className="homePresentation__presentationBtn" target="_blank">
                    <img src="/assets/img/icons/network_icons/linkedin-logo.svg" alt="linkedin logo" className="homePresentation__icon" width="41px" height="41px" />
                </a>
                <a href="https://github.com/GoRiJ" className="homePresentation__presentationBtn" target="_blank">
                    <img src="/assets/img/icons/network_icons/github-logo.svg" alt="github logo" className="homePresentation__icon" width="41px" height="41px" />
                </a>
            </div>
            <div className="homePresentation__city">
                <CitySVG />
            </div>
            {
                matches && (
                    <div className="homePresentation__background">
                        <video loop autoPlay muted src="/assets/video/synthwave-bg.webm"></video>
                    </div>
                )
            }
        </div>

    );

};