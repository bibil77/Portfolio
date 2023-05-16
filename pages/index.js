import { Stack } from "@mui/material";

// component
import Layout from "../src/component/layout/Layout";
import ProfileObjective from "../src/component/view/cv/ProfileObjective";
import Formations from "../src/component/view/cv/Formations";
import Experiences from "../src/component/view/cv/Experiences";
import SchoolProjects from "../src/component/view/cv/SchoolProjects";
import PersonalInformation from "../src/component/view/cv/PersonalInformation";
import Skills from "../src/component/view/cv/Skills";
import SoftSkills from "../src/component/view/cv/SoftSkills";
import Language from "../src/component/view/cv/Language";
import Interest from "../src/component/view/cv/Interest";

// translate
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Index() {
  return (
    <Layout>
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
        }}
      >
        <Stack>
          <ProfileObjective />
          <Formations />
          <Experiences />
          <SchoolProjects />
        </Stack>
        <Stack
          sx={{
            borderLeft: { xs: 0, md: 2 },
            borderLeftColor: { xs: "none", md: "#8d9090" },
            ml: { xs: 0, md: 5 },
            mt: 5,
          }}
        >
          <PersonalInformation />
          <Skills />
          <SoftSkills />
          <Language />
          <Interest />
        </Stack>
      </Stack>
    </Layout>
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
