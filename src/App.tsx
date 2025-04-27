import { useState } from "react";
import "./App.css";
import { Modal } from "./components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button onClick={handleOpenModal}>Open modal</button>
      {modalOpen && (
        <Modal
          title="Heizflächen hinzufügen"
          onClose={handleCloseModal}
        ></Modal>
      )}
    </>
  );
}

export default App;
