import SkillItem from "./SkillItem";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";

import { infoSkills } from "../data/infoSkills";

const skillItem = infoSkills;

const Skills = () => {
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          {skillItem.map((item) => (
            <Grid key={item.title} xs={12} sm={6} md={4}>
              <SkillItem actualProgress={item.progress} title={item.title} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Skills;
