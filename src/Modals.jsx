import React, {useContext} from "react";
import ReactDom from 'react-dom';
import {ModalsDispatchContext, ModalsStateContext} from "./ModalsContext";

const Modals = () => {
    const openedModals = useContext(ModalsStateContext);
    const {close} = useContext(ModalsDispatchContext);

    return ReactDom.createPortal(
        <div className={'modal-wrapper'}>
            {openedModals.map((modalInfo, index) => {
                const {Component, props, isOpen} = modalInfo;
                const onClose = () => {
                    console.log('닫기')
                    close(Component)
                  
                }
                return <Component
                    key={index}
                    isOpen={isOpen}
                    onClose={onClose} {...props} />;
            })}
        </div>
        , document.body
    );
};

export default Modals;
