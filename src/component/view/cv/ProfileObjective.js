import { Typography } from "@mui/material";
import Card from "../../Card";
import { useTranslation } from "next-i18next";
export default function Po() {
  const { t } = useTranslation("common");
  return (
    <Card title="PROFIL">
      <Typography color="#4f5050" ml={1}>
        {t("PO.description1")}
        <br />
        <Typography
          component={"span"}
          sx={{ display: { sx: "block", md: "none" }, fontWeight: 500 }}
        >
          {t("PO.description2")}
        </Typography>

        {/* {t("PO.description3")} */}
      </Typography>
    </Card>
  );
}
