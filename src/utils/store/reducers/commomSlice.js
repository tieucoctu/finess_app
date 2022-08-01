import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    exercises : [],
    bodyPart: "all",
    bodyParts: [],
}
export const commomSlice = createSlice({
    name: "commom",
    initialState,
    reducers: {
        setExercises(state, action) {
            state.exercises = action.payload;
        },
        setBodyPart(state, action) {
            state.bodyPart = action.payload;
        },
        setBodyParts(state, action) {
            state.bodyParts = action.payload;
        },
    }
})
export const {setExercises,setBodyPart, exercises, bodyPart,setBodyParts} = commomSlice.actions
export default commomSlice.reducer