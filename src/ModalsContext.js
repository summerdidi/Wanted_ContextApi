import { createContext } from "react";

export const ModalsDispatchContext = createContext({
    open: (Component, props) => {
    },
    close: (Component) => {
    }
});

export const ModalsStateContext = createContext([]);
