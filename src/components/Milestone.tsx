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
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Typography,
} from "@mui/material";

const Milestone = ({
  type = "",
  duration = "",
  title = "",
  description = "",
  location = "",
}) => {
  return (
    <TimelineItem key={title}>
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
      <TimelineContent sx={{ minWidth: { xs: "80%" } }}>
        <Paper
          elevation={3}
          sx={{
            m: 0,
            p: 0,
            borderRadius: 2,
            border: "1px solid silver",
            // width: "100%",

            // backgroundColor: "#090909ff",
          }}
        >
          <Accordion
            sx={{
              // width: "100%",
              border: "1px solid silver",
              p: 2,
              backgroundColor: "#090909ff",
              color: "whitesmoke",
            }}
          >
            <AccordionSummary>
              <Typography variant="h6">{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                <LocationOnOutlined
                  fontSize="small"
                  sx={{ marginTop: "5px" }}
                />{" "}
                {location}
              </Typography>

              <ul>
                {description &&
                  description?.split("\n").map((point) => (
                    <li key={point}>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ color: "silver" }}
                      >
                        {point}
                      </Typography>
                    </li>
                  ))}
              </ul>
            </AccordionDetails>
          </Accordion>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

export default Milestone;
