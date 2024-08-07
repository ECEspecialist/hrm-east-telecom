import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./ManageUser.css";
import Button from "../../../elements/buttonaction/Button";
import Key from "../../../auth/Key";
import Modal from "../addnewemployee/Modal";
import Form1 from "../addnewemployee/personalinformation/PersonalInformation";
import Form2 from "../addnewemployee/work/Work";
import Form3 from "../addnewemployee/contact/Contact";
import Form4 from "../addnewemployee/documents/Documents";
import Form5 from "../addnewemployee/report/Report";

function ManageUser() {
  const { t } = useTranslation("global");
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentForm, setCurrentForm] = useState(1);
  const [allData] = useState([
    { id: 1,
      personalInfo: {
        firstName: 'Abdulla',
        lastName: 'Abdullayev',
        dateOfBirth: '1990-01-01', 
        maritalStatus: 'Single'   
      },
      workInfo: {
        employmentType: 'Full-time',
        duty: 'Software Development',
        department: 'NBD',
        team: 'SW Development',
        jobTitle: 'Software Engineer',
        wages: '1000 USD',
        joinedDate: '2015-06-15', 
        education: 'Bachelor\'s Degree in Computer Science' 
      },
      contactInfo: {
        region: 'Tashkent',
        phoneNumber: '+998 00 000 00 00', 
        email: 'abdulla@example.com'
      },
      documents: {
        document1: 'resume.pdf', 
        document2: 'coverletter.pdf' 
      },
      reportInfo: {
        supervisor: 'John Doe',
        firstApprover: 'Jane Smith',
        secondApprover: 'Robert Brown'
      }
    },
    { id: 2,
      personalInfo: {
        firstName: 'Bobur',
        lastName: 'Abdullayev',
        dateOfBirth: '1990-01-01', 
        maritalStatus: 'Single'   
      },
      workInfo: {
        employmentType: 'Full-time',
        duty: 'Software Development',
        department: 'NBD',
        team: 'Marketing',
        jobTitle: 'Software Engineer',
        wages: '1000 USD',
        joinedDate: '2015-06-15', 
        education: 'Bachelor\'s Degree in Computer Science' 
      },
      contactInfo: {
        region: 'Tashkent',
        phoneNumber: '+998 00 000 00 00', 
        email: 'bobur@example.com'
      },
      documents: {
        document1: 'resume.pdf', 
        document2: 'coverletter.pdf' 
      },
      reportInfo: {
        supervisor: 'John Doe',
        firstApprover: 'Jane Smith',
        secondApprover: 'Robert Brown'
      }
    }
  ]);

  const [employees, setEmployees] = useState(allData);

  const [formData, setFormData] = useState({
    id: null,
    personalInfo: { firstName: '', lastName: '', dateOfBirth: '', maritalStatus: '' },
    workInfo: { employmentType: '', duty: '', department: '', team: '', jobTitle: '', wages: '', joinedDate: '', education: '' },
    contactInfo: { region: '', phoneNumber: '', email: '' },
    documents: { document1: '', document2: '' },
    reportInfo: { supervisor: '', firstApprover: '', secondApprover: '' }
  });

  const handleDelete = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const openModal = (employee = null) => {
    if (employee) {
      // Editing an existing employee
      setFormData({
        id: employee.id,
        personalInfo: employee.personalInfo,
        workInfo: employee.workInfo,
        contactInfo: employee.contactInfo,
        documents: employee.documents,
        reportInfo: employee.reportInfo
      });
    } else {
      // Creating a new employee
      setFormData({
        id: null,
        personalInfo: { firstName: '', lastName: '', dateOfBirth: '', maritalStatus: '' },
        workInfo: { employmentType: '', duty: '', department: '', team: '', jobTitle: '', wages: '', joinedDate: '', education: '' },
        contactInfo: { region: '', phoneNumber: '', email: '' },
        documents: { document1: '', document2: '' },
        reportInfo: { supervisor: '', firstApprover: '', secondApprover: '' }
      });
    }
    setCurrentForm(1);
    setIsModalOpen(true);
  };

  const closeModal = (newEmployeeData) => {
    if (newEmployeeData) {
      if (formData.id) {
        // Edit existing employee
        setEmployees(prev =>
          prev.map(employee =>
            employee.id === formData.id
              ? {
                  ...employee,
                  personalInfo: formData.personalInfo,
                  workInfo: formData.workInfo,
                  contactInfo: formData.contactInfo,
                  documents: formData.documents,
                  reportInfo: formData.reportInfo
                }
              : employee
          )
        );
      } else {
        // Add new employee
        setEmployees(prev => [
          ...prev,
          {
            id: prev.length + 1, // Generate new ID
            personalInfo: formData.personalInfo,
            workInfo: formData.workInfo,
            contactInfo: formData.contactInfo,
            documents: formData.documents,
            reportInfo: formData.reportInfo
          }
        ]);
      }
    }
    setIsModalOpen(false);
    setCurrentForm(1);
  };

  const nextForm = () => {
    setCurrentForm((prev) => prev + 1);
  };

  const previousForm = () => {
    setCurrentForm((prev) => prev - 1);
  };

  const filteredData = employees.filter((employee) =>
    employee.personalInfo.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = filteredData.sort((a, b) => {
    const nameA = a.personalInfo.firstName.toLowerCase();
    const nameB = b.personalInfo.firstName.toLowerCase();
    return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
  });

  return (
    <div className="manage-user-container">
      <h3 className="title">
        {Key((state) => state.isAdmin) ? t("allemployees.manageuser") : t("sidebar.all-employees")}
      </h3>
      <div className="create-search-field">
        {Key((state) => state.isAdmin) ? (
          <button onClick={() => openModal()} className="search-field-button">
            {t("allemployees.create")}
          </button>
        ) : null}
        <input
          className="search-field"
          type="text"
          placeholder={t("search")}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="display-information">
        <ul className="information-title">
          <li className="separate-bar">{t("allemployees.employeename")}</li>
          <li className="separate-bar">{t("allemployees.department")}</li>
          <li className="separate-bar">{t("allemployees.division")}</li>
          <li className="locate-center">{t("allemployees.action")}</li>
        </ul>
        {sortedData.map((employee) => (
          <ul className="employee-content" key={employee.id}>
            <li className="separate-bar">{employee.personalInfo.firstName}</li>
            <li className="separate-bar">{employee.workInfo.department}</li>
            <li className="separate-bar">{employee.workInfo.team}</li>
            <li>
              <Button onEdit={() => openModal(employee)} onDelete={() => handleDelete(employee.id)} />
            </li>
          </ul>
        ))}
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onRequestClose={() => closeModal()} 
        className="modal-content"
        overlayClassName="modal-overlay"
        shouldCloseOnOverlayClick={false}
      >
        {currentForm === 1 && <Form1 formData={formData} setFormData={setFormData} next={nextForm} />}
        {currentForm === 2 && <Form2 formData={formData} setFormData={setFormData} next={nextForm} previous={previousForm} />}
        {currentForm === 3 && <Form3 formData={formData} setFormData={setFormData} next={nextForm} previous={previousForm} />}
        {currentForm === 4 && <Form4 formData={formData} setFormData={setFormData} next={nextForm} previous={previousForm} />}
        {currentForm === 5 && <Form5 formData={formData} setFormData={setFormData} previous={previousForm} close={closeModal} />}
      </Modal>
    </div>
  );
}

export default ManageUser;
