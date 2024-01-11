import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import MultiActionAreaCard from "./Card";
import { infoProjects } from "../data/infoProjects";

import { motion } from "framer-motion";

const projectsItem = infoProjects;

const Portfolio = () => {
  return (
    <Container sx={{ p: 0 }}>
      <Grid container spacing={3} sx={{ flexGrow: 1 }}>
        {projectsItem.map((item, idx) => (
          <Grid key={idx} xs={12} md={6}>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 1, delay: 0.2 }}
              style={{ position: "relative" }}
              className="card-project"
            >
              <MultiActionAreaCard project={item} />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Portfolio;
