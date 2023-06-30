import { useContext, useRef } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { CardProject } from "./CardProject";

export const HomeProjects = () => {

    const projectsBox = useRef(null);
    const { projectsData } = useContext(GlobalContext);
    
    const keyProjects = "projects";
    const projects = projectsData[0][keyProjects];

    const handleFilter = ({ target }) => {

        const filter = target.dataset.filter;
        const cardsToFilter = [...projectsBox.current.children];

        cardsToFilter.forEach(card => {

            const allFilter = "All";
            const baseClassCard = card.classList[0];
            const cardTech = card.dataset.baseTechnology;

            if (cardTech === filter || filter === allFilter) {
                card.classList.replace(baseClassCard + "--hide", baseClassCard + "--show");
                return;
            };
            card.classList.add(baseClassCard + "--hide");
            return;

        });

    };

    return (

        <div className="homeProjects__projectsContainer" id="projects">
            <section className="homeProjects__projectsContent">

                <h2 className="homeProjects__projectsHeading">
                    <span className="homeProjects__projectsHeading--title" data-text="PROYECTOS"> PROYECTOS </span>
                </h2>
                <div className="homeProjects__projectsFilterButtons">
                    <button
                        className="homeProjects__projectsFilterButton"
                        data-filter="All"
                        onClick={handleFilter}
                    >
                        Mostrar Todos
                    </button>
                    <button
                        className="homeProjects__projectsFilterButton"
                        data-filter="Basics"
                        onClick={handleFilter}
                    >
                        HTML + CSS + JS
                    </button>
                    <button
                        className="homeProjects__projectsFilterButton"
                        data-filter="ReactJS"
                        onClick={handleFilter}
                    >
                        ReactJS
                    </button>
                    <button
                        className="homeProjects__projectsFilterButton"
                        data-filter="Backend"
                        onClick={handleFilter}
                    >
                        Node JS + ExpressJS
                    </button>
                </div>
                <div className="homeProjects__projectsBox" ref={projectsBox}>
                    {
                        projects.map(project => (
                            <CardProject key={project.id} projectInfo={project}/>
                        ))
                    }
                </div>

            </section>
            <div className="homeProjects__projectBlob"></div>
        </div>        

    );

};