import { Link } from "react-router-dom";

const TECHNOLOGIES_VALUES = {
    Basics: ["HTML", "CSS", "JavaScript"],
    Backend: ["NodeJS", "ExpressJS"],
    ReactJS: ["ReactJS"],
    FullStack: ["JavaScript", "NodeJS"]
};

export const CardProject = ({ projectInfo }) => {

    const {
        technologies,
        localImg,
        redirectLinks,
        name,
        desc,
        pathname
    } = projectInfo;

    const setTechnology = (techs) => {

        const TECH_KEYS = Object.keys(TECHNOLOGIES_VALUES);
        const BASICS_KEY = "Basics";
        const BACKEND_KEY = "Backend";
        const REACTJS_KEY = "ReactJS";
        const FULL_STACK_KEY = "FullStack";
        
        const verifyIncludes = (techArr) => TECHNOLOGIES_VALUES[techArr].every(tech => techs.includes(tech))
        const getIndexKey = (key) => TECH_KEYS[TECH_KEYS.indexOf(key)];

        if (verifyIncludes(BASICS_KEY)) {
            return getIndexKey(BASICS_KEY);
        } else if (verifyIncludes(BACKEND_KEY)) {
            return getIndexKey(BACKEND_KEY);
        } else if (verifyIncludes(FULL_STACK_KEY)) {
            return getIndexKey(FULL_STACK_KEY)
        } else if (verifyIncludes(REACTJS_KEY)) {
            return getIndexKey(REACTJS_KEY);
        };

    };

    return (

        <article
            className="cardProject__project"
            data-base-technology={setTechnology(technologies)}
        >
            <div className="cardProject__projectRedirectInfo">
                <img loading="lazy" src={localImg} alt="proyecto" className="cardProject__projectImage" />
                {
                    redirectLinks.map(link => (
                        <a
                            key={link.id}
                            className="cardProject__projectBtn"
                            href={link.link}
                            target="_blank"
                        >
                            { link.name }
                        </a>
                    ))
                }
            </div>
            <div className="cardProject__projectInfo">
                <h3 className="cardProject__projectHeading"> { name || "Sin Información" } </h3>
                <p className="cardProject__projectDescription"> { desc || "Sin Información" } </p>
                <Link
                    className="cardProject__projectBtnMoreInfo"
                    to={`/${pathname}`}
                >
                    Ver Más
                </Link>
            </div>
        </article>

    );

};