import { A } from "@/components/sxHtmlElements";
import { Box, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";

const links = [
  "Browse Jobs",
  "Browse Companies",
  "Countries",
  "About",
  "Help Center",
  " ESG at Indeed",
];

export function Footer() {
  return (
    <Box sx={{ borderTop: `1px solid ${grey[300]}` }}>
      <Stack direction="row" gap={3} p="20px 20px 30px" flexWrap="wrap">
        {links.map((link, index) => (
          <A href="#" key={index}>
            {link}
          </A>
        ))}
      </Stack>
    </Box>
  );
}

export default Footer;
