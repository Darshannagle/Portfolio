import { Card } from "@mui/material";
import { MedicalServices } from "@mui/icons-material";

const Logo = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        border: "1px solid black",
        width: "30px",
        height: "30px",
        margin: "10px auto",
        padding: 0,
        display: {
          sm: "block",
          md: "block",
          lg: "block",
          xl: "block",
          xs: "none",
        },
        borderRadius: "5px",
      }}
    >
      <MedicalServices
        sx={{
          color: "white",
          margin: "auto",
          height: "100%",
          width: "100%",
          background: "linear-gradient(0deg,purple,blue)",
        }}
      />
    </Card>
  );
};

export default Logo;
