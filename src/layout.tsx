import React, { useState } from "react";
import { Container, styled } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PersonIcon from "@mui/icons-material/Person";
import LaptopIcon from "@mui/icons-material/Laptop";
import EmailIcon from "@mui/icons-material/Email";

import { useNavigate, useLocation } from "react-router-dom";

const Layout = ({ PageElement }: { PageElement: () => JSX.Element }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [value, setValue] = useState(location.pathname.split("/")[1]);

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(`/${newValue}`);
  };

  return (
    <>
      <Container>
        <PageElement />
      </Container>
      <CustomBottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction value="about" icon={<PersonIcon />} />
        <BottomNavigationAction value="projects" icon={<LaptopIcon />} />
        <BottomNavigationAction value="contact" icon={<EmailIcon />} />
      </CustomBottomNavigation>
    </>
  );
};

export default Layout;

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
