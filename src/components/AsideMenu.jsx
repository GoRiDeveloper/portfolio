import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Logo } from "./Logo";

const SUBMENU_VALUES = {
    projects: "projects",
    about: "about"
};

export const AsideMenu = () => {

    const { asideMenuOpen, projectsData, handleAsideMenu, handleContactModal } = useContext(GlobalContext);

    const handleHomePage = () => {

        location.hash = "";

    };
    const handleProjectsPage = () => {

        location.hash = "projects";

    };
    const handleAboutPage = () => {

        location.hash = "about";

    };

    return (

        <aside className={`asideMenu ${
            !asideMenuOpen && "asideMenu--close" || ""
        }`}>
            <Logo logoWidth={"4rem"} />
            <nav className="asideMenu__menu">
                <ul className="asideMenu__list">

                    <li
                        className="asideMenu__item"
                        onClick={handleHomePage}
                    >
                        <img src="/assets/img/icons/menu_icons/house.svg" alt="icono del inicio" className="asideMenu__listIcon" />
                        <span className="asideMenu__link"> Inicio </span>
                    </li>
                    <li
                        className="asideMenu__item"
                        onClick={handleProjectsPage}
                    >
                        <img src="/assets/img/icons/menu_icons/work.svg" alt="icono de proyectos" className="asideMenu__listIcon" />
                        <span className="asideMenu__link"> Proyectos </span>
                        <img src="/assets/img/icons/menu_icons/down.svg" alt="icono de flecha hacia abajo" className="asideMenu__listIcon asideMenu__listIcon--chevronDown" />
                        <ul className="asideMenu__subMenu">
                            {
                                projectsData[0][SUBMENU_VALUES.projects].map(item => (
                                    <li key={item.id} className="asideMenu__subItem">
                                        <a className="asideMenu__subLink"> {item.name} </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </li>
                    {/* <li className="asideMenu__item">
                        <img src="/assets/img/icons/menu_icons/idea.svg" alt="icono de habilidades" className="asideMenu__listIcon" />
                        <a className="asideMenu__link"> Habilidades </a>
                    </li> */}
                    <li
                        className="asideMenu__item"
                        onClick={handleAboutPage}
                    >
                        <img src="/assets/img/icons/menu_icons/info.svg" alt="icono de about" className="asideMenu__listIcon" />
                        <span className="asideMenu__link"> Acerca de </span>
                        <img src="/assets/img/icons/menu_icons/down.svg" alt="icono de flecha hacia abajo" className="asideMenu__listIcon asideMenu__listIcon--chevronDown" />
                        <ul className="asideMenu__subMenu">
                            {
                                projectsData[1][SUBMENU_VALUES.about].map(item => (
                                    <li key={item.id} className="asideMenu__subItem">
                                        <a href="#about" className="asideMenu__subLink"> {item.name} </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </li>
                    <button
                        className="asideMenu__item"
                        onClick={handleContactModal}
                    >
                        <img src="/assets/img/icons/menu_icons/contact.svg" alt="icono de contacto" className="asideMenu__listIcon" />
                        <span className="asideMenu__link"> Contacto </span>
                    </button>

                </ul>
            </nav>
            <button
                className="asideMenu__exitBtn"
                onClick={handleAsideMenu}
            >
                {
                    asideMenuOpen
                        ? ( <img src="/assets/img/icons/sidebar_icons/open_menu.svg" className="asideMenu__exitImage" alt="icono de menu"/> )
                        : ( <img src="/assets/img/icons/sidebar_icons/menu.svg" className="asideMenu__exitImage" alt="icono de menu"/> )
                }
            </button>
        </aside>

    );

};