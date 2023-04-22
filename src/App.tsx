import React, { useState } from "react";
import { Container, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import CssBaseLine from "@mui/material/CssBaseline";
import About from "./pages/about";
// import Projects from "./pages/projects";

import "./App.css";

type customCardShadowProp = {
  "--card-shadow": string;
};

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const theme = createTheme({
    palette: { mode: isDarkTheme ? "dark" : "light" },
  });

  const customStyle: React.CSSProperties & customCardShadowProp = {
    "--card-shadow": isDarkTheme
      ? "0px 5px 20px 1px rgba(0,12,145,0.3)"
      : "0px 7px 20px -6px rgba(0, 146, 199, 0.4)",
    height: "100%",
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine />
      <div style={customStyle}>
        <Box
          display={"flex"}
          justifyContent={"end"}
          sx={{
            p: { xs: "1rem", lg: "2rem" },
            height: 0,
            justifyContent: { xs: "flex-end", lg: "flex-start" },
          }}
        >
          <DarkModeSwitch onChange={toggleTheme} checked={isDarkTheme} />
        </Box>
        <Container sx={{ height: 1 }}>
          <About />
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default App;
