import {
  Container,
  Typography,
  Grid,
  Card,
  Box,
  CardMedia,
  CardHeader,
  IconButton,
  Avatar,
} from "@mui/material";
import { TypeAnimation } from "react-type-animation";

import { NavLink } from "react-router-dom";
import clickShop from "../assets/ClickShop.png";
import coffeenoSCafe from "../assets/Coffeeno's Cafe.png";
import { ArrowForwardIosRounded } from "@mui/icons-material";
import techStack from "../assets/techStack.json";

import "../index.css";

const cardData = [
  { name: "clickShop", image: clickShop },
  { name: "Coffeeno's Cafe", image: coffeenoSCafe },
];

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Header */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        fontFamily="serif"
        sx={{ fontWeight: 100 }}
      >
        Hey, I am{" "}
        <Box
          component="span"
          sx={{ color: "#E5E4E2", fontSize: "2.5rem", fontWeight: 100 }}
        >
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Darshan Nagle",
              2000, // wait 1s before replacing "Mice" with "Hamsters"
            ]}
            speed={50}
            repeat={0}
          />
        </Box>
      </Typography>

      <Typography
        variant="body1"
        align="center"
        sx={{ mb: 4, color: "whitesmoke", fontWeight: "lighter" }}
      >
        A Software Engineer building your thoughts into reality 🚀
      </Typography>

      <Box
        component="hr"
        sx={{
          border: "none",
          height: "1px",
          bgcolor: "divider",
          maxWidth: "70%",
          mx: "auto",
          my: 4,
        }}
      />

      {/* Tech Stack */}
      <Container maxWidth="lg" sx={{ my: 6 }}>
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ fontWeight: "100" }}
        >
          Tech Stack
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 4,
            mt: 3,
          }}
        >
          {/* <Carousel  animation="fade" autoPlay={true}> */}
          {/* <AnimatePresence mode="wait"> */}
          {/* <motion.div
            style={{
              display: "flex",
              justifyContent: "space-around",
              gap: "250px",
              width: "max-content",
            }}
            animate={{ x: ["100%", "-100%"] }}
            transition={{
              ease: "linear",
              duration: 10,
              repeat: Infinity,
            }}
          > */}
          {techStack.map(
            (
              {
                label,
                link,
                src = "",
              }: {
                icon: string;
                label: string;
                color: string;
                link: string;
                src: string;
              },
              i: number
            ) => {
              return (
                <NavLink
                  to={link}
                  style={{ textDecoration: "none", color: "whitesmoke" }}
                >
                  <Box
                    className={"silverCard"}
                    key={i}
                    sx={{
                      textAlign: "center",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.2)",
                      },
                    }}
                  >
                    <img src={src} alt={label} />
                    <Typography
                      variant="body2"
                      sx={{ mt: 1, fontWeight: "lighter" }}
                    >
                      {label}
                    </Typography>
                  </Box>
                </NavLink>
              );
            }
          )}
          {/* </motion.div> */}
          {/* </AnimatePresence> */}
          {/* </Carousel> */}
        </Box>
      </Container>

      {/* Cards Section */}
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ maxWidth: "95%", mx: "auto" }}
      >
        {cardData.map((data: { name: string; image: string }, i: number) => (
          <Grid key={i} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Card
              title={data?.name}
              sx={{
                // border: "0.5px solid silver",
                p: { sm: 1 },
                color: "whitesmoke",
                backgroundColor: "#1e1e1e",
                textAlign: "center",
                borderRadius: 3,
                boxShadow: 3,
                "&:hover": {
                  // boxShadow: 10,
                  // scale:"106%",
                  border: "0.5px solid silver",

                  // transform: "translateY(-4px)",
                  transition: "0.3s",
                },
              }}
            >
              <CardMedia
                title={data?.name}
                image={data?.image}
                sx={{
                  backgroundColor: "grey.200",
                  // borderRadius: "10px",
                  border: "1px solid silver",
                  margin: "auto",
                  fontSize: "10px",

                  height: { xs: "240px", sm: "160px", lg: "220px" },
                  width: { xs: "100%", sm: "100%", lg: "100%" },
                }}
              />
              <CardHeader
                avatar={
                  <Avatar
                    aria-label=""
                    sizes={"200"}
                    src={data?.image}
                    sx={{ border: "1px solid silver" }}
                  />
                }
                action={
                  <IconButton aria-label="">
                    <ArrowForwardIosRounded
                      sx={{
                        width: "10px",
                        height: "10px",
                        color: "whitesmoke",
                        padding: "5px",
                        border: "1px solid silver",
                        borderRadius: "50%",
                      }}
                    />
                  </IconButton>
                }
                sx={{ color: "whitesmoke", fontSize: { sm: "10px" } }}
                title={data?.name}
                subheader={""}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
      <NavLink
        to={"/projects"}
        style={{
          textAlign: "right",
          textDecoration: "none",
          color: "silver",
          display: "flex",
          margin: "10px 10px 10px 70% ",
        }}
      >
        view more{" "}
        <ArrowForwardIosRounded
          sx={{
            m: 0.5,
            mr: 0,
            width: "10px",
            height: "10px",
            color: "whitesmoke",
            padding: "5px",
            border: "1px solid silver",
            borderRadius: "50%",
          }}
        />
      </NavLink>
    </Container>
  );
};

export default Home;
