import { Section, Span } from "@/components/sxHtmlElements";
import MyApp from "@/components/materialPractice/unstyledMuiBase/MyApp";
import SwitchWithMuiStyleSystem from "@/components/materialPractice/unstyledMuiBase/SwitchWithMuiStyleSystem";
import { Typography, Box } from "@mui/material";
import useSXpropProvider from "@/hooks/useSXpropProvider";

function ComponentsTest() {
  const Div = useSXpropProvider("div");

  return (
    <Box sx={{ margin: "100px" }}>
      <Typography
        variant="h4"
        sx={{ borderBottom: "1px solid black", marginBottom: "30px" }}
      >
        Unstyled components
      </Typography>
      <MyApp />
      <SwitchWithMuiStyleSystem />

      <Div>My name is Div by useSXpropProvider</Div>
      <Section
        sx={{
          width: "400px",
          height: "400px",
          background: "grey",
          display: "flex",
          flexWrap: "wrap",
          padding: "10px",
          margin: "50px",
          gap: "10px",
          "& > span": {
            width: "100px",
            height: "100px",
            background: "red",
            borderRadius: "10px",
          },
        }}
      >
        <Span>Item</Span>
        <Span>Item</Span>
        <Span>Item</Span>
        <Span>Item</Span>
        <Span>Item</Span>
        <Span>Item</Span>
        <Span>Item</Span>
        <Span>Item</Span>
      </Section>

      {/* in material ui (Box) component */}
      <Box
        component="div"
        sx={{
          width: "400px",
          height: "400px",
          background: "grey",
          display: "flex",
          flexWrap: "wrap",
          padding: "10px",
          margin: "50px",
          gap: "10px",
          "& > span": {
            width: "100px",
            height: "100px",
            background: "red",
            borderRadius: "10px",
          },
        }}
      >
        <Box component="span">Item</Box>
        <Box component="span">Item</Box>
        <Box component="span">Item</Box>
        <Box component="span">Item</Box>
        <Box component="span">Item</Box>
        <Box component="span">Item</Box>
        <Box component="span">Item</Box>
        <Box component="span">Item</Box>
      </Box>
    </Box>
  );
}

export default ComponentsTest;
