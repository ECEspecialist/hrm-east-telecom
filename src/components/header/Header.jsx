import "./Header.css";
import { GrLanguage } from "react-icons/gr";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useTranslation } from "react-i18next";
import Key from "../../auth/Key";
function Header() {
  const setLanguage = Key((state)=>state.setLanguage);
  const { i18n } = useTranslation("global");
  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
    setLanguage(event.target.value);
  }; 
  return (
    <div className="header">
      <div className="header-wrap">
        <form className="custom-select-wrapper">
          <GrLanguage className="icon-language"/>
          <select id="languages" name="languages" className="custom-select" onChange={handleLanguageChange} value={i18n.language}>
            <option value="en">English</option>
            <option value="uz">Oʻzbekcha</option>
            <option value="ru">Русский</option>
            <option value="ko">한국어</option>
          </select>
        </form>
        <IoMdNotificationsOutline className="header-icon-notification"/>
        <CgProfile className="header-icon-profile"/>
      </div>
    </div>
  );
}

export default Header;
