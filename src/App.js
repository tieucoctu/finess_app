import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import MainLayout from "./layout";
import Home from "./pages/Home/Home";
import ExerciseDetail from "./pages/ExerciseDetail/ExerciseDetail";

const App = () => (
  <>
    <Box  m="auto">
      
      <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Route>
      </Routes>
    </Box>
  </>
);

export default App;
