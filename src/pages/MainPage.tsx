import Grid from "@mui/material/Unstable_Grid2";
import Banner from "../component/Banner";
import Portfolio from "../component/Portfolio";
import Skills from "../component/Skills";
import { Box, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { RefObject, useRef } from "react";
import NavBar from "../component/NavBar.js";
import ModalInfo from "../component/ModalInfo.js";
import EmailIcon from "@mui/icons-material/Email";

import AlternateTimeline from "../component/TimelineCard.js";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
const MainPage = () => {
  const refPortafolio: RefObject<HTMLInputElement> = useRef(null);

  const refHome = useRef(null);
  const refExp = useRef(null);

  const refSkills = useRef(null);

  const handleOpen = () => console.log("opened");

  return (
    <>
      <NavBar
        refHome={refHome}
        refExp={refExp}
        handleOpen={handleOpen}
        refSkills={refSkills}
        refPortafolio={refPortafolio}
      />

      <Grid
        ref={refHome}
        spacing={3}
        sx={{
          flexGrow: 1,
          backgroundColor: "#673AB7",

          py: { md: 6, xs: 2 },
          mt: "64px",
        }}
        xs={12}
        md={12}
      >
        <Banner refExp={refExp} refPortafolio={refPortafolio} />
      </Grid>
      <Grid
        ref={refExp}
        sx={{
          backgroundColor: "white",
          px: { sm: 5, xs: 2, md: 6 },
          py: { sm: 5, xs: 2, md: 6 },
        }}
      >
        <AnimatePresence>
          <motion.div
            key={"skills"}
            variants={{
              hidden: { marginLeft: 1000 },
              visible: { marginLeft: 0 },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Typography
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                pb: { sm: 5, xs: 2, md: 6 },

                color: "#FF5722",
              }}
              align="center"
              variant="h5"
            >
              Experiencia
            </Typography>
            <AlternateTimeline />
          </motion.div>
        </AnimatePresence>
      </Grid>
      <Grid
        ref={refPortafolio}
        sx={{
          backgroundColor: "white",
          px: { sm: 5, xs: 2, md: 6 },
          py: { sm: 5, xs: 2, md: 6 },
        }}
        xs={12}
        md={12}
      >
        <AnimatePresence>
          <motion.div
            key={"Projects"}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Typography
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                pb: { sm: 5, xs: 2, md: 6 },

                color: "#FF5722",
              }}
              align="center"
              variant="h5"
            >
              Mis Proyectos
            </Typography>
          </motion.div>
          <Portfolio />
        </AnimatePresence>
      </Grid>
      <Grid
        ref={refSkills}
        sx={{ backgroundColor: "#673AB7", p: { sm: 5, xs: 2, md: 6 } }}
        xs={12}
        md={12}
      >
        <AnimatePresence>
          <motion.div
            key={"skills"}
            variants={{
              hidden: { marginLeft: 1000 },
              visible: { marginLeft: 0 },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Typography
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",

                color: "white",
              }}
              align="center"
              variant="h5"
            >
              Conocimientos
            </Typography>
            <Skills />
          </motion.div>
        </AnimatePresence>
      </Grid>
      <Grid
        sx={{
          backgroundColor: "white",
          p: { sm: 2, xs: 2, md: 2 },
          textAlign: "center",
        }}
        xs={12}
        md={12}
      >
        <Box
          sx={{
            pl: 2,
            display: "table",
            textAlign: "center",
            m: "0 auto",
          }}
        >
          <Typography
            sx={{ display: "table-cell", pr: 2, verticalAlign: "middle" }}
          >
            Contactame
          </Typography>
          <Box
            component="a"
            href="mailto:andres.udo.info@gmail.com"
            target="_blank"
            sx={{
              display: "inline-block",
            }}
          >
            <EmailIcon
              className="icon-social"
              sx={{
                mr: { xs: 1, md: 2 },
                color: "black",

                fontSize: "2em",
              }}
            />
          </Box>
          <Box
            component="a"
            href="https://www.linkedin.com/in/andres-fernandez-043972b6/"
            target="_blank"
            sx={{
              display: "inline-block",
            }}
          >
            <LinkedInIcon
              className="icon-social"
              sx={{ mr: 2, color: "black", fontSize: "2em" }}
            />
          </Box>
          <Box
            component="a"
            href="https://github.com/driver001"
            target="_blank"
            sx={{
              display: "inline-block",
            }}
          >
            <GitHub
              className="icon-social"
              sx={{ mr: 2, color: "black", fontSize: "2em" }}
            />
          </Box>
          <Box
            component="a"
            href="https://wa.me/5804123579911"
            target="_blank"
            sx={{
              display: "inline-block",
            }}
          >
            <WhatsAppIcon
              className="icon-social"
              sx={{ mr: 2, color: "black", fontSize: "2em" }}
            ></WhatsAppIcon>
          </Box>
        </Box>
      </Grid>

      <ModalInfo></ModalInfo>
    </>
  );
};

export default MainPage;
