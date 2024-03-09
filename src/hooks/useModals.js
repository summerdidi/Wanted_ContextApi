import { useContext } from "react";
import { ModalsDispatchContext } from "../ModalsContext";

export default function useModals() {
  const { open, close } = useContext(ModalsDispatchContext);

  const openModal = (component, props) => {
    open(component, props);
  };

  const closeModal = (component) => {
    close(component);
  };

  return { openModal, closeModal };
}
