import { useTranslation } from "react-i18next";

function Training(){
     const { t } = useTranslation("global");
     return(
          <div>{t("sidebar.training")}</div>
     )
}

export default Training