import { Box } from "@mui/material";

import CodeOffIcon from "@mui/icons-material/CodeOff";

const Contact = () => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transform: "translateY(200%)",
      }}
    >
      <CodeOffIcon sx={{ fontSize: "3rem" }} />
      <Box style={{ marginTop: "3rem", textAlign: "center" }}>
        Contact page is not ready yet.
      </Box>
    </Box>
  );
};

export default Contact;
