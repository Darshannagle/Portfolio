import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Project from "../components/Project";
import projects from "../assets/projects.json";

export default function Projects() {
  return (
    <Box sx={{ p: 5, color: "white", minHeight: {xs:"100vh",sm:"10vw",md:"5vh",lg:"2vh",xl:"2vh"} }}>
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
        Projects{" "}
      </Typography>

      <Grid container spacing={4} justifyContent="center" mt={4}>
        {projects.map((p, i) => (
          <Grid key={i} size={{ xs: 12, sm: 6, md:6, lg: 6, xl: 6 }}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Project
                title={p?.title}
                image={p?.image}
                description={p?.description}
              />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
