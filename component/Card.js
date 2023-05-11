import { BorderColor } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { useTranslation } from "next-i18next";

export default function Card({ children, border, title }) {
  const { t } = useTranslation("common");
  return (
    <Stack
      // maxWidth="sm"
      ml={1}
      mt={1}
      sx={{
        borderTop: border ? 3 : 0,
        borderBottom: { xs: title === "PROJETS ACADÉMIQUE" ? 3 : 0, md: 0 },
        borderColor: "#8d9090",
      }}
    >
      <Typography
        variant="h6"
        color="#2f3030"
        sx={{
          fontWeight: 600,
          letterSpacing: 3,
        }}
        pt={1}
      >
        {t(title)}
      </Typography>

      {children}
    </Stack>
  );
}
