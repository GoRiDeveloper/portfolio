export const Modal = ({ children, active }) => {

    return (

        <div className={`modal ${
            active && "modal--active"
        }`}>        
            { children }
        </div>

    );

};