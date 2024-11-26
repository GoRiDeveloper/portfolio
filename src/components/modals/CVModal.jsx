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
            <iframe src="https://drive.google.com/file/d/103b_4WnfUcG_1m2XCtTJfgCdBy1BXw4P/preview" width="640" height="480" allow="autoplay"></iframe>
        </dialog>
    );

}
