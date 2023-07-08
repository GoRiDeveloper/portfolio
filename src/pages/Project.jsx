import { useContext, useEffect } from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const Project = () => {

    const location = useLocation();
    const { name } = useParams();
    const { projectsData } = useContext(GlobalContext);
    const project = projectsData[0].projects.find(project => project.pathname === name);
    
    if (!project) 
        return <Navigate to="/" />;

    useEffect(() =>
        window.scrollTo(0, 0),
    [name]);

    const {

        name: projectName,
        desc,
        localImg,
        technologies,
        rol,
        date,
        redirectLinks

    } = project;
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
                        paragraphs.map((paragraph, i) => (
                            <p key={paragraph.indexOf(i) + i} className="project__desc">{ paragraph }.</p>
                        ))
                    }
                    <article className="project__technologies">
                        <h3 className="project__technologyHeading"> Herramientas : </h3>
                        <div className="project__technologiesList">
                            {
                                technologies.map(technology => (
                                    <figure key={technology} className="project__technology">
                                        <img src={`/assets/img/icons/skills_icons/${technology.toLowerCase()}.svg`} alt={technology} className="project__technologyImage" />
                                        <figcaption className="project__technologyText">{ technology }</figcaption>
                                    </figure>
                                ))
                            }
                        </div>
                    </article>
                    <div className="project__info">
                        <article className="project__rol">
                            <h3 className="project__rolHeading"> Rol : </h3>
                            <p className="project__rolText">{ rol }.</p>
                        </article>
                        <article className="project__date">
                            <h3 className="project__dateHeading"> Año : </h3>
                            <p className="project__dateText">{ date }.</p>
                        </article>
                    </div>
                    <div className="project__buttons">
                        {
                            redirectLinks.map(({ id, name, link }) => (
                                <a
                                    key={id}
                                    href={link}
                                    className="project__btn"
                                    target="_blank"
                                >
                                    { name }
                                </a>
                            ))
                        }
                    </div>
                </section>
            </div>
        </div>

    );

};

export default Project;