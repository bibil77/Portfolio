import { Stack } from "@mui/material";
import { Image } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

// img
import carrosserie from "../assets/img/carrosseries/carrosserie.jpg";
import carrosserieBG from "../assets/img/background/parebriseBG.png";

export default function Section(props) {
  const { text, titre, position } = props;
  return (
    <Stack
      direction="row"
      sx={{
        py: 8,
        justifyContent: "space-around",
        background: `url(${carrosserieBG.src}) center / cover`,
      }}
    >
      {position === "left" ? (
        <Image src={carrosserie} alt="carrosserie" />
      ) : null}
      <Stack>
        <Typography component="h2" variant="h3">
          {titre}
        </Typography>
        <Typography
          component="p"
          maxWidth="sm"
          variant="body1"
          textAlign="justify"
          sx={{ ml: 3 }}
        >
          {text}
        </Typography>
      </Stack>
      {position === "right" ? (
        <Image src={carrosserie} alt="carrosserie" />
      ) : null}
    </Stack>
  );
}
