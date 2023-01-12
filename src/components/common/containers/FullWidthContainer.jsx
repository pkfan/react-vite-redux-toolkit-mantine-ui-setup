import { Container } from "@mui/material";

function FullWidthContainer({ children }) {
  return (
    <Container
      maxWidth={false}
      sx={{
        paddingLeft: "0px!important",
        paddingRight: "0px!important",
        margin: 0,
      }}
    >
      {children}
    </Container>
  );
}

export default FullWidthContainer;
