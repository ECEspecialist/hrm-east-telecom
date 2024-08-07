import ReactModal from "react-modal";
import "./Modal.css";
import PropTypes from "prop-types";
const Modal = ({ isOpen, onRequestClose, children }) => {

  return (
       <ReactModal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Add New Employee"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
     <div className="modal-container">
        <h2 className="modal-title">Add New Employees</h2>
        {children}
        <button className="close-form-button" onClick={onRequestClose}>Close</button>
     </div>
      </ReactModal>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;
