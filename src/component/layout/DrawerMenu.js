import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton, Link } from "@mui/material";
import { useTranslation } from "next-i18next";
import InfoIcon from "@mui/icons-material/Info";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

import FolderCopyIcon from "@mui/icons-material/FolderCopy";

export default function DrawerMenu() {
  const href = ["/", "/", "/"];

  const { t } = useTranslation("header");
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Avatar
        alt="Benjamin Dupin"
        src="./images/moi1.jpg"
        sx={{
          display: { xs: "block", sm: "none" },
          mx: "auto",
          my: 2,
          width: 150,
          height: 150,
          borderRadius: 5,
          border: "4px solid #4f5050",
        }}
      />
      <Divider />
      <List>
        {[t("lang.nav.0"), t("lang.nav.1"), t("lang.nav.2")].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 ? (
                    <InfoIcon />
                  ) : index === 1 ? (
                    <ArrowCircleUpIcon />
                  ) : (
                    <FolderCopyIcon />
                  )}
                </ListItemIcon>
                <Link
                  title="Coming Soon"
                  href={
                    index === 0
                      ? href[index]
                      : index === 1
                        ? href[index]
                        : href[index]
                  }
                  key={index}
                >
                  {text}
                </Link>
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: { xs: "block", lg: "none" } }}>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={toggleDrawer(anchor, true)}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </Box>
  );
}
