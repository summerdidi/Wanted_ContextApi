import React, { useState, useMemo } from "react";
import { ModalsDispatchContext, ModalsStateContext } from "./ModalsContext";
import Modals from "./Modals";

const ModalsProvider = ({ children }) => {
  const [openedModals, setOpenedModals] = useState([]);

  const open = (Component, props) => {
    setOpenedModals((prevModals) => {
      return [
        ...prevModals,
        {
          Component,
          props,
          isOpen: true,
        },
      ];
    });
  };

  const close = (Component) => {
    setOpenedModals((prevModals) => {
      return prevModals.filter((item) => item.Component !== Component);
    });
  };

  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <ModalsStateContext.Provider value={openedModals}>
      <ModalsDispatchContext.Provider value={dispatch}>
        <Modals />
        {children}
      </ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
};

export default ModalsProvider;
