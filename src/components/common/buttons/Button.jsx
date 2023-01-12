import { Button as MuiButton } from "@mui/material";
import ProvideGridItem from "@/components/common/grids/ProvideGridItem";

const buttonStyle = {
  padding: "11px 18px",
  borderRadius: "8px",
  textTransform: "capitalize",
  fontWeight: "700",
  display: "flex",
  width: { xs: "100%" },
  maxWidth: { md: "max-content" },
};

function Button({ children, variant, color, grid, sx = {} }) {
  const buttonSxStyle = { ...buttonStyle, ...sx };

  return (
    <>
      {grid ? (
        <ProvideGridItem grid={grid}>
          <MuiButton
            variant={variant}
            color={color}
            sx={buttonSxStyle}
            disableRipple
          >
            {children}
          </MuiButton>
        </ProvideGridItem>
      ) : (
        <MuiButton
          variant={variant}
          color={color}
          sx={buttonSxStyle}
          disableRipple
        >
          {children}
        </MuiButton>
      )}
    </>
  );
}

export default Button;
