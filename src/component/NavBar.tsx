import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { setIsOpen } from "../redux/modalSlice";
import logo from "../assets/imgs/logo.png"; // Tell webpack this JS file uses this image
import { CONTACT } from "../utils/const";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  refPortafolio: React.RefObject<HTMLInputElement>;
  handleOpen: () => void;
  refExp: React.RefObject<HTMLInputElement>;
  refHome: React.RefObject<HTMLInputElement>;
  refSkills: React.RefObject<HTMLInputElement>;
  window?: () => Window;
}

const drawerWidth = 240;

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  //const ref = useRef(null);
  const dispatch = useDispatch();
  const executeScroll = (
    ref: React.RefObject<HTMLInputElement>,
    title: string
  ) => {
    if (title != CONTACT) ref.current?.scrollIntoView({ behavior: "smooth" });
    else dispatch(setIsOpen(true));
  };

  const navItems = [
    {
      name: "Inicio",
      ref: props.refHome,
    },

    {
      name: "Experiencia",
      ref: props.refExp,
    },
    {
      name: "Projectos",
      ref: props.refPortafolio,
    },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      className="nav"
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", height: "64px" }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={logo} height={54} alt="" />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            onClick={() => executeScroll(item.ref, item.name)}
            key={item.name}
            disablePadding
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <AppBar
          component="nav"
          sx={{ backgroundColor: "#512DA8", boxShadow: "none", height: "64px" }}
        >
          <Container>
            <Toolbar sx={{ p: "0px !important" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                <img src={logo} height={54} alt="" />
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                  <Button
                    onClick={() => executeScroll(item.ref, item.name)}
                    key={item.name}
                    sx={{
                      color: "white",
                      px: 4,
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
      <Box
        component="main"
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#e8e9eb;",
          alignItems: "center",
        }}
      >
        <Toolbar sx={{ display: "none" }} />
      </Box>
    </>
  );
}
