import { Box } from "@mui/material";

const Projects = () => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transform: "translateY(200%)",
      }}
    >
      <h1>(︶︿︶)</h1>
      <Box style={{ marginTop: "3rem" }}>
        No projects, yet. Check back soon.
      </Box>
    </Box>
  );
};

export default Projects;
