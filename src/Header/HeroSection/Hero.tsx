import BottomNav from "../Navigation/BottomNav";

import {
  Box,
  Button,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import heroImage1 from "../Images/demo-home-fashion-slider-01.webp";
import { ArrowRightAltOutlined } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  typography: {
    body1: {
      opacity: 0.8,
    },
  },
});

const Hero: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 900px)");

  const navigate = useNavigate();
  const showProducts = () => {
    navigate("/Shop");
    console.log("clicked");
  };

  return (
    <Box
      maxWidth="xl"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(70, 69, 69, 0.281), rgba(172, 172, 172, 0.212)), url(${heroImage1})`,
        backgroundSize: "cover",
        height: isDesktop ? "100vh" : "90vh",
        marginTop: isDesktop ? "10vh" : "5vh",
        backgroundPosition: "right",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        style={{
          color: "whitesmoke",
          display: "flex",
          alignItems: "center",
          fontSize: "1.3rem",
        }}
      >
        <Box>
          <ThemeProvider theme={theme}>
            <Typography variant="body1" style={{ marginBottom: "16px" }}>
              {" "}
              Valentine offer ongoing
            </Typography>
            <Typography variant={isDesktop ? "h3" : "h4"}>
              {" "}
              You're all in one <br /> Footwear solution!{" "}
            </Typography>
          </ThemeProvider>

          <Button
            variant="outlined"
            sx={{ marginTop: "16px", padding: "12px 24px" }}
            onClick={() => showProducts()}
          >
            Visit shop
            <ArrowRightAltOutlined />
          </Button>
        </Box>
      </Box>
      {isDesktop ? null : <BottomNav />}
    </Box>
  );
};

export default Hero;
