export const ContactModal = ({ showModal, closeModal }) => {

    return (

        <dialog className={`contactModal ${
            showModal && "contactModal--show"
        }`}>

            <button
                className="contactModal__exitBtn"
                onClick={closeModal}
            >
                <img src="/assets/img/icons/modal_icons/door.svg" className="contactModal__exitIcon" alt="salir del modal" />
            </button>
            <h2 className="contactModal__heading">
                <span className="contactModal__heading--title" data-text="CONTACTO"> CONTACTO </span>
            </h2>
            <form className="contactModal__form">

                <fieldset className="contactModal__fieldset">
                    <input id="nameInp" name="name" type="text" className="contactModal__text" required />
                    <label htmlFor="nameInp" className="contactModal__label"> Nombre </label>
                </fieldset>
                <fieldset className="contactModal__fieldset">
                    <input id="emailInp" name="email" type="email" className="contactModal__text" required />
                    <label htmlFor="emailInp" className="contactModal__label"> E-Mail </label>
                </fieldset>
                <fieldset className="contactModal__fieldset">
                    <input id="subjectInp" name="subject" type="text" className="contactModal__text" required />
                    <label htmlFor="subjectInp" className="contactModal__label"> Asunto </label>
                </fieldset>
                <fieldset className="contactModal__fieldset contactModal__fieldset--message">
                    <textarea id="messageInp" className="contactModal__message contactModal__message--message" name="message" rows="1" required></textarea>
                    <label htmlFor="messageInp" className="contactModal__label contactModal__label--message"> Mensaje </label>
                </fieldset>
                <button className="contactModal__submitBtn" type="submit"> Enviar </button>


            </form>
            <div className="contactModal__contactButtons">
                <a href="https://www.linkedin.com/in/govanni-rivera-desarrollador-web/" className="contactModal__contactBtn" target="_blank">
                    <img src="/assets/img/icons/network_icons/linkedin-logo.svg" alt="linkedin logo" className="contactModal__icon" />
                </a>
                <a href="https://github.com/GoRiJ" className="contactModal__contactBtn" target="_blank">
                    <img src="/assets/img/icons/network_icons/github-logo.svg" alt="github logo" className="contactModal__icon" />
                </a>
            </div>

        </dialog>

    );

};