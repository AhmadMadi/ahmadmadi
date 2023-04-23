import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import CssBaseLine from "@mui/material/CssBaseline";

import { Outlet, useLocation } from "react-router-dom";

import "./App.css";
import Home from "./pages/home";

type customCardShadowProp = {
  "--card-shadow": string;
};

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const theme = createTheme({
    palette: { mode: isDarkTheme ? "dark" : "light" },
  });

  const location = useLocation();

  const [isHomeScreen, setIsHomeScreen] = useState(false);

  const customStyle: React.CSSProperties & customCardShadowProp = {
    "--card-shadow": isDarkTheme
      ? "0px 7px 10px 3px rgba(0,12,145,0.25)"
      : "0px 7px 20px -6px rgba(0, 146, 199, 0.4)",
    height: "100%",
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const ToRender = () => {
    return isHomeScreen ? <Home /> : <Outlet />;
  };

  useEffect(() => {
    location.pathname.split("/")[1] === ""
      ? setIsHomeScreen(true)
      : setIsHomeScreen(false);
    console.log(location.pathname.split("/")[1]);
  }, [location.pathname]);

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
        <ToRender />
      </div>
    </ThemeProvider>
  );
};

export default App;
