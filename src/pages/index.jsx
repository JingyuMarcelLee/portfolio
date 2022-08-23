import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header"
import darkTheme from "../components/Theme"
import Projects from "../components/Projects"


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