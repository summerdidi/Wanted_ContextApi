import "./styles.css";
import MyModal from "../src/components/MyModal";
import useModals from "./hooks/useModals";

export default function App() {
  const { openModal } = useModals();

  const handleOnClick = () => {
    openModal(MyModal, { name: "World" });
  };

  return (
    <div className="App">
      <h1>hello</h1>
      <button onClick={handleOnClick}>Open Modal</button>
    </div>
  );
}
