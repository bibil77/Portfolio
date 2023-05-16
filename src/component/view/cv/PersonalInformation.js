import { Link, Stack, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";

// icon
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import PinDropIcon from "@mui/icons-material/PinDrop";
import LanguageIcon from "@mui/icons-material/Language";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function PersonalInformation() {
  const { t } = useTranslation("common");
  return (
    <>
      <Stack direction="row" alignContent="center" ml={2}>
        <PhoneIphoneIcon sx={{ fill: "#c49366" }} />
        <Link href="tel:0769309221" fontSize="large" ml={3} underline="none">
          07.69.30.92.21
        </Link>
      </Stack>
      <Stack direction="row" alignContent="center" ml={2} mt={3}>
        <EmailIcon sx={{ fill: "#c49366" }} />
        <Link
          href="mailto:dupin.benjamin28@gmail.com"
          fontSize="large"
          ml={3}
          underline="none"
          sx={{ overflowWrap: { xs: "anywhere", sm: "normal" } }}
        >
          dupin.benjamin28@gmail.com
        </Link>
      </Stack>
      <Stack direction="row" alignContent="center" ml={2} mt={3}>
        <PinDropIcon sx={{ fill: "#c49366" }} />
        <Typography variant="body" fontSize="large" ml={3} color="#5f5f5f">
          Le Mée sur Seine, 77350
        </Typography>
      </Stack>
      <Stack direction="row" alignContent="center" ml={2} mt={3}>
        <LanguageIcon sx={{ fill: "#c49366" }} />
        <Link
          href="https://www.linkedin.com/in/benjaminDupin"
          fontSize="large"
          ml={3}
          underline="none"
          target="_blank"
          sx={{ overflowWrap: { xs: "anywhere", sm: "normal" } }}
        >
          www.linkedin.com/in/benjaminDupin
        </Link>
      </Stack>
      <Stack direction="row" alignContent="center" ml={2} mt={3}>
        <TimeToLeaveIcon sx={{ fill: "#c49366" }} />
        <Typography variant="body" fontSize="large" ml={3} color="#5f5f5f">
          {t("permis")}
        </Typography>
      </Stack>
      <Stack direction="row" alignContent="center" ml={2} mt={3}>
        <CalendarMonthIcon sx={{ fill: "#c49366" }} />
        <Typography variant="body" fontSize="large" ml={3} color="#5f5f5f">
          28/02/2003
        </Typography>
      </Stack>
    </>
  );
}

export default PersonalInformation;
