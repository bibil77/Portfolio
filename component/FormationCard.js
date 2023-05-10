import { Stack, Typography } from "@mui/material";
import data from "../data.js";
import { useTranslation } from "next-i18next";

export default function FormationCard({
  date,
  title,
  description,
  list,
  listName,
}) {
  const { t } = useTranslation("common");
  const result = [];
  data.map((datas) => {
    if (datas.name === listName) {
      result.push(
        datas.description.map((d, i) => {
          return (
            <Typography key={i} variant="subtitle1">
              • {t(d)}
            </Typography>
          );
        })
      );
    }
    return result;
  });
  return (
    <Stack direction="row" alignItems="center" mt={2}>
      <Typography
        variant="h6"
        color="#3f4040"
        mr={1}
        maxWidth={120}
        textAlign="center"
      >
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
          result
        ) : (
          <Typography color="#4f5050" variant="subtitle1">
            {description}
          </Typography>
        )}
      </Stack>
    </Stack>
  );
}
