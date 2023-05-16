import { Container } from "@mui/material";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <Container sx={{ px: { xs: 0 } }}>
      <Header />
      {children}
    </Container>
  );
}
