import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
// import { Image } from "next/image";
import { Stack } from "@mui/material";
import { Image } from "@mui/icons-material";

// icon
import ConstructionIcon from "@mui/icons-material/Construction";

// avatar img
import carrosserie from "../assets/img/carrosseries/carrosserie.jpg";
// import carrosserie from "../public/carrosserie.jpg";
import carrosserieBG from "../assets/img/background/parebriseBG.png";

// component
import Section from "../component/section";

const pages = ["Carrosserie", "Jantes", "Pare-brise", "Phares", "à propos"];
const settings = ["Carrosserie", "Jantes", "Pare-brise", "Phares", "à propos"];
export default function agr() {
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
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#272727" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <ConstructionIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              AGR
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              AGR
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Adrien Goncalves" src="" />
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
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* -----------accueil--------- */}
      <Stack>
        <Typography
          variant="h1"
          component="h1"
          textAlign="center"
          sx={{ mt: 9.5 }}
        >
          ACCUEIL
        </Typography>
      </Stack>
      {/* ----------carrosserie---------- */}
      <Section
        titre="CARROSSERIE"
        text="Le changement de carrosserie d'une voiture peut avoir un impact
        important sur son apparence et sa fonctionnalité. Cela peut
        impliquer le remplacement complet de la carrosserie ou la
        modification de certaines parties, telles que les pare-chocs ou les
        phares. Les raisons de ce changement peuvent être esthétiques ou
        pratiques, comme pour améliorer l'aérodynamisme ou la sécurité.
        Certaines personnes choisissent également de changer la carrosserie
        de leur voiture pour se démarquer de la foule ou pour personnaliser
        leur véhicule selon leurs préférences personnelles. Quel que soit le
        motif, le changement de carrosserie est une décision importante qui
        nécessite une réflexion approfondie avant de procéder à toute
        modification."
        position="right"
      />
      {/* -------Jante--------- */}
      <Section
        titre="JANTE"
        text="Le changement de jantes d'une voiture est un moyen populaire
        d'améliorer son apparence et sa performance. Les jantes peuvent être
        modifiées pour diverses raisons, comme l'amélioration de l'adhérence
        sur la route ou pour un look plus sportif. Les jantes peuvent
        également être personnalisées selon les goûts de leur propriétaire,
        en choisissant des designs et des couleurs spécifiques. Le
        remplacement des jantes doit être effectué avec soin pour éviter
        toute erreur qui pourrait affecter la sécurité et la maniabilité de
        la voiture. Il est important de choisir des jantes qui conviennent à
        la taille et au type de pneus recommandés pour votre véhicule, ainsi
        que de s'assurer que les jantes sont correctement installées et
        équilibrées pour garantir une conduite en toute sécurité."
        position="left"
      />
      {/* ---------parebrise--------- */}
      <Section
        titre="PARE-BRISE"
        text="Le changement de pare-brise est une opération nécessaire en cas de dommage important ou de fissure sur le pare-brise d'une voiture. Le pare-brise est une partie essentielle de la sécurité de la voiture, car il protège les occupants du véhicule en cas d'accident et fournit une visibilité claire sur la route. Lorsque le pare-brise est endommagé, il est important de le remplacer rapidement pour garantir la sécurité du conducteur et des passagers. Les professionnels de l'automobile peuvent remplacer le pare-brise en utilisant des techniques avancées pour garantir une installation correcte et sécurisée. En cas de changement de pare-brise, il est important de s'assurer que le nouveau pare-brise est de la même qualité que l'original pour garantir la sécurité du véhicule et de ses occupants."
        position="right"
      />
      {/* --------phare------- */}
      <Section
        titre="PHARE"
        text="Les phares jaunis d'une voiture peuvent être un problème courant qui peut affecter la sécurité de conduite la nuit. Les phares jaunis peuvent réduire l'efficacité de l'éclairage et causer une visibilité réduite, ce qui peut entraîner un accident. Heureusement, il est possible de déjaunir les phares de voiture en utilisant des techniques simples et efficaces. Les propriétaires de voitures peuvent utiliser des produits spécialement conçus pour nettoyer les phares, tels que des produits de polissage et des kits de restauration de phares. Ces produits peuvent enlever la couche jaunie et restaurer la clarté des phares. Il est également important de protéger les phares contre les rayons UV nocifs qui peuvent causer la décoloration, en utilisant des revêtements spéciaux ou en gardant la voiture à l'ombre autant que possible. En déjaunissant les phares, les propriétaires peuvent améliorer la sécurité de conduite et prolonger la durée de vie des phares de leur voiture."
        position="left"
      />
    </>
  );
}
