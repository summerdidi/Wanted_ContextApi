import ReactModal from "react-modal";
import React from "react";

const MyModal = ({ isOpen, ...props }) => {
  return (
    <ReactModal isOpen={isOpen}>
      <h1>Hello MyModal</h1>
    </ReactModal>
  );
};

export default MyModal;
