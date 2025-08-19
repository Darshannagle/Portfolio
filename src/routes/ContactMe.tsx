import { Box, Typography, TextField, Button } from "@mui/material";
import { motion } from "framer-motion";

export default function ContactMe() {
  return (
    <Box
      sx={{
        p: 5,
        bgcolor: "#090909ff",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{ fontWeight: "bold", letterSpacing: 2 }}
      >
        Contact Me
      </Typography>

      <motion.form
        style={{ width: "100%", maxWidth: 500 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <TextField
          fullWidth
          label="Your Name"
          variant="outlined"
          margin="normal"
          InputProps={{ style: { color: "white" } }}
          InputLabelProps={{ style: { color: "#aaa" } }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#d4af37" },
              "&:hover fieldset": { borderColor: "#f0d68a" },
            },
          }}
        />
        <TextField
          fullWidth
          label="Your Email"
          variant="outlined"
          margin="normal"
          InputProps={{ style: { color: "white" } }}
          InputLabelProps={{ style: { color: "#aaa" } }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#d4af37" },
              "&:hover fieldset": { borderColor: "#f0d68a" },
            },
          }}
        />
        <TextField
          fullWidth
          label="Message"
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          InputProps={{ style: { color: "white" } }}
          InputLabelProps={{ style: { color: "#aaa" } }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#d4af37" },
              "&:hover fieldset": { borderColor: "#f0d68a" },
            },
          }}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            bgcolor: "#d4af37",
            color: "#0a0a0a",
            "&:hover": {
              bgcolor: "#f0d68a",
            },
          }}
        >
          Send Message
        </Button>
      </motion.form>
    </Box>
  );
}
