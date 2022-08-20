import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import nftImage from "../images/RoyaltyNFT.png";
import stockImage from "../images/stockslack.png";
import farmdataImage from "../images/farmdata.png";
import dsImage from "../images/DSpng.png";
import Chip from "@mui/material/Chip";
import Hidden from "@mui/material/Hidden";
import darkTheme from "./Theme"

//need to refactort this
const useStyles = makeStyles((theme) => ({
  cardMedia: {
    width: 180,
    maxWidth: 180,
    minWidth: 180,
  },
  card: {
    display: "flex",
  },
  description: {
    borderRadius: "5px",
    padding: "10px", 
  },
  links: {
    marginRight: "auto",
  },
  tag: {
    marginRight: 5,
    marginBottom: 5,
  },
}));

function TagsContainer({tags}) {
  const styles = useStyles()
  return (
    <ThemeProvider theme={darkTheme}>
    <div>
      {tags.map((tag) => (
        <Chip
          className={styles.tag}
          label={tag}
          variant="outlined"
          key={tag}
          color = "primary"
        ></Chip>
      ))}
    </div>
    </ThemeProvider>
  );
}

function Project({ title, description, imageUrl, tags, links }) {
  const styles = useStyles();
  return (
    

    <Grid item>
      <Card className={styles.card} variant="outlined">
        <div>
          <CardContent>
            <Typography variant="h5" paragraph>
              {title}
            </Typography>
            <Typography
              className={styles.description}
              variant="subtitle1"
              paragraph
              >
              {description}
            </Typography>
            <Hidden mdUp>
              <TagsContainer tags={tags} />
            </Hidden>
          </CardContent>
          <CardActions>
            <div className={styles.links}>
              {links.map((linkItem) => (
                <IconButton
                href={linkItem.href}
                target="_blank"
                key={linkItem.href}
                >
                  <linkItem.icon />
                </IconButton>
              ))}
            </div>
            <Hidden smDown>
              <TagsContainer tags={tags} />
            </Hidden>
          </CardActions>
        </div>
        <Hidden xsDown>
          <CardMedia className={styles.cardMedia} image={imageUrl}></CardMedia>
        </Hidden>
      </Card>
    </Grid>
  );
}

export default function Projects() {
  return (
    
    <Container maxwidth="md" id="projects">
      <Box pt={8} mb={6}>
        <Typography variant="h4" align="center">Projects</Typography>
      </Box>
      <Grid container direction="column" spacing={4}>
        {projectsData.map((data, idx) => (
          <Project {...data} key={idx} />
          ))}
      </Grid>
    </Container>
    
  );
}

const projectsData = [
  {
    title: "FarmData 2",
    description:
      "FarmData2 is a web application for recording and reporting on crop and livestock production within the context of small organic farming operations.",
    imageUrl: farmdataImage,
    imageAlt: "Project 3 Image",
    tags: ["Javascript", "Vue.js", "Drupal"],
    links: [
      {
        icon: GitHubIcon,
        href: "https://github.com/FarmData-2-Dev-Team-2022/FarmData2",
      },
    ],
  },
  {
    title: "Royalty NFT Smart Contract",
    description:
      "Awarded first place in HoyaHacks 2022 Gear Technology Track for creating an NFT Smart Contract that allows users to mint NFTs that enable percentage return to the original creator and deploy them on a Polkadot Parachain.",
    imageUrl: nftImage,
    imageAlt: "Project 1 Image",
    tags: ["Rust", "Javascript", "SwiftUI"],
    links: [
      {
        icon: GitHubIcon,
        href: "https://github.com/JingyuMarcelLee/HoyaHack",
      },
    ],
  },
  {
    title: "Automated Slack Trading Bot",
    description:
      "A Slack API bot scripted with python that uses Creon API to automatically trade securities in the KOSDAQ market based on customizable strategies and sends a Slack notification to the designated channel when transactions are made.",
    imageUrl: stockImage,
    imageAlt: "Project 2 Image",
    tags: ["Python", "Pandas", "Numpy"],
    links: [
      {
        icon: GitHubIcon,
        href: "https://github.com/JingyuMarcelLee/StockAuto",
      },
    ],
  },
  {
    title: "Data Structure Implementation",
    description:
      "Implementation of various data structures and algorithms using Python. Designed Abstract Base Classes to represent abstract data structures and used objected oriented design to create complex data structures.",
    imageUrl: dsImage,
    imageAlt: "Project 4 Image",
    tags: ["Python"],
    links: [
      {
        icon: GitHubIcon,
        href: "https://github.com/JingyuMarcelLee/Data-Structure-Implementation",
      },
    ],
  },
];
