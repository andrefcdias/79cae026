import "./Modal.css";

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
          <button onClick={onClose}>x</button>
        </div>
        {children}
      </div>
    </div>
  );
};
