import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";

function LinkButton({ children }) {
  const theme = useTheme();

  return (
    <Button
      variant="text"
      component="a"
      href="#"
      sx={{
        my: 2,
        display: "block",
        color: `${theme.palette.grey[700]}`,
        margin: "0!important",
        padding: "30px 16px 16px",
        textTransform: "capitalize",
        borderBottom: "2px solid transparent",
        borderRadius: "0px!important",
        "&:hover": {
          borderBottom: `2px solid ${theme.palette.primary.main}`,
        },
      }}
    >
      {children}
    </Button>
  );
}

export default LinkButton;
