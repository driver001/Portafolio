import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";

import { skills } from "../data/skills";

const skillItem = skills;

const Skills = () => {
  return (
    <Container className="skills">
      <Grid container sx={{ pt: { sm: 5, xs: 2, md: 6 } }}>
        {skillItem.map((item) => (
          <Grid
            sx={{ pb: 4, textAlign: "center" }}
            key={item.title}
            xs={4}
            sm={2}
            md={2}
          >
            <img
              src={item.img}
              className="icon"
              alt="Angular"
              title={item.title}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
