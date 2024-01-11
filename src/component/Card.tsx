import Typography from "@mui/material/Typography";
import { Box, Button, Card, CardContent, CardMedia } from "@mui/material";
import { project } from "../models/projects";

type Props = {
  project: project;
};

export default function MultiActionAreaCard(props: Props) {
  return (
    <>
      <Card variant="outlined">
        <CardMedia
          component="img"
          sx={{ height: 330 }}
          image={props.project.image}
          title="green iguana"
        />
        <CardContent className="card-data d-table">
          <Box className="d-table-cell">
            <Typography sx={{ fontSize: 20, fontWeight: 700 }}>
              {props.project.title}
            </Typography>{" "}
            <Typography sx={{ fontSize: 16, fontWeight: 400 }}>
              Empresa: {props.project.company}
            </Typography>
            <Typography sx={{ fontSize: 16, fontWeight: 400 }}>
              Trabajadores: {props.project.workers}
            </Typography>
            <Typography sx={{ fontSize: 16, fontWeight: 400 }}>
              {props.project.description}
            </Typography>
            {props.project.projects.map((item, i) => (
              <Box
                key={i}
                sx={{
                  mt: 2,
                  display: "inline-block",
                }}
              >
                <img
                  src={item.img}
                  className="icon"
                  alt={item.title}
                  title={item.title}
                />
              </Box>
            ))}
            <Button
              className="btn-secondary"
              target="_blank"
              href={props.project.link}
              sx={{
                border: "solid 1px #FF5722",
                color: { xs: "black", sm: "white", md: "white" },
                px: 2,
                mt: 2,
                py: 1,
                width: "fit-content",

                display: "block",
                fontWeight: 700,
              }}
            >
              Abrir
            </Button>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
