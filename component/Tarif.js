import { Stack, Typography } from "@mui/material";

export default function Tarif(props) {
  return (
    <Stack alignItems="center" mt={6}>
      <Typography variant="h3" component="h3">
        TARIF
      </Typography>
      <Typography variant="body1" component="p" textAlign="center">
        Tarif livraison + Pose Structure Gonflable + récupération. <br />
        La livraison se calcule de Moisenay Warkopark à (...destination...)
        (pour 1 Structure Gonflable). <br />
        20€ par structure supplémentaire.
      </Typography>
      <Typography variant="body2" component="p" mt={3}>
        De 0 à 20 km 70€
        <br />
        De 21 à 40 km 110€
        <br />
        De 41 à 60 km 150€
        <br />
        De 61 à 80 km 190€ <br />
        De 81 à x {">"} 80 km{" "}
        <span style={{ textDecoration: "underline" }}>Sur Devis</span>
      </Typography>
    </Stack>
  );
}
