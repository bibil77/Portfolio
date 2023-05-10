import { Typography } from "@mui/material";
import Card from "./Card";
import { useTranslation } from "next-i18next";
export default function Po() {
  const { t } = useTranslation("common");
  return (
    <Card title="PROFIL & OBJECTIFS">
      <Typography color="#4f5050" ml={1}>
        {t("PO.description")}
      </Typography>
    </Card>
  );
}
