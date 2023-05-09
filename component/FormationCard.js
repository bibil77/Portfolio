import { Stack, Typography } from "@mui/material";

export default function FormationCard({ date, title, description }) {
  return (
    <Stack direction="row" alignItems="center">
      <Typography variant="h6" color="#3f4040" mr={1}>
        {date}
      </Typography>
      <Stack
        pl={2}
        sx={{
          borderLeft: 4,
          borderLeftColor: "#8d9090",
        }}
      >
        <Typography variant="h6" color="#3f4040">
          {title}
        </Typography>
        <Typography variant="subtitle1">{description}</Typography>
      </Stack>
    </Stack>
  );
}
