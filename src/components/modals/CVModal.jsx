export const CVModal = ({ closeModal }) => {

    return (
        <dialog className="cvModal">
            <button
                className="cvModal__exitBtn"
                onClick={closeModal}
            >
                <img src="/assets/img/icons/modal_icons/door.svg" className="cvModal__exitIcon" alt="salir del modal" />
            </button>
            <h2 className="cvModal__heading">
                <span className="cvModal__heading--title" data-text="CURRÍCULUM"> CURRÍCULUM </span>
            </h2>
            <iframe className="cvModal__curriculum" src="/assets/file/GovanniGonzálezRivera-CV-DesarrolladorFullStack.pdf"></iframe>
        </dialog>
    );

}