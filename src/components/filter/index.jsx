import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { exerciseOptions, fetchData } from '../../utils/fetchData';
import SearchIcon from '@mui/icons-material/Search';
import HorizontalScrollbar from '../HorizontalScrollbar';
import { setExercises  } from '../../utils/store/reducers/commomSlice';

const Filter = () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('');  

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      dispatch(setExercises(searchedExercises));
      console.log('searchedExercises :', searchedExercises);
    }
  };

  return (
    <Stack sx={{mr:8}}>
      <Box >
        <TextField
          sx={{ input: { fontWeight: '500', border: 'none', borderRadius: '5px' ,p:1}, width: { lg: '230px', xs: '230px' }, backgroundColor: '#fff', mr:1.5 }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn"  sx={{ bgcolor: '#d32f2f', color: '#fff', textTransform: 'none', minWidth: "36px", height: "36px" , p:0.5, mb:"1px" }} onClick={handleSearch}>
          <SearchIcon />
        </Button>
      </Box>
    </Stack>
  );
};

export default Filter;
