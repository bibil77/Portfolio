import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { Stack } from "@mui/material";
import Card from "../component/Card";
import FormationCard from "../component/FormationCard";
import Image from "next/image";

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
      {/* -------------------PROFILS & OBEJECT--------------------------- */}
      <Card title="PROFIL & OBJECTIFS">
        <Typography color="#4f5050" ml={1}>
          Passionné d'infomatique et de création, j'ai décidé d'en faire mon
          métier. Je suis actuellement étudiant en{" "}
          <strong>développement informatique.</strong>
          Afin de lancer ma carrière et de consolider mon champ de compétences,
          je suis à la recherche d'une alternance dans la
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
      </Card>
      {/* -------------------FIN FORMATION--------------------------- */}
    </Container>
  );
}
