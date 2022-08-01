import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../../assets/icons/gym.png';
import { useDispatch, useSelector } from "react-redux";
import { setBodyPart} from "../../utils/store/reducers/commomSlice"

const BodyPart = ({ item }) => {
const dispatch = useDispatch();
const bodyPart = useSelector((state) => state.common.bodyPart)
return(
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '180px', height: '200px', cursor: 'pointer', gap: '45px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '180px', height: '200px', cursor: 'pointer', gap: '45px'  }}
    onClick={() => {
      dispatch(setBodyPart(item));
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
  </Stack>
);
  }

export default BodyPart;
