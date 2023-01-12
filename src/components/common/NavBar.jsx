import { useTheme } from "@mui/material/styles";

import Logo from "@/components/common/Logo";
import {
  LinkButton,
  LinkButtonGroup,
  IconButton,
  IconButtonGroup,
} from "@/components/common/buttons";

import { Divider, AppBar, Toolbar, Container } from "@mui/material";

import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";

export function NavBar() {
  const pages = ["Find Jobs", "Company Reviews"];

  const theme = useTheme();
  console.log("theme", theme.palette);

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{
        boxShadow: "none",
        margin: "0px",
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
        "& > .MuiContainer-root": {
          px: "16px",
        },
      }}
    >
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Logo />

          <LinkButtonGroup>
            {pages.map((page, index) => (
              <LinkButton key={index}>{page}</LinkButton>
            ))}
          </LinkButtonGroup>

          <IconButtonGroup>
            <IconButton>
              <MessageIcon />
            </IconButton>
            <IconButton>
              <NotificationsIcon />
            </IconButton>
            <IconButton>
              <PersonIcon />
            </IconButton>
            <Divider orientation="vertical" variant="middle" flexItem />
            <LinkButton>Employers / Post Job</LinkButton>
          </IconButtonGroup>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
