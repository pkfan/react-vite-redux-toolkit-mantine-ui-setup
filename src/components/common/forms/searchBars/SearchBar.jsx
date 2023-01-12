import { Typography, Box, IconButton } from "@mui/material";
import Input from "@/components/common/forms/Input";
import ProvideGridItem from "@/components/common/grids/ProvideGridItem";

export function SearchBar({ icon, label }) {
  return (
    <ProvideGridItem grid={{ xs: 12, md: 5 }}>
      <Box sx={{ position: "relative", display: "flex", flexGrow: 1 }}>
        <Typography
          sx={{
            position: "absolute",
            left: "16px",
            top: "12px",
            fontWeight: 700,
          }}
        >
          {label}
        </Typography>
        <Input />
        <IconButton
          size="small"
          sx={{
            position: "absolute",
            right: "12px",
            top: "10px",
            fontWeight: 700,
          }}
        >
          {icon}
        </IconButton>
      </Box>
    </ProvideGridItem>
  );
}

export default SearchBar;
