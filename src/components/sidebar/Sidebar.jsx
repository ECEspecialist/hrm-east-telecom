import Key from "../../auth/Key";
import { useNavigate, NavLink } from "react-router-dom";
import Logo from "../../elements/Logo/Logo";
import "./Sidebar.css";
function Sidebar() {
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
        <NavLink
          to="dashboard"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Dashboard
        </NavLink>
        {IsAdmin?(
                  <NavLink
                  to="all-employees"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  All Employees
                </NavLink>
        ):null}

        <NavLink
          to="announcement"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Announcement
        </NavLink>
        <NavLink
          to="trainings"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Trainings
        </NavLink>
        <NavLink
          to="document"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Document
        </NavLink>
        <NavLink
          to="leaves"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Leaves
        </NavLink>
      </div>
      <button onClick={handleLeave}>Leave</button>
    </div>
  );
}

export default Sidebar;
