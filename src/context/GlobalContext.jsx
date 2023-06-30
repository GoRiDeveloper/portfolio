import { createContext, useState } from "react";
import data from "../data/data";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

    const [asideMenuOpen, setAsideMenuOpen] = useState(false);
    const [projectsData, setProjectsData] = useState(
        () => data ? data : null
    );
    const [showContactModal, setShowContactModal] = useState(false);

    const handleAsideMenu = () => setAsideMenuOpen((cV) => !cV);
    const handleContactModal = () => setShowContactModal((cV) => !cV);

    return (

        <GlobalContext.Provider
            value={{
                asideMenuOpen,
                projectsData,
                showContactModal,
                handleAsideMenu,
                handleContactModal
            }}
        >
            { children }
        </GlobalContext.Provider>

    );

};