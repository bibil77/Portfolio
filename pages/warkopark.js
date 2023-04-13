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
import { Stack } from "@mui/material";

// icon
import ConstructionIcon from "@mui/icons-material/Construction";

// component
import StructureGonflable from "../component/StructureGonflable";
import Machine from "../component/Machine";
import Tarif from "../component/Tarif";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const pages = [
  "Accueil",
  "Structure Gonfable",
  "Mascotte",
  "Machine",
  "Tarifs",
  "Contact",
];
const settings = [
  "Accueil",
  "Structure Gonfable",
  "Mascotte",
  "Machine",
  "Tarifs",
  "Contact",
];

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
        <Container maxWidth={false}>
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
              WARKOPARK
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
              WARKOPARK
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
      {/* ----------Structure gonflable---------- */}
      <Box>
        <Typography
          variant="h2"
          component="h2"
          textAlign="center"
          sx={{ pb: 7 }}
        >
          Structure Gonflable
        </Typography>
        <Swiper
          grabCursor={true}
          pagination={true}
          modules={[Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1043: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1390: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1800: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            2400: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <StructureGonflable
              image="https://lh4.googleusercontent.com/sMGfagayRb6JmilnLXcUy-iKmHPM-7OYPNhuGjbzNP2VIAt9uVhanMxEewitiURBYSJRA3Ba46b0H0zikBLXH52ze2SwCElHS80RCxz9E5C4JWFAEnKKYUrrnd8bD5cffA=w1280"
              name="Structure Gonflable Western"
              description="Ce jeu gonflable, combine le toboggan et la structure de saut. Imposant par sa hauteur"
              prix="249"
            />
          </SwiperSlide>
          <SwiperSlide>
            <StructureGonflable
              image="https://lh5.googleusercontent.com/nNlU7ptRG-l5__gkwOGf9B4aA_edqALZz1_Tpo47YhhoOO4Oahh-eqK4GEDuOV4IcCSF9k3tVVxhRIn2KHeActgG4fy8Y_SEOsQC8jcg_OGt1Ve-4T9s8NqHlP4VIfEqNg=w1280"
              name="Structure Gonflable Circuit"
              description="Ce circuit gonflable à pour avantage de s'intégrer facilement dans votre manifestation"
              prix="249"
            />
          </SwiperSlide>
          <SwiperSlide>
            <StructureGonflable
              image="https://lh4.googleusercontent.com/kArTrsvgJkyLG6IrXkJiBlKY3_8_IDmBd0j-ZF5-n1qJu7dCZN_UzaqJ6AVFHSNdYubJQT23BFJoZBtCQQRmXouc2K9oA2AHqGiSXBpT000d1KohgPrRISqcOVcJ1C8vrw=w1280"
              name="Structure Gonflable Licorne"
              description="Ce jeu gonflable, combine le toboggan et la structure de saut. Imposant par sa hauteur"
              prix="149"
            />
          </SwiperSlide>
          <SwiperSlide>
            <StructureGonflable
              image="https://lh3.googleusercontent.com/zAXh3LSEmrk3v1mrdqmOjjTHhuCZubyMwlDnLkZLJ-OQ8Gbop9s6EulOawoAK4QpOmvwym_oLZj9BPiEVbSXX9_iYnUFoOr3mzbigk-luA2_haH85ZcaK-AYsQ4JnjB_TA=w1280"
              name="Structure Gonflable Jungle"
              description="Ce jeu gonflable, combine le toboggan et la structure de saut. Imposant par sa hauteur"
              prix="149"
            />
          </SwiperSlide>
          <SwiperSlide>
            <StructureGonflable
              image="https://lh4.googleusercontent.com/WGs3SNjwDw2wVqepvm266wPKLc4XirxkuL4-ZFGmjXD3TQPXnaCI8kULF7XShTKSd5x2lzohz-pVhO8EwY3fbhexU6nw_QIpZgiM8bMnfl_J2bArAzi-XP3b_g2MldS9=w1280"
              name="Structure Gonflable Plage"
              description="Ce jeu gonflable, combine la structure de saut et des obstacles. Imposant par sa hauteur"
              prix="149"
            />
          </SwiperSlide>
          <SwiperSlide>
            <StructureGonflable
              image="https://lh4.googleusercontent.com/QNeaJGwlES8R1amogH5GaUrgFSO46A6yBkp0dwPn3RvUwstneYd5702lddBEOQ_pFfdK4UCq4TZhZ7DCumCD_B3KR8Nc7eoF7ukr6jy3YXn4D8ZhJQH2RBZ_2U_SO8OZ1g=w1280"
              name="Structure Gonflable Cowboy"
              description="Ce jeu gonflable, combine la structure de saut et des obstacles. Imposant par sa hauteur"
              prix="149"
            />
          </SwiperSlide>
        </Swiper>
      </Box>
      {/* ---------------------MACHINE----------------------------------------- */}
      {/* <Stack mt={6}>
        <Typography variant="h3" component="h3" textAlign="center">
          MACHINE
        </Typography>
        <Box
          sx={{ display: { xs: "block", md: "block", lg: "none", xl: "none" } }}
        >
          <Carousel
            arrows={true}
            swipeable={false}
            draggable={true}
            showDots={true}
            responsive={responsiveMachine}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <Machine
              image="https://lh6.googleusercontent.com/joJet1ZnDSWh2BCuCunGMEeVWfZomikj4y7kSofZ7AMzU8OkDSRxyuyehIEPjp2QDETjGvPC1EiQVsXxW7WLLbhtwF_ErQWaQE6pxi3xO_noXChg-OWpN6bRTSioXhS4rQ=w1280"
              name="Machine à thé"
              prix="30"
            />
            <Machine
              image="https://lh3.googleusercontent.com/rpGYLQ-EN_xoClePcxLAyXOoMD92E-pwQOgiMoiiuCqdq_WpxcC3Xrh52TrOdUAAPIiEtj0q83Igsi3W3Q1d-EBXdNkBYu6u36KhSDrzNKik_zO_g4adIHQgyYIXmeH1Cg=w1280"
              name="Machine à café"
              prix="30"
            />
            <Machine
              image="https://lh3.googleusercontent.com/rW7UBeUqWNLNiPupLkarE9RGdL8CQM4zOzKgmUtqurHtxH-MwGo2qmAE0sU5PYBaHp2UJ5XgY-qN5DsQSVu0qk_4NgHOYLX5TEJl_EMrO29IsVdkGxyGpgnh8WabUnjrBw=w1280"
              name="Machine à chocolat"
              prix="30"
              description="Le distributeur de boissons chaudes est idéal pour préparer et garder au chaud diverses boissons comme le chocolat chaud, le vin chaud ou le lait, ce qui en fait un accessoire indispensable sur les buffets en libre-service, "
            />
            <Machine
              image="https://lh3.googleusercontent.com/CfOP-Qf5rSuYDxgVz8ldpe170rk11UvQL35ucQrT81_x--UHrxZX2GT7V7k06x-qTJ0qzLLoeOQy35o1oMb-GlIMatjKXv7Ri_y8AtX2Gvgc2kEXle90N_vFjMMosBg2uw=w1280"
              name="Barbe à papa"
              machine="bap"
              prix="50"
            />
            <Machine
              image="https://lh3.googleusercontent.com/CfOP-Qf5rSuYDxgVz8ldpe170rk11UvQL35ucQrT81_x--UHrxZX2GT7V7k06x-qTJ0qzLLoeOQy35o1oMb-GlIMatjKXv7Ri_y8AtX2Gvgc2kEXle90N_vFjMMosBg2uw=w1280"
              name="Popcorn"
              machine="popcorn"
              prix="50"
            />
          </Carousel>
        </Box>

        <Stack
          direction="row"
          justifyContent="space-around"
          sx={{ display: { xs: "none", md: "none", lg: "flex" } }}
        >
          <Machine
            image="https://lh6.googleusercontent.com/joJet1ZnDSWh2BCuCunGMEeVWfZomikj4y7kSofZ7AMzU8OkDSRxyuyehIEPjp2QDETjGvPC1EiQVsXxW7WLLbhtwF_ErQWaQE6pxi3xO_noXChg-OWpN6bRTSioXhS4rQ=w1280"
            name="Machine à thé"
            prix="30"
          />
          <Machine
            image="https://lh3.googleusercontent.com/rpGYLQ-EN_xoClePcxLAyXOoMD92E-pwQOgiMoiiuCqdq_WpxcC3Xrh52TrOdUAAPIiEtj0q83Igsi3W3Q1d-EBXdNkBYu6u36KhSDrzNKik_zO_g4adIHQgyYIXmeH1Cg=w1280"
            name="Machine à café"
            prix="30"
          />
          <Machine
            image="https://lh3.googleusercontent.com/rW7UBeUqWNLNiPupLkarE9RGdL8CQM4zOzKgmUtqurHtxH-MwGo2qmAE0sU5PYBaHp2UJ5XgY-qN5DsQSVu0qk_4NgHOYLX5TEJl_EMrO29IsVdkGxyGpgnh8WabUnjrBw=w1280"
            name="Machine à chocolat"
            prix="30"
            description="Le distributeur de boissons chaudes est idéal pour préparer et garder au chaud diverses boissons comme le chocolat chaud, le vin chaud ou le lait, ce qui en fait un accessoire indispensable sur les buffets en libre-service, "
          />
          <Machine
            image="https://lh3.googleusercontent.com/CfOP-Qf5rSuYDxgVz8ldpe170rk11UvQL35ucQrT81_x--UHrxZX2GT7V7k06x-qTJ0qzLLoeOQy35o1oMb-GlIMatjKXv7Ri_y8AtX2Gvgc2kEXle90N_vFjMMosBg2uw=w1280"
            name="Barbe à papa"
            machine="bap"
            prix="50"
          />
          <Machine
            image="https://lh3.googleusercontent.com/CfOP-Qf5rSuYDxgVz8ldpe170rk11UvQL35ucQrT81_x--UHrxZX2GT7V7k06x-qTJ0qzLLoeOQy35o1oMb-GlIMatjKXv7Ri_y8AtX2Gvgc2kEXle90N_vFjMMosBg2uw=w1280"
            name="Popcorn"
            machine="popcorn"
            prix="50"
          />
        </Stack>
      </Stack> */}
      <Box>
        <Typography mt={8} variant="h3" component="h3" textAlign="center">
          MACHINE
        </Typography>
        <Swiper
          grabCursor={true}
          pagination={true}
          modules={[Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            887: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1181: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1355: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <Machine
              image="https://lh3.googleusercontent.com/Dzuhw8YyNZzRozsybGn5Yd-nEUiiDaVoAMmYzmBKAnn2DpaX1aXx-UOVn2fzOaq-sYNven1jPG4aun7YMy3ne1jjHYHmSSX9yXDVN4dWRJjCmZMd8CW4rouCiMjI2v1QXw=w1280"
              name="Machine à thé"
              prix="30"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Machine
              image="https://lh3.googleusercontent.com/TZOmY9Of4crllwRU_O8r3FcGDPaoVmYVecZF27R86EyIG04zcMhOOF-WI99pk_jFReb6can3MdYMYiTChp4QDO1yplJtW--JPel-k6sSEjkxKkSTP0yrk_VPY2upotoXgA=w1280"
              name="Machine à café"
              prix="30"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Machine
              image="https://lh5.googleusercontent.com/WsNO5aC2Cvv2GqQY5JaA8LnH2m9X82ksS7evzzTclNFNXXRTF4J_v-V7cRaR9adcX4wMQhFHizVRLqK4L-iBPj8VSmBvsFFhWGwehzvQS09QB17x7i8aES7FczUbtaKTDg=w1280"
              name="Machine à chocolat"
              prix="30"
              description="Le distributeur de boissons chaudes est idéal pour préparer et garder au chaud diverses boissons comme le chocolat chaud, le vin chaud ou le lait, ce qui en fait un accessoire indispensable sur les buffets en libre-service, "
            />
          </SwiperSlide>
          <SwiperSlide>
            <Machine
              image="https://lh4.googleusercontent.com/hp26GewEdHvkUh-MtJ_TT8F0Wk0CgzkhD_lsgOIPat3ZfM3tUfdF2UGUJxeSr7EzBebEDZ6FRZyv-LzWMeSb2uhcsm7Xx_bKy9w5n3dzZjXP829Z4K1F1k0vt_SJoOnlhg=w1280"
              name="Barbe à papa"
              machine="bap"
              prix="50"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Machine
              image="https://lh4.googleusercontent.com/hp26GewEdHvkUh-MtJ_TT8F0Wk0CgzkhD_lsgOIPat3ZfM3tUfdF2UGUJxeSr7EzBebEDZ6FRZyv-LzWMeSb2uhcsm7Xx_bKy9w5n3dzZjXP829Z4K1F1k0vt_SJoOnlhg=w1280"
              name="Popcorn"
              machine="popcorn"
              prix="50"
            />
          </SwiperSlide>
        </Swiper>
      </Box>
      <Tarif />
    </>
  );
}
