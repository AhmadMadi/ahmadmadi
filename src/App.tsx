import React, { useState } from "react";
import { Container, Box, styled } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import CssBaseLine from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PersonIcon from "@mui/icons-material/Person";
import LaptopIcon from "@mui/icons-material/Laptop";
import EmailIcon from "@mui/icons-material/Email";
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

  const [value, setValue] = useState("about");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const customStyle: React.CSSProperties & customCardShadowProp = {
    "--card-shadow": isDarkTheme
      ? "0px 7px 10px 3px rgba(0,12,145,0.5)"
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

      <CustomBottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction value="about" icon={<PersonIcon />} />
        <BottomNavigationAction value="projects" icon={<LaptopIcon />} />
        <BottomNavigationAction value="contact" icon={<EmailIcon />} />
      </CustomBottomNavigation>
    </ThemeProvider>
  );
};

export default App;

const CustomBottomNavigation = styled(BottomNavigation)`
  width: 100%;
  position: fixed;
  bottom: -1px;
  -webkit-box-shadow: 0px -1px 11px -3px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px -1px 11px -3px rgba(0, 0, 0, 0.2);
  box-shadow: 0px -1px 11px -3px rgba(0, 0, 0, 0.2);

  @media (min-width: 900px) {
    display: none;
  }
`;
