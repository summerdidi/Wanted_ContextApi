import ReactModal from "react-modal";
import React from "react";

const CustomModal = ({isOpen, onClose, ...props}) => {

    const handleClose = () => {
        onClose();
    }

    return (
        <ReactModal
            isOpen={isOpen}
            ariaHideApp={false}
        >
            <h1>Hello CustomModal</h1>
            <button onClick={handleClose}>닫기</button>
        </ReactModal>
    );
};

export default CustomModal;
