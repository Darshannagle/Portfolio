import { Card, Paper, Typography, CardMedia } from "@mui/material";

const Project = ({
  title,
  image,
  description,
}: {
  title: string;
  image: string;
  description: string[];
}) => {
  return (
    <Card
      sx={{
        backgroundColor: "transparent",
        // maxWidth: 400, // optional: set a max width
        width: "100%",
        height: {
          xs: "250vw",
          sm: "100vw",
          md: "50vw",
          lg: "30vw",
          xl: "20vw",
        },
        bgcolor: "#090909ff",
        color: "whitesmoke",
        border: "1px solid silver",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          color: "silver",
          display: "block",
          margin: "50px auto",
          backgroundColor: "white",
          width: { xs: "80%", sm: "80%", md: "20%", lg: "20%", xl: "20%" },
          height: "auto", // keeps aspect ratio
          objectFit: "cover",
        }}
      />

      <Paper
        elevation={0}
        sx={{
          p: 2,
          bgcolor: "transparent",
        }}
      >
        <Typography variant="h6" sx={{ color: "silver" }} gutterBottom>
          {title}
        </Typography>

        <Typography variant="body2" color="silver" component="div">
          <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
            {description && description.length
              ? description.map((d, i) => <li key={i}>{d}</li>)
              : null}
          </ul>
        </Typography>
      </Paper>
    </Card>
  );
};

export default Project;
