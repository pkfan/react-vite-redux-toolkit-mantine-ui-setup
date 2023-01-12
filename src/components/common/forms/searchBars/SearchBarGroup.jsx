import { Box } from "@mui/material";
import ProvideGridContainer from "@/components/common/grids/ProvideGridContainer";

export function SearchBarGroup({ children }) {
  return (
    <Box
      sx={{
        margin: { xs: "50px 0px 20px", lg: "60px 120px 20px" },
        gap: "16px",
      }}
    >
      <ProvideGridContainer spacing={2}>{children}</ProvideGridContainer>
    </Box>
  );
}

export default SearchBarGroup;
