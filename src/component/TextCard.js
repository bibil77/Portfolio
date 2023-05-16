import { useTranslation } from "next-i18next";
import { Stack, Typography } from "@mui/material";

import data from "../utils/data.js";

export default function TextCard({ title, listName }) {
  const { t } = useTranslation("common");

  const contents = data.find((item) => item.name === listName)?.contenue || [];

  return (
    <>
      {contents.map((item, key) =>
        <Stack key={key} mt={2} pl={1}>
          {title && (
            <Typography color="#3f4040" variant="h6">
              {t(item.titre)}
            </Typography>
          )}

          {item.description.map((desc, key) => {
            return (
              <Typography key={key} color="#4f5050" variant="subtitle1">
                • {t(desc)}
              </Typography>
            );
          })}
        </Stack>
      )}
    </>
  )
}
