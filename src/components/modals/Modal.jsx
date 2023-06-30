import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { ContactModal } from "./ContactModal";

export const Modal = () => {

    const { showContactModal, handleContactModal } = useContext(GlobalContext);

    return (

        <div className={`modal ${
            showContactModal && "modal--active"
        }`}>
            
            {
                showContactModal && (<ContactModal showModal={showContactModal} closeModal={handleContactModal} />)
            }

        </div>

    );

};