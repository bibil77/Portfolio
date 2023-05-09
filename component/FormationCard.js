import { Stack, Typography } from "@mui/material";
import data from "../data.js";

export default function FormationCard({
  date,
  title,
  description,
  list,
  listName,
}) {
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
        {list ? (
          data.forEach((datas) => {
            // console.log(datas.name);
            if (datas.name === listName) {
              console.log("validé");
              datas.description.map((d, i) => {
                console.log(d);

                <Typography key={i} variant="subtitle1">
                  • {d}
                </Typography>;
              });
            }
          })
        ) : (
          <Typography variant="subtitle1">{description}</Typography>
        )}
      </Stack>
    </Stack>
  );
}
