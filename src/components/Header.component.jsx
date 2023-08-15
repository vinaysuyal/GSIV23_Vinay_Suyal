import { Home } from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  ThemeProvider,
  Toolbar,
  createTheme,
} from "@mui/material";
import * as React from "react";

export default function Header({ getLeftComponent, onHomeButtonClick }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#4a4a4a",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "white" }}>
          <Toolbar>
            {getLeftComponent()}
            {/* <SearchComponent /> */}
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                onClick={onHomeButtonClick}
                color="inherit"
              >
                <Home color="primary" />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                onClick={onHomeButtonClick}
                color="inherit"
              >
                <Home color="primary" />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
