import { Box } from "@mui/material";

const NotFound = () => {
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
      <Box style={{ marginTop: "3rem", textAlign: "center" }}>
        You have reached the end of the internet. <br />
        Here is a hand.
      </Box>
    </Box>
  );
};

export default NotFound;
