import { Timeline } from "@mui/lab";
import Milestone from "../components/Milestone";
import Milestones from "../assets/milestones.json";
const AboutMe = () => {
  return (
    <Timeline position="right" sx={{ color: "whitesmoke",fontWeight:"lighter" }}>
      {Milestones &&
        Milestones.map((mileStone) => (
          <Milestone
          type={mileStone.type}
            duration={mileStone?.duration}
            title={mileStone?.title}
            description={mileStone?.description}
            location={mileStone?.location}
          />
        ))}
    </Timeline>
  );
};

export default AboutMe;
