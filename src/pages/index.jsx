import React from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header"
// import darkTheme from "../components/Theme"
import Projects from "../components/Projects"

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: '#ffffff',
      main: '#f5f5dc',
      dark: '#c2c2aa',
      contrastText: '#000000',
    },
    secondary: {
      light: '#c28963',
      main: '#8f5c38',
      dark: '#5e3210',
      contrastText: '#ffffff',
    },
  },
});

export default function indexPage() {
  
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <HeroSection />
      <Projects />
    </ThemeProvider>
  );
}