import {useContext} from "react";
import {ModalsDispatchContext} from "../ModalsContext";

export default function useModals() {
    const {open, close} = useContext(ModalsDispatchContext);

    const openModal = (Component, props) => {
        open(Component, props);
    };

    const closeModal = (Component) => {
        close(Component);
    };

    return {openModal, closeModal};
}

