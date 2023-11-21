import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import MultiActionAreaCard from "./Card";
import { infoProjects } from "../data/infoProjects";

const projectsItem = infoProjects;

const Portfolio = () => {
  return (
    <Box>
      <Container>
        <Grid container spacing={3} sx={{ flexGrow: 1 }}>
          {projectsItem.map((item) => (
            <Grid key={item.link} xs={12} md={4}>
              <MultiActionAreaCard
                link={item.link}
                description={item.description}
                title={item.title}
                image={item.image}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Portfolio;
