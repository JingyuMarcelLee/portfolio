import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../components/Header"
import darkTheme from "../components/Theme"
import Contacts from "../components/Contacts"


export default function contactPage() {
  
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <Contacts />
    </ThemeProvider>
  );
}