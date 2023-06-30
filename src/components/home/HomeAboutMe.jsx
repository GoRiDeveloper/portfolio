import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const HomeAboutMe = () => {

    const { handleContactModal } = useContext(GlobalContext);

    return (

        <div id="about" className="homeAboutMe">
            <h2 className="homeAboutMe__heading">
                <span className="homeAboutMe__heading--title" data-text="ACERCA DE MI"> ACERCA DE MI </span>
            </h2>
            <article className="homeAboutMe__container">

                <input type="checkbox" name="toggle" id="toggler" className="homeAboutMe__check" />
                <label htmlFor="toggler" className="homeAboutMe__toggle">
                    <span className="homeAboutMe__toggleBtn homeAboutMe__toggleBtn--off"> OFF </span>
                    <span className="homeAboutMe__toggleBtn homeAboutMe__toggleBtn--on"> ON </span>
                </label>
                <div className="homeAboutMe__light"></div>
                <figure className="homeAboutMe__imageContainer">
                    <img loading="lazy" src="/assets/img/personal/GoRi.webp" alt="GoRiDev" className="homeAboutMe__image" />
                </figure>
                <section className="homeAboutMe__about">
                    
                    <h3 className="homeAboutMe__aboutHeading"> ¡Hola, Mi Nombre Es Govanni Gonzalez Rivera! </h3>
                    <div className="homeAboutMe__info">
                        <p className="homeAboutMe__text"> Empecé mi carrera profesional en 2022, estudiando en CoderHouse la carrera de Desarrollador Full-Stack, y actualmente me encuentro cursando el Bootcamp de la misma carrera en Academlo. </p>
                        <p className="homeAboutMe__text"> He trabajado en 2 proyectos como autónomo y actualmente me encuentro realizando proyectos nuevos para mantener a mis 4 gatos hijos. </p>
                    </div>
                    <button
                        className="homeAboutMe__aboutContact"
                        onClick={handleContactModal}
                    >
                        ¡Contactame!
                    </button>

                </section>

            </article>
        </div>

    );

};