import { Box } from "@mui/material";

function LinkButtonGroup({ children }) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        paddingLeft: "8px",
        display: { xs: "none", md: "flex" },
      }}
    >
      {children}
    </Box>
  );
}

export default LinkButtonGroup;
