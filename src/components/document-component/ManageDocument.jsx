import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./ManageDocument.css";
import Button from "../../elements/buttondelete/ButtonDelete";
import Modal from "../all-employee-component/addnewemployee/Modal";
import Key from "../../auth/Key";
import { CiSearch } from "react-icons/ci";
function ManageDocuments() {
  const { t } = useTranslation("global");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ id: null, title: "", description: "", department: "", startDate: "" });
  const [documents, setDocuments] = useState([
    { id: 1, title: "Project Proposal", description: "Proposal for the new project", department: "R&D", startDate: "2024-08-15" },
    { id: 2, title: "Budget Report", description: "Quarterly budget report", department: "Finance", startDate: "2024-09-30" },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    setDocuments(documents.filter((document) => document.id !== id));
  };

  const openModal = () => {
    setFormData({ id: null, title: "", description: "", department: "", startDate: "" });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    if (!formData.id) {
      setDocuments((prev) => [
        ...prev,
        { ...formData, id: prev.length + 1 },
      ]);
    }
    closeModal();
  };

  const filteredDocuments = documents.filter(
    (document) =>
      document.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      document.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="manage-documents-container">
      <h3 className="title">{t("sidebar.documents")}</h3>
      <div className="create-search-field">
    
        {Key((state)=>state.isAdmin)?<button onClick={openModal} className="search-field-button">
          {t("button.create")}
        </button>:null}
        <div className="all-comp-search-wrap">
        <input
          type="text"
          placeholder={t("search")}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-field"
        />
          <CiSearch className="all-comp-search-icon"/>
        </div>
      </div>
      <div className="display-information">
        <ul className="training-grid">
          <li className="separate-bar">Title</li>
          <li className="separate-bar">Description</li>
          <li className="locate-center">Action</li>
        </ul>
        {filteredDocuments.map((document) => (
          <ul className="training-content" key={document.id}>
            <li className="separate-bar">{document.title}</li>
            <li className="separate-bar">{document.description}</li>
            <li>
              <Button
                onDelete={() => handleDelete(document.id)}
              />
            </li>
          </ul>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2 className="modal-title">Create a New Document</h2>
        <div className="form-container">
          <label className="form-label">Title</label>
          <input
            placeholder="Title"
            className="form-input"
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <label className="form-label">Description</label>
          <input
            placeholder="Description"
            className="form-input"
            type="text"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
          <label className="form-label">Upload File</label>
          <input
            className="form-input"
            type="file"
            value={formData.department}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
          />
          <button className="form-button" onClick={handleSave}>Save</button>
        </div>
      </Modal>
    </div>
  );
}

export default ManageDocuments;
