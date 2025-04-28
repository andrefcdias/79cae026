import { useState } from "react";
import "./Accordion.css";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";

type AccordionProps = {
  open?: boolean;
  title: string;
  children: React.ReactNode;
};
export const Accordion = ({ open, title, children }: AccordionProps) => {
  const [internalOpen, setInternalOpen] = useState(open || false);

  const handleToggle = () => {
    setInternalOpen((prev) => !prev);
  };

  return (
    <div className="accordion">
      <button className="accordion-button" onClick={handleToggle}>
        {internalOpen ? <BsChevronDown /> : <BsChevronRight />}
        <h2>{title}</h2>
      </button>
      <div className={`accordion-content ${internalOpen && "open"}`}>
        {children}
      </div>
    </div>
  );
};
