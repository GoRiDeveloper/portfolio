import { createContext, useState } from "react";
import data from "../data/data";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

    const [asideMenuOpen, setAsideMenuOpen] = useState(false);
    const [projectsData,] = useState(
        () => data ? data : null
    );
    const [modal, setModal] = useState(false);
    const [showContactModal, setShowContactModal] = useState(false);
    const [cvModal, setCVModal] = useState(false);
    const [showHome, setShowHome] = useState(false);
    const [showProjects, setShowProjects] = useState(false);

    const handleAsideMenu = () => setAsideMenuOpen((cV) => !cV);
    const handleContactModal = () => {
        setModal(!modal);
        setShowContactModal((cV) => !cV);
    };
    const handleCVModal = () => {
        setModal(!modal)
        setCVModal((cV) => !cV)
    }
    const handleShowHome = () => setShowHome(!showHome);
    const handleShowProjects = () => setShowProjects(!showProjects);

    return (

        <GlobalContext.Provider
            value={{
                asideMenuOpen,
                projectsData,
                modal,
                cvModal,
                showContactModal,
                showHome,
                showProjects,
                handleAsideMenu,
                handleContactModal,
                handleCVModal,
                handleShowHome,
                handleShowProjects
            }}
        >
            { children }
        </GlobalContext.Provider>

    );

};