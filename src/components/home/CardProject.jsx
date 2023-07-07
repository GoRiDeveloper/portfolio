import { Link } from "react-router-dom";

const TECHNOLOGIES_VALUES = {
    Basics: ["HTML", "CSS", "JavaScript"],
    Backend: ["NodeJS", "ExpressJS"],
    ReactJS: ["ReactJS"]
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

    const setTechnology = (technologies) => {

        const TECH_KEYS = Object.keys(TECHNOLOGIES_VALUES);
        const BASICS_KEY = "Basics";
        const BACKEND_KEY = "Backend";
        const REACTJS_KEY = "ReactJS";
        
        const includeBasics = TECHNOLOGIES_VALUES.Basics.every(technology => technologies.includes(technology));
        const includeBackend = TECHNOLOGIES_VALUES.Backend.every(technology => technologies.includes(technology));
        const includeReactJS = TECHNOLOGIES_VALUES.ReactJS.every(technology => technologies.includes(technology));

        if (includeBasics) {
            
            const indexKey = TECH_KEYS.indexOf(BASICS_KEY);
            return TECH_KEYS[indexKey];

        } else if (includeBackend) {
            
            const indexKey = TECH_KEYS.indexOf(BACKEND_KEY);
            return TECH_KEYS[indexKey];

        } else {

            const indexKey = TECH_KEYS.indexOf(REACTJS_KEY);
            return TECH_KEYS[indexKey];

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