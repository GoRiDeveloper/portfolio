import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const HomeSkills = () => {

    const { projectsData } = useContext(GlobalContext);
    const skills = projectsData[2].skills;

    return (

        <section id="skills" className="section homeSkills">
            <h2 className="homeSkills__heading">
                <span className="homeSkills__heading--title" data-text="HABILIDADES"> HABILIDADES </span>
            </h2>
            <div className="homeSkills__container">
                <div className="homeSkills__carousel">
                    {
                        skills.map(skill => (
                            <figure key={skill} className="homeSkills__figure">
                                <img src={`/assets/img/icons/skills_icons/${skill}.svg`} alt={skill} className="homeSkills__image" />
                            </figure>
                        ))
                    }
                </div>
            </div>
        </section>

    );

};