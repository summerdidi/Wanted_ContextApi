import React, { useContext } from "react";
import { ModalsStateContext } from "./ModalsContext";

const Modals = () => {
  const openedModals = useContext(ModalsStateContext);

  return (
    <div>
      {openedModals.map((modal, index) => {
        const { Component, props, isOpen } = modal;

        return <Component key={index} isOpen={isOpen} {...props} />;
      })}
    </div>
  );
};

export default Modals;
