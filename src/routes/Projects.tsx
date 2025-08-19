import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Project from "../components/Project";
import projects from "../assets/projects.json";

export default function Projects() {
  return (
    <Box sx={{ p: 5, color: "white", minHeight: "100vh" }}>
      <Typography
        variant="h3"
        textAlign="center"
        gutterBottom
        sx={{ fontWeight: "bold", letterSpacing: 2 }}
      >
        Projects
      </Typography>

      <Grid container spacing={4} justifyContent="center" mt={4}>
        {projects.map((p, i) => (
          <Grid key={i} size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }}>
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
