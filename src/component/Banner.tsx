import { Box, Container, Typography } from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";

import avatar from "../assets/imgs/avatar.png"; // Tell webpack this JS file uses this image
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <Box>
      <Container>
        <Grid container spacing={3} sx={{ flexGrow: 1 }}>
          <Grid xs={12} sm={6} smOffset={3} md={4} mdOffset={4}>
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
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
          <Grid xs={12} md={8} mdOffset={2}>
            <Typography
              variant="h5"
              sx={{ fontSize: { xs: "1.2em", md: "1.5rem" } }}
              color="white"
            >
              I am a Full Stack Developer with more than 10 years of experience
              in various programming languages.
              <br />
              <br />I am passionate about programming for Mobile devices,
              Angular, React and innovative projects.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
