import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import techSTack from "../assets/techStack.json";

const TechStack = () => {
  return (
    <Box sx={{ p: 5, color: "white", minHeight: "100vh" }}>
      <Typography
        variant="h3"
        textAlign="center"
        gutterBottom
        sx={{ color: "white", fontWeight: "lighter", letterSpacing: 2 ,fontFamily:"revert"}}
      >
         Tech Stack
      </Typography>

      <Grid
        container
        spacing={{md:4,sm:2,xs:1}}
        justifyContent="center"
        mt={4}
        sx={{ alignItems: "stretch" }}
      >
        {techSTack.map(({ icon, label, color, description, src = "" }, i) => {
          // const Icon = techStackMap[icon];
          return (
            <Grid key={i} size={{ xs: 12, sm: 12, md: 12 }} >
              <motion.div
                whileHover={{ scale: 1.1 }}
                style={{
                  flex: "1 1 200px", // flex-grow, flex-shrink, flex-basis
                }}
              >
                <Card
                  sx={{
                    alignItems: "",
                    display: "flex",
                    height: { lg:"10vw",xl:"10vw",md:"20vw",sm:"40vw",xs:"150vw"},
                    flexDirection: { xs: "column",sm:"row", md: "row",},
                    justifyContent: "start",
                    // alignItems: "center",
                    p: 2,
                    borderRadius: 2,
                    backgroundColor:  "#090909ff",
                    color: "whitesmoke",
                    border: "1px solid silver",
                  }}
                >
                  <img src={src} alt={label} />
                  {/* <Icon  size={50} color={color} /> */}
                  <CardContent>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "sans-serif",
                        mt: 2,
                        fontWeight: "lighter",
                      }}
                    >
                      {label}
                    </Typography>
                    {description}
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
export default TechStack;
