import { useTheme } from "@mui/material/styles";
import { IconButton as MuiIconButton } from "@mui/material";

function IconButton({ children }) {
  const theme = useTheme();

  return (
    <MuiIconButton
      variant="text"
      component="a"
      color="primary"
      href="#"
      sx={{
        my: 2,
        display: "block",
        color: `${theme.palette.grey[700]}`,
        margin: "0 4px !important",
        padding: "25px 16px 10px",
        textTransform: "capitalize",
        borderBottom: "2px solid transparent",
        borderRadius: "0px!important",
        "&:hover": {
          borderBottom: `2px solid ${theme.palette.primary.main}`,
        },
      }}
    >
      {children}
    </MuiIconButton>
  );
}

export default IconButton;
