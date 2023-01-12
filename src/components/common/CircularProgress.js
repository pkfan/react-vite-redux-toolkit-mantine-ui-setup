import { CircularProgress as MuiCircularProgress, Box } from "@mui/material";

export function CircularProgress() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <MuiCircularProgress />
    </Box>
  );
}

export default CircularProgress;
