import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import { motion } from "framer-motion";
type Props = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export default function MultiActionAreaCard(props: Props) {
  return (
    <motion.div
      whileHover={{
        transform: "rotate(-3deg)",

        transition: { duration: 3 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Card>
        <CardMedia component="img" image={props.image} alt={props.title} />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            target="_blank"
            component="a"
            href={props.link}
            size="small"
            sx={{ color: "#0000ff", fontSize: "1rem" }}
          >
            Open
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
}
