import ReactModal from "react-modal";
import React from "react";

const DefaultModal = ({isOpen, handleClose}) => {
    return (
        <ReactModal
            isOpen={isOpen}
            ariaHideApp={false}
        >
            <h1>Hello DefaultModal</h1>
            <button onClick={handleClose}>닫기</button>
        </ReactModal>
    );
};

export default DefaultModal;
