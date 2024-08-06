import { useState } from "react";
import { useTranslation } from "react-i18next";
import datastorage from "../datastorage";
import "./ManageUser.css";
import Button from "../../../elements/buttonaction/Button";
import Key from "../../../auth/Key";

function ManageUser() {
  const { t } = useTranslation("global");
  const [searchTerm, setSearchTerm] = useState("");
  const [employees, setEmployees] = useState(datastorage(t));

  const handleDelete = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const filteredData = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = filteredData.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
  });

  return (
    <div className="manage-user-container">
      <h3 className="title">{Key((state) => state.isAdmin) ? t("allemployees.manageuser") : t("sidebar.all-employees")}</h3>
      <div className="create-search-field">
        {Key((state) => state.isAdmin) ? (
          <button className="search-field-button">
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
            <li className="separate-bar">{employee.name}</li>
            <li className="separate-bar">{employee.department}</li>
            <li className="separate-bar">{employee.division}</li>
            <li>
              <Button onDelete={() => handleDelete(employee.id)} />
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default ManageUser;
