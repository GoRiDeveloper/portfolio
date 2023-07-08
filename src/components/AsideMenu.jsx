import { useState, useEffect, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { Logo } from "./Logo";

const SUBMENU_VALUES = {
    projects: "projects",
    about: "about"
};

export const AsideMenu = () => {

    const {

        asideMenuOpen,
        projectsData,
        showContactModal,
        handleAsideMenu,
        handleContactModal

    } = useContext(GlobalContext);
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    const handleScroll = () => {

        const sections = document.querySelectorAll(".section");
        const scrollPosition = window.scrollY;

        sections.forEach(section => {

            const { top, bottom } = section.getBoundingClientRect();

            if (scrollPosition > top && scrollPosition < bottom)
                setActiveSection(section.id);

        });

        if (/\/.+$/.test(location.pathname))
            setActiveSection("");

        if (showContactModal)
            setActiveSection("");

    };
    const handleHomePage = () => {

        if (/\/.+$/.test(location.pathname)) 
            return navigate("/");
        location.hash = "home";

    };
    const handleProjectsPage = (e) => {

        const targetClassNames = e.target.className.split(" ");
        const projectClassNames = ["asideMenu__subItem", "asideMenu__subLink"];
        
        if (projectClassNames.includes(targetClassNames[0])) return;
        if (/\/.+$/.test(location.pathname)) {
            navigate("/");
            return setTimeout(() => {
                location.hash = "projects";
            }, 300);
        };
        location.href = "/#projects";

    };
    const handleSkillsPage = () => {

        if (/\/.+$/.test(location.pathname)) {
            navigate("/");
            return setTimeout(() => {
                location.hash = "skills";
            }, 300);
        };
        location.hash = "skills";

    };
    const handleAboutPage = () => {

        if (/\/.+$/.test(location.pathname)) {
            navigate("/");
            return setTimeout(() => {
                location.hash = "about";
            }, 300);
        };
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
                        className={`asideMenu__item ${
                            activeSection === "home" && "asideMenu__item--active" || ""
                        }`}
                        onClick={handleHomePage}
                    >
                        <img src="/assets/img/icons/menu_icons/house.svg" alt="icono del inicio" className="asideMenu__listIcon" width="35" height="35" />
                        <span className="asideMenu__link"> Inicio </span>
                    </li>
                    <li
                        className={`asideMenu__item ${
                            activeSection === "projects" && "asideMenu__item--active" || ""
                        }`}
                        onClick={handleProjectsPage}
                    >
                        <img src="/assets/img/icons/menu_icons/work.svg" alt="icono de proyectos" className="asideMenu__listIcon" width="35" height="35" />
                        <span className="asideMenu__link"> Proyectos </span>
                        <img src="/assets/img/icons/menu_icons/down.svg" alt="icono de flecha hacia abajo" className="asideMenu__listIcon asideMenu__listIcon--chevronDown" width="35px" height="35px" />
                        <ul className="asideMenu__subMenu">
                            {
                                projectsData[0][SUBMENU_VALUES.projects].map(item => (
                                    <NavLink key={item.id} to={`/${item.pathname}`} className="asideMenu__subItem">
                                        <span className="asideMenu__subLink"> {item.name} </span>
                                    </NavLink>
                                ))
                            }
                        </ul>
                    </li>
                    <li
                        className={`asideMenu__item ${
                            activeSection === "skills" && "asideMenu__item--active" || ""
                        }`}
                        onClick={handleSkillsPage}
                    >
                        <img src="/assets/img/icons/menu_icons/idea.svg" alt="icono de habilidades" className="asideMenu__listIcon" width="35" height="35" />
                        <a className="asideMenu__link"> Habilidades </a>
                    </li>
                    <li
                        className={`asideMenu__item ${
                            activeSection === "about" && "asideMenu__item--active" || ""
                        }`}
                        onClick={handleAboutPage}
                    >
                        <img src="/assets/img/icons/menu_icons/info.svg" alt="icono de about" className="asideMenu__listIcon" width="35" height="35" />
                        <span className="asideMenu__link"> Acerca de </span>
                        <img src="/assets/img/icons/menu_icons/down.svg" alt="icono de flecha hacia abajo" className="asideMenu__listIcon asideMenu__listIcon--chevronDown" width="35px" height="35px" />
                        <ul className="asideMenu__subMenu">
                            {
                                projectsData[1][SUBMENU_VALUES.about].map(item => (
                                    <li key={item.id} className="asideMenu__subItem">
                                        <a
                                            href={item.redirect}
                                            className="asideMenu__subLink"
                                            target={
                                                item.redirect !== "#about"
                                                    ? "_blank"
                                                    : "_self"
                                            }
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </li>
                    <button
                        className={`asideMenu__item ${
                            showContactModal && "asideMenu__item--active" || ""
                        }`}
                        onClick={handleContactModal}
                    >
                        <img src="/assets/img/icons/menu_icons/contact.svg" alt="icono de contacto" className="asideMenu__listIcon" width="35px" height="35px" />
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
                        ? ( <img src="/assets/img/icons/sidebar_icons/open_menu.svg" className="asideMenu__exitImage" alt="icono de menu" width="35" height="35" /> )
                        : ( <img src="/assets/img/icons/sidebar_icons/menu.svg" className="asideMenu__exitImage" alt="icono de menu" width="35" height="35" /> )
                }
            </button>
        </aside>

    );

};