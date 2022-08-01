import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Stack, Tabs, Tab } from "@mui/material";
import Logo from "../assets/images/Logo.png";
import Filter from "../components/filter"
const Navbar = () => {
  const [link, SetLink] = useState("home");

  const handleChange = (_,value) => {
    SetLink(value);
  };
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        gap: { sm: 4, xs: 5 },
        justifyContent: "space-between",
      }}
      px="3"
      style={{ background: "#FFF5EE", height: "75px" }}
    >
      <Link to="/"  style={{marginLeft: "80px"}}>
        <img
          src={Logo}
          alt="logo"
          style={{ width: "80px", height: "55px", margin: "0px 20px" }}
        />
      </Link>
        <Tabs
          value={link}
          onChange={handleChange}
          sx={{ mr: 12, fontSize: 24, alignItems: "center"}}
          aria-label="icon position tabs example"
          style={{height:"80px",fontSize:"24px !impotant"}}
        >
          <Tab value="home" label="Home" component={Link} to="/" />
          <Tab
            value="exercise"
            label="Exercise"
            onChange={handleChange}
            component={Link}
            to="/exercise"
          />
        </Tabs> 
      <Filter />
    </Stack>
  );
};

export default Navbar;
