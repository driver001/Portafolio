import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import CardCompany from "./CardCompany";
import { companies } from "../data/companies";
import { Container } from "@mui/material";

const projectsItem = companies;
export default function AlternateTimeline() {
  return (
    <Container sx={{ p: 0 }}>
      <Timeline sx={{ p: 0, mt: 0 }} position="alternate">
        {projectsItem.map((item, i) => (
          <TimelineItem key={i}>
            <TimelineSeparator sx={{ px: 2 }}>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ p: 0 }}>
              <CardCompany
                title={item.title}
                years={item.years}
                description={item.description}
                img={item.image}
              ></CardCompany>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  );
}
