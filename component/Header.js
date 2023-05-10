import {
  Avatar,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
  Link,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import { useState } from "react";
export default function Header() {
  const { t } = useTranslation("header");
  const [lang, setLang] = useState("fr");

  const handleChange = (event) => {
    setLang(event.target.value);
  };

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
      <FormControl
        sx={{
          ml: "auto",
          color: "#000",
          "&:focus": {
            borderColor: "#000",
          },
        }}
      >
        <InputLabel id="demo-simple-select-label">{t("lang.title")}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={lang}
          label={t("lang.title")}
          onChange={handleChange}
        >
          <MenuItem value={"fr"} sx={{ padding: 0 }}>
            <Link
              href="/fr"
              underline="none"
              color="#000"
              textAlign="center"
              sx={{ width: "100%", py: 1 }}
            >
              {t("lang.fr")}
            </Link>
          </MenuItem>
          <MenuItem value={"en"} sx={{ padding: 0 }}>
            <Link
              href="/en"
              underline="none"
              color="#000"
              textAlign="center"
              sx={{ width: "100%", py: 1 }}
            >
              {t("lang.en")}
            </Link>
          </MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}
