import React, {useState, useEffect} from "react";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Social from "./Social";
import Resume from "../documents/Resume_JingyuLee.pdf";
import Hidden from "@mui/material/Hidden";
import Grow from "@mui/material/Grow";
import { StaticImage } from "gatsby-plugin-image";

const paperStyle = styled(Paper, {
  name: "paperStyle",
  slot: "Wrapper"
})({
  height: `90vh`,
  color: `Beige`,
  position: `relative`,
}); 

const gridStyle = styled(Grid, {
  name: "gridStyle",
  slot: "Wrapper"
})({
  height: `100%`,
  zIndex: 100,
  position: `relative`,
}); 

const containerStyle = styled(Container, {
  name: "containerStyle",
  slot: "Wrapper"
})({
  height: "100%"
})

const overlayStyle = styled(div, {
  name: "overlayStyle",
  slot: "Wrapper"
})({
  backgroundColor: `rgba(0,0,0,0.4)`,
  height: `100%`,
  position: `absolute`,
  width: `100%`,
  zIndex: 2,
})

const staticImageStyle = styled(StaticImage, {
  name: "staticImageStyle",
  slot: "Wrapper"
})({
  height: `100%`,
  position: `absolute`,
  width: `100%`,
  zIndex: 1,
})

const buttonStyle = styled(Button, {
  name: "buttonStyle",
  slot: "Wrapper",
})({
  height: '50px',
  width: 'auto',
  fontSize: '20px',
  borderWidth: '3px',
})

export default function HeroSection() {
  const styles = useStyles();
  const [shouldShow, setShouldShow] = useState(false)
  useEffect(() => setShouldShow(true))
  return (
    <paperStyle className={styles.section} id="about">
      <staticImageStyle src="../images/WallpaperBW2.jpg" alt="bgimage"/>
      <overlayStyle></overlayStyle>
      <containerStyle maxWidth="lg">
        <gridStyle
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Grow in={shouldShow}>
            <Grid item sm={8}>
              <Typography variant="h1">Marcel Lee</Typography>
              <Typography variant="h5">Aspiring Software Engineer</Typography>
              <Box my={2}>
                <buttonStyle href={Resume} target="_blank" variant="outlined" color="secondary">
                  <strong>View Résumé</strong>
                </buttonStyle>
              </Box>
            </Grid>
          </Grow>
            <Grid item>
              <Social direction="column" />
            </Grid>
          <Hidden xsDown>
          </Hidden>
        </gridStyle>
      </containerStyle>
    </paperStyle>
  );
}
