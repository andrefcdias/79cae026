import "./Modal.css";
import { BsX } from "react-icons/bs";

type ModalProps = {
  title: string;
  onClose: () => void;
  children?: React.ReactNode;
};
export const Modal = ({ title, onClose, children }: ModalProps) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-header-title">{title}</h1>
          <button className="raw" onClick={onClose}>
            <BsX size={32} />
          </button>
        </div>
        <div className="modal-main-content">
          {children}
          <div className="modal-footer">
            <button onClick={onClose}>Schließen</button>
          </div>
        </div>
      </div>
      <div className="modal-background" onClick={onClose} />
    </div>
  );
};
