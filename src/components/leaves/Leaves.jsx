import { useTranslation } from "react-i18next";


function Leaves(){
     const { t } = useTranslation("global");
     return(
          <div>{t("sidebar.leaves")}</div>
     )
}

export default Leaves