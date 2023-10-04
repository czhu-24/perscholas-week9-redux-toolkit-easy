import { createSlice } from "@reduxjs/toolkit";


const stringSlice = createSlice({
    name: "string",
    initialState: "Hello World!",
    reducers: {
        changeString: (currentState) => "Good afternoon world!", 
        reset: () => "Hello World!"
    }
});

export const {changeString, reset} = stringSlice.actions;

export default stringSlice.reducer;