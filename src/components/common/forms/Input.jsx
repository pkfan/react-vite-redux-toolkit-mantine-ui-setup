import * as React from "react";
import InputUnstyled from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";

const StyledInputElement = styled("input")(
  ({ theme }) => `
  display: flex;
  flex-grow: 1;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  padding-left: 70px;
  border-radius: 8px;
  color: ${theme.palette.grey[600]};
  border: 1px solid ${theme.palette.grey[500]};
  

  &:hover {
    border-color: ${theme.palette.primary.main};
  }

  &:focus {
    border-color: ${theme.palette.primary.main};
    box-shadow: 0 10px 10px ${theme.palette.grey[200]};
    outline: none;
  }
`
);

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled
      style={{ display: "flex", flexGrow: 1 }}
      slots={{ input: StyledInputElement }}
      {...props}
      ref={ref}
    />
  );
});

export default function UnstyledInputIntroduction() {
  return <CustomInput aria-label="Demo input" placeholder="Type something…" />;
}

export { UnstyledInputIntroduction as Input };
