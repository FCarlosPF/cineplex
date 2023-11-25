import React from "react";
import TableComponent from "./TableComponent";
import "../styles/modal.css";

interface ModalProps {
  showModal: boolean;
  handleClose: () => void;
  data: { column1: string; column2: string }[];
}

const ModalComponent: React.FC<ModalProps> = ({
  showModal,
  handleClose,
  data,
}) => {
  return (
    <div className={`modal ${showModal ? "show" : ""}`}>
      <div className="modal-content ">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <div className="h-full flex justify-center ">
          <TableComponent />
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
