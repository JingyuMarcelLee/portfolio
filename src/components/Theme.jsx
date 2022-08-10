import React from "react";
import { createTheme } from "@mui/material/styles";

let darkTheme = createTheme({
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



export default darkTheme;