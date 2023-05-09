import { BorderColor, BorderStyle } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";

export default function Card({ children, border, title }) {
  return (
    <Stack
      maxWidth="sm"
      ml={1}
      mt={1}
      sx={{
        borderTop: border ? 3 : 0,
        borderTopColor: "#8d9090",
      }}
    >
      <Typography
        variant="h6"
        color="#2f3030"
        sx={{
          fontWeight: 600,
          letterSpacing: 3,
        }}
      >
        {title}
      </Typography>

      {children}
    </Stack>
  );
}
