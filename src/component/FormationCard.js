import { Stack, Typography } from "@mui/material";
import data from "../../data.js";
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
    <Stack
      alignItems="center"
      mt={2}
      sx={{
        flexDirection: { xs: "column", md: "row" },
        borderTop: { xs: list ? 3 : 0, md: 0 },
        mx: { xs: 4, md: 0 },
      }}
    >
      <Typography
        variant="h6"
        color="#3f4040"
        mr={1}
        sx={{
          maxWidth: { xs: "none", md: "120px" },
          textAlign: { xs: "none", md: "center" },
          borderBottom: { xs: 3, md: "none" },
          borderRadius: { xs: 2, md: "none" },
          marginTop: { xs: list ? 3 : 0, md: 0 },
        }}
      >
        {date}
      </Typography>
      <Stack
        pl={2}
        sx={{
          borderLeft: { xs: 0, md: 4 },
          borderLeftColor: { md: "#8d9090" },
        }}
      >
        <Typography
          variant="h6"
          color="#3f4040"
          sx={{
            marginTop: { xs: 3, md: 0 },
            textAlign: { xs: "center", md: "none" },
          }}
        >
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
