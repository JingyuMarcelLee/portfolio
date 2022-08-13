import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";

const socialItems = [
  { id: 0, icon: GitHubIcon, url: "https://github.com/JingyuMarcelLee" },
  { id: 1, icon: LinkedInIcon, url: "https://www.linkedin.com/in/jingyumarcellee/" },
];

export default function Social({ direction }) {
  return (
    <Grid container direction={direction || "row"} spacing={2}>
      {socialItems.map((item, idx) => (
        <Grid key={idx}>
          <Link href={item.url} target="_blank">
            <IconButton color="primary" >       
              <item.icon />
            </IconButton>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
