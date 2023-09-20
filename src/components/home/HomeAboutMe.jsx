import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const HomeAboutMe = () => {

    const { handleContactModal } = useContext(GlobalContext);

    return (

        <section id="about" className="hide section homeAboutMe">
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
                    <img loading="lazy" src="/assets/img/personal/GoRi.webp" alt="GoRiDev" className="homeAboutMe__image" width="142px" height="142px" />
                </figure>
                <section className="homeAboutMe__about">
                    
                    <h3 className="homeAboutMe__aboutHeading"> ¡Hola, Mi Nombre Es Govanni Gonzalez Rivera! </h3>
                    <div className="homeAboutMe__info">
                        <p className="homeAboutMe__text"> Empecé mi carrera profesional en 2021, en 2022 estudie en CoderHouse la carrera de Desarrollador Full-Stack, y graduado del Bootcamp de la misma carrera en Academlo, realizando varios proyectos, desafiandome a trabajar bajo presión, con un total de más de 78 semanas de practica continua y avanzando de manera autodidacta. </p>
                        <p className="homeAboutMe__text"> Bastante dedicado en mis proyectos, los cuales me respaldan y he aumentado mis habilidades blandas en el entorno laboral, gracias a la emulación de NoCountry que me permitio desarrollar aun más mi comunicación, proactividad, capacidad de resolución, iniciativa, compromiso, capacidad de instruir y organización. </p>
                    </div>
                    <button
                        className="homeAboutMe__aboutContact"
                        onClick={handleContactModal}
                    >
                        ¡Contactame!
                    </button>

                </section>

            </article>
        </section>

    );

};