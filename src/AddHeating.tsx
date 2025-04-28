import { useState } from "react";
import "./AddHeating.css";
import { Modal } from "./components/Modal";
import { Assistant } from "./components/Assistant";
import { FormGroup } from "./FormGroup";

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
        <Modal title="Heizflächen hinzufügen" onClose={handleCloseModal}>
          <label htmlFor="heizkreis">Heizkreis</label>
          <select id="heizkreis">
            <option>Heating circuit 1</option>
          </select>
          <button className="link">Heizkreis hinzufügen</button>
          <FormGroup title="Flachheizkörper" />
          <FormGroup title="Stahl- / Gussradiator" />
          <FormGroup title="Rohr- / Gussradiator" />
        </Modal>
      )}
      <Assistant />
    </>
  );
}

export default App;
