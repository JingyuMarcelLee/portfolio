import React, { useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Icon from "../images/icon.svg";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const navigationLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "" },
];

const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: 30,
    padding: "4px",
    fontFamily: "Arial",
    fontSize: "12px",
  },
  avatar: {
    marginRight: "auto",
  }
}));


export default function Header() {
  const styles = useStyles();
  const [open, setOpen] = useState(false)
  return (
    <AppBar style={{ background: "DimGrey" }} position="sticky">
      <Container maxwidth="md">
        <Toolbar disableGutters>
          <Avatar alt="M.Lee" src={Icon} sx={{ width: 24, height: 24 }} className={styles.avatar}></Avatar>
          <Hidden xsDown>
            {navigationLinks.map((item, idx) => (
              <Link
                className={styles.link}
                color="textPrimary"
                variant="button"
                underline="none"
                key={idx}
                href={item.href}
              >
                {item.name}
              </Link>
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
          <IconButton>
            <ChevronRightIcon onClick={() => setOpen(false)} />
          </IconButton>
        </div>
        <Divider />
        <List>
          {navigationLinks.map((item, i) => (
            <ListItem>
              <Link
                className={styles.link}
                color="textPrimary"
                variant="button"
                underline="none"
                key={i}
                href={item.href}
              >
                {item.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
}
