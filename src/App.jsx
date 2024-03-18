import useModals from "./hooks/useModals";
import React from 'react'
import CustomModal from "./components/CustomModal";

export default function App() {
    const {openModal} = useModals();

    const handleOnClick = () => {
        openModal(CustomModal, {name: "World"});
    };

    return (
        <div className="App">
            <h1>context api로 모달 열기</h1>
            <button onClick={handleOnClick}>열기 버튼</button>
        </div>
    );
}
