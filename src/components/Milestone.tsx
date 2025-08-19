import {
  LocationOnOutlined,
  SchoolOutlined,
  WorkOutline,
} from "@mui/icons-material";
import {
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";
import { Paper, Typography } from "@mui/material";

const Milestone = ({
  type = "",
  duration = "",
  title = "",
  description = "",
  location = "",
}) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent sx={{ color: "whitesmoke" }}>
        {/* 2020 – 2024 */}
        {duration}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot
          sx={{
            backgroundColor: "transparent",
            border: "1px solid silver",
            padding: 1,
          }}
        >
          {type && type === "education" ? <SchoolOutlined /> : <WorkOutline />}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper
          elevation={3}
          sx={{
            p: 2,
            borderRadius: 2,
            backgroundColor: "#090909ff",
            color: "whitesmoke",
            border: "1px solid silver",
          }}
        >
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2">
            <LocationOnOutlined fontSize="small" sx={{ marginTop: "5px" }} />{" "}
            {location}
          </Typography>

          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ color: "silver" }}
          >
            <ul>
              {description.split("\n").map((point) => (
                <li>{point}</li>
              ))}
            </ul>
          </Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

export default Milestone;
