import React, {useState, useEffect} from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Social from "./Social";
import Resume from "../documents/Resume_JingyuLee.pdf";
import Hidden from "@material-ui/core/Hidden";
import Grow from "@material-ui/core/Grow";
import { StaticImage } from "gatsby-plugin-image";

const useStyles = makeStyles((theme) => ({
  section: {
    height: `90vh`,
    color: `Beige`,
    position: `relative`,
  },
  content: {
    height: `100%`,
    zIndex: 100,
    position: `relative`,
  },
  container: {
    height: `100%`,
  },
  overlay: {
    backgroundColor: `rgba(0,0,0,0.4)`,
    height: `100%`,
    position: `absolute`,
    width: `100%`,
    zIndex: 2,
  },
  heroImage: {
    height: `100%`,
    position: `absolute`,
    width: `100%`,
    zIndex: 1,
  },
  // h1: {
  //   fontSize: '150px',
  // },
  // h5: {
  //   fontSize: '40px',
  // },
  button: {
    height: '50px',
    width: 'auto',
    fontSize: '20px',
    borderWidth: '3px',
  }
}));

export default function HeroSection() {
  const styles = useStyles();
  const [shouldShow, setShouldShow] = useState(false)
  useEffect(() => setShouldShow(true))
  return (
    <Paper className={styles.section} id="about">
      <StaticImage className={styles.heroImage} src="../images/WallpaperBW2.jpg" alt="bgimage"/>
      <div className={styles.overlay}></div>
      <Container className={styles.container} maxWidth="lg">
        <Grid
          className={styles.content}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Grow in={shouldShow}>
            <Grid item sm={8}>
              <Typography variant="h1">Marcel Lee</Typography>
              <Typography variant="h5">Aspiring Software Engineer</Typography>
              <Box my={2}>
                <Button className={styles.button} href={Resume} target="_blank" variant="outlined" color="secondary">
                  <strong>View Résumé</strong>
                </Button>
              </Box>
            </Grid>
          </Grow>
            <Grid item>
              <Social direction="column" />
            </Grid>
          <Hidden xsDown>
          </Hidden>
        </Grid>
      </Container>
    </Paper>
  );
}
