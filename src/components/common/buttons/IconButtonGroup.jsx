import { Box } from "@mui/material";

function IconButtonGroup({ children }) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        justifyContent: "flex-end",
        paddingLeft: "8px",
        display: { xs: "none", md: "flex" },
      }}
    >
      {children}
    </Box>
  );
}

export default IconButtonGroup;
