import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";

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
