import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import HeroBannerImage from "../../assets/images/banner.png"

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: 20, xs: 9 }, ml: { sm: 7 } }}
    position="relative"
    pl="40px"
  >
    <Typography color="#d32f2f" fontWeight="600" fontSize="26px">
      Fitness Club
    </Typography>
    <Typography
      fontWeight={700}
      sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      mb="23px"
      mt="30px"
    >
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="18px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <Button
        href="#exercises"
        variant="contained"
        color="error"
        style={{
          marginTop: "45px",
          width: "200px",
          textAlign: "center",
          fontFamily: "Alegreya",
          padding: "14px",
          fontSize: "20px",
          textTransform: "none",
          color: "white",
          borderRadius: "5px",
        }}
      >
        Explore Exercises
      </Button>
    </Stack>
    <Typography
      fontWeight={600}
      color="#d32f2f"
      sx={{
        opacity: "0.2",
        display: { lg: "block", xs: "none" },
        fontSize: "200px",
      }}
      mt="40px"
    >
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
