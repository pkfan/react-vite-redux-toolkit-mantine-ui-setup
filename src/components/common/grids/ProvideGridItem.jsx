import { Grid } from "@mui/material";

export function ProvideGridItem({ children, grid }) {
  return (
    <Grid item {...grid}>
      {children}
    </Grid>
  );
}

export default ProvideGridItem;
