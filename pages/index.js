import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Avatar, Button, Link } from "@mui/material";
import { Stack } from "@mui/material";

// component
import Card from "../component/Card";
import Po from "../component/Po";
import FormationCard from "../component/FormationCard";
import TextCard from "../component/TextCard";
import Header from "../component/Header";
import DrawerMenu from "../component/DrawerMenu";

// icon
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import PinDropIcon from "@mui/icons-material/PinDrop";
import LanguageIcon from "@mui/icons-material/Language";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

// translate
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Index() {
  const { t } = useTranslation("common");
  return (
    <Container sx={{ px: { xs: 0 } }}>
      {/* --------------HEADER ---------------------*/}
      <Header />
      {/* --------------------FIN HEADER----------------------------- */}
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
        }}
      >
        {/* ########################################################[COTÉ GAUCHE]######################################################################### */}
        <Stack>
          {/* -------------------PROFILS & OBEJECT--------------------------- */}
          <Po />
          {/* -------------------FIN PROFILS & OBEJECT--------------------------- */}
          {/* -------------------FORMATION--------------------------- */}
          <Card border={true} title="FORMATION">
            <FormationCard
              date={t("formation.description1.date")}
              title={t("formation.description1.title")}
              description={t("formation.description1.text")}
            />
            <FormationCard
              date={t("formation.description2.date")}
              title={t("formation.description2.title")}
              list={true}
              listName="londre"
            />
            <FormationCard
              date={t("formation.description3.date")}
              title={t("formation.description3.title")}
              list={true}
              listName="bac"
            />
          </Card>
          {/* -------------------FIN FORMATION--------------------------- */}
          {/* -------------------EXPERIENCE--------------------------- */}
          <Card border={true} title="ep.title">
            <TextCard title={true} listName="exp" />
          </Card>
          {/* -------------------FIN EXPERIENCE--------------------------- */}
          {/* -------------------PROJET ACADÉMIQUE--------------------------- */}
          <Card border={true} title="PROJETS ACADÉMIQUE">
            <TextCard listName="projets" />
          </Card>
          {/* -------------------FIN PROJET ACADÉMIQUE--------------------------- */}
        </Stack>
        {/* fin coté gauche */}
        {/* ########################################################[COTÉ DROIT]######################################################################### */}

        <Stack
          sx={{
            borderLeft: { xs: 0, md: 2 },
            borderLeftColor: { xs: "none", md: "#8d9090" },
            ml: { xs: 0, md: 5 },
            mt: 5,
          }}
        >
          {/* ----------------------INFORMATION PERSONNEL----------------------- */}
          <Stack direction="row" alignContent="center" ml={2}>
            <PhoneIphoneIcon sx={{ fill: "#c49366" }} />
            <Typography variant="body" fontSize="large" ml={3}>
              07.69.30.92.21
            </Typography>
          </Stack>
          <Stack direction="row" alignContent="center" ml={2} mt={3}>
            <EmailIcon sx={{ fill: "#c49366" }} />
            <Link
              href="mailto:dupin.benjamin28@gmail.com"
              fontSize="large"
              ml={3}
              underline="none"
              color="#000"
              sx={{ overflowWrap: { xs: "anywhere", sm: "normal" } }}
            >
              dupin.benjamin28@gmail.com
            </Link>
          </Stack>
          <Stack direction="row" alignContent="center" ml={2} mt={3}>
            <PinDropIcon sx={{ fill: "#c49366" }} />
            <Typography variant="body" fontSize="large" ml={3}>
              74 rue de starsbourg, le Mée sur Seine, 77350
            </Typography>
          </Stack>
          <Stack direction="row" alignContent="center" ml={2} mt={3}>
            <LanguageIcon sx={{ fill: "#c49366" }} />
            <Link
              href="https://www.linkedin.com/in/benjaminDupin"
              fontSize="large"
              ml={3}
              color="#000"
              underline="none"
              target="_blank"
              sx={{ overflowWrap: { xs: "anywhere", sm: "normal" } }}
            >
              www.linkedin.com/in/benjaminDupin
            </Link>
          </Stack>
          <Stack direction="row" alignContent="center" ml={2} mt={3}>
            <TimeToLeaveIcon sx={{ fill: "#c49366" }} />
            <Typography variant="body" fontSize="large" ml={3}>
              {t("permis")}
            </Typography>
          </Stack>
          <Stack direction="row" alignContent="center" ml={2} mt={3}>
            <CalendarMonthIcon sx={{ fill: "#c49366" }} />
            <Typography variant="body" fontSize="large" ml={3}>
              28/02/2003
            </Typography>
          </Stack>
          {/* ----------------------FIN INFORMATION PERSONNEL----------------------- */}
          {/* ----------------------COMPÉTENCE IT----------------------- */}
          <Card title="competence.title" border={true}>
            <TextCard title={true} listName="competence" />
          </Card>
          {/* ----------------------FIN COMPÉTENCE IT----------------------- */}
          {/* ----------------------SOFT SKILLS----------------------- */}
          <Card title="ss.title" border={true}>
            <TextCard listName="skill" />
          </Card>
          {/* ----------------------FIN SOFT SKILLS----------------------- */}
          {/* ----------------------LANGUES----------------------- */}
          <Card title="lang.title" border={true}>
            <TextCard listName="lang" />
          </Card>
          {/* ----------------------FIN LANGUES----------------------- */}
          {/* ----------------------CENTRE D'INTÉRÊT----------------------- */}
          <Card title="ci.title" border={true}>
            <TextCard listName="centreIt" />
          </Card>
          {/* ----------------------FIN CENTRE D'INTÉRÊT----------------------- */}
        </Stack>
        {/* fin coté droit */}
      </Stack>
    </Container>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "header"])),
      // Will be passed to the page component as props
    },
  };
}
