import { Stack, Typography } from "@mui/material";
import data from "../data.js";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function TextCard({ title, listName }) {
  const result = [];
  data.map((datas) => {
    if (datas.name === listName) {
      result.push(
        datas.contenue.map((d, i) => {
          console.log(d);
          return (
            <Stack key={i} mt={2} pl={1}>
              {title ? (
                <Typography color="#3f4040" variant="h6">
                  {d.titre}
                </Typography>
              ) : null}

              {d.description.map((desc) => {
                return (
                  <Typography color="#4f5050" variant="subtitle1">
                    • {desc}
                  </Typography>
                );
              })}
            </Stack>
          );
        })
      );
    }
  });
  return result;
}
