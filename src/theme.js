import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#868a8d",
    },
    secondary: {
      main: "#9ea1a4",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  // composant
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#5f5f5f",
          textDecoration: "none",
        },
      },
    },
  },
});

export default theme;
