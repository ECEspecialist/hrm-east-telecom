import { useTranslation } from "react-i18next";

function Announcement(){
     const { t } = useTranslation("global");
     return(
          <div>{t("sidebar.announcement")}</div>
     )
}

export default Announcement