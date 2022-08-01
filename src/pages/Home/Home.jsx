import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../../components/Exercises';
import HeroBanner from '../../components/banner';
import HorizontalScrollbar from '../../components/HorizontalScrollbar';
import { exerciseOptions, fetchData } from '../../utils/fetchData';
import { useDispatch, useSelector } from 'react-redux';
import {setBodyParts}from "../../utils/store/reducers/commomSlice"
const Home = () => {
  const dispatch = useDispatch()
  const bodyParts = useSelector((state) => state.common.bodyParts)

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
        );

      dispatch(setBodyParts(["all", ...bodyPartsData]));
    };

    fetchExercisesData();
  }, [bodyParts]);
  return (
    <Box>
      <HeroBanner />
      <HorizontalScrollbar bodyParts data={bodyParts}/>
      <Exercises  />
    </Box>
  );
};

export default Home;
