import Key from "../../auth/Key";
import { useNavigate, NavLink } from "react-router-dom";
import Logo from "../../elements/logo/Logo";

import { RxDashboard } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";
import { GrAnnounce } from "react-icons/gr";
import { PiStudentBold } from "react-icons/pi";
import { GrDocumentUser } from "react-icons/gr";
import { GrDocumentText } from "react-icons/gr";
import { MdLogout } from "react-icons/md";
import { useTranslation } from "react-i18next";

import "./Sidebar.css";
function Sidebar() {
  const { t } = useTranslation("global");
  const setIsLogin = Key((state) => state.setIsLogin);
  const setIsAdmin = Key((state) => state.setIsAdmin);
  const IsAdmin = Key((state) => state.isAdmin);
  const navigate = useNavigate();
  const handleLeave = () => {
    setIsLogin(false);
    setIsAdmin(false);
    navigate("/login");
  };
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <Logo />
        <nav className="sidebar-nav">
          <NavLink
            to="dashboard"
            className={`navlink ${({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""}`}
          >
            <RxDashboard className="sidebar-icon" />
            <span>{t("sidebar.dashboard")}</span>
          </NavLink>
          {IsAdmin ? (
            <NavLink
              to="all-employees"
              className={`navlink ${({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""}`}
            >
              <IoIosPeople className="sidebar-icon" />
              <span>{t("sidebar.all-employees")}</span>
            </NavLink>
          ) : null}

          <NavLink
            to="announcement"
            className={`navlink ${({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""}`}
          >
            <GrAnnounce className="sidebar-icon" />
            <span>{t("sidebar.announcement")}</span>
          </NavLink>
          <NavLink
            to="trainings"
            className={`navlink ${({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""}`}
          >
            <PiStudentBold className="sidebar-icon" />
            <span>{t("sidebar.training")}</span>
          </NavLink>
          <NavLink
            to="document"
            className={`navlink ${({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""}`}
          >
            <GrDocumentText className="sidebar-icon" />
            <span>{t("sidebar.documents")}</span>
          </NavLink>
          <NavLink
            to="leaves"
            className={`navlink ${({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""}`}
          >
            <GrDocumentUser className="sidebar-icon" />
            <span>{t("sidebar.leaves")}</span>
          </NavLink>
        </nav>
      </div>
      <button className="leave-button" onClick={handleLeave}>
        <MdLogout className="sidebar-icon" />
        <span>{t("sidebar.log-out")}</span>
      </button>
    </div>
  );
}

export default Sidebar;
