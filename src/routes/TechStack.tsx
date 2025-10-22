import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import { motion } from "framer-motion";
import techSTack from "../assets/techStack.json";

const TechStack = () => {
  return (
    <Box sx={{ p: 1, color: "white", minHeight: "100vh", width: "95%" }}>
      <Typography
        variant="h3"
        textAlign="center"
        gutterBottom
        sx={{
          color: "white",
          fontWeight: "lighter",
          letterSpacing: 2,
          fontFamily: "revert",
        }}
      >
        Tech Stack
      </Typography>

      <Grid
        container
        spacing={{ md: 3, sm: 2, xs: 1 }}
        justifyContent="center"
        mt={4}
        sx={{ alignItems: "stretch" }}
      >
        {techSTack.map(({ label, description, src = "" }, i) => {
          // const Icon = techStackMap[icon];
          return (
            <Grid key={i} size={{ xs: 12, sm: 12, md: 12 }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{
                  flex: "1 1 200px", // flex-grow, flex-shrink, flex-basis
                }}
              >
                <Card elevation={5}
                  sx={{
                    display: "flex",
                    height: {
                      lg: "10vw",
                      xl: "10vw",
                      md: "20vw",
                      sm: "40vw",
                      xs: "120vw",
                    },
                    flexDirection: { xs: "column", sm: "row", md: "row" },
                    justifyContent: "start",
                    alignItems: "center",
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: "#090909ff",
                    color: "whitesmoke",
                    border: "0.5px solid silver",
                  }}
                >
                  <Container
                    maxWidth={false}
                    sx={{
                      width: {
                        xs: "50%",
                        sm: "50%",
                        md: "30%",
                        lg: "20%",
                        xl: "1%",
                      },
                    }}
                  >
                    <img
                      src={src}
                      alt={label}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Container>
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
