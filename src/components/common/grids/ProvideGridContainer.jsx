import { Grid } from "@mui/material";

export function ProvideGridContainer({ children, spacing }) {
  return (
    <Grid container spacing={spacing}>
      {children}
    </Grid>
  );
}

export default ProvideGridContainer;
