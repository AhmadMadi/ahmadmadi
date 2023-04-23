import { Box, Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transform: "translateY(150%)",
        fontFamily: "Fira Code",
      }}
    >
      <TypeAnimation
        style={{
          width: "80vw",
          height: "4rem",
          display: "block",
          textAlign: "center",
        }}
        sequence={['import AhmadMadi from "./ahmadMadi.tsx"']}
      />
      <Box sx={{ mt: "3rem" }}>
        <Link to={"/about"}>
          <Button variant="contained">
            Run Code <PlayArrowIcon />
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Home;
