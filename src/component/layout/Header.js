import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link, Stack } from "@mui/material";
import { useTranslation } from "next-i18next";
import DrawerMenu from "./DrawerMenu";

function Header() {
  const { t } = useTranslation("header");

  const pages = [t("lang.nav.0"), t("lang.nav.1"), t("lang.nav.2")];
  const href = ["/", "/", "/Exemple"];
  const settings = [t("lang.fr"), t("lang.en")];

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#868a8d" }}>
      <Container maxWidth="xl" sx={{ py: 1 }}>
        <Toolbar
          disableGutters
          sx={{ alignItems: "start", justifyContent: "space-between" }}
        >
          <Stack direction="row">
            <Avatar
              alt="Benjamin Dupin"
              src="./images/moi1.jpg"
              sx={{
                display: { xs: "none", sm: "flex" },
                width: 200,
                height: 200,
                borderRadius: 5,
                border: "4px solid #4f5050",
              }}
            />
            <DrawerMenu />
          </Stack>
          <Stack sx={{ display: { xs: "none", md: "flex" } }}>
            <Typography
              noWrap
              variant="h3"
              component="h1"
              sx={{
                ml: { xs: 0, lg: 3 },
                mr: 2,
                mt: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              BENJAMIN DUPIN
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              noWrap
              sx={{
                ml: 6,
                mt: 3,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {t("title")}
            </Typography>
            {/*
            <Stack sx={{ position: "absolute", bottom: 5, right: 0 }}>
              <Typography
                variant="subtitle2"
                component="p"
                noWrap
                sx={{
                  ml: 3,
                  mt: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                {t("alternance")}
              </Typography>
              <Typography
                variant="subtitle2"
                component="p"
                noWrap
                sx={{
                  ml: 3,
                  mt: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                {t("rythme")}
              </Typography>
            </Stack>
            */}
          </Stack>
          <Stack sx={{ display: { xs: "flex", md: "none" } }}>
            <Typography
              noWrap
              variant="h4"
              component="h1"
              sx={{
                mr: 2,
                mt: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                // letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              BENJAMIN DUPIN
            </Typography>
            <Typography
              variant="h6"
              component="h2"
              noWrap
              sx={{
                ml: 3,
                mt: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {t("title")}
            </Typography>
          </Stack>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", lg: "flex" },
              justifyContent: "flex-end",
              mr: 2,
            }}
          >
            {pages.map((page, i) => (
              <Typography
                href={i === 0 ? href[i] : i === 1 ? href[i] : href[i]}
                key={i}
                onClick={handleCloseNavMenu}
                title="Coming Soon"
                sx={{
                  mt: 3,
                  fontWeight: 500,
                  color: "white",
                  display: "block",
                  mr: i === 2 ? 0 : 2,
                }}
              >
                {page}
              </Typography>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={t("lang.setting")}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Lang Flag"
                  src={`/images/flag/${t("lang.flag")}.jpg`}
                  sx={{ mt: 1.5 }}
                >
                  BD
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, i) => (
                <MenuItem
                  key={setting}
                  onClick={handleCloseUserMenu}
                  sx={{ padding: 0 }}
                >
                  <Link
                    href={i === 0 ? "/fr" : "/en"}
                    sx={{ width: "100%", py: 1, px: 1.5 }}
                  >
                    {setting}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
