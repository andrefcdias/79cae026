import { Accordion } from "./components/Accordion";
import { BsPlus } from "react-icons/bs";
import "./FormGroup.css";

type FormGroupProps = {
  title: string;
};
export const FormGroup = ({ title }: FormGroupProps) => {
  return (
    <Accordion title={title}>
      <div className="form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="art">Heizkörper Art</label>
            <input id="art" type="number" placeholder="Eingabe" />
          </div>
          <div className="form-group">
            <label htmlFor="typ">Heizkörper Typ</label>
            <input id="typ" type="number" placeholder="Eingabe" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="höhe">Höhe (mm)</label>
            <input id="höhe" type="number" placeholder="Eingabe" />
          </div>
          <div className="form-group">
            <label htmlFor="länge">Länge (mm)</label>
            <input id="länge" type="number" placeholder="Eingabe" />
          </div>
        </div>
        <button className="primary add">
          <BsPlus size={24} />
          Hinzufügen
        </button>
      </div>
    </Accordion>
  );
};
