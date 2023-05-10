import { Avatar, Stack, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
export default function Header() {
  const { t } = useTranslation("header");
  return (
    <Stack
      direction="row"
      justifyContent="left"
      sx={{
        backgroundColor: "#868a8d",
        color: "#fff",
        pb: 2,
        pt: 1,
      }}
    >
      {/* photo de profil */}
      <Avatar
        alt="Benjamin DUPIN"
        src="/images/moi1.jpg"
        sx={{
          width: 200,
          height: 200,
          borderRadius: 5,
          border: "4px solid #4f5050",
          ml: 2,
        }}
      >
        BD
      </Avatar>
      <Stack ml={7}>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: 500,
          }}
        >
          BENJAMIN DUPIN
        </Typography>
        <Typography variant="h5" component="h2" mt={2} ml={2}>
          {t("title")}
        </Typography>
      </Stack>
      <a href="/en">english</a>
      <a href="/fr">francais</a>
    </Stack>
  );
}
