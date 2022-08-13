import React, { useState } from "react";
import Link from "@mui/material/Link";
import { styled } from "@mui/system";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Icon from "../images/icon.svg";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const navigationLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "" },
];

const linkStyle = styled(Link, {
  name: "linkStyle",
  slot: "Wrapper"
})({
  marginRight: 30,
  padding: "4px",
  fontFamily: "Arial",
  fontSize: "12px",
});

const avatarStyle = styled(Avatar, {
  name: "avatarStyle",
  slot: "Wrapper"
})({
  marginRight: "auto",
    width: 40,
    height: 40,
})


export default function Header() {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <AppBar style={{ background: "DimGrey" }} position="sticky">
      <Container maxwidth="md">
        <Toolbar disableGutters>
          <IconButton href="#about" className={styles.avatar}>
            <avatarStyle src={Icon} imgProps={{loading: 'lazy'}}>
            </avatarStyle>  
          </IconButton>
          <Hidden xsDown>
            {navigationLinks.map((item, idx) => (
              <linkStyle
                variant="button"
                underline="none"
                key={idx}
                href={item.href}
              >
                {item.name}
              </linkStyle>
            ))}
          </Hidden>
          <Hidden smUp>
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </Container>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {navigationLinks.map((item, i) => (
            <ListItem>
              <linkStyle
                variant="button"
                underline="none"
                key={i}
                href={item.href}
              >
                {item.name}
              </linkStyle>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
}
