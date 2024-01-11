import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

type Props = {
  title: string;
  img: string;
  years: string;
  description: string;
};

export default function CardCompany(props: Props) {
  return (
    <Card
      sx={{
        boxShadow: "4px 4px 4px #0000005c",
        textAlign: "left",
        background: " #673ab7;",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          py: 4,
          height: "110px",
          width: "auto",
          m: "0 auto",
        }}
        image={props.img}
        alt="green iguana"
      />
      <CardContent sx={{ background: "white" }}>
        <Typography
          sx={{ fontWeight: 700 }}
          gutterBottom
          variant="body2"
          color="text.secondary"
          component="div"
        >
          Años de trabajo: {props.years}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: "0.975rem" }}
          color="text.secondary"
        >
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
