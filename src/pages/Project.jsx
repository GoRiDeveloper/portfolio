import { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const Project = () => {

    const { name } = useParams();
    const { projectsData } = useContext(GlobalContext);
    const {

        name: projectName,
        desc,
        localImg,
        technologies

    } = projectsData[0].projects.find(project => project.pathname === name);
    const paragraphs = desc.split(".");

    return (
        
        <div className="project">
            <div className="project__container">
                <figure className="project__imageBox">
                    <img loading="lazy" width="200" src={localImg} alt={name} className="project__image" />
                </figure>
                <section className="project__content">
                    <h2 className="project__heading">
                        <span className="project__heading--title" data-text={projectName.toUpperCase()}> { projectName.toUpperCase() } </span>
                    </h2>
                    {
                        paragraphs.map(paragraph => (
                            <p key={paragraph} className="project__desc">{ paragraph }</p>
                        ))
                    }
                    <article className="project__technologies">
                        <h3 className="project__technologyHeading"> Herramientas : </h3>
                        <div className="project__technologiesList">
                            {
                                technologies.map(technology => (
                                    <figure className="project__technology">
                                        <img src={`/assets/img/icons/skills_icons/${technology.toLowerCase()}.svg`} alt={technology} className="project__technologyImage" />
                                        <figcaption className="project__technologyText">{ technology }</figcaption>
                                    </figure>
                                ))
                            }
                        </div>
                    </article>
                </section>
            </div>
        </div>

    );

};

export default Project;