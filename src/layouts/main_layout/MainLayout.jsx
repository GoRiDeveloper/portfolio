import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import { AsideMenu } from "../../components/AsideMenu";
import { Modal } from "../../components/modals/Modal";
import { Header } from "../../components/Header";

export const MainLayout = () => {

    const { asideMenuOpen, handleAsideMenu } = useContext(GlobalContext);

    return (

        <main className="mainLayout">
            <AsideMenu />
            <Modal />
            <section className="mainLayout__content">

                <Header />
                <Outlet />
                <button
                    className={`mainLayout__exitBtn ${
                        asideMenuOpen && "mainLayout__exitBtn--close" || ""
                    }`}
                    onClick={handleAsideMenu}
                >
                    <img src="/assets/img/icons/sidebar_icons/menu.svg" className="header__exitImage" alt="icono de menu"/>
                </button>

            </section>
        </main>

    );

};