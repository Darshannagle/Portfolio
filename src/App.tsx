import { memo, useMemo } from "react";
import {
  Avatar,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid"; // ✅ Grid2 import
import { NavLink, Route, Routes } from "react-router-dom";
import { Email, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { Projects, TechStack, AboutMe } from "./routes/index";
import "./App.css";
import Appbar from "./components/Appbar";
import Home from "./routes/Home";
import pic from "./assets/1715914840086-removebg-preview.png";

// ✅ Memoized social media data
const SOCIAL_LINKS = [
  {
    icon: LinkedIn,
    label: "LinkedIn",
    color: "#0077B5",
    link: "https://linkedin.com/in/darshan-nagle-3321b2209",
  },
  { icon: Instagram, label: "Instagram", color: "#E4405F", link: "" },
  {
    icon: GitHub,
    label: "Github",
    color: "#FFFFFF",
    link: "https://github.com/Darshannagle",
  },
  {
    icon: Email,
    label: "Email",
    color: "#EA4335",
    link: "mailto:nagledarshan12@gmail.com",
  },
];

// ✅ SocialIcon receives IconComponent as prop
const SocialIcon = memo(({ IconComponent, label, color, link }: any) => {
  return (
    <NavLink to={link}>
      <IconButton
        aria-label={label}
        sx={{
          color: "white",
          fontSize: "30px",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            color: color,
            transform: "translateY(-3px) scale(1.1)",
            backgroundColor: `${color}20`,
          },
        }}
      >
        <IconComponent sx={{ fontSize: "inherit" }} />
      </IconButton>
    </NavLink>
  );
});

SocialIcon.displayName = "SocialIcon";

// ✅ Sidebar component
const Sidebar = memo(() => {
  const theme = useTheme();

  const socialIcons = useMemo(
    () =>
      SOCIAL_LINKS.map(({ icon: IconComponent, label, color, link }) => (
        <SocialIcon
          key={label}
          IconComponent={IconComponent}
          label={label}
          color={color}
          link={link}
        />
      )),
    []
  );

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: { sx: "none", sm: "none", md: "flex", lg: "flex", xl: "flex" },
        justifyContent: "center",
        flexDirection: "column",
        py: { xs: 2, sm: 4 },
      }}
    >
      <Avatar
        src={pic}
        alt="Darshan Nagle"
        sx={{
          margin: "20px auto",
          width: { xs: "20vw", sm: "15vw", md: "12vw" },
          height: { xs: "20vw", sm: "15vw", md: "12vw" },
          maxWidth: "150px",
          maxHeight: "150px",
          border: "2px solid",
          borderColor: "grey.300",
          boxShadow: theme.shadows[4],
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: theme.shadows[8],
          },
        }}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: { xs: "90%", sm: "80%" },
          maxWidth: "300px",
          margin: "20px auto 0",
          px: 2,
        }}
      >
        {socialIcons}
      </Box>
    </Box>
  );
});

Sidebar.displayName = "Sidebar";

// ✅ Route components
// const aboutMe = memo(() => <route.AboutMe />);
// const techStack = memo(() => <route.TechStack />);
// const projects = memo(() => <route.Projects />);
// const contactMe = memo(() => <route.ContactMe />);

// aboutMe.displayName = "AboutMe";
// techStack.displayName = "TechStack";
// projects.displayName = "Projects";
// contactMe.displayName = "ContactMe";

function App() {
  const theme = useTheme();
  theme.palette.mode = "dark";
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "100vw",
        marginBottom: "20vh",
        // overflowY: "scroll",
        margin: 0,
        padding: 0,
        backgroundColor: "black.500",
        overflow: "hidden",
      }}
    >
      <Appbar />

      <Grid
        container
        sx={{
          height: "calc(100vh - 64px)", // Subtract appbar height
          margin: 0,
          width: "100%",
        }}
        spacing={0}
      >
        {/* Sidebar */}
        <Grid
          size={{
            xs: 12,
            sm: 4,
            md: 3,
          }}
          sx={{
            backgroundColor: "black.800",
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
              lg: "flex",
              xl: "flex",
            },
            justifyContent: "center",
            alignItems: isMobile ? "flex-start" : "center",
            minHeight: { xs: "auto", sm: "100%" },
          }}
        >
          <Sidebar />
        </Grid>

        {/* Main Content */}
        <Grid
          size={{ xs: 12, sm: 12, md: 9 }}
          sx={{
            borderLeft: "0.01px solid silver",
            backgroundColor: "black.900",
            overflow: "auto",
            height: "100%",
          }}
        >
          <Box sx={{ height: "100%", p: { xs: 1, sm: 2 } }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/tech-stack" element={<TechStack />} />
              <Route path="/projects" element={<Projects />} />
              {/* <Route path="/contact-me" element={<ContactMe />} /> */}
            </Routes>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
