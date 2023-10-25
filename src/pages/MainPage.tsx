import { Box, Container, Typography } from "@mui/material";
import React from "react";
import avatar from "../assets/imgs/avatar.jpeg"; // Tell webpack this JS file uses this image

import Grid from "@mui/material/Unstable_Grid2";

const MainPage = () => {
  return (
    <Box sx={{ backgroundColor: "#e8e9eb;", mt: "10vh", p: 4 }}>
      <Container>
        <Grid container spacing={3} sx={{ flexGrow: 1 }}>
          <Grid xs={12} md={4} mdOffset={4}>
            <Box
              component="img"
              sx={{
                width: "100%",
              }}
              alt="The house from the offer."
              src={avatar}
            />
          </Grid>
          <Grid xs={12} md={8} mdOffset={2}>
            <Typography variant="h5">
              Soy un Desarrollador Full Stack con mas de 10 años de experiencia
              en diversos lenguajes de programación. <br /> <br /> Me apasiona
              programar para dispositivos Moviles, Angular , React y en
              proyectos innovadores.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MainPage;
