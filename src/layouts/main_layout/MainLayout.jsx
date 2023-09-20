import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import { AsideMenu } from "../../components/AsideMenu";
import { Modal } from "../../components/modals/Modal";
import { ContactModal } from "../../components/modals/ContactModal";
import { CVModal } from "../../components/modals/CVModal";
import { Header } from "../../components/Header";

export const MainLayout = () => {

    const {
        asideMenuOpen,
        modal,
        showContactModal,
        cvModal,
        handleAsideMenu,
        handleContactModal,
        handleCVModal
    } = useContext(GlobalContext);

    return (
        <main className="mainLayout">
            <AsideMenu />
            <Modal active={modal}>
                {
                    showContactModal && (<ContactModal closeModal={handleContactModal} />)
                }
                {
                    cvModal && (<CVModal closeModal={handleCVModal}/>)
                }
            </Modal>
            <section className="mainLayout__content">
                <Header />
                <Outlet />
                <button
                    className={`mainLayout__exitBtn ${
                        asideMenuOpen && "mainLayout__exitBtn--close" || ""
                    }`}
                    onClick={handleAsideMenu}
                >
                    <img src="/assets/img/icons/sidebar_icons/menu.svg" className="header__exitImage" alt="icono de menu" width="35px" height="35px" />
                </button>
                <button
                    className="mainLayout__cvBtn"
                    onClick={handleCVModal}
                >
                    CV
                </button>
            </section>
        </main>
    );

};