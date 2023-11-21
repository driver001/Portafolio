import * as React from "react";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress color="success" variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

type Props = {
  title: string;
  actualProgress: number;
};

export default function SkillItem(props: Props) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < props.actualProgress)
          prevProgress = prevProgress + 5;
        return prevProgress;
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Box sx={{ width: "100%" }}>
      <Typography>{props.title}</Typography>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}
