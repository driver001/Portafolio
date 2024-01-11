import { Box, Button, Container, Typography } from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";

import avatar from "../assets/imgs/avatar.png"; // Tell webpack this JS file uses this image
import { motion } from "framer-motion";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHub from "@mui/icons-material/GitHub";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  refPortafolio: React.RefObject<HTMLInputElement>;
  refExp: React.RefObject<HTMLInputElement>;
  window?: () => Window;
}

const executeScroll = (ref: React.RefObject<HTMLInputElement>) => {
  ref.current?.scrollIntoView({ behavior: "smooth" });
};
const Banner = (props: Props) => {
  return (
    <Container className="banner">
      <Grid container spacing={3} sx={{ flexGrow: 2 }}>
        <Grid xs={12} md={4}>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -300 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 1, delay: 0.2 }}
            whileHover={{
              scale: 1.02,

              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.8, rotate: 360 }}
          >
            <Box
              component="img"
              sx={{
                width: "100%",
                borderRadius: "50%",
                backgroundColor: "#FF5722",
              }}
              alt="The house from the offer."
              src={avatar}
            />
          </motion.div>
        </Grid>
        <Grid xs={12} md={8} sx={{ display: "table" }}>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 300 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            style={{
              display: "table-cell",
              verticalAlign: "middle",
              textAlign: "left",
            }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Typography
              variant="h5"
              sx={{
                width: "100%",
                textAlign: "left",
                fontSize: {
                  xs: "1.2em",
                  md: "1.5rem",
                },
              }}
              color="white"
            >
              <Box component={"span"} sx={{ fontSize: "0.8em" }}>
                {" "}
                Hola,{" "}
              </Box>{" "}
              <br /> Soy
              <Box component={"span"} sx={{ color: "#FF5722" }}>
                {" "}
                Andrés Fernández (Andres.udo.info@gmail.com)
              </Box>{" "}
              <br />
              Desarrollador{" "}
              <Box
                component={"span"}
                sx={{ color: "#FF5722", display: "inline-block" }}
              >
                {" "}
                Full Stack.
              </Box>{" "}
              <br />
              <br /> <br />
              Me encanta trabajar con los lenguajes y tecnolgias mas actuales.
            </Typography>
            <Box
              sx={{
                mt: 2,
                display: "table",
              }}
            >
              <Button
                className="btn-primary"
                onClick={() => executeScroll(props.refExp)}
                sx={{
                  background: "#FF5722",
                  color: "white",
                  border: "solid 1px #FF5722",
                  px: 4,
                  py: 1,
                  fontWeight: 700,
                }}
              >
                Experiencia
              </Button>
              <Button
                className="btn-secondary"
                onClick={() => executeScroll(props.refPortafolio)}
                sx={{
                  border: "solid 1px #FF5722",
                  color: "white",
                  px: 4,
                  py: 1,
                  fontWeight: 700,
                  ml: { xs: 0, md: 2 },
                  mt: { xs: 1, md: 0 },
                }}
              >
                Proyectos
              </Button>

              <Box
                sx={{
                  pl: 2,
                  width: { xs: "100%", md: "auto" },
                  textAlign: { xs: "center", md: "left" },
                  display: "table-cell",

                  verticalAlign: "middle",
                }}
              >
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
                      color: "white",

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
                    sx={{
                      mr: { xs: 1, md: 2 },
                      color: "white",

                      fontSize: "2em",
                    }}
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
                    sx={{
                      mr: { xs: 1, md: 2 },
                      color: "white",
                      mt: { xs: 1, md: 0 },
                      fontSize: "2em",
                    }}
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
                    sx={{
                      mr: { xs: 1, md: 2 },
                      color: "white",
                      mt: { xs: 1, md: 0 },
                      fontSize: "2em",
                    }}
                  ></WhatsAppIcon>
                </Box>
              </Box>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
