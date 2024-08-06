import { useTranslation } from "react-i18next";


function Document(){
     const { t } = useTranslation("global");
     return(
          <div>{t("sidebar.documents")}</div>
     )
}

export default Document