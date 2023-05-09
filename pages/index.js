import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { Stack } from "@mui/material";
// component
import Card from "../component/Card";
import FormationCard from "../component/FormationCard";
import TextCard from "../component/TextCard";
// icon
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import PinDropIcon from "@mui/icons-material/PinDrop";
import LanguageIcon from "@mui/icons-material/Language";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function Index() {
  return (
    <Container>
      {/* --------------HEADER ---------------------*/}
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
            CONCEPTEUR <br />
            DÉVELOPPEUR
          </Typography>
        </Stack>
      </Stack>
      {/* --------------------FIN HEADER----------------------------- */}
      <Stack direction="row">
        {/* ########################################################[COTÉ GAUCHE]######################################################################### */}
        <Stack>
          {/* -------------------PROFILS & OBEJECT--------------------------- */}
          <Card title="PROFIL & OBJECTIFS">
            <Typography color="#4f5050" ml={1}>
              Passionné d'infomatique et de création, j'ai décidé d'en faire mon
              métier. Je suis actuellement étudiant en{" "}
              <strong>développement informatique.</strong>
              Afin de lancer ma carrière et de consolider mon champ de
              compétences, je suis à la recherche d'une alternance dans la
              programmation-développement
            </Typography>
          </Card>
          {/* -------------------FIN PROFILS & OBEJECT--------------------------- */}
          {/* -------------------FORMATION--------------------------- */}
          <Card border={true} title="FORMATION">
            <FormationCard
              date="DEPUIS 2021 EFREI PARIS"
              title="LICENCE INGÉNERIE & NUMÉRIQUES"
              description="Mathématiques, Anglais, Communication,
          Javascript, système d'exploitation, SQL, Node JS,
          HTMUCSS, Reactjsl native, firebase"
            />
            <FormationCard
              date="DU 05/02/2023 au 18/03/2023 EFREI PARIS"
              title="PROJET ACADÉMIQUE À LONDRES ( 6 SEMAINES) Porthsmouth university "
              list={true}
              listName="londre"
            />
            <FormationCard
              date="2020-2021 GEORGE SAND"
              title="BACCALAURÉAT GÉNÉRAL"
              list={true}
              listName="bac"
            />
          </Card>
          {/* -------------------FIN FORMATION--------------------------- */}
          {/* -------------------EXPERIENCE--------------------------- */}
          <Card border={true} title="EXPÉRIENCES PROFESSIONNELS">
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
            borderLeft: 2,
            borderLeftColor: "#8d9090",
            ml: 5,
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
            <Typography variant="body" fontSize="large" ml={3}>
              dupin.benjamin28@gmail.com
            </Typography>
          </Stack>
          <Stack direction="row" alignContent="center" ml={2} mt={3}>
            <PinDropIcon sx={{ fill: "#c49366" }} />
            <Typography variant="body" fontSize="large" ml={3}>
              74 rue de starsbourg, le Mée sur Seine, 77350
            </Typography>
          </Stack>
          <Stack direction="row" alignContent="center" ml={2} mt={3}>
            <LanguageIcon sx={{ fill: "#c49366" }} />
            <Typography variant="body" fontSize="large" ml={3}>
              https://www.linkedin.com/in/benjaminDupin
            </Typography>
          </Stack>
          <Stack direction="row" alignContent="center" ml={2} mt={3}>
            <TimeToLeaveIcon sx={{ fill: "#c49366" }} />
            <Typography variant="body" fontSize="large" ml={3}>
              Permis B (Véhiculé)
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
          <Card title="COMPÉTENCE IT" border={true}>
            <TextCard title={true} listName="competence" />
          </Card>
          {/* ----------------------FIN COMPÉTENCE IT----------------------- */}
          {/* ----------------------SOFT SKILLS----------------------- */}
          <Card title="SOFT SKILLS" border={true}>
            <TextCard listName="skill" />
          </Card>
          {/* ----------------------FIN SOFT SKILLS----------------------- */}
          {/* ----------------------LANGUES----------------------- */}
          <Card title="LANGUES" border={true}>
            <TextCard listName="lang" />
          </Card>
          {/* ----------------------FIN LANGUES----------------------- */}
          {/* ----------------------CENTRE D'INTÉRÊT----------------------- */}
          <Card title="CENTRE D'INTÉRÊT" border={true}>
            <TextCard listName="centreIt" />
          </Card>
          {/* ----------------------FIN CENTRE D'INTÉRÊT----------------------- */}
        </Stack>
        {/* fin coté droit */}
      </Stack>
    </Container>
  );
}
