import Grid from "@mui/material/Unstable_Grid2";
import Banner from "../component/Banner";
import Portfolio from "../component/Portfolio";
import Skills from "../component/Skills";
import { Typography } from "@mui/material";
import { motion, useAnimation, useInView } from "framer-motion";
import { RefObject, useEffect, useRef } from "react";
import NavBar from "../component/NavBar.js";
import ModalInfo from "../component/ModalInfo.js";

const MainPage = () => {
  const refPortafolio: RefObject<HTMLInputElement> = useRef(null);
  const isInView = useInView(refPortafolio, { once: false });

  const refHome = useRef(null);

  const refSkills = useRef(null);
  const isInViewSkills = useInView(refSkills, { once: false });

  const handleOpen = () => console.log("opened");

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) mainControls.start("visible");
  }, [isInView]);

  useEffect(() => {
    if (isInViewSkills) slideControls.start("visible");
  }, [isInViewSkills]);

  return (
    <>
      <NavBar
        refHome={refHome}
        handleOpen={handleOpen}
        refSkills={refSkills}
        refPortafolio={refPortafolio}
      />
      <Grid ref={refHome} container spacing={3} sx={{ flexGrow: 1 }}>
        <Grid
          sx={{
            backgroundColor: "#673AB7",
            p: { sm: 5, xs: 4, md: 6 },
            mt: "64px",
          }}
          xs={12}
          md={12}
        >
          <Banner />
        </Grid>
        <Grid
          ref={refSkills}
          sx={{ backgroundColor: "white", p: { sm: 5, xs: 4, md: 6 } }}
          xs={12}
          md={12}
        >
          <motion.div
            variants={{
              hidden: { marginLeft: 1000 },
              visible: { marginLeft: 0 },
            }}
            initial="hidden"
            animate={slideControls}
            transition={{ duration: 2, delay: 0.4 }}
          >
            <Typography
              sx={{ textTransform: "uppercase", fontWeight: "bold", mb: 6 }}
              align="center"
              variant="h5"
            >
              Skills
            </Typography>
            <Skills />
          </motion.div>
        </Grid>

        <Grid
          ref={refPortafolio}
          sx={{ backgroundColor: "#673AB7", p: { sm: 5, xs: 4, md: 6 } }}
          xs={12}
          md={12}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 2, delay: 0.4 }}
          >
            <Typography
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                mb: 6,
                color: "white",
              }}
              align="center"
              variant="h5"
            >
              My Projects
            </Typography>
            <Portfolio />
          </motion.div>
        </Grid>
      </Grid>
      <ModalInfo></ModalInfo>
    </>
  );
};

export default MainPage;
